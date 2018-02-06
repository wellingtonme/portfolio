<template>
  <nav 
    class="ntoolbar" 
    :class="{'ntoolbar--scrolled':isScrolled}"
    v-scroll="onScroll">
    <div class="ntoolbar--container">
      <div class="ntoolbar--title-container">
        <h1 
          class="ntoolbar--title"
          :class="{'ntoolbar--title--scrolled': isScrolled}">{{ $t('toolbar.title') }}</h1>
      </div>
      <div 
        class="ntoolbar--actions-container" 
        :class="{'ntoolbar--actions-container--scrolled': isScrolled}">
        <action-list />
      </div>
    </div>
  </nav>
</template>

<script>
import Colorable from 'vuetify/es5/mixins/colorable.js'
import Themeable from 'vuetify/es5/mixins/themeable.js'
import ActionList from './ActionList.vue'

export default {
  name: 'Toolbar',
  components: {
    ActionList
  },
	mixins: [Colorable, Themeable],
	data: () => ({
		offsetTop: 0
	}),
	computed: {
		isScrolled: function () {
			return this.offsetTop >= 100
		}
	},
	methods: {
		onScroll (e) {
			this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
		}
	}
}
</script>

<style scopped lang="stylus">
@import ('../../stylus/components/toolbar.styl')
</style>
