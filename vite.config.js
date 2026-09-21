import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contactApiHandler from './api/contact.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // Inject local env vars into process.env for local API testing
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'local-api-endpoints',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const parsedUrl = new URL(req.url, 'http://localhost')
            if (parsedUrl.pathname === '/api/contact') {
              try {
                // Dynamically reload env vars on each request so updates in .env are reflected immediately
                const currentEnv = loadEnv(mode, process.cwd(), '')
                Object.assign(process.env, currentEnv)
                await contactApiHandler(req, res)
              } catch (err) {
                console.error('Local dev API handler error:', err)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, message: err.message }))
              }
              return
            }
            next()
          })
        }
      }
    ],
  }
})
