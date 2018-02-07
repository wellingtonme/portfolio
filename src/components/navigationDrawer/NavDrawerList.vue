<template>
  <v-list 
    class="pt-0" 
    dense>
    <v-divider light/>
    <v-list-tile 
      v-for="link in links"
      :key="link.id">
      <v-list-tile-action>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t(link.title) }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'NavDrawerList',
	computed: {
		...mapGetters({
			links: 'menuOptions'
		})
	}
}
</script>

<style>

</style>
