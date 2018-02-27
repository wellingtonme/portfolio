<template>
  <v-app dark>

    <toolbar @openNavDrawer="openNavDrawer"/>
    <nav-drawer ref="navDrawer" />

    <v-content>
      <profile-card />
      <about-card />
      <skills-card />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '../toolbar/Toolbar.vue'
import NavDrawer from '../navigationDrawer/NavDrawer.vue'
import ProfileCard from '../pages/profile/ProfileCard.vue'
import AboutCard from '../pages/about/AboutCard.vue'
import SkillsCard from '../pages/skills/SkillsCard.vue'

export default {
	name: 'Main',
	components: {
    Toolbar,
    NavDrawer,
    ProfileCard,
    AboutCard,
    SkillsCard
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
