<template>
  <div :class="type ?? 'action'" class="button">
    <div :class="loading || success ? 'hide-loading' : ''" class="button-inner">
      <!-- Icon before text -->
      <div v-if="iconPre">
        <uiMediaIcon :icon="iconPre" />
      </div>

      <!-- Button text -->
      <div class="text">
        {{ text }}
      </div>

      <!-- Icon after text -->
      <div v-if="iconPost">
        <uiMediaIcon :icon="iconPost" />
      </div>

      <!-- Loader -->
      <div class="loader-container" v-if="loading">
        <uiMediaIcon class="loader" icon="tabler:fidget-spinner" />
      </div>

      <!-- Success checkmark -->
      <div class="loader-container" v-if="success">
        <uiMediaIcon class="success" icon="fluent:checkmark-12-filled" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importing the uiMediaIcon component
import uiMediaIcon from '../media/ui-media-icon.vue';

// Define the props for the button
defineProps<{
  /** Icon to display before the text */
  iconPre?: string;
  /** Icon to display after the text */
  iconPost?: string;
  /** Show a loading spinner */
  loading?: boolean;
  /** Show a success checkmark */
  success?: boolean;
  /** Text displayed on the button */
  text: string;
  /**
   * Type of the button:
   * - 'action' (default): Regular action button
   * - 'CTA': Call-to-action button
   * - 'hover': Only visible on hover
   * - 'secondary': Secondary button for alternative actions
   * - 'warning': Warning button for risky actions
   */
  type?: 'action' | 'CTA' | 'hover' | 'secondary' | 'warning';
}>();
</script>

<style scoped>
/* Text styling */
.text::first-letter {
  text-transform: capitalize;
}

.text {
  font-weight: 600;
}

/* Base button styling */
.button {
  cursor: pointer;
  font-weight: 600;
  @apply rounded-lg border-brand-border px-3 py-2;
}

.button-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply gap-3;
}

.button:hover {
  @apply bg-black/5;
}

.button:active {
  transform: translateY(2px);
}

/* Loader styles */
.loader-container {
  position: absolute;
  z-index: 1;
  visibility: visible;
}

.loader {
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Button type styles */
.CTA {
  background: linear-gradient(90deg, #56bcc2 0, #56c292 100%);
  box-shadow: 0 2px 10px #56bcc280;
  max-width: 20ch;
  color: white;
}

.CTA:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px #56bdc2d8;
}

.action {
  border: 2px solid #56c292;
  @apply shadow-md bg-brand-bg-elevated;
}

.secondary {
  @apply border-2 shadow-md;
}

.warning {
  @apply border-orange-400 border-2 shadow-md bg-brand-bg-elevated;
}

.hover:hover {
  outline: 1px solid;
  @apply bg-black/10 outline-brand-border;
}

.hide-loading {
  visibility: hidden;
}
</style>
