<template>
  <section>
    <v-container 
      fluid
      text-xs-center>

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

        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "AboutCard"
};
</script>

<style>

</style>
