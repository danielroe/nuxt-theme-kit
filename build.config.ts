import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  stub: false,
  externals: [
    '#theme/types',
    'browser-style-dictionary',
    'ufo',
    'pathe',
    'defu',
    'chalk',
    'ansi-styles',
    'supports-color',
    'has-flag',
    'color-convert',
    'color-name'
  ]
})
