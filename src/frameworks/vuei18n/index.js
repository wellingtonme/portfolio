import Vue from 'vue'
import VueI18n from 'vue-i18n'
import localeI18n from '../../locale-i18n'

Vue.use(VueI18n)

const options = {
	locale: 'en', 
	messages: localeI18n,
	fallbackLocale: 'en'
}

export default new VueI18n(options)