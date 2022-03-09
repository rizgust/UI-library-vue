import { inject } from 'vue'
import { quarkKey } from '../utils/private/symbols.js'

/**
 * Returns the $q instance.
 * Equivalent to `this.$q` inside templates.
 */
export default function useQuark () {
  return inject(quarkKey)
}
