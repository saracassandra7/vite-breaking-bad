<script>
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import CharacterList from './components/CharacterList.vue';
import axios from 'axios';
import {store} from './data/store'

export default {
  name: 'App',

  data(){
    return{
      store
    }
  },

  components:{
    AppHeader,
    AppSelect,
    CharacterList
  },

  methods:{
    getCharacters(){
      axios.get(store.apiUrl)
      .then(result =>{
        console.log(result.data);
        //con la chiamata salvo i personaggi nell'array (che era vuoto)
        store.charactersListData = result.data
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },

  mounted(){
    this.getCharacters()
  }

}
</script>

<template>
  <AppHeader/>
  <main>
    <AppSelect/>
    <CharacterList/>
  </main>
</template>

<style lang="scss">
@use './styles/general'

</style>