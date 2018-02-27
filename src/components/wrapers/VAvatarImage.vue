<template>
  <v-avatar>
    <img :src="getIconImage(imgSrc)">
  </v-avatar>
</template>

<script>
import { imageHelper } from '@/tools/componentsHelper'

export default {
  name: 'VAvatarImage',
  mixins: [ imageHelper ],
  props: {
    imgSrc: {
      type: String,
      default: ('')
    },
    external: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getIconImage (img) {
      return this.external ? img : this.getImage(img)
    }
  }
}
</script>

<style>

</style>
