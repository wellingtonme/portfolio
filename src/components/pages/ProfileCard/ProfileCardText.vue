<template>
  <v-container>
    <v-layout
      row
      wrap>
      <v-flex
        sm12
        md4>
        <v-avatar
          :tile="tile"
          :size="256"
          class="grey lighten-4"
        >
          <img src="../../../assets/me.png">
        </v-avatar>
      </v-flex>
      <v-flex
        sm12
        md7
        offset-md1
        class="mt-5">
        <card-text-row classes="profile--preword">
          <span>{{ $t('profile.greeting') }}</span>
        </card-text-row>
        <card-text-row classes="profile--name">
          <span v-html="$t('profile.presentation.present')" >,</span>
        </card-text-row>
        <card-text-row classes="profile--role">
          <span> {{ $t('profile.role') }} &lt; &frasl; &gt;</span>
        </card-text-row>
        <!-- <card-text-row classes="profile--description">
            <p>{{ $t('profile.description') }}</p>
          </card-text-row> -->
        <card-text-row classes="profile--quote">
          <span>{{ $t('profile.quote') }}</span>
        </card-text-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CardTextRow from "./CardTextRow.vue";

export default {
	name: 'ProfileCardText',
	components: {
		CardTextRow
	}
}
</script>

<style scoped lang="stylus">
	@import '../../../stylus/components/profileCardText.styl'
</style>
