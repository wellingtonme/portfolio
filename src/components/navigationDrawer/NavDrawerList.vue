<template>
  <v-list 
    class="pt-0" 
    dense>
    <v-divider light/>

    <nav-drawer-list-item 
      v-for="link in links" 
      :key="link.id"
      :icon="link.icon"
      :title="link.title"/>

    <nav-drawer-list-item
      icon="record_voice_over"
      title="languages.lang"
      :click-handler="openDialog"/>

    <nav-drawer-language-dialog ref="languageDialog" />
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
import NavDrawerListItem from './NavDrawerListItem.vue'
import NavDrawerLanguageDialog from './NavDrawerLanguageDialog.vue'

export default {
  name: 'NavDrawerList',
  components: {
    NavDrawerListItem,
    NavDrawerLanguageDialog
  },
	computed: {
		...mapGetters({
			links: 'menuOptions'
		})
  },
  methods: {
    openDialog () {
      this.$refs.languageDialog.open()
    }
  }
}
</script>

<style>

</style>
