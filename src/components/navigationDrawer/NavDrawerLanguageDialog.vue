<template>
  <v-dialog
    v-model="dialog"
    max-width="500px">
    <v-card>
      
      <v-card-title>{{ $t('languages.lang') }}</v-card-title>

      <v-card-text>
        <language-selector 
          show-lable 
          :hide-details="true"
          :width="300"/>
      </v-card-text>

      <v-card-actions>
        <v-btn
          flat
          @click.stop="close" >
					
          {{ $t('defaults.close') }} 
				
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
import LanguageSelector from '../languageSelector/LanguageSelector.vue'
export default {
	name: 'NavDrawerLanguageSelector',
	components: {
		LanguageSelector
	},
	data: () => ({
		dialog: false
	}),
	methods: {
		open () {
			this.dialog = true
		},
		close () {
			this.dialog = false
		}
	}
}
</script>

<style>

</style>
