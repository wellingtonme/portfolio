<template>
  <!-- eslint-disable-next-line -->
  <v-select
    :items="languages"
    item-text="name"
    item-value="iso"
    chips
    max-height="auto"
    v-model="locale"
    :class="classes"
    :style="{ width: `${this.width}px` }"
    v-scroll="onScroll"
  >
    <template 
      slot="selection" 
      slot-scope="data">

      <v-chip
        @input="data.parent.selectItem(data.item)"
        :selected="data.selected"
        :key="JSON.stringify(data.item)"
      >
        <v-avatar-image :img-src="data.item.icon" />
        <span v-if="showLable"> {{ $t(data.item.name) }} </span>

      </v-chip>

    </template>

    <template 
      slot="item" 
      slot-scope="data">

      <template>      

        <selector-item
          :name="data.item.name"
          :icon="data.item.icon"
        />

      </template>

    </template>
  </v-select>

</template>

<script>

import SelectorItem from './SelectorItem.vue'
import { scrollHelper } from '@/tools/componentsHelper.js'

export default {
  name: 'LanguageSelector',
  components: {
    SelectorItem
  },
  mixins: [scrollHelper],
  props: {
    showLable: {
      type: Boolean,
      default: false
    },
    hideDetails: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: (80),
      validator: v => !isNaN(parseInt(v)) 
    }
  },
	data: () => ({
		languages: [
			{ name: 'languages.ptBr', iso: 'pt-BR', icon: './brazil_flag.png' },
			{ name: 'languages.en', iso: 'en', icon: './usa_flag.png' }
    ]
  }),
  computed: {
    locale: {
      get: function () {
        return this.$i18n.locale
      },
      set: function (value) {
        this.$i18n.locale = value
      }
    },
    classes: function () {
      return {
        'hide-details': this.hideDetails, 
        'show-lable': this.showLable,
        'fit-in-toolbar--scrolled': this.isScrolled,
        'fit-in-toolbar': !this.isScrolled
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../stylus/components/languageSelector/languageSelector.styl'
</style>
