export function load<T>(key: string): T | null {
    try {
        const stored = localStorage.getItem(key);
        return stored ? (JSON.parse(stored) as T) : null;
    } catch {
        return null;
    }
}

export function save(key: string, value: unknown): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // Storage can be full or blocked in private mode. The game still works, it just isn't saved.
    }
}
