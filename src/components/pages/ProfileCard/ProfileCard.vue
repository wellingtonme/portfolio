<template>
  <section>
    <v-parallax height="400"/>
    <v-container 
      fluid
      class="presentation-card">
      <v-layout
        row
        wrap>
        <v-flex 
          xs12
          sm12
          md8
          lg6
          xl6
          offset-md2
          offset-lg3>
          <v-card>
            <v-card-text>
              <profile-card-text/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import ProfileCardText from './ProfileCardText.vue'
export default {
  name: "Presentation",
  components: {
    ProfileCardText
  }
};
</script>

<style lang="stylus" scoped>
	@import '../../../stylus/components/profileCard.styl'
</style>
