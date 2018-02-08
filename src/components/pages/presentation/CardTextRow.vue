<template>
  <v-layout
    row
    wrap
  >
    <v-flex>
      <div :class="classes">
        <slot/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
	name: 'CardTextRow',
  props: {
    classes: {
      type: String,
      default: ('')
    }
  }
}
</script>

<style>

</style>
