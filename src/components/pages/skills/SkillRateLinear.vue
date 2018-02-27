<template>
  <div style="width:100%">
    <span style="float:left">HTML</span> <!-- change to property -->
    <v-progress-linear 
      :height="height"
      v-model="value"
      color="grey darken-4"/>
  </div>
</template>

<script>
export default {
  name: 'SkillRateLinear',
  props: {
    height: {
      type: Number,
      validator: v => !isNaN(v),
      default: (15)
    },
    rate: {
      type: Number,
      validator: v => !isNaN(v),
      default: (100)
    },
    intervalTime: {
      type: Number,
      validator: v => !isNaN(v),
      default: (1000)
    }
  },
  data: () => ({
    interval: {},
    value: 0
  }),
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === this.rate) {
        clearInterval(this.interval)
      } else {
        this.value += 10
      }      
    }, this.intervalTime)
  }
}
</script>

<style>

</style>
