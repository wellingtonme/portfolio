<template>
  <v-app dark>
    <v-toolbar 
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
    </v-toolbar>
    <v-content>
      <section class="section">
        <v-parallax 
        height="515">
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

export default {
	name: 'Main',
	components: {
	},
	// mixins: [FullPage.fullPageMixin],
	data: () => ({
		isOnTop: true,
		options: {
			sectionTag: 'section',
			dotNavEnabled: false
		},
		currentPageIndex: 0
	}),
	computed: {
		
	},
	methods: {
		onScroll (e) {
			let topOffset = window.pageYOffset || document.documentElement.scrollTop
			this.isOnTop = topOffset > 0
		},
		isMenuItemActive (index) {
			return index === this.currentPageIndex
		},
		changeIndex (index) {
			// eslint-disable-next-line
			console.log(index)
			this.currentPageIndex = index
		}
	}
}
</script>

<style lang="stylus" scoped>
.toolbar
	z-index 1

.toolbar--is-on-top
	background-color transparent

// .item--active
// 	border-bottom 2px solid #03A9F4

.btn--custom
	border-bottom 2px solid transparent 
	transition 0.5s
	&::before
	&::after
		width 100%
		height 100%
		content ''
		-webkit-transform: scale(0)
		transition: 0.5s
	&::before
		border-bottom: 3px solid #FFF
		border-left: 0
		-webkit-transform-origin: 0% 100%
	&::after
		border-top: 0
		border-right: 0
		-webkit-transform-origin: 50% 50%
	&:hover
		&::after
		&::before
			-webkit-transform: scale(1)
	// transition color 0.25s
	// border-bottom 2px solid transparent !important
	// transition: border-color 1s ease;
	// &::before
	// &::after
	// 	width 0
	// 	height 0
	// &::before
	// 	top 0
	// 	right 0
	// &::after
	// 	bottom: 0
	// 	left 0
	// &:hover
	// 	color #03A9F4
	// 	&::before
	// 	&::after
	// 		// width 100%
	// 	&::after
	// 		border-color #03A9F4
			// border-left-color #03A9F4
			// transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s


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
