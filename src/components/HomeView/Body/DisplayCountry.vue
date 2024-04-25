<script setup>
     import CountryCard from './CountryCard.vue';
     const props = defineProps({
          regionSelected: String,
          searchResults: Object,
          dataRef: Array,
     })
    
</script>
          
<template>
     <section class="countries">
          <CountryCard v-for="countryDets in props.dataRef" :key="countryDets" :name="countryDets.name" :population="countryDets.population" :capital="Array.isArray(countryDets.capital) ? countryDets.capital[0] : countryDets.capital" :region="countryDets.region" :flags="countryDets.flags"/>
     </section>
</template>

<style lang="scss" scoped>
     @import '../../../sass/variables';
     .countries{
          margin-inline: $Parent-element-spacing;
          margin-bottom: 5rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          
          gap: 6rem;
          
          @media screen and (min-width: 850px) and (max-width: 1175px) {
               grid-template-columns: repeat(3, 1fr);
               
          }
          @media screen and (min-width: 600px) and (max-width: 850px) {
               grid-template-columns: repeat(2, 1fr);
               
          }
          @media screen and (max-width: 600px) {
               margin-inline: 6rem;
               grid-template-columns: 1fr;
               
          }
     }
</style>