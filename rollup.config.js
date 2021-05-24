import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';


const esm = {
    dir: 'es',
    format: 'esm',
};

const cjs = {
    dir: 'lib',
    format: 'cjs',
    exports: 'default',
};

const umd = {
    dir: 'umd',
    name: '_',
    format: 'umd'
};

export default {
    input: 'src/index.js',
    output: esm,
    plugins: [
        nodeResolve(),
        commonjs({
            ignoreTryCatch: true
        }),
    ],
};
