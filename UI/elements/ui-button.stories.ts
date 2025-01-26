import UiButton from './ui-button.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'UI/Elements/Button', // Story grouping in the Storybook sidebar
  component: UiButton,
  argTypes: {
    text: { control: 'text', description: 'The button displayed text' },
    type: {
      control: 'select',
      options: ['action', 'CTA', 'hover', 'secondary', 'warning'],
      description: 'The button type, which changes styling',
    },
    iconPre: { control: 'text', description: 'An icon to display before the text' },
    iconPost: { control: 'text', description: 'An icon to display after the text' },
    loading: { control: 'boolean', description: 'Show loading spinner' },
    success: { control: 'boolean', description: 'Show success icon' },
  },
} as Meta<typeof UiButton>;

// Template for the stories
const Template: StoryFn<typeof UiButton> = (args) => ({
  components: { UiButton },
  setup() {
    return { args };
  },
  template: `<UiButton v-bind="args" />`,
});

// Default story
export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
  type: 'action',
  loading: false,
  success: false,
};

// CTA button story
export const CTA = Template.bind({});
CTA.args = {
  text: 'Call to Action',
  type: 'CTA',
};

// Loading button story
export const Loading = Template.bind({});
Loading.args = {
  text: 'Loading Button',
  loading: true,
};

// Success button story
export const Success = Template.bind({});
Success.args = {
  text: 'Success Button',
  success: true,
};

// Warning button story
export const Warning = Template.bind({});
Warning.args = {
  text: 'Warning Button',
  type: 'warning',
};
