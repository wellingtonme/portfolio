export default {
	props: {
		rate: {
			type: Number,
			validator: v => !isNaN(v),
			default: (100)
		},
		intervalTime: {
			type: Number,
			validator: v => !isNaN(v),
			default: (1000)
		},
		label: {
			type: String,
			default: (null)
		},
		translate: {
			type: Boolean,
			default: (false)
		}
	},
	computed: {
		title: function () {
			return this.translate && this.label ? this.$i18n.t(this.label) : this.label
		}
	},
	data: () => ({
		interval: {},
		value: 0
	}),
	beforeDestroy() {
		clearInterval(this.interval)
	},
	mounted() {
		this.interval = setInterval(() => {
			if (this.value === this.rate) {
				clearInterval(this.interval)
			} else {
				this.value += 5
			}
		}, this.intervalTime)
	}
}