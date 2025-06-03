import {defineConfig, transformWithEsbuild} from 'vite'
import react from '@vitejs/plugin-react'
import restart from 'vite-plugin-restart'
import glsl from 'vite-plugin-glsl'

// https://vite.dev/config/
export default defineConfig({
  root: './',
  publicDir: './public/',

  plugins: [
    restart({restart: ['../public/**',]}),
    react(),
    glsl(),
    {
      name: 'load+transform-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/))
          return null

        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
  ],
  server:
      {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
      },
  build:
      {
        outDir: './dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
      },
})
