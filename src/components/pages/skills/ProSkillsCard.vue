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
              :rate="80" 
              :label="'HTML/CSS'"
              :interval-time="100"/>
          </v-flex>
          <v-flex xs12>
            <skill-rate-linear
              :rate="90" 
              :label="'JavaScript'"
              :interval-time="100"/>
          </v-flex>
          <v-flex xs12>
            <skill-rate-linear
              :rate="75" 
              :label="'Stylus Lang'"
              :interval-time="100"/>
          </v-flex>
          <v-flex xs12>
            <skill-rate-linear
              :rate="65" 
              :label="'VueJs'"
              :interval-time="100"/>
          </v-flex>
          <v-flex xs12>
            <skill-rate-linear
              :rate="85" 
              :label="'Express/KoaJs'"
              :interval-time="100"/>
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
