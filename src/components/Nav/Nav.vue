<script setup>
</script>
<template>
     <nav class="nav">
          <ul class="nav-list">
               <li class="nav-item">Where in the world?</li>
               <li class="nav-item">
                    <button type="button">Dark mode</button>
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
</style>