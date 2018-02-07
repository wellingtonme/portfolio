<template>
  <v-app dark>
    
    <toolbar @openNavDrawer="openNavDrawer"/>
    <nav-drawer ref="navDrawer" />

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
import NavDrawer from '../navigationDrawer/NavDrawer.vue'

export default {
	name: 'Main',
	components: {
    Toolbar,
    NavDrawer
	},
	// mixins: [FullPage.fullPageMixin],
	data: () => ({
		options: {
			sectionTag: 'section',
      dotNavEnabled: false
    }    
  }),
  methods: {
    openNavDrawer () {
      this.$refs.navDrawer.openNavDrawer()
    }
  }
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
