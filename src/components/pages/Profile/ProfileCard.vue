<template>
  <v-section 
    text-md-left
    class="presentation-card"
    container-class="text-md-left">
    <v-parallax 
      height="400" 
      :src="getImage('./cover.png')" />
    <v-flex-row>
      <v-card 
        color="grey darken-4" 
        class="grey--text text--lighten-1">
        <v-card-text>
          <profile-card-text/>
        </v-card-text>
        <profile-card-actions />
      </v-card>
    </v-flex-row>
  </v-section>
</template>

<script>
import ProfileCardText from './ProfileCardText.vue'
import ProfileCardActions from './ProfileCardActions.vue'
import { imageHelper } from '@/tools/componentsHelper.js'

export default {
  name: "Presentation",
  components: {
    ProfileCardText,
    ProfileCardActions
  },
  mixins: [imageHelper]
};
</script>

<style lang="stylus" scoped>
	@import '../../../stylus/components/profileCard/profileCard.styl'
</style>
