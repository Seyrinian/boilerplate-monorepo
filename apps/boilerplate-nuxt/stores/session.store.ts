import type { User } from '../types/user.type';

export const useSessionStore = defineStore('session', () => {
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
