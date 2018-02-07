<template>
  <v-navigation-drawer
    temporary
    v-model="drawer"
    :mini-variant="mini"
    dark
    absolute
    right
  >
    <nav-drawer-header @miniChanged="changeMini"/>
    <nav-drawer-list />

  </v-navigation-drawer>
</template>

<script>
import NavDrawerHeader from './NavDrawerHeader.vue'
import NavDrawerList from './NavDrawerList.vue'

export default {
	name: 'NavDrawer',
	components: {
		NavDrawerHeader,
		NavDrawerList
	},
	data: () => ({
		drawer: null,
		mini: false
	}),
	methods: {
		openNavDrawer () {
			this.drawer = !this.drawer
		},
		changeMini (value) {
			this.mini = value
		}
	}
}
</script>

<style>

</style>
