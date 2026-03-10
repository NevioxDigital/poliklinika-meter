import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zhwt7a92',
    dataset: 'production',
  },
  deployment: {
    /**
     * Get or create an appId for your Studio under the "Studio" tab for your project in sanity.io/manage
     * Note: this is required for fine-grained version selection
     * appId: '<your-studio-app-id>'
     */

    /**
     * Enable auto-updates.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity
     */
    autoUpdates: true,
  },
})
