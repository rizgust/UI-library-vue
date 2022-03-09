import installQuark from './install-quark.js'
import lang from './lang.js'
import iconSet from './icon-set.js'

import * as components from './components.js'
import * as directives from './directives.js'

export * from './components.js'
export * from './directives.js'
export * from './plugins.js'
export * from './composables.js'
export * from './utils.js'

export const Quark = {
  version: __QUARK_VERSION__,
  install (app, opts, ssrContext) {
    installQuark(
      app,
      { components, directives, ...opts },
      ssrContext
    )
  },
  lang,
  iconSet
}
