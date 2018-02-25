<template>
  <section>
    <v-parallax 
      height="400" 
      :src="getImage('./cover.png')" />
    <v-container 
      fluid
      class="presentation-card"
      text-xs-center
      text-md-left>
      <v-layout
        row
        wrap>
        <v-flex 
          xs12
          sm10
          lg8
          offset-sm1
          offset-lg2>
          <v-card 
            color="grey darken-4" 
            class="grey--text text--lighten-1 elevation-3">
            <v-card-text>
              <profile-card-text/>
            </v-card-text>
            <profile-card-actions />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import ProfileCardText from './ProfileCardText.vue'
import ProfileCardActions from './ProfileCardActions.vue'
import { helper } from '@/tools/componentsHelper.js'

export default {
  name: "Presentation",
  components: {
    ProfileCardText,
    ProfileCardActions
  },
  mixins: [helper]
};
</script>

<style lang="stylus" scoped>
	@import '../../../stylus/components/profileCard/profileCard.styl'
</style>
