import Vue from 'vue'
import VueI18n from 'vue-i18n'

// element-ui build-in lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementENLocale from 'element-ui/lib/locale/lang/en'

// defined lang
import zhLocale from './zh'
import enLocate from './en'

Vue.use(VueI18n)

const messages = {
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  en: {
    ...enLocate,
    ...elementENLocale
  }
}

const i18n = new VueI18n({
  locale: 'zh', // todo, lang message get from cookie.
  messages
})

export default i18n;