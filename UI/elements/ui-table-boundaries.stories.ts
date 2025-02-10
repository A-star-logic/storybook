import TableBoundaries from './ui-table-boundaries.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'UI/Elements/TableBoundaries', // This groups the story under UI/Elements
  component: TableBoundaries,
} as Meta<typeof TableBoundaries>;

// Template for the TableBoundaries component
const Template: StoryFn<typeof TableBoundaries> = (args) => ({
  components: { TableBoundaries },
  setup() {
    return { args };
  },
  template: `
    <TableBoundaries v-bind="args">
      <!-- Table header slot -->
      <template #head>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </template>

      <!-- Table body slot -->
      <template #body>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
      </template>

      <!-- Footer slot (optional) -->
      <template #footer>
        <div>Footer Content</div>
      </template>
    </TableBoundaries>
  `,
});

// Export the story
export const Default = Template.bind({});
Default.args = {};
