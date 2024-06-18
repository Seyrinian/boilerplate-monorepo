import { fr } from '../locales/fr';

const translates = {
  fr,
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: translates,
}));
