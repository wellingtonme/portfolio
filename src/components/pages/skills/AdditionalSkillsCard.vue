<template>
  <v-flex
    xs12
    md6
    lg5
    offset-md0
    offset-lg0
    :class="{'pl-4': !isMobile, 'pt-4': isMobile}">
    <v-card color="primary">
      <v-card-text>
        <div class="skills--wrap">
          <skill-rate-circle
            v-for="skill in skills"
            :key="JSON.stringify(skill)"
            :label="skill.label"
            :translate="true"
            :rate="skill.rate"
            :interval-time="skill.interval"/>
        </div>
        <v-divider style="margin-top:28px" />
        <v-layout
          row
          wrap
          class="mt-3">
          <v-flex
            xs4
            v-for="skill in otherSkills"
            :key="JSON.stringify(skill)"
            class="pt-1 pb-2">
            <span><v-icon>mdi-check</v-icon> {{ $t(skill) }}</span>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { viewHelper } from '@/tools/componentsHelper'
import SkillRateCircle from './SkillRateCircle.vue'

export default {
	name: 'AdditionalSkillsCard',
  components: {
    SkillRateCircle
  },
  mixins: [viewHelper],
  data: () => ({
    skills: [
      { label: 'skills.english', rate: 75, interval: 100 },
      { label: 'skills.teamWork', rate: 90, interval: 100 },
      { label: 'skills.creativity', rate: 80, interval: 100 }
    ],
    otherSkills: [
      'skills.uiUx',
      'skills.digitalArt',
      'skills.photoshop',
      'skills.adobeXD',
      'skills.scrum',
      'skills.mobile',
    ]
  })
}
</script>

<style lang="stylus" scoped>
.skills--wrap
  display flex
  flex-direction row
  justify-content space-around
</style>
