export enum ProcessEnvKey {
    DB_HOST = 'DB_HOST',
    DB_USER = 'DB_USER',
    DB_PASS = 'DB_PASS',
    GTAG = 'GTAG'
}

export class ProcessEnv {
    public static get(id: keyof typeof ProcessEnvKey) {
        const value = process.env[id];
        if (!value) throw new Error('Env key not present');

        return value;
    }
}