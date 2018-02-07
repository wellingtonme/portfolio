<template>
  <ul>
    <li 
      v-for="link in links" 
      :key="link.id">

      <a 
        class="menu-link" 
        href="#"> 
        {{ $t(link.title) }} 
      </a>

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
