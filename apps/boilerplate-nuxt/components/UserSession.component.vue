<template>
  <div>
    <div v-if="isAuthenticated" class="text-center">
      <p class="text-lg">{{ t('userSession.welcome') }}, {{ user?.name }}!</p>
      <button
        @click="logout"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        {{ t('userSession.logout') }}
      </button>
    </div>
    <div v-else>
      <p class="text-lg mb-4">{{ t('userSession.askLogin') }}</p>
      <input
        v-model="email"
        placeholder="Email"
        class="w-full bg-gray-200 border border-gray-300 rounded py-2 px-4 mb-2"
      />
      <input
        v-model="name"
        placeholder="Name"
        class="w-full bg-gray-200 border border-gray-300 rounded py-2 px-4 mb-2"
      />
      <button
        @click="login"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {{ t('userSession.login') }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

const sessionStore = useSessionStore();
const email = ref('');
const name = ref('');

const login = () => {
  const user = {
    id: Date.now(),
    name: name.value,
    email: email.value,
  };
  sessionStore.login(user);
};

const logout = () => {
  sessionStore.logout();
};

const isAuthenticated = computed(() => sessionStore.isAuthenticated);
const user = computed(() => sessionStore.user);
</script>
