import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

export default defineConfig({
  plugins: [tsconfigPaths(),  VitePluginHtmlEnv({
    compiler: true
    // compiler: false // old
  })],
  
})
