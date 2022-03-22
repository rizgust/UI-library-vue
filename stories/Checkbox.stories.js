import QkCheckbox from './Checkbox.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Checkbox',
  component: QkCheckbox,
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
  components: { QkCheckbox },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<qk-checkbox v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  color: 'primary',
  label: 'Primary',
};

export const Positive = Template.bind({});
Positive.args = {
  color: 'positive',
  label: 'Positive',
};

export const Disabled = Template.bind({});
Disabled.args = {
  // color: 'positive',
  disable: true,
  label: 'Disabled',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  // color: 'positive',
  toggleIndeterminate: true,
  label: 'Indeterminate',
};

export const LeftLabel = Template.bind({});
LeftLabel.args = {
  // color: 'positive',
  leftLabel: true,
  label: 'Left Label',
};
