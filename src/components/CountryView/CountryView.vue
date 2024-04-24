<script setup>
     import axios from "axios";
     import { onMounted, ref, watch } from "vue";
     import { useRoute } from "vue-router"
     const countryData = ref({})
     const firstHalfData = ref(null);
     const secondHalfData = ref(null);
     const imgArr = ref({})
     const {params} = useRoute();
     const {name} = params;

     const targetValue = "common";
     const currencyTV = "name";

     function searchNestedObject(obj, targetKey) {
          let values = [];

          for (const key in obj) {
               const value = obj[key];
               if (typeof value === 'object') {
                    values = values.concat(searchNestedObject(value, targetKey));
               } else if (key === targetKey) {
                    values.push(value);
               }
          }

          return values;
     }

     function produceValuesForNestedObjects(obj) {
          let values = [];

          for (const key in obj) {
               const value = obj[key];
               if (typeof value === 'object') {
                    values = values.concat(produceValuesForNestedObjects(value));
               } else{
                    values.push(value);
               }
          }

          return values;
     }
     onMounted(()=>{
          axios.get(`https://restcountries.com/v3.1/name/${name.toLowerCase()}`)
          .then(resp=> {
               countryData.value = resp.data;
               console.log(countryData.value[0])
               const {flags: {svg: img, alt: altName}, name: {nativeName: nativeNameObj}, population, region, subregion, capital, cca2, currencies, languages } = countryData.value[0];
               const result = searchNestedObject(nativeNameObj, targetValue);
               const currResult = searchNestedObject(currencies, currencyTV);
               const langResult = produceValuesForNestedObjects(languages)
               imgArr.value = {svg: img, alt: altName}
               firstHalfData.value = {nativeName: result, population: new Intl.NumberFormat().format(population), region: region, subregion: subregion, capital: capital};
               secondHalfData.value = {topLevelDomain: cca2, currencies: currResult, languages: langResult };
          })
          .catch(err=>console.log(err))
     })

     // Convert key from Objects to title name
     const convertToTitle = (key)=>{
          const keyArr = key.split("");
          const result = []
          result.push(keyArr[0].toUpperCase());
          const remainingKeyVals = keyArr.slice(1, keyArr.length);
          
          for(let i=0; i < remainingKeyVals.length; i++){
               if(remainingKeyVals[i] == remainingKeyVals[i].toUpperCase()){
                    const f = " ";
                    result.push(f)
               }
               result.push(remainingKeyVals[i]);
          }
          
          return result.join("");
     }

     const returnMultipleStingsInAnArray = (arr)=>{
          if(Array.isArray(arr)){
               const el = arr.toString().split(",").join(", ")
               return el
          }
          else{
               return arr
          }
     }
     console.log(typeof firstHalfData)
</script>

<template>
     <section class="country-view">
          <RouterLink to="/"><button type="button" aria-label="go back home" aria-description="go back to the homepage">Back</button></RouterLink>
          <section class="country-details">
               <div class="col l-col">
                    <img :src="imgArr.svg" :alt="imgArr.alt">
               </div>
               <div class="col r-col">
                    <h1>{{ firstHalfData && name }}</h1>
                    <ul class="prop-list">
                         <div class="first-pl-section">
                              <li class="prop-item" v-for="(item, key) in firstHalfData">
                                   <span>
                                        <h2>{{ convertToTitle(key) }}:</h2>
                                        <p>{{ returnMultipleStingsInAnArray(item) }}</p>
                                   </span>
                              </li>
                         </div>
                         <div class="second-pl-section">
                              <li class="prop-item" v-for="(item, key) in secondHalfData">
                                   <span>
                                        <h2>{{ convertToTitle(key) }}:</h2>
                                        <p>{{ returnMultipleStingsInAnArray(item) }}</p>
                                   </span>
                              </li>
                         </div>
                    </ul>
               </div>
          </section>
     </section>
</template>

<style lang="scss" scoped>
     @import '../../sass/shared.scss';
     @import '../../sass/variables.scss';


     .country-view{
          margin-bottom: 5rem;
          padding-inline: $Parent-element-spacing;
     }
     .country-view button{
          margin-block: 7rem;
          padding: .7rem 1.5rem;
          background-color: var(--White);
          border-radius: .4rem;
          box-shadow: 0 0 .4rem .25rem rgba($color: #000000, $alpha: 0.09);
     }
     h1{
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 700;
          margin-bottom: 3rem;
     }
     .col img{
          max-width: 50rem;
     }
     .country-details{
          @include flex(center, unset, 20rem);
     }
     .prop-list{
          @include flex(start, unset, clamp(2rem, 4vw, 8rem));
     }
     .prop-item span {
          & > *{
               display: inline-block;
          }
          p{
               padding-left: .5rem;
          }
     }

</style>