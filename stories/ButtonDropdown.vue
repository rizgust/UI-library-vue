<template>
  <div>
    <q-btn-dropdown :class=customClass :split=split :label=label :icon=icon :no-caps=noCaps :align=align :dropdown-icon=dropdownIcon :disable=disable :size=size :outline=outline :unelevated=unelevated :color=color :text-color=textColor>
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { Quark, Dark, useQuark, useMeta } from 'quark'
import { reactive, onMounted } from 'vue'

export default {
  name: 'qk-button-dropdown',

  props: {
    customClass: {
      type: String,
      required: false,
    },
    split: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    noCaps: {
      type: Boolean,
      default: true,
    },
    align: {
      type: String,
      required: false,
    },
    dropdownIcon: {
      type: String,
      required: false,
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
    outline: {
      type: Boolean,
      default: false,
    },
    unelevated: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'grey-3',
      validator: function (value) {
        return ['grey-3', 'primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'].indexOf(value) !== -1;
      },
    },
    textColor: {
      type: String,
      required: false,
      default: 'black',
      validator: function (value) {
        return ['black', 'white'].indexOf(value) !== -1;
      },
    }
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