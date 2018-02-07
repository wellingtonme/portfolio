<template>
  <v-btn 
    flat 
    icon
    @click="openNavDrawer">
    <v-icon>menu</v-icon>
  </v-btn>
</template>

<script>
export default {
	name: 'ToolbarActionIcon',
	methods: {
		openNavDrawer () {
			this.$emit('openNavDrawer')
		}
	}
}
</script>

<style>

</style>
