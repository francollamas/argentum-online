import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
    appId: 'com.francollamas.argentumonline',
    appName: 'Argentum Online',
    webDir: 'dist',
    server: {
        androidScheme: 'https',
    },
}

export default config
