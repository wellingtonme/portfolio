const state = {
	menuOptions: [
		{ id: 1, title: 'toolbar.links.home', icon: 'home' },
		{ id: 2, title: 'toolbar.links.about', icon: 'person_pin' },
		{ id: 3, title: 'toolbar.links.skills', icon: 'build' },
		{ id: 4, title: 'toolbar.links.projects', icon: 'work' },
		{ id: 5, title: 'toolbar.links.contact', icon: 'email' }
	]
}

const getters = {
	menuOptions: state => state.menuOptions
}

export default {
	state,
	getters
}