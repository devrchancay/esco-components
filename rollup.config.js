import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['styled-components'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-is/index.js': [
          'isFragment',
          'ForwardRef',
          'typeOf',
          'isElement',
          'isValidElementType',
        ],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: true,
      exclude: ['**/__tests__/**', '**/*.stories.tsx'],
      clean: true,
    }),
  ],
};
