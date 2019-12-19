import common, { context } from './rollup.config'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import * as path from 'path'
import os from 'os'

const interfaces = os.networkInterfaces()
const addresses = []
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2]
    if (address.family === 'IPv4' && !address.internal) {
      addresses.push(address.address)
    }
  }
}

export default {
  input: common.input,
  output: {
    file: `dist/bundle.dev_${context}.js`,
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
      host: addresses[0],
      port: 9000,
    }),
    livereload('dist'),
  ],
}
