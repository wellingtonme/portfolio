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

export { helper }
