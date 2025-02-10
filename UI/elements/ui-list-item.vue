<template>
  <div class="item">
    <div class="left">
      <div v-if="primaryIcon" class="icon">
        <uiMediaIcon :icon="primaryIcon" class="list-icon" />
      </div>
      <div class="main-content">
        <div class="title">{{ title }}</div>
        <div v-if="text" class="text">{{ text }}</div>
      </div>
    </div>

    <div class="right">
      <div v-if="secondaryIcon" class="icon">
        <uiMediaIcon :icon="secondaryIcon" class="list-icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import uiMediaIcon from '../media/ui-media-icon.vue';

defineProps<{
  /** The list item title */
  title: string;
  /** Additional text to display in the list item */
  text?: string;
  /** An optional icon to add on the left */
  primaryIcon?: string;
  /** An optional icon to add on the right */
  secondaryIcon?: string;
}>();
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @apply gap-6 p-2 text-brand-text;
}

.item + .item {
  border-top: 1px solid;
  @apply border-brand-border;
}

.item:hover {
  @apply bg-black/5;
}

.left {
  display: flex;
  @apply gap-4;
}

.title {
  font-weight: 700;
}

.list-icon {
  font-size: x-large;
}
</style>
