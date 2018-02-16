<template>
  <!-- eslint-disable-next-line -->
  <v-select
    :items="languages"
    item-text="name"
    item-value="iso"
    chips
    max-height="auto"
    v-model="locale"
    :class="{'hide-details': hideDetails, 'show-lable': showLable}"
    :style="{ width: `${this.width}px` }"
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

export default {
  name: 'LanguageSelector',
  components: {
    SelectorItem
  },
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.chip .avatar
  margin-right -11px

.show-lable .chip .avatar
  margin-right 8px !important

</style>
