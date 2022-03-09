<template>
  <div>
    <q-btn :class=customClass :label=label :color=color :size=size :flat=flat :outline=outline :rounded=rounded />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Quark, Dark, useQuark, useMeta } from 'quark'
import { reactive, onMounted } from 'vue'

export default {
  name: 'q-button',

  props: {
    customClass: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: function (value) {
        return ['white', 'primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1;
      },
    },
    flat: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click'],
  setup (props, { emit }) {
    const $q = useQuark()
    useMeta({ title: 'Quark Development' })

    onMounted(() => {
      window.$q = $q
      window.Quark = Quark
    })
    
    props = reactive(props);
    return {

    }
  }
}
</script>