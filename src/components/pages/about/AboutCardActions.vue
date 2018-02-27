<template>
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
</template>

<script>
export default {
	name: 'AboutCardActions'
}
</script>

<style>

</style>
