import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

let status = false;

function init() {
  if (!status) {
    i18next
      .use(initReactI18next)
      .init({
        compatibilityJSON: 'v3',
        lng: 'en-US',
        fallbackLng: 'en-US',
        debug: true,
        resources: {
          'en-US': {
            translation: {
              hello: 'Hello',
              change: 'Change language',
            },
          },
          'zh-CN': {
            translation: {
              hello: '你好',
              change: '切换语言',
            },
          },
        },
      }).then(() => {
        status = true;
      });
  }
}

export default {
  init,
};
