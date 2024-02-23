<script setup>
import { ref, toRefs } from 'vue';
  import Header from './components/Header/Header.vue';
  import DisplayCountry from './components/Body/DisplayCountry.vue';

  const regionSelected = ref("Filter by Region");
  
  const toggleRegions = (newSelection)=>{
      regionSelected = newSelection;
      console.log(newSelection)
  }
  // const { regionSelected: reactiveDataRef } = toRefs({ regionSelected });
</script>

<template>
  <Header :regionselected="regionSelected" @toggle-regions="toggleRegions"/>
  <DisplayCountry/>
</template>

<style scoped lang="scss">

</style>
