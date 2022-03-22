import QkButtonDropdown from './ButtonDropdown.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button Dropdown',
  component: QkButtonDropdown,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['grey-3', 'primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'],
    },
    textColor: {
      control: { type: 'radio' },
      options: ['black', 'white'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QkButtonDropdown },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<qk-button-dropdown v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Default',
};

export const Split = Template.bind({});
Split.args = {
  label: 'Split',
  split: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disable: true,
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline',
  outline: true,
};
