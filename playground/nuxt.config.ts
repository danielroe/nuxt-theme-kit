import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'pathe'

const themeDir = fileURLToPath(new URL('./', import.meta.url))
const resolveThemeDir = (path: string) => resolve(themeDir, path)

export default defineNuxtConfig({
  typescript: {
    shim: false
  },

  alias: {
    'nuxt-theme-kit': resolveThemeDir('../src/module.ts')
  },

  extends: [resolveThemeDir('./theme')],

  theme: {
    tokens: true
  }
})
