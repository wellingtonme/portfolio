<template>
  <v-flex
    sm12
    md5
    offeset-lg1
    text-xs-center
    :class="{
      'mt-5': !isMobile, 
      'mt-3': isMobile,
      'float-avatar': isMobile}">
    
    <v-avatar
      :size="avatarSize"
      class="grey lighten-4"
    >
      <img src="../../../assets/me.png">
    </v-avatar>

  </v-flex>
</template>

<script>
import { viewHelper } from "@/tools/componentsHelper.js"

export default {
  name: "ProfileCardAvatar",
  mixins: [viewHelper],
  computed: {
    avatarSize: function() {
      return this.isMobileView ? 150 : this.isMobileLandscapeView ? 170 : 260;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/components/profileCard/profileCardAvatar.styl'
</style>
