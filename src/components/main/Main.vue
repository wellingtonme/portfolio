<template>
  <v-app dark>

    <toolbar @openNavDrawer="openNavDrawer"/>
    <nav-drawer ref="navDrawer" />

    <v-content>
      <presentation-page />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '../toolbar/Toolbar.vue'
import NavDrawer from '../navigationDrawer/NavDrawer.vue'
import PresentationPage from '../pages/presentation/Presentation.vue'

export default {
	name: 'Main',
	components: {
    Toolbar,
    NavDrawer,
    PresentationPage
	},
  methods: {
    openNavDrawer () {
      this.$refs.navDrawer.openNavDrawer()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
