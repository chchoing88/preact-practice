// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

export const context = process.env.npm_config_context

if (!context) {
  throw new Error(`please insert npm command line '--context={pageName}'`)
}

export default {
  input: `src/page/${context}.js`,
  output: {
    file: `dist/bundle_${context}.js`,
    format: 'iife',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    postcss(),
    uglify(),
  ],
}
