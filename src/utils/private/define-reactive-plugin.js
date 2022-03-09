
import { reactive } from 'vue'
import { injectProp } from './inject-obj-prop'

export default __QUARK_SSR_SERVER__
  ? (state, plugin) => {
      Object.assign(plugin, state)
      return plugin
    }
  : (state, plugin) => {
      const reactiveState = reactive(state)

      for (const name in state) {
        injectProp(
          plugin,
          name,
          () => reactiveState[ name ],
          val => { reactiveState[ name ] = val }
        )
      }

      return plugin
    }