<template>
  <v-section>
    <v-flex-row>

      <v-card 
        color="grey darken-4"
        class="grey--text text--lighten-1">
        <v-card-text>
          {{ $t('about.text') }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn 
            color="primary"
            depressed>
            <v-icon>file_download</v-icon> 
            {{ $t('about.resume') }}
          </v-btn>
          <v-btn
            color="primary"
            depressed>
            <v-icon>send</v-icon>
            {{ $t('about.contact') }}
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>

    </v-flex-row>
  </v-section>
</template>

<script>
export default {
  name: "AboutCard"
};
</script>

<style>

</style>
