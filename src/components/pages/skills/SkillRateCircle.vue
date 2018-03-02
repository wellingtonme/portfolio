<template>
  <div class="progress--wrap">
    <v-progress-circular 
      :width="width"
      :size="size"
      :rotate="rotate"
      :value="value"
      color="grey darken-4">
      {{ value }} %
    </v-progress-circular>
    <div
      v-if="title" 
      class="progress--title"
      :style="`width: ${this.size}px`">
      <span>
        {{ title }}
      </span>
    </div>
  </div>
</template>

<script>
import skillRateHelper from './skillRateHelper.js'

export default {
  name: 'SkillRateCircle',
  mixins: [skillRateHelper],
  props: {
    width: {
      type: Number,
      validator: v => !isNaN(v),
      default: (15)
    }, 
    size: {
      type: Number,
      validator: v => !isNaN(v),
      default: (100)
    },
    rotate: {
      type: Number,
      validator: v => !isNaN(v),
      default: (360)
    }
  }
}
</script>

<style lang="stylus" scoped>
.progress
  &--wrap
    display flex
    flex-direction column
  &--title
    padding-top 10px

.progress-circular__info
  color: white !important
</style>
