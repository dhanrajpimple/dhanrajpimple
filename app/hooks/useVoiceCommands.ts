import { useState, useEffect, useCallback } from 'react';
import { initVoiceCommands, speak } from '../lib/voiceCommands';
import type { VoiceStateChange } from '../lib/voiceCommands';

interface VoiceState {
    isListening: boolean;
    isSupported: boolean;
    isLoading: boolean;
    error: string | null;
}

export function useVoiceCommands() {
    const [state, setState] = useState<VoiceState>({
        isListening: false,
        isSupported: false,
        isLoading: true,
        error: null,
    });
    const [annyangInstance, setAnnyangInstance] = useState<any>(null);

    useEffect(() => {
        // Check if running in browser
        if (typeof window === 'undefined') {
            setState(prev => ({ ...prev, isLoading: false, isSupported: false }));
            return;
        }

        // Check if Web Speech API is supported
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn('Web Speech API not supported in this browser');
            setState(prev => ({
                ...prev,
                isLoading: false,
                isSupported: false,
                error: 'Voice commands not supported in this browser. Try Chrome or Edge.'
            }));
            return;
        }

        // Check if running on HTTPS or localhost
        const isSecure = window.location.protocol === 'https:' ||
            window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1';

        if (!isSecure) {
            console.warn('Voice commands require HTTPS');
            setState(prev => ({
                ...prev,
                isLoading: false,
                isSupported: false,
                error: 'Voice commands require HTTPS connection'
            }));
            return;
        }

        // Load annyang dynamically via script tag
        const loadAnnyang = () => {
            // Check if already loaded
            if ((window as any).annyang) {
                initializeAnnyang();
                return;
            }

            // Load via CDN
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js';
            script.async = true;

            script.onload = () => {
                console.log('Annyang loaded successfully');
                initializeAnnyang();
            };

            script.onerror = () => {
                console.error('Failed to load annyang');
                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    isSupported: false,
                    error: 'Failed to load voice recognition library'
                }));
            };

            document.head.appendChild(script);
        };

        const initializeAnnyang = () => {
            const annyang = (window as any).annyang;

            if (!annyang) {
                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    isSupported: false,
                    error: 'Voice recognition not available'
                }));
                return;
            }

            const instance = initVoiceCommands((newState: VoiceStateChange) => {
                setState(prev => ({ ...prev, ...newState }));
            });

            setAnnyangInstance(instance);
            setState(prev => ({ ...prev, isLoading: false, isSupported: true, error: null }));
        };

        loadAnnyang();

        return () => {
            if (annyangInstance) {
                annyangInstance.abort();
            }
        };
    }, []);

    const startListening = useCallback(() => {
        if (!annyangInstance) {
            setState(prev => ({ ...prev, error: 'Voice recognition not initialized' }));
            return;
        }

        try {
            annyangInstance.start({ autoRestart: true, continuous: true });
            speak('Voice commands activated. Say help for available commands.');
            setState(prev => ({ ...prev, error: null }));
        } catch (err) {
            console.error('Error starting voice recognition:', err);
            setState(prev => ({
                ...prev,
                error: 'Failed to start voice recognition. Please check microphone permissions.'
            }));
        }
    }, [annyangInstance]);

    const stopListening = useCallback(() => {
        if (annyangInstance) {
            annyangInstance.abort();
            setState(prev => ({ ...prev, isListening: false, error: null }));
        }
    }, [annyangInstance]);

    const toggleListening = useCallback(() => {
        if (state.isListening) {
            stopListening();
        } else {
            startListening();
        }
    }, [state.isListening, startListening, stopListening]);

    return {
        ...state,
        startListening,
        stopListening,
        toggleListening,
        speak,
    };
}
