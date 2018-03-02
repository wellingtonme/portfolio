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
              v-for="skill in skills"
              :key="JSON.stringify(skill)"
              :rate="skill.rate" 
              :label="skill.title"
              :interval-time="skill.interval"/>
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
  data: () => ({
    skills: [
      { rate: 80, title: 'HTML/CSS', interval: 100 },
      { rate: 90, title: 'JavaScript', interval: 100 },
      { rate: 75, title: 'Stylus Lang', interval: 100 },
      { rate: 70, title: 'VueJs', interval: 100 },
      { rate: 85, title: 'Express/KoaJs', interval: 100 }
    ]
  })
}
</script>

<style>

</style>
