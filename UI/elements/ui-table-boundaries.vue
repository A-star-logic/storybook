<template>
  <div class="table-boundaries">
    <table>
      <thead>
        <slot name="head" />
      </thead>

      <tbody>
        <slot name="body" />
      </tbody>
    </table>
    <div class="footer" v-if="slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<!-- <td>
  <uiMediaIcon icon="fluent:chevron-up-down-16-filled" />
</td> -->
<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<style scoped>
.table-boundaries {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  @apply border-brand-border rounded-lg bg-brand-bg-elevated;
}

table,
thead,
tbody {
  width: 100%;
}

thead {
  border-bottom: 2px solid;
  @apply border-brand-border;
}

thead:deep(th) {
  font-weight: 600;
  @apply p-2;
}

/* thead:deep(th:hover) {
  @apply bg-black/5;
} */

tbody:deep(tr) {
  border-top: 1px solid;
  @apply border-brand-border;
}

tbody:deep(tr:hover) {
  @apply bg-black/5;
}

tbody:deep(td) {
  @apply p-2;
}

.footer {
  display: flex;
  justify-content: center;
  @apply p-4;
}
</style>
