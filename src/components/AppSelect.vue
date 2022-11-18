<script>
import {store} from '../data/store'

export default {
  name: 'AppSelect',

  data(){
    return{
      store
    }
  }

}
</script>

<template>
<div class="container mt-5 mb-4">
  <select @change="$emit('startSelect')" v-model="store.CategoryToSelect" class="form-select" aria-label="Default select example">
  <option value="" selected>Select category</option>
  <option value="breaking bad">Breaking Bad</option>
  <option value="better call saul">Better Call Saul</option>
</select>
</div>
  
</template>

<style lang="scss" scoped>
.form-select{
  width: 160px;
}

</style>