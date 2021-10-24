import config from './rollup.config'

export default config({
  output: {
    file: 'lib/mathml2latex.browser.cjs.js',
    format: 'cjs',
    exports: 'auto',
  },
  browser: true
})
