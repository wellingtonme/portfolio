<template>
  <v-list-tile @click="clickHandler">
    <v-list-tile-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ $t(title) }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
	name: 'NavDrawerListItem',
	props: {
		icon: {
			type: String,
			default: ('')
		},
		title: {
			type: String,
			default: ('')
		},
		clickHandler: {
			type: Function,
			default: () => { }
		}
	}
}
</script>

<style>

</style>
