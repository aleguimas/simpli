import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'olcfi9tu',
    dataset: 'production'
  },
  deployment: {
    /**
     * Desabilitado para evitar escrita em ~/.config/sanity (evita EPERM em alguns ambientes).
     * Reative se quiser auto-updates: https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: false,
  },
})
