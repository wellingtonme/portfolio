<template>
  <div style="width:100%">
    <span 
      v-if="title" 
      style="float:left">
      {{ title }}
    </span>
    <span 
      v-if="rate" 
      style="float:right">
      {{ rate }} %
    </span>
    <v-progress-linear 
      :height="height"
      v-model="value"
      color="grey darken-4"/>
  </div>
</template>

<script>
import skillRateHelper from './skillRateHelper.js'
export default {
  name: 'SkillRateLinear',
  mixins: [skillRateHelper],
  props: {
    height: {
      type: Number,
      validator: v => !isNaN(v),
      default: (15)
    }, 
  }  
}
</script>

<style>

</style>
