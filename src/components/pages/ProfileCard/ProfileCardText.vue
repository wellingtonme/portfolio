<template>
  <v-container>
    <v-layout
      row
      wrap>
      
      <profile-card-avatar />

      <v-flex
        sm12
        md6
        :class="{'mt-3': !isMobile, 'mt-5': isMobile}">
        
        <card-text-row classes="profile--name">
          <span v-html="$t('profile.presentation.name')" >,</span>
        </card-text-row>
        <card-text-row classes="profile--role">
          <span> {{ $t('profile.role') }} &lt; &frasl; &gt;</span>
        </card-text-row>

        <profile-card-basic-info />
                
        <card-text-row classes="profile--quote">
          <span>{{ $t('profile.quote') }}</span>
        </card-text-row>
      
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CardTextRow from "./CardTextRow.vue"
import ProfileCardBasicInfo from './ProfileCardBasicInfo.vue'
import ProfileCardAvatar from './ProfileCardAvatar.vue'
import { helper } from "@/tools/componentsHelper.js"

export default {
	name: 'ProfileCardText',
	components: {
    CardTextRow,
    ProfileCardBasicInfo,
    ProfileCardAvatar
  },
  mixins: [helper]
}
</script>

<style scoped lang="stylus">
	@import '../../../stylus/components/profileCard/profileCardText.styl'
</style>
