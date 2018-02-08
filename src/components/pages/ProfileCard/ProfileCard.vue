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
              <v-container>
                <card-text-row classes="profile--preword">
                  <span>{{ $t('profile.greeting') }}</span>
                </card-text-row>
                <card-text-row classes="profile--name">
                  <span> {{ $t('profile.presentation.present') }},</span>
                </card-text-row>
                <card-text-row classes="profile--role">
                  <span>{{ $t('profile.role') }} &lt; &frasl; &gt;</span>
                </card-text-row>
                <card-text-row classes="profile--description">
                  <p>{{ $t('profile.description') }}</p>
                </card-text-row>
                <card-text-row classes="profile--quote">
                  <span>{{ $t('profile.quote') }}</span>
                </card-text-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import CardTextRow from "./CardTextRow.vue";
export default {
  name: "Presentation",
  components: {
    CardTextRow
  }
};
</script>

<style lang="stylus" scoped>
	@import '../../../stylus/components/profileCard.styl'
</style>
