<script>
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import CharacterList from './components/CharacterList.vue'

export default {
  name: 'App',

  components:{
    AppHeader,
    AppSelect,
    CharacterList
  }

}
</script>

<template>
  <AppHeader/>
  <AppSelect/>
  <CharacterList/>
</template>

<style lang="scss">
@use './styles/general'

</style>