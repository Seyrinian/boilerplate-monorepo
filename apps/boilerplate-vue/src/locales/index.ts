import { createI18n } from 'vue-i18n';
import { fr } from './fr';

const translates = {
  fr,
};

export const i18n = createI18n({
  legacy: false, // use Composition API
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: translates,
});
