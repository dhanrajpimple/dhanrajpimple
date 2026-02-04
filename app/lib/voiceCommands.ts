// Voice Commands Engine for Portfolio Website
// Supports navigation, form filling, and general commands

interface VoiceStateChange {
    isListening?: boolean;
    error?: string | null;
}

const voiceCommands = {
    // Navigation commands
    navigation: {
        'go to home': () => window.location.href = '/',
        'go home': () => window.location.href = '/',
        'go to about': () => window.location.href = '/about',
        'go to about page': () => window.location.href = '/about',
        'go to services': () => window.location.href = '/services',
        'go to services page': () => window.location.href = '/services',
        'go to devops': () => window.location.href = '/services/devops',
        'go to software': () => window.location.href = '/services/software',
        'go to website services': () => window.location.href = '/services/website',
        'go to portfolio': () => window.location.href = '/portfolio',
        'show portfolio': () => window.location.href = '/portfolio',
        'go to blog': () => window.location.href = '/blog',
        'go to contact': () => window.location.href = '/contact',
        'go to contact page': () => window.location.href = '/contact',
        'contact you': () => window.location.href = '/contact',
        'hire you': () => window.location.href = '/contact',
        'go to pricing': () => window.location.href = '/pricing',
        'show pricing': () => window.location.href = '/pricing',
        'go to resources': () => window.location.href = '/resources',
        'go to scorecard': () => window.location.href = '/scorecard',
    },

    // Form filling commands
    formFilling: {
        'fill the form': () => {
            speak('Starting form filling. Say "my name is" followed by your name.');
        },
        'my name is *name': (name: string) => {
            const nameField = document.querySelector('input[name="name"], input[id="name"], input[placeholder*="name" i]') as HTMLInputElement | null;
            if (nameField) {
                nameField.value = name;
                nameField.dispatchEvent(new Event('input', { bubbles: true }));
                speak(`Name set to ${name}`);
            } else {
                speak('Name field not found on this page');
            }
        },
        'my email is *email': (email: string) => {
            const emailField = document.querySelector('input[name="email"], input[id="email"], input[type="email"]') as HTMLInputElement | null;
            if (emailField) {
                // Clean up email (remove spaces that voice might add)
                const cleanEmail = email.replace(/\s+at\s+/gi, '@').replace(/\s+dot\s+/gi, '.').replace(/\s/g, '');
                emailField.value = cleanEmail;
                emailField.dispatchEvent(new Event('input', { bubbles: true }));
                speak(`Email set to ${cleanEmail}`);
            } else {
                speak('Email field not found on this page');
            }
        },
        'my phone is *phone': (phone: string) => {
            const phoneField = document.querySelector('input[name="phone"], input[id="phone"], input[type="tel"]') as HTMLInputElement | null;
            if (phoneField) {
                const cleanPhone = phone.replace(/\s/g, '');
                phoneField.value = cleanPhone;
                phoneField.dispatchEvent(new Event('input', { bubbles: true }));
                speak(`Phone set to ${cleanPhone}`);
            } else {
                speak('Phone field not found on this page');
            }
        },
        'my message is *message': (message: string) => {
            const messageField = document.querySelector('textarea[name="message"], textarea[id="message"], textarea') as HTMLTextAreaElement | null;
            if (messageField) {
                messageField.value = message;
                messageField.dispatchEvent(new Event('input', { bubbles: true }));
                speak('Message entered');
            } else {
                speak('Message field not found on this page');
            }
        },
        'I need *service': (service: string) => {
            const serviceField = document.querySelector('select[name="service"], select[id="service"], input[name="service"]') as HTMLSelectElement | HTMLInputElement | null;
            if (serviceField) {
                const serviceLower = service.toLowerCase();
                if (serviceLower.includes('web') || serviceLower.includes('website')) {
                    serviceField.value = 'website';
                } else if (serviceLower.includes('app') || serviceLower.includes('mobile')) {
                    serviceField.value = 'mobile';
                } else if (serviceLower.includes('devops') || serviceLower.includes('automation')) {
                    serviceField.value = 'devops';
                } else if (serviceLower.includes('software') || serviceLower.includes('saas')) {
                    serviceField.value = 'software';
                } else {
                    serviceField.value = service;
                }
                serviceField.dispatchEvent(new Event('change', { bubbles: true }));
                speak(`Service selected: ${service}`);
            } else {
                speak('Service field not found on this page');
            }
        },
        'submit form': () => {
            const form = document.querySelector('form');
            const submitBtn = document.querySelector('button[type="submit"], input[type="submit"]') as HTMLButtonElement | HTMLInputElement | null;
            if (submitBtn) {
                speak('Submitting form');
                submitBtn.click();
            } else if (form) {
                speak('Submitting form');
                form.submit();
            } else {
                speak('No form found on this page');
            }
        },
        'clear form': () => {
            const form = document.querySelector('form');
            if (form) {
                form.reset();
                speak('Form cleared');
            } else {
                speak('No form found on this page');
            }
        },
    },

    // Utility commands
    utility: {
        'help': () => {
            speak('Available commands: Go to home, about, services, portfolio, blog, contact, pricing. For forms: my name is, my email is, my phone is, my message is, submit form, clear form. Say stop listening to pause.');
        },
        'what can you do': () => {
            speak('I can help you navigate the website using voice commands. Say help for a list of commands.');
        },
        'stop listening': () => {
            if (window.annyang) {
                window.annyang.pause();
                speak('Voice commands paused. Click the microphone to resume.');
            }
        },
        'scroll down': () => {
            window.scrollBy({ top: 400, behavior: 'smooth' });
            speak('Scrolling down');
        },
        'scroll up': () => {
            window.scrollBy({ top: -400, behavior: 'smooth' });
            speak('Scrolling up');
        },
        'go back': () => {
            window.history.back();
            speak('Going back');
        },
        'go forward': () => {
            window.history.forward();
            speak('Going forward');
        },
    }
};

