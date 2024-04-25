<script setup>
     import { ref, watch } from "vue";
     const emit = defineEmits(['querySearch']);
     
     // REFS
     const regions = ref(["All", "Americas", "Asia", "Europe", "Oceania"])
     const searchInput = ref("");

     // PROPS
     const props = defineProps({
          regionSelected: String,
     })

     // Debounce function
     const debounce = (func, timeout = 400)=>{
          let timer;
          return (...args) => {
               clearTimeout(timer);
               timer = setTimeout(() => { func.apply(this, args); }, timeout);
          };
     }

     // Watch for changes in the search query
     watch(searchInput, () => {
          debounce(emit('querySearch', searchInput.value.toLowerCase()))
     });
</script>
<template>
     <header class="header">
          <div class="query-container">
               <div class="search-container">
                    <input type="search" placeholder="Search for a country..." v-model="searchInput">
               </div>
               <div class="filter-container">
                    <button class="filtered-country">{{ props.regionSelected }}</button>
                    <ul class="other-options-list">
                         <li v-for="region in regions" @click="$emit('toggleRegions', region)" >{{ region }}</li>
                    </ul>
               </div>
          </div>
     </header>
     
</template>

<style scoped lang="scss"> 
     @import '../../../sass/variables';
     @import "../../../sass/shared";

     .query-container{
          @include flex(start, space-between);
          padding: 4rem $Parent-element-spacing;

          input{
               background-color: var(--White);
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
          width: 18rem;

          &:hover .other-options-list{
               clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100% );
               transition: clip-path .25s ease-in-out;
          }
          button{
               @extend input;
               padding: 1.5rem 2rem;
               width: 100% !important;
          }
          .other-options-list{
               padding: 1.5rem 2rem;
               border-radius: .4rem;
               width: 100%;
               background-color: var(--White);
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
    @media screen and (max-width: 600px){
          .query-container{
               justify-content: start;
               flex-direction: column;
               width: 100%;
               
               &, input, .search-container{
                    width: 100%;
               }
          }
    }
</style>