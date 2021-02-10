import ini from 'ini';

class ConfigService {
    static getConfig() {
        const config = ini.parse(window.fs.readFileSync(process.env.REACT_APP_CONFIG_PATH, 'utf-8'));
        return config;
    }
    static getTESTSection() {
        const config = ini.parse(window.fs.readFileSync(process.env.REACT_APP_CONFIG_PATH, 'utf-8'));
        return config.TEST;
    }
    static updateTESTSection(data) {
        const config = this.getConfig();
        for (const key in data) {
            if (key in config.TEST) {
                config.TEST[key] = data[key];
            }
        }
        try {
            window.fs.writeFileSync(process.env.REACT_APP_CONFIG_PATH, ini.stringify(config))
            alert("Updated!");
        } catch (error) {
            alert(error);
        }
    }
}

export default ConfigService;