// Text-to-speech function
function speak(text: string): void {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 0.8;

        // Try to get a good English voice
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(voice =>
            voice.lang.startsWith('en') && voice.name.includes('Google')
        ) || voices.find(voice => voice.lang.startsWith('en'));

        if (englishVoice) {
            utterance.voice = englishVoice;
        }

        window.speechSynthesis.speak(utterance);
    }
}

// Get all commands as a flat object
function getAllCommands(): Record<string, (...args: string[]) => void> {
    return {
        ...voiceCommands.navigation,
        ...voiceCommands.formFilling,
        ...voiceCommands.utility,
    } as Record<string, (...args: string[]) => void>;
}

// Initialize voice commands
function initVoiceCommands(onStateChange?: (state: VoiceStateChange) => void): typeof window.annyang | null {
    if (typeof window === 'undefined') return null;

    // Dynamic import for annyang
    const annyang = window.annyang;

    if (!annyang) {
        console.warn('Voice commands not available. annyang not loaded.');
        return null;
    }

    // Add all commands
    annyang.addCommands(getAllCommands());

    // Set language
    annyang.setLanguage('en-US');

    // Callbacks
    annyang.addCallback('start', () => {
        console.log('Voice recognition started');
        onStateChange?.({ isListening: true, error: null });
    });

    annyang.addCallback('end', () => {
        console.log('Voice recognition ended');
        onStateChange?.({ isListening: false });
    });

    annyang.addCallback('error', (err: Error) => {
        console.error('Voice recognition error:', err);
        onStateChange?.({ isListening: false, error: err.message || 'Unknown error' });
    });

    annyang.addCallback('errorNetwork', () => {
        speak('Network error. Please check your connection.');
        onStateChange?.({ isListening: false, error: 'Network error' });
    });

    annyang.addCallback('errorPermissionBlocked', () => {
        speak('Microphone permission blocked. Please allow microphone access.');
        onStateChange?.({ isListening: false, error: 'Permission blocked' });
    });

    annyang.addCallback('errorPermissionDenied', () => {
        speak('Microphone permission denied.');
        onStateChange?.({ isListening: false, error: 'Permission denied' });
    });

    annyang.addCallback('resultMatch', (userSaid: string, commandText: string, phrases: string[]) => {
        console.log('Command matched:', userSaid);
    });

    annyang.addCallback('resultNoMatch', (phrases: string[]) => {
        console.log('No command matched:', phrases);
        speak("Sorry, I didn't understand that. Say help for available commands.");
    });

    return annyang;
}

export { voiceCommands, speak, getAllCommands, initVoiceCommands };
export type { VoiceStateChange };
