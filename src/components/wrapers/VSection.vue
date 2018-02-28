<template>
  <section>
    <v-container
      fluid
      text-xs-center
      :class="containerClass">
      <h1 
        v-if="title" 
        class="sectionTitle grey--text text--lighten-1">
        <v-icon color="grey lighten-1">{{ titleIcon }} </v-icon>
        {{ $t(title) }}
      </h1>
      <v-layout
        row
        wrap>
        <slot />
      </v-layout>
    </v-container>
  </section>
</template>

<script>

export default {
  name: 'VSection',
  props: {
    containerClass: {
      type: String,
      default: ('')
    },
    layoutClass: {
      type: String,
      default: ('')
    },
    title: {
      type: String,
      default: (null)
    },
    titleIcon: {
      type: String,
      default: ('mdi-check-all')
    }
  }
}
</script>

<style lang="stylus" scoped>
.sectionTitle
  padding-bottom 15px
</style>
