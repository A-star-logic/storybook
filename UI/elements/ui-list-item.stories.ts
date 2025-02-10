import ListItem from './ui-list-item.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'UI/Elements/ListItem', // Groups the story under UI/Elements in Storybook
  component: ListItem,
  argTypes: {
    title: { 
      control: 'text', 
      description: 'The list item title' 
    },
    text: { 
      control: 'text', 
      description: 'Additional text to display in the list item' 
    },
    primaryIcon: { 
      control: 'text', 
      description: 'An optional icon to display on the left side' 
    },
    secondaryIcon: { 
      control: 'text', 
      description: 'An optional icon to display on the right side' 
    },
  },
} as Meta<typeof ListItem>;

// Template for rendering the component
const Template: StoryFn<typeof ListItem> = (args) => ({
  components: { ListItem },
  setup() {
    return { args };
  },
  template: `<ListItem v-bind="args" />`,
});

// A story with both icons and text
export const Default = Template.bind({});
Default.args = {
  title: "List Item Title",
  text: "This is additional text for the list item.",
  primaryIcon: "tabler:home",      // Example icon name (adjust if needed)
  secondaryIcon: "tabler:settings", // Example icon name (adjust if needed)
};

// A story without any icons
export const NoIcons = Template.bind({});
NoIcons.args = {
  title: "List Item Title",
  text: "This list item has no icons.",
  primaryIcon: "",
  secondaryIcon: "",
};

// A story with only a primary icon
export const OnlyPrimaryIcon = Template.bind({});
OnlyPrimaryIcon.args = {
  title: "List Item with Primary Icon",
  text: "Only a primary icon is provided.",
  primaryIcon: "tabler:home",
  secondaryIcon: "",
};

// A story with only a secondary icon
export const OnlySecondaryIcon = Template.bind({});
OnlySecondaryIcon.args = {
  title: "List Item with Secondary Icon",
  text: "Only a secondary icon is provided.",
  primaryIcon: "",
  secondaryIcon: "tabler:settings",
};
