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
        Additional
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { viewHelper } from '@/tools/componentsHelper'

export default {
	name: 'AdditionalSkillsCard',
  mixins: [viewHelper]
}
</script>

<style>

</style>
