import ini from 'ini';

class ConfigService {
    static loadConfig() {
        const config = ini.parse(window.fs.readFileSync('../config/config.ini', 'utf-8'));
        return config;
    }
}

export default ConfigService;