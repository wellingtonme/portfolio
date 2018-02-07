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

        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in">

          <toolbar-action-list v-if="!isMobileView"/>
          <toolbar-action-icon 
            @openNavDrawer="openNavDrawer"
            v-else />          

        </transition>
      </div>

    </div>
  </nav>
</template>

<script>
import Colorable from 'vuetify/es5/mixins/colorable.js'
import Themeable from 'vuetify/es5/mixins/themeable.js'
import ToolbarActionList from './ToolbarActionList.vue'
import ToolbarActionIcon from './ToolbarActionIcon.vue'

export default {
  name: 'Toolbar',
  components: {
    ToolbarActionList,
    ToolbarActionIcon
  },
	mixins: [Colorable, Themeable],
	data: () => ({
    offsetTop: 0
	}),
	computed: {
		isScrolled: function () {
			return this.offsetTop >= 100
    },
    isMobileView: function () {
      return this.$mq.resize && this.$mq.below(600)
    }
	},
	methods: {
		onScroll (e) {
			this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    openNavDrawer () {
      this.$emit('openNavDrawer')
    }
	}
}
</script>

<style scopped lang="stylus">
@import ('../../stylus/components/toolbar.styl')
</style>
