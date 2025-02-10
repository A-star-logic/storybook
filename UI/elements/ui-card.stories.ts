import Card from './ui-card.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'UI/Elements/Card', // This groups the story under "UI/Elements"
  component: Card,
} as Meta<typeof Card>;

// Define a template that provides content for the header, default, and footer slots.
const Template: StoryFn<typeof Card> = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: `
    <Card v-bind="args">
      <!-- Header slot -->
      <template #header>
        <h2 style="margin: 0;">Card Header</h2>
      </template>
      
      <!-- Default slot (main content) -->
      <p>This is the main content of the card.</p>
      
      <!-- Footer slot -->
      <template #footer>
        <small>Card Footer</small>
      </template>
    </Card>
  `,
});

// Export the story using the template
export const WithHeaderAndFooter = Template.bind({});
WithHeaderAndFooter.args = {};
