import common from './rollup.config'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import * as path from 'path'

export default {
  input: common.input,
  output: {
    file: 'dist/bundle.dev.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    ...common.plugins,
    htmlTemplate({
      template: 'src/public/index.html',
      target: 'dist/index.html',
    }),
    serve({
      open: true,
      contentBase: path.join(process.cwd(), '/dist'),
      host: 'localhost',
      port: 9000,
    }),
    livereload('dist'),
  ],
}
