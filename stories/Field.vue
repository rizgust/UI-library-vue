<template>
  <div>
    <q-field :class=customClass :disable=disable :color=color :dense=dense :filled=filled :outlined=outlined>
      <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">Field content</div>
      </template>
    </q-field>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Quark, Dark, useQuark, useMeta } from 'quark'
import { reactive, onMounted } from 'vue'

export default {
  name: 'qk-field',

  props: {
    customClass: {
      type: String,
      required: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'positive',
      validator: function (value) {
        return ['white', 'primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'].indexOf(value) !== -1;
      },
    },
    dense: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },

  setup (props) {
    const $q = useQuark()
    useMeta({ title: 'Quark Development' })

    onMounted(() => {
      window.$q = $q
      window.Quark = Quark
    })

    props = reactive(props)
    return {

    }
  }
}
</script>
