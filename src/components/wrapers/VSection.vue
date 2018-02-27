<template>
  <section>
    <v-container
      fluid
      text-xs-center
      :class="containerClass">
      <h1 v-if="title">
        <v-icon>{{ titleIcon }} </v-icon>
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

<style>

</style>
