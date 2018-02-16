const helper = {
	methods: {
		getImage (img) {
			let images = require.context('@/assets/', false, /\.png$/)
			return images(img)
		}
	}
}

export { helper }
