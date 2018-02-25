<template>
  <div class="list__tile list_tile--container">
    <v-avatar-image :img-src="icon" />
    <v-list-tile-content>
      <v-list-tile-title v-html="$t(name)"/>
    </v-list-tile-content>
  </div>
</template>

<script>
import { helper } from '@/tools/componentsHelper'

export default {
	name: 'SelectorItem',
	mixins: [helper],
	props: {
		icon: {
			type: String,
			default: ('')
		},
		name: {
			type: String,
			default: ('')
		}
	}
}
</script>

<style scoped lang="stylus">
@import '../../stylus/components/languageSelector/languageSelectorItem.styl'
</style>
