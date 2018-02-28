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
export default {
  name: 'SkillRateCircle'
}
</script>

<style>

</style>
