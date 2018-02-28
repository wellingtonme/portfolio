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
    },
    label: {
      type: String,
      default: (null)
    },
    translate: {
      type: Boolean,
      default: (false)
    }
  },
  data: () => ({
    interval: {},
    value: 0
  }),
  computed: {
    title: function () {
      debugger
      return this.translate && this.label ? this.$i18n.t(this.label) : this.label
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === this.rate) {
        clearInterval(this.interval)
      } else {
        this.value += 5
      }      
    }, this.intervalTime)
  }
}
</script>

<style>

</style>
