<template>
    <div :class="computedClass" role="img" aria-label="icon">
      <component
        v-if="icon"
        :is="iconComponent"
        :icon="icon"
        class="icon"
        :style="{ fontSize: size }"
      />
      <span v-else>No Icon</span>
    </div>
  </template>
  
  <script setup lang="ts">
  // Props for the component
  defineProps<{
    /** The name of the icon to render (e.g., 'mdi:home', 'tabler:settings') */
    icon?: string;
    /** The size of the icon (e.g., '24px', '1.5rem') */
    size?: string;
    /** Custom class to apply to the icon container */
    customClass?: string; // Renamed to avoid conflicts
  }>();
  
  // Default size if not provided
  const defaultSize = '1rem';
  
  // Computed class for the container
  const computedClass = ['ui-media-icon', customClass].filter(Boolean);
  
  // Dynamically import the icon component
  const iconComponent = await import('@iconify/vue').then((mod) => mod.Icon);
  </script>
  
  <style scoped>
  .ui-media-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
  
  .icon {
    display: inline-block;
    width: auto;
    height: auto;
  }
  </style>
  ``
  