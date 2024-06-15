import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { User } from '../types/user.type';

export default defineStore('session', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => user.value !== null);

  function login(newUser: User) {
    user.value = newUser;
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  function logout() {
    user.value = null;
    localStorage.removeItem('user');
  }

  function checkSession() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user.value = JSON.parse(storedUser);
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    checkSession,
  };
});
