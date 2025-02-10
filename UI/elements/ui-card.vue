<template>
    <div class="card">
      <div class="card-head" v-if="slots.header">
        <slot name="header" />
      </div>
      <slot>Main content of the card</slot>
      <div class="card-footer" v-if="slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useSlots } from 'vue';
  
  const slots = useSlots();
  </script>
  
  <style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @apply p-4 rounded-md bg-brand-bg-elevated shadow-md m-8 gap-4;
  }
  
  .card-head {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  