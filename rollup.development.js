import { version } from './package.json';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';

export default [{
        input: ['./src/TMDBTSDev.ts', './src/Module.ts', './src/Module2.ts'],
        plugins: [
            typescript({ tsconfig: 'tsconfig.development.json' }),
            resolve(),
            serve({
                contentBase: 'development',
                open: true,
                historyApiFallback: true,
                port: 10003
            }),
            livereload()
        ],
        output: {
            // file: './development/esnext.js',
            entryFileNames: '[name].js',
            dir: './development',
            format: 'esm',
            sourcemap: 'inline'
        }
    }
]
