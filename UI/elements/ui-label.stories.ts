import UiLabel from './ui-label.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'UI/Elements/Labels', // This defines the grouping in Storybook's sidebar
  component: UiLabel,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['WARNING', 'ERROR'],
      description: 'The type of label (will define its color)',
    },
    // We'll use an extra arg to set the default slot content.
    defaultContent: {
      control: 'text',
      description: 'Content inside the label',
    },
  },
} as Meta<typeof UiLabel>;

// The Template function returns a component that renders your Label with the provided props
const Template: StoryFn<typeof UiLabel> = (args) => ({
  components: { UiLabel },
  setup() {
    return { args };
  },
  // Bind the `type` prop and use the `defaultContent` arg as the default slot content.
  template: `<UiLabel :type="args.type">{{ args.defaultContent }}</UiLabel>`,
});

// A story for the "WARNING" type label
export const Warning = Template.bind({});
Warning.args = {
  type: 'WARNING',
  defaultContent: 'Warning Label',
};

// A story for the "ERROR" type label
export const Error = Template.bind({});
Error.args = {
  type: 'ERROR',
  defaultContent: 'Error Label',
};
