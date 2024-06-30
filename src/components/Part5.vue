<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import 'bulma/css/bulma.css'
import { usePackageStore,useLanguagesStore } from '../stores/counter'

export default {
  data() {
    const store = usePackageStore();
    const Lang = useLanguagesStore();
    return {
      store,
      Lang
    }
  },
  props: ["divName"],
  methods: {
    changeToBlack(id: string, name: string) {
      var count = document.getElementsByName(name).length;
      console.log(count);
      
      document.getElementsByName(name).forEach(x => { if (x.classList.contains('selected')) document.getElementById(x.id)!.classList.remove('selected'); })
      document.getElementById(id)?.classList.add('selected');
    },
  }
}

</script>

<template>
  <div  v-if="store.upDown == divName || store.currentStep == divName" class="text-and-buttons">
    <div class="title">
      <div class="with-skip">
    <div class="check-comp">{{Lang.getTranslate("check Compatibility")}}</div>
    <div class="skip">{{Lang.getTranslate("skip")}}</div>
  </div>
    <div class="select-os">{{Lang.getTranslate("Please select the operating system of your device:")}}</div>
  </div>
    <div class="buttons-types">
      <button id="c1" name="selected" class="phone-type"
        @click="store.orders[store.currentOrderIndex].CodeBrandPhon='Iphone'; changeToBlack('c1', 'selected')">
        <label>{{Lang.getTranslate("Iphone")}}</label></button>
        <button id="c2" name="selected" class="phone-type"
        @click="store.orders[store.currentOrderIndex].CodeBrandPhon='Android'; changeToBlack('c2', 'selected')">
        <label>{{Lang.getTranslate("Android")}}</label></button>
      <!-- <button id="c1" name="check" class="is-rounded button column one cell" style="padding-block: inherit;"
        @click="store.orders[store.currentOrderIndex].CodeBrandPhon='apple - iphone'; changeToBlack('c1', 'check')">
        <label>apple - iphone</label></button>
      <button id="c2" name="check" class="column button is-rounded cell" style="padding-block: inherit;"
        @click="store.orders[store.currentOrderIndex].CodeBrandPhon='samsung'; changeToBlack('c2', 'check')">
        <label>samsung</label>
      </button>
      <button id="c3" name="check" class="column button is-rounded cell" style="padding-block: inherit;"
        @click="store.orders[store.currentOrderIndex].CodeBrandPhon = 'google pixel'; changeToBlack('c3', 'check')">
        <label >google pixel</label>
      </button>
      <button id="c4" name="check" class="column button is-rounded cell" style="padding-block: inherit;"
        @click="store.orders[store.currentOrderIndex].CodeBrandPhon = 'other'; changeToBlack('c4', 'check')">
        <label>other</label>
      </button> -->
    </div>
  </div>
</template>
<style>
.skip{
  color: #2D75EC;
    font-family: Modern Era;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    align-self: center;
}
.with-skip{
  display: flex;
    justify-content: space-between;
}
.text-and-buttons{
  display: flex;
    flex-direction: column;
    gap: 24px;
}
.title{
  display: flex;
    flex-direction: column;
    gap: 4px;
}
.buttons-types{
  display: flex;
    gap: 12px;
}
.check-comp{
  color: #535353;
    font-family: Modern Era;
    font-size: 23px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.select-os{
  color: var(--3, #8A8A8A);
    font-family: Modern Era;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.selected {
  /* border: 1px solid var(--white, #FFF);
  background: var(--unnamed, #535353) !important;
  color: var(--white, var(--white, #FFF)); */
  border-radius: 25px;
background: var(--Linear, linear-gradient(270deg, #2072F9 0%, #0962F5 94.53%));
display: inline-flex;
padding: 11px 16px;
justify-content: center;
align-items: center;
gap: 10px;
color: var(--white, #FFF);
}

.phone-type{
  border-radius: 25px;
    border: 1px solid var(--Linear, #2072F9);
    display: inline-flex;
    width: 95px;
    height: 46px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
    color: var(--535353, var(--, #535353));
font-family: Modern Era;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;

}

</style>