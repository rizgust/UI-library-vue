<template>
  <div>
    <q-checkbox :class=customClass :toggle-indeterminate=toggleIndeterminate :label=label :left-label=leftLabel :disable=disable :size=size :color=color v-model=val />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Quark, Dark, useQuark, useMeta } from 'quark'
import { reactive, ref, onMounted } from 'vue'

export default {
  name: 'qk-checkbox',

  props: {
    customClass: {
      type: String,
      required: false,
    },
    toggleIndeterminate: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    leftLabel: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      validator: function (value) {
        return ['white', 'primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'].indexOf(value) !== -1;
      },
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

    props = reactive(props)
    return {
      val: ref(true)
    }
  }
}
</script>
