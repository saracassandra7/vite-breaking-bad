<script>
import {store} from '../data/store';
import CharacterCard from './CharacterCard.vue';
import AppLoading from './AppLoading.vue';

export default {
  name: 'CharacterList',

  computed:{
    outputResult(){
      if(store.charactersListData.length > 0){
        return `Found ${store.charactersListData.length} characters`;
      }
    }

  },

  components:{
    CharacterCard,
    AppLoading
  },

  data(){
    return{
      store
    }
  }

}
</script>

<template>
  <div class="container bg-white p-5">
    <div class="row">
      <div class="sc-col col text-white pt-3 d-flex align-items-center">
        <p class="fw-bold fs-5">{{outputResult}}</p>
      </div>
    </div>
    <div class="row" v-if="store.isLoaded">
      <CharacterCard v-for="character in store.charactersListData" :key="character.char_id"
      :character="character" />
    </div>

    <div v-else>
      <AppLoading/>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.sc-col{
  background-color: #212529;
  margin: 0 auto;
  height: 60px;
}

</style>