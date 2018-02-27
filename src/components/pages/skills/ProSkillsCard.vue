<template>
  <v-flex
    xs12
    md4
    lg3
    offset-md1
    offset-lg2>
    <v-card color="primary">
      <v-card-text>
        <v-layout 
          row
          wrap>
          <v-flex xs12>
            <skill-rate-linear
              style="float:right"
              :rate="80" 
              :interval-time="400"/>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import SkillRateLinear from './SkillRateLinear.vue'

export default {
  name: 'ProSkillsCard',
  components: {
    SkillRateLinear
  },
}
</script>

<style>

</style>
