<template>
  <v-app dark>
    <!-- <v-toolbar 
      class="elevation-0" 
      :class="{'toolbar--is-on-top': isOnTop}"
      v-scroll="onScroll">
      <v-spacer/>
      <v-toolbar-items 
        class="hidden-sm-and-down" 
        id="menu">
        <v-btn 
          :class="{'item--active':isMenuItemActive(0)}"
          flat
          class="btn--custom"
          @click.stop="changeIndex(0)">Link One</v-btn>
        <v-btn
          :class="{'item--active':isMenuItemActive(1)}"
          flat
          class="btn--custom"
          @click.stop="changeIndex(1)">Link Two</v-btn>
        <v-btn 
          :class="{'item--active':isMenuItemActive(2)}"
          class="btn--custom"
          flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar> -->
    <toolbar/>
    <v-content>
      <section class="section">
        <v-parallax 
        height="1000">
        <!-- <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1> -->
        </v-parallax>
      </section>
      <section class="section">
        <h3>Slide 2.1</h3>
      </section>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '../toolbar/Toolbar.vue'

export default {
	name: 'Main',
	components: {
		Toolbar
	},
	// mixins: [FullPage.fullPageMixin],
	data: () => ({
		options: {
			sectionTag: 'section',
			dotNavEnabled: false
		},
	})
}
</script>

<style lang="stylus" scoped>
.parallax
	position absolute
	top 0
	right 0
	left 0
	background-image url('https://c2.staticflickr.com/8/7331/9262740777_f69bca112c_b.jpg')
	background-size cover
	background-position-y center
	&:before 
		background-color rgba(0,0,0,0.8)
		content ''
		top 0
		left 0
		width 100%
		height 100%
		position absolute
</style>
