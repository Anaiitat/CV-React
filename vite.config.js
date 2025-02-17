import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["kpgs5d-5173.csb.app", "xmwqxc-5173.csb.app","36wcrk-5173.csb.app"], 
    host: true, 
  },
});
