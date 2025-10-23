import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
const env = loadEnv(mode, process.cwd(), '');

return defineConfig({
plugins: [react()],
define: {
'process.env': env
},
server: {
port: 3000
},
build: {
outDir: 'dist'
}
});
};