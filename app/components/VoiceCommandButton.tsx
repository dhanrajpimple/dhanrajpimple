import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, X, HelpCircle, AlertTriangle, Settings } from 'lucide-react';

export default function VoiceCommandButton() {
    const [mounted, setMounted] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showHelp, setShowHelp] = useState(false);
    const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied' | 'unknown'>('unknown');
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    // Check support and permissions on mount
    useEffect(() => {
        setMounted(true);

        if (typeof window === 'undefined') return;

        // Check Web Speech API support
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
            setError('Voice requires HTTPS');
            return;
        }

        setIsSupported(true);

        // Check microphone permission status
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'microphone' as PermissionName })
                .then((result) => {
                    setPermissionStatus(result.state as 'prompt' | 'granted' | 'denied');
                    result.onchange = () => {
                        setPermissionStatus(result.state as 'prompt' | 'granted' | 'denied');
                    };
                })
                .catch(() => {
                    setPermissionStatus('unknown');
                });
        }
    }, []);

    const speak = useCallback((text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    const handleCommand = useCallback((command: string) => {
        const cmd = command.toLowerCase().trim();
        console.log('Voice command received:', cmd);

        // Navigation commands
        if (cmd.includes('go to home') || cmd.includes('go home')) {
            speak('Going to home');
            window.location.href = '/';
        } else if (cmd.includes('go to contact') || cmd.includes('contact page')) {
            speak('Going to contact');
            window.location.href = '/contact';
        } else if (cmd.includes('go to services') || cmd.includes('services page')) {
            speak('Going to services');
            window.location.href = '/services';
        } else if (cmd.includes('go to portfolio') || cmd.includes('portfolio page')) {
            speak('Going to portfolio');
            window.location.href = '/portfolio';
        } else if (cmd.includes('go to pricing') || cmd.includes('pricing page')) {
            speak('Going to pricing');
            window.location.href = '/pricing';
        } else if (cmd.includes('go to about') || cmd.includes('about page')) {
            speak('Going to about');
            window.location.href = '/about';
        } else if (cmd.includes('go to blog') || cmd.includes('blog page')) {
            speak('Going to blog');
            window.location.href = '/blog';
        } else if (cmd.includes('scroll down')) {
            window.scrollBy({ top: 400, behavior: 'smooth' });
            speak('Scrolling down');
        } else if (cmd.includes('scroll up')) {
            window.scrollBy({ top: -400, behavior: 'smooth' });
            speak('Scrolling up');
        } else if (cmd.includes('help') || cmd.includes('what can you do')) {
            speak('You can say: go to home, go to contact, go to services, go to portfolio, go to pricing, scroll up, or scroll down');
        } else if (cmd.includes('stop') || cmd.includes('stop listening')) {
            stopListening();
            speak('Voice commands stopped');
        } else {
            speak(`I heard ${cmd}. Say help for available commands.`);
        }
    }, [speak]);

    const requestMicPermission = async (): Promise<boolean> => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            // Stop all tracks after getting permission
            stream.getTracks().forEach(track => track.stop());
            setPermissionStatus('granted');
            return true;
        } catch (err) {
            console.error('Microphone permission denied:', err);
            setPermissionStatus('denied');
            setError('Microphone access denied. Click the 🔒 icon in the address bar to allow.');
            return false;
        }
    };

    const startListening = async () => {
        setError(null);

        // Request permission first if not granted
        if (permissionStatus !== 'granted') {
            const granted = await requestMicPermission();
            if (!granted) return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) return;

        // Create new recognition instance
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            console.log('Voice recognition started');
            setIsListening(true);
            setError(null);
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const last = event.results.length - 1;
            const transcript = event.results[last][0].transcript;
            handleCommand(transcript);
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
            console.log('Speech recognition error:', event.error);

            switch (event.error) {
                case 'not-allowed':
                    setError('Microphone blocked. Click 🔒 in address bar → Allow microphone');
                    setPermissionStatus('denied');
                    setIsListening(false);
                    break;
                case 'network':
                    setError('Network error. Check internet connection.');
                    // Don't stop - try to continue
                    break;
                case 'no-speech':
                    // Normal - user didn't speak, ignore
                    break;
                case 'audio-capture':
                    setError('No microphone found');
                    setIsListening(false);
                    break;
                case 'aborted':
                    // User or code stopped it, normal
                    break;
                default:
                    console.log('Unknown error:', event.error);
            }
        };

        recognition.onend = () => {
            console.log('Voice recognition ended');
            // Restart if we're supposed to be listening
            if (isListening && recognitionRef.current === recognition) {
                try {
                    recognition.start();
                } catch (e) {
                    // Already running or error, ignore
                }
            }
        };

        recognitionRef.current = recognition;

        try {
            recognition.start();
            speak('Voice commands activated. Say help for commands.');
        } catch (err) {
            console.error('Failed to start recognition:', err);
            setError('Failed to start voice recognition');
        }
    };

    const stopListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
            recognitionRef.current = null;
        }
        setIsListening(false);
    };

    const toggleListening = () => {
        if (isListening) {
            stopListening();
        } else {
            startListening();
        }
    };

    // Clear error after 8 seconds
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 8000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    // Don't render if not mounted or not supported
    if (!mounted || !isSupported) {
        return null;
    }

    const commands = [
        { category: 'Navigation', items: ['Go to home', 'Go to contact', 'Go to services', 'Go to portfolio', 'Go to pricing', 'Go to about', 'Go to blog'] },
        { category: 'Actions', items: ['Scroll up', 'Scroll down', 'Help', 'Stop listening'] },
    ];

    return (
        <>
            {/* Floating Microphone Button */}
            <motion.button
                onClick={toggleListening}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isListening
                        ? 'bg-brand-coral text-white shadow-brand-coral/50'
                        : permissionStatus === 'denied'
                            ? 'bg-red-500 text-white shadow-red-500/30'
                            : 'bg-brand-blue text-brand-navy hover:bg-brand-coral hover:text-white shadow-brand-blue/30'
                    }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isListening ? 'Stop voice commands' : 'Start voice commands'}
                title={
                    permissionStatus === 'denied'
                        ? 'Microphone blocked - click to retry'
                        : isListening
                            ? 'Click to stop listening'
                            : 'Click to start voice commands'
                }
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
                        className="fixed bottom-24 right-6 z-50 w-80 max-h-[70vh] overflow-y-auto glass-dark border border-white/10 rounded-2xl p-6 shadow-2xl"
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

                        {/* Permission Status */}
                        <div className={`mb-4 p-3 rounded-lg text-xs ${permissionStatus === 'granted'
                                ? 'bg-green-500/20 text-green-400'
                                : permissionStatus === 'denied'
                                    ? 'bg-red-500/20 text-red-400'
                                    : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                            {permissionStatus === 'granted' && '✅ Microphone access granted'}
                            {permissionStatus === 'denied' && (
                                <>
                                    ❌ Microphone blocked
                                    <br />
                                    <span className="text-[10px] opacity-80">
                                        Click 🔒 in address bar → Site settings → Allow microphone
                                    </span>
                                </>
                            )}
                            {(permissionStatus === 'prompt' || permissionStatus === 'unknown') && (
                                '⏳ Click the mic button to grant microphone access'
                            )}
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

                        <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-[10px] text-brand-gray">
                                💡 Works best in Chrome/Edge. Requires microphone and internet.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Status Toast */}
            <AnimatePresence>
                {isListening && !error && (
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
                        className="fixed bottom-24 right-6 z-40 px-4 py-3 bg-red-500/90 text-white text-sm font-medium rounded-xl shadow-lg max-w-xs"
                    >
                        <div className="flex items-start gap-2">
                            <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                            <div>
                                {error}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
