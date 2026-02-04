// Type declarations for annyang
declare module 'annyang' {
    interface AnnyangStatic {
        start(options?: { autoRestart?: boolean; continuous?: boolean; paused?: boolean }): void;
        abort(): void;
        pause(): void;
        resume(): void;
        addCommands(commands: Record<string, (...args: string[]) => void>): void;
        removeCommands(commands?: string | string[]): void;
        addCallback(event: string, callback: (...args: any[]) => void): void;
        removeCallback(event: string, callback?: (...args: any[]) => void): void;
        setLanguage(lang: string): void;
        getSpeechRecognizer(): SpeechRecognition | null;
        isListening(): boolean;
        debug(enabled?: boolean): void;
    }

    const annyang: AnnyangStatic | null;
    export default annyang;
}

// Extend window interface
interface Window {
    annyang: import('annyang').default;
}
