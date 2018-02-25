<template>
  <div class="profile--info">
    <v-divider />
    <div>
      <card-text-row>
        <span><v-icon color="grey lighten-1">mail</v-icon> wellington.mesilva@gmail.com</span>
      </card-text-row>
      <card-text-row>
        <span><v-icon 
          color="grey lighten-1" 
          medium>fa-skype</v-icon> wellingtonmessias1</span>
      </card-text-row>
      <card-text-row>
        <span><v-icon color="grey lighten-1">phone</v-icon> +55 (35) 9 8439-9434</span>
      </card-text-row>
      <card-text-row>
        <span><v-icon color="grey lighten-1">location_on</v-icon> Santa Rita do Sapucaí - Minas Gerais, Brazil</span>
      </card-text-row>
    </div>
    <v-divider />
  </div>
</template>

<script>
import CardTextRow from "./CardTextRow.vue"

export default {
  name: "ProfileCardBasicInfo",
  components: {
    CardTextRow
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/components/profileCard/profileCardBasicInfo.styl'
</style>
