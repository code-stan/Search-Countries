<script setup>
     import { onBeforeMount, ref } from 'vue';
     const prop = defineProps({
          currentTheme: String
     })

     const themeName = ref("");
     themeName.value = prop.currentTheme;
     
     function toggleTheme(){
          const body = document.body;
          body.classList.toggle("active")
          
          if(body.classList.contains("active")) {
               localStorage.setItem("theme", "dark");
               themeName.value = "Light Mode"
          }
          else {
               localStorage.setItem("theme", "light");
               themeName.value = "Dark Mode"
          }
     }

</script>
<template>
     <nav class="nav">
          <ul class="nav-list">
               <li class="nav-item">Where in the world?</li>
               <li class="nav-item">
                    <button type="button" @click="toggleTheme" :aria-label="`change to ${themeName}`">{{ themeName }}</button>
               </li>
          </ul>
     </nav>

</template>

<style lang="scss" scoped>
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
          background-color: var(--White);
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
</style>