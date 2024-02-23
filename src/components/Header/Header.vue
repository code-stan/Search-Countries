<script setup>
     import { ref } from "vue";
     const props = defineProps({
          regionSelected: String
     })
     const { regionSelected } = props;
     const searchPrompt = ref("")
     const regions = ref(["All", "America", "Asia", "Europe", "Oceania"])
     const regionItem = ref("")


   
</script>
<template>
     <header class="header">
          <nav class="nav">
               <ul class="nav-list">
                    <li class="nav-item">Where in the world?</li>
                    <li class="nav-item">Dark mode</li>
               </ul>
          </nav>
          <div class="query-container">
               <div class="search-container">
                    <input type="search" placeholder="Search for a country..." :value="searchPrompt.value">
               </div>
               <div class="filter-container">
                    <button class="filtered-country">{{ regionSelected }}</button>
                    <ul class="other-options-list">
                         <li v-for="region in regions" @click="$emit('toggleRegions', region)" ref="regionItem">{{ region }}</li>
                    </ul>
               </div>
          </div>
     </header>
     
</template>

<style scoped lang="scss"> 
     @import '../../sass/variables';

     @mixin flex($align, $justify){
          display: flex;
          align-items: $align;
          justify-content: $justify;
          gap: 4rem;
     }
     .nav-list{
          padding: 2rem $Parent-element-spacing;
          @include flex(center, space-between);
          background-color: hsl(0, 0%, 100%);
          box-shadow: 0 .5rem .5rem rgba($color: #000000, $alpha: 0.025);
          
          .nav-item:first-child{
               font: {
                    weight: 800;
                    size: $fs-600;
               }
               
          }
          .nav-item:nth-child(2){
               font-size: $fs-400;
          }
     }
     .query-container{
          @include flex(start, space-between);
          padding: 4rem $Parent-element-spacing;

          input{
               background-color: $White;
               border: none;
               width: 35rem;
               padding: 1.5rem 3rem;
               border-radius: .4rem;
               box-shadow: 0 0 .5rem .5rem rgba($color: #000000, $alpha: 0.025);
          }
     }
     .filter-container{
          position: relative;
          font-weight: 500;

          &:hover .other-options-list{
               clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100% );
               transition: clip-path .25s ease-in-out;
          }
          button{
               @extend input;
               padding: 1.5rem 2rem;
               width: fit-content !important;
          }
          .other-options-list{
               padding: 1.5rem 2rem;
               border-radius: .4rem;
               width: 100%;
               background-color: $White;
               display: flex;
               flex-direction: column;
               gap: 1rem;
               position: absolute;
               top: calc(100% + .25rem);
               left: 0;
               clip-path: polygon(0 0%, 100% 0%, 100% 0%, 0% 0%);
               overflow: hidden;
               transition: clip-path .25s ease-in-out;


               li{
                    cursor: pointer;
               }
          }
    }
</style>