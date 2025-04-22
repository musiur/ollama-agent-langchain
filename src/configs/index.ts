export class Config {
    public static readonly OLLAMA_BASE_URL = Config.getEnv('OLLAMA_BASE_URL');
    public static readonly OLLAMA_MODEL = Config.getEnv('OLLAMA_MODEL');
    public static readonly MAIN_AGENT_ENDPOINT = Config.getEnv('MAIN_AGENT_ENDPOINT');

    private constructor() {
    }

    public static getEnv(name: string): string {
        const value = process.env[name];

        if (!value) {
            throw new Error(`Missing environment variable: ${name}`);
        }
        
        return value;
    }

    
}
