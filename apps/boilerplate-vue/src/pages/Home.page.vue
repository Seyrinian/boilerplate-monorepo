<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-900 text-white"
  >
    <div class="text-center">
      <img src="/vite.svg" alt="Logo Vite" class="w-20 h-20 mx-auto mb-4" />
      <CounterButton class="mb-8" />
      <UserSession />
    </div>
  </div>
</template>

<script setup lang="ts">
import CounterButton from '../components/CounterButton.component.vue';
import UserSession from '../components/UserSession.component.vue';
</script>
