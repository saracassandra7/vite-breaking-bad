<script>
export default {
  name: 'CharacterCard',
  props: {
    character: Object,
  },
}
</script>

<template>
<div class="sc-container pt-5 pe-3 ps-3">
  <div class="sc-card text-center p-3">
  <img :src="character.img" :alt="character.name">
  <h6 class="text-white mt-3" >{{character.name}}</h6>
  <p class="mt-3 mb-0 fs-5">{{character.category}}</p>
  <p>{{character.status}}</p>
</div>
</div>
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.sc-container{
  width: calc(100% / 5);
  background-color: white;
  .sc-card{
    background-color: $main-color;
   img{
     max-width: 100%;
    }
    h6{
      text-transform: uppercase;
      font-weight: bold;
    }
    p{
      color: #686769;
    }
  }
}
</style>