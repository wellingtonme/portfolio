<template>
  <v-app dark>

    <toolbar @openNavDrawer="openNavDrawer"/>
    <nav-drawer ref="navDrawer" />

    <v-content>
      <profile-card />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '../toolbar/Toolbar.vue'
import NavDrawer from '../navigationDrawer/NavDrawer.vue'
import ProfileCard from '../pages/profileCard/ProfileCard.vue'

export default {
	name: 'Main',
	components: {
    Toolbar,
    NavDrawer,
    ProfileCard
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
