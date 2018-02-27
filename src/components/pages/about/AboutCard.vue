<template>
  <v-section>
    <v-flex-row>

      <v-card 
        color="grey darken-4"
        class="grey--text text--lighten-1">
        <v-card-text>
          {{ $t('about.text') }}
        </v-card-text>
        <about-card-actions />
      </v-card>

    </v-flex-row>
  </v-section>
</template>

<script>
import AboutCardActions from './AboutCardActions.vue'

export default {
  name: 'AboutCard',
  components: { AboutCardActions }
};
</script>

<style>

</style>
