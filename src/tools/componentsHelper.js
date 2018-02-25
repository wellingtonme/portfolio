const helper = {
	methods: {
		getImage (img) {
			let images = require.context('@/assets/', false, /\.png$/)
			return images(img)
		}
	},
	computed: {
		isMobileView: function () {
			return this.$mq.resize && this.$mq.below(600)
		},
		isMobileLandscapeView: function () {
			return this.$mq.resize && this.$mq.below(960)
		},
		isMobile: function () {
			return this.isMobileView || this.isMobileLandscapeView
		}
	}
}

const scrollHelper = {
	data: () => ({
		offsetTop: 0
	}),
	computed: {
		isScrolled: function () {
			return this.offsetTop >= 100
		}
	},
	methods: {
		onScroll: function (e) {
			this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
		}
	}
}

export { helper, scrollHelper }
