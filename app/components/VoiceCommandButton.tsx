import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, X, HelpCircle, Loader2, AlertTriangle } from 'lucide-react';

// Simple hook that doesn't auto-start - user must explicitly enable
function useSimpleVoice() {
    const [isSupported, setIsSupported] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setIsSupported(false);
            return;
        }

        // Check HTTPS
        const isSecure = window.location.protocol === 'https:' ||
            window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1';

        if (!isSecure) {
            setIsSupported(false);
            return;
        }

        setIsSupported(true);

        // Create recognition instance
        const recog = new SpeechRecognition();
        recog.continuous = true;
        recog.interimResults = false;
        recog.lang = 'en-US';

        recog.onresult = (event: SpeechRecognitionEvent) => {
            const last = event.results.length - 1;
            const command = event.results[last][0].transcript.toLowerCase().trim();
            console.log('Voice command:', command);
            handleCommand(command);
        };

        recog.onerror = (event: SpeechRecognitionErrorEvent) => {
            console.log('Speech error:', event.error);
            if (event.error === 'network') {
                setError('Network error - Google Speech services unavailable');
                setIsListening(false);
                recog.stop();
            } else if (event.error === 'not-allowed') {
                setError('Microphone access denied');
                setIsListening(false);
            } else if (event.error === 'no-speech') {
                // Ignore no-speech errors, they're normal
            }
        };

        recog.onend = () => {
            // Only restart if we're supposed to be listening and no error
            if (isListening && !error) {
                try {
                    recog.start();
                } catch (e) {
                    // Ignore - already started
                }
            }
        };

        setRecognition(recog);

        return () => {
            recog.stop();
        };
    }, []);

    const handleCommand = (command: string) => {
        // Navigation commands
        if (command.includes('go to home') || command.includes('go home')) {
            window.location.href = '/';
            speak('Going to home');
        } else if (command.includes('go to contact')) {
            window.location.href = '/contact';
            speak('Going to contact');
        } else if (command.includes('go to services')) {
            window.location.href = '/services';
            speak('Going to services');
        } else if (command.includes('go to portfolio')) {
            window.location.href = '/portfolio';
            speak('Going to portfolio');
        } else if (command.includes('go to pricing')) {
            window.location.href = '/pricing';
            speak('Going to pricing');
        } else if (command.includes('go to about')) {
            window.location.href = '/about';
            speak('Going to about');
        } else if (command.includes('go to blog')) {
            window.location.href = '/blog';
            speak('Going to blog');
        } else if (command.includes('scroll down')) {
            window.scrollBy({ top: 400, behavior: 'smooth' });
        } else if (command.includes('scroll up')) {
            window.scrollBy({ top: -400, behavior: 'smooth' });
        } else if (command.includes('help')) {
            speak('Say go to followed by page name like home, contact, services, portfolio, or pricing');
        }
    };

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            window.speechSynthesis.speak(utterance);
        }
    };

    const startListening = () => {
        if (recognition && !isListening) {
            setError(null);
            try {
                recognition.start();
                setIsListening(true);
                speak('Voice commands activated. Say help for commands.');
            } catch (e) {
                console.error('Failed to start recognition:', e);
                setError('Failed to start voice recognition');
            }
        }
    };

    const stopListening = () => {
        if (recognition) {
            recognition.stop();
            setIsListening(false);
        }
    };

    const toggleListening = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };

    return { isSupported, isListening, error, toggleListening, setError };
}

export default function VoiceCommandButton() {
    const { isSupported, isListening, error, toggleListening, setError } = useSimpleVoice();
    const [showHelp, setShowHelp] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if user previously dismissed
        if (typeof window !== 'undefined') {
            setDismissed(localStorage.getItem('voice-dismissed') === 'true');
        }
    }, []);

    // Clear error after 5 seconds
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [error, setError]);

    const handleDismiss = () => {
        setDismissed(true);
        localStorage.setItem('voice-dismissed', 'true');
    };

    // Don't render if not mounted, not supported, or dismissed
    if (!mounted || !isSupported || dismissed) {
        return null;
    }

    const commands = [
        { category: 'Navigation', items: ['Go to home', 'Go to contact', 'Go to services', 'Go to portfolio', 'Go to pricing'] },
        { category: 'Utility', items: ['Scroll up', 'Scroll down', 'Help'] },
    ];

    return (
        <>
            {/* Floating Microphone Button */}
            <motion.button
                onClick={toggleListening}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isListening
                        ? 'bg-brand-coral text-white shadow-brand-coral/50'
                        : 'bg-brand-blue text-brand-navy hover:bg-brand-coral hover:text-white shadow-brand-blue/30'
                    }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isListening ? 'Stop voice commands' : 'Start voice commands'}
                title={isListening ? 'Click to stop listening' : 'Click to start voice commands'}
            >
                {isListening ? <Mic size={24} /> : <MicOff size={24} />}

                {isListening && (
                    <span className="absolute inset-0 rounded-full border-2 border-brand-coral animate-ping opacity-75" />
                )}
            </motion.button>

            {/* Help Button */}
            <motion.button
                onClick={() => setShowHelp(!showHelp)}
                className="fixed bottom-6 right-24 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-brand-offwhite hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Voice command help"
            >
                <HelpCircle size={18} />
            </motion.button>

            {/* Help Modal */}
            <AnimatePresence>
                {showHelp && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-80 max-h-96 overflow-y-auto glass-dark border border-white/10 rounded-2xl p-6 shadow-2xl"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-brand-offwhite flex items-center gap-2">
                                <Mic size={18} className="text-brand-blue" />
                                Voice Commands
                            </h3>
                            <button
                                onClick={() => setShowHelp(false)}
                                className="text-brand-gray hover:text-white transition-colors"
                                aria-label="Close help"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {commands.map((section) => (
                                <div key={section.category}>
                                    <h4 className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
                                        {section.category}
                                    </h4>
                                    <ul className="space-y-1">
                                        {section.items.map((cmd) => (
                                            <li key={cmd} className="text-sm text-brand-gray flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-brand-blue/50" />
                                                "{cmd}"
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                            <p className="text-[10px] text-brand-gray">
                                💡 Requires Chrome/Edge and internet connection to Google services.
                            </p>
                            <button
                                onClick={handleDismiss}
                                className="text-[10px] text-red-400 hover:text-red-300"
                            >
                                Hide voice button permanently
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Status Toast */}
            <AnimatePresence>
                {isListening && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-24 right-6 z-40 px-4 py-2 bg-brand-coral/90 text-white text-sm font-medium rounded-full shadow-lg"
                    >
                        🎤 Listening... Say "help"
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error Toast */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-24 right-6 z-40 px-4 py-2 bg-red-500/90 text-white text-sm font-medium rounded-xl shadow-lg max-w-xs flex items-center gap-2"
                    >
                        <AlertTriangle size={16} />
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
