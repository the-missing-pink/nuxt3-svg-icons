import { defu } from 'defu'
import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'
import svgLoader from 'vite-svg-loader'

// Module options TypeScript interface definition
export interface ModuleOptions {
  dir: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-svg-icons',
    configKey: 'nuxt3SvgIcons',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    dir: './assets/icons'
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.nuxt3SvgIcons = defu(
      nuxt.options.runtimeConfig.public.nuxt3SvgIcons, {
        dir: options.dir
      }
    )

    nuxt.options.vite.plugins ||= []
    nuxt.options.vite.plugins.push(svgLoader({
      defaultImport: 'component'
    }))

    addComponent({
      name: 'svg-icon',
      global: true,
      filePath: resolve('./runtime/components/svgIcon.vue')
    })
  }
})
