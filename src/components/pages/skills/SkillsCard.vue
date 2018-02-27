<template>
  <v-section 
    title="skills.title"
    title-icon="mdi-code-tags-check">
    <pro-skills-card />
    <additional-skills-card />    
  </v-section>
</template>

<script>
import ProSkillsCard from './ProSkillsCard.vue'
import AdditionalSkillsCard from './AdditionalSkillsCard.vue'

export default {
  name: 'SkillsCard',
  components: {
    ProSkillsCard,
    AdditionalSkillsCard
  }
}
</script>

<style>

</style>
