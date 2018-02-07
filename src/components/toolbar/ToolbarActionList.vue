<template>
  <ul>
    <li 
      v-for="link in links" 
      :key="link.id">

      {{ $t(link.title) }}

    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToolbarActionList',
  computed: {
    ...mapGetters({
      links: 'menuOptions'
    })
  }
}
</script>

<style>

</style>
