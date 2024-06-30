<script lang="ts">
import 'bulma/css/bulma.css'
import { useDataStore,useLanguagesStore, usePackageStore } from '../stores/counter'

export default {
  data() {
    const store = usePackageStore()
    const Data = useDataStore()
    const Lang = useLanguagesStore();
    return {
      store,
      Data,
      rend: 0,
      Lang
    }
  },
  props: ['divName'],
  methods: {
    changeToBlack(id: string, name: string) {
      document.getElementsByName(name).forEach((x) => {
        if (x.classList.contains('spec-days-btn'))
          document.getElementById(x.id)!.classList.remove('spec-days-btn')
      })
      document.getElementById(id)?.classList.add('spec-days-btn')
    }
  }
}
</script>

<template>
  <div
    :key="rend"
    v-if="store.upDown == divName || store.currentStep == divName"
    
  >
  <div>
  <!-- <span class="days-title"> {{Lang.getTranslate("Days")}} </span> -->
      <div class="packages">
        
        <!-- v-bind:class="{ 'one':  }" -->
        <button
          v-for="(butto, index) in Data.data.filter(
            (x) => x.PackageType == Data.getDaysByCode?.PackageType
          )"
          :key="index"
          id="{{button.Code}}"
          name="days"
          :class="
            'is-rounded days-btn ' +
            (store.orders[store.currentOrderIndex].CodeNumDays == butto.Code ? 'spec-days-btn' : '')
          "
          @click=";(store.orders[store.currentOrderIndex].CodeNumDays = butto.Code), rend++"
        >
        <div class="btn-pack-content">
          <span class="days-count"><strong >{{ butto.Days }}</strong> &nbsp;{{Lang.getTranslate("Days")}}</span>
          <span class="price-of-pack">{{ butto.Price }}$</span>
        </div>
        </button>
      </div>
  </div>
</div>
</template>
<style>
.strong-white{
  color: white;
}
.days-count{
font-size: 18px;
}
.price-of-pack{
font-size: 16px;
}
.btn-pack-content{
  display: grid;
}
.days-title{
  color: #535353;
    font-family: Modern Era;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
}
.packages{
  display: flex;
    justify-content: space-between;
    gap: 18px;
    /* margin-top: 32px; */
}
.card-content{
  /* width: calc(100vw * 0.12 + 867px); */
}
.spec-days-btn {
  /* background: linear-gradient(269.68deg, #2072f9 0%, #0962f5 94.53%),
    linear-gradient(0deg, #ffffff, #ffffff); */
  /* width: 100%;
  height: 10%; */
  border-radius: 25px;
  color: black;
  border-color: #EEC167 !important;
  background: linear-gradient(100.28deg, rgba(238, 193, 103, 0.08) 28.89%, rgba(174, 84, 123, 0.08) 113.11%);

}
.days-btn {
  text-align: left;
  width: 111px;
    height: 82px;
  border: 2px solid var(--unnamed, #535353);
  border-radius: 12px;
  background-color: #FFF;
}

</style>
