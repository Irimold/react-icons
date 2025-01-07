import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        }),
    ],
    build: {
        lib: {
            entry : {
                'index': './src/index.ts'
            },
            name : 'IriReactComponent',
            formats: ['es'],
            fileName: (format, name) => `${name}.js`,
        },
        rollupOptions: {
            external: [
                '@types/react',
                'react',
                'react-dom',
                'react/jsx-runtime'
            ],
            output: {
                globals: {
                    'react'             : 'react',
                    'react-dom'         : 'ReactDOM',
                    'react/jsx-runtime' : 'react/jsx-runtime',
                }
            }
        },
    },
    resolve: {
        alias: {
            "@" : path.resolve(__dirname, './src/'),
        }
    }
})