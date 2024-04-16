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
     @import '../../sass/variables';
     .countries{
          margin-inline: $Parent-element-spacing;
          margin-bottom: 5rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          
          gap: 6rem;
     }
</style>