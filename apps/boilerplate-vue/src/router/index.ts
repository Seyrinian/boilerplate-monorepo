import { createMemoryHistory, createRouter } from 'vue-router';

import HomePage from '../pages/Home.page.vue';

const routes = [{ path: '/', component: HomePage }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
