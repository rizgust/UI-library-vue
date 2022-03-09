import QButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: QButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['white', 'primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<q-button v-bind="args" />',
});

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Basic.args = {
  color: 'primary',
  label: 'Button',
};

export const Full = Template.bind({});
Full.args = {
  class: 'full-width',
  label: 'Full',
};
