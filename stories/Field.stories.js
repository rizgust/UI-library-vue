import QkField from './Field.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Field',
  component: QkField,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['white', 'primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QkField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<qk-field v-bind="args" />',
});

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Filled.args = {
  filled: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};
