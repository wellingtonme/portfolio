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
    <li>
      <language-selector />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import LanguageSelector from '../languageSelector/LanguageSelector.vue'

export default {
  name: 'ToolbarActionList',
  components: {
    LanguageSelector
  },
  computed: {
    ...mapGetters({
      links: 'menuOptions'
    })
  }
}
</script>

<style>

</style>
