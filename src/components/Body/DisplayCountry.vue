<script setup>
     import { onMounted, ref } from 'vue';
     import axios from 'axios';

     import CountryCard from './CountryCard.vue';

     const dataRef = ref("");
     onMounted(()=>{
          axios.get("data.json")
          .then((response)=> {
               dataRef.value = response.data
          }
          )
          .catch((err)=> console.log(err));
     })
</script>
          
<template>
     <section class="countries">
          <CountryCard v-for="countryDets in dataRef" :key="countryDets" :name="countryDets.name" :population="countryDets.population" :capital="countryDets.capital" :region="countryDets.region" :flags="countryDets.flags"/>
     </section>
</template>

<style lang="scss" scoped>
     @import '../../sass/variables';
     .countries{
          margin-inline: $Parent-element-spacing;
          display: flex;
          flex-wrap: wrap;
          column-gap: 1rem;
          row-gap: 4rem;
          gap: calc((100vw - ((23rem * 4) + 10%)) / 3.5);
     }
</style>