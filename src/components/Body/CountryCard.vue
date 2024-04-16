<script setup>
     const props = defineProps({
          name: {
               common: String
          },
          population: Number,
          region: String,
          capital: String,
          flags: {
               svg: String
          }
     })
     const { name: {common: common}, population, region, capital, flags: { svg: svg} } = props;
</script>

<template>
     <div class="country-card">
          <div class="first-part">
               <img :src="svg" :alt="`flag of ${name}`" class="flag" width="230" height="150" loading="lazy">
          </div>
          <div class="second-part">
               <div class="title">
                    <h2 class="country-name">{{ common }}</h2>
               </div>
               <ul class="other-info">
                    <li>
                         <h3 class="info-title">Population:</h3> <p>{{ new Intl.NumberFormat().format(population) }}</p>
                    </li>
                    <li>
                         <h3 class="info-title">Region:</h3> <p>{{ region }}</p>
                    </li>
                    <li>
                         <h3 class="info-title">Capital:</h3> <p>{{ capital }}</p>
                    </li>
               </ul>
          </div>
     </div>
</template>


<style lang="scss" scoped>
     @import '../../sass/variables';
     .country-card{
          align-self: flex-start;
          border-radius: .5rem;
          background-color: $White;
          overflow: hidden;
          box-shadow: 0 0 .5rem .5rem rgba($color: #000000, $alpha: 0.025);

     }
     .first-part {

          img{
               overflow: hidden;
               object-fit: cover;
               object-position: center;
               width: 100%;
               height: 15rem;
          }
     }
     .second-part{
          padding: 3rem 2.5rem;
          .country-name{
               font-size: 1.6rem;
          }
          .other-info{
               li > *{
                    font-size: 1.4rem;
                    display: inline-block;
               }
          }
     }
</style>