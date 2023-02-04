import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en_US from '../i18n/en-US/base.json';
import zh_CN from '../i18n/zh-CN/base.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

let status = false;


function init() {
  if (!status) {
    i18next
      .use(initReactI18next)
      .init({
        returnNull: false,
        compatibilityJSON: 'v3',
        lng: 'en-US',
        fallbackLng: 'en-US',
        debug: true,
        resources: {
          'en-US': {
            translation: en_US,
          },
          'zh-CN': {
            translation: zh_CN,
          },
        },
        interpolation: {
          escapeValue: false,
        },
      })
      .then(() => {
        status = true;
      });
  }
}

export default {
  init,
};
