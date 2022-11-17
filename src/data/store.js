import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://www.breakingbadapi.com/api/characters',
  
  //array vuoto in cui salvare i dati di result
  charactersListData: []
})