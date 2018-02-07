<template>
  <v-list class="pa-1">
    <v-list-tile 
      v-if="mini" 
      @click.stop="changeMini()">
      <v-list-tile-action>
        <v-icon>chevron_left</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    <v-list-tile 
      avatar
      tag="div">
      <v-list-tile-avatar>
        <img src="https://randomuser.me/api/portraits/men/85.jpg" >
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>Wellington Silva</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn 
          icon 
          @click.stop="changeMini()">
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
	name: 'NavDrawerHeader',
	data: () => ({
		mini: false
	}),
	methods: {
		changeMini () {
			this.mini = !this.mini
			this.$emit('miniChanged', this.mini)
		}
	}
}
</script>

<style>

</style>
