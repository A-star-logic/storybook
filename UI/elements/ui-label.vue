<template>
  <div class="label" :class="type">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  /** The type of label (will define its color) */
  type: 'WARNING' | 'ERROR';
}>();
</script>

<style lang="css" scoped>
.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply gap-1 rounded-full py-1 px-2;
}

.WARNING {
  @apply text-brand-text bg-yellow-400;
}

.ERROR {
  @apply text-white bg-red-400;
}
</style>
