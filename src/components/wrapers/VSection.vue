<template>
  <section>
    <v-container
      fluid
      text-xs-center
      :class="containerClass">
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
    }
  }
}
</script>

<style>

</style>
