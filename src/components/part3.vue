<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import 'bulma/css/bulma.css'
import { usePackageStore, useDataStore, useLanguagesStore } from '../stores/counter'
import { CurrencyEnum, PackagesEnum } from '@/models/orderLine'
import { ExtraType } from '@/models/PackageDays'
// import { it } from 'node:test';
export default {
  data() {
    const store = usePackageStore()
    const Extra = useDataStore()
    const language = useLanguagesStore()
    return {
      store,
      Extra,
      rend: 0,
      PackagesEnum: PackagesEnum,
      language,
      interChoose: false,
      USA:true,
      FRANCE:false,
      CANADA: false
    }
  },
  props: ['divName'],
  methods: {
    chooseState(state:string){
      switch (state) {
        case 'usa':
          this.USA = true;
          this.FRANCE = false;
          this.CANADA = false;
          break;
          case 'france':
          this.USA = false;
          this.FRANCE = true;
          this.CANADA = false;
          break;
          case 'canada':
          this.USA = false;
          this.FRANCE = false;
          this.CANADA = true;
          break;
        default:
          break;
      }
    },
    pick(item: string, father: string) {
      var order = this.store.orders[this.store.currentOrderIndex]
   
      switch (father) {
        case 'Data':
          order.AddCodeSurfing = order.AddCodeSurfing == item ? '' : item
          break
        case 'exMinTIsr':
          order.EMinutesToisrael = order.EMinutesToisrael == item ? '' : item
          break
        case 'exMitoCountries':
          order.EMinutesTo23Countries = order.EMinutesTo23Countries == item ? '' : item
          break
        case 'TrCalls':
          order.TransferringCalls = order.TransferringCalls == item ? '' : item,
          this.interChoose = order.TransferringCalls == item ? true : false
          break
        case 'fxnumlife':
          order.FixedNumberForLife = order.FixedNumberForLife == item ? '' : item
          break

        default:
          break
      }
    }
  }
}
</script>

<template>
  <div v-if="store.upDown == divName || store.currentStep == divName">
    <div class="extra-title">
    <span class="extras-span">
      {{language.getTranslate("Extras")}}
    </span>
    <span class="comment">
      {{language.getTranslate("(Additions To The Package)")}}
    </span>
  </div>
    <div class="all-extras">
      <div v-for="(extr, index) in Extra.ExtraDAta" :key="index">
        <div v-if="Extra.getDaysByCode?.PackageType != 0 ? extr.OnlyEcoNew == false : {}">
          <p class="extra-group-name">{{ extr.TextEn }}:</p>
          <div class="extra-group">
            <button
              v-for="(item, index) in extr.OptionValues"
              :key="index"
              :class="
                (store.orders[store.currentOrderIndex].AddCodeSurfing === item.Code ||
                store.orders[store.currentOrderIndex].EMinutesTo23Countries === item.Code ||
                store.orders[store.currentOrderIndex].EMinutesToisrael === item.Code ||
                store.orders[store.currentOrderIndex].TransferringCalls === item.Code ||
                store.orders[store.currentOrderIndex].FixedNumberForLife === item.Code
                  ? 'choose-btn'
                  : 'extra-button')
              "
              name="gb"
              id="{{item.Code}}"
              @click="pick(item.Code, extr.Code)"> 
             <span>
              <span v-if="item.Quantity != 0">{{ item.Quantity }}</span>&nbsp;
              <span style="text-align: left"> {{ item.TextEn }}</span
              >
            </span>
              <span style="font-weight: bold; text-align: right">($ {{ item.USD }})</span>
            </button>
          </div>
        </div>
                   <div v-if="extr.TextEn == 'Call Forward' && interChoose" >
                              <div class="select-int">
                            <div class="warning">
                            <span>Please select a country: </span>
                          </div>
                          <div class="select-os-btns">
                            <button @click="chooseState('usa')" :class="'select-btn' + (USA ? ' choose-state' : '')">
                              <span v-if="USA">

<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 13L9.02642 15.8211C9.85374 16.483 11.0536 16.3848 11.7624 15.5973L19.5 7" stroke="url(#paint0_linear_4407_8764)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_4407_8764" x1="19.5" y1="6.99997" x2="6.19353" y2="7.11084" gradientUnits="userSpaceOnUse">
<stop stop-color="#2072F9"/>
<stop offset="1" stop-color="#0962F5"/>
</linearGradient>
</defs>
</svg>

</span>
                              USA</button>
                            <button @click="chooseState('france')" :class="'select-btn'+ (FRANCE ? ' choose-state' : '')">
                              <span v-if="FRANCE">

<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 13L9.02642 15.8211C9.85374 16.483 11.0536 16.3848 11.7624 15.5973L19.5 7" stroke="url(#paint0_linear_4407_8764)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_4407_8764" x1="19.5" y1="6.99997" x2="6.19353" y2="7.11084" gradientUnits="userSpaceOnUse">
<stop stop-color="#2072F9"/>
<stop offset="1" stop-color="#0962F5"/>
</linearGradient>
</defs>
</svg>

</span>
                              FRANCE</button>
                            <button @click="chooseState('canada')"  :class="'select-btn'+ (CANADA ? ' choose-state' : '')">
                              <span v-if="CANADA">

<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 13L9.02642 15.8211C9.85374 16.483 11.0536 16.3848 11.7624 15.5973L19.5 7" stroke="url(#paint0_linear_4407_8764)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_4407_8764" x1="19.5" y1="6.99997" x2="6.19353" y2="7.11084" gradientUnits="userSpaceOnUse">
<stop stop-color="#2072F9"/>
<stop offset="1" stop-color="#0962F5"/>
</linearGradient>
</defs>
</svg>

</span>
                              CANADA</button>

                          </div>
                        </div>
                      </div>


      </div>
    </div>
  </div>
</template>
<style>

.choose-state{
  background: #D9E7FF !important;
  color: #0962F5;
}
.select-os-btns{
  gap: 15px;
    display: flex;
}
.select-btn{
  border-radius: 6px;
    background: #FFFFFF;
    width: 100px;
    height: 35px;
    border: none;
}
.warning{
  padding: 1%;
  display: flex;
  gap: 10px;
}
.select-int{
  margin-top: 4%;
    height: 69px;
    border-radius: 12px 0px 0px 0px;
    opacity: 0px;
    background: #F2F7FF;
    align-content: center;
    padding: 2%;
    display: flex;
    align-items: center;
    border-radius: 14px;
    border-left: 4px solid #0962F5;
}
.comment{
  color: #535353;
    font-family: Modern Era;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
}
.extras-span{
  color: #535353;
    font-family: Modern Era;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
}
.extra-title{
  padding-bottom: 23px;
}
.extra-group-name{
  padding-bottom: 4px;
  color: var(--3, #8A8A8A);
font-family: Modern Era;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
}
.all-extras{
  display: flex;
    flex-direction: column;
    gap: 24px;
}
.extra-group{
  display: flex;
    gap: 14px;
}
.ex {
  height: 30px;
  padding: 5px;
}
.one {
  border: 1px solid var(--white, #fff);
  /* background: var(--unnamed, #535353) !important; */
  color: var(--white, var(--white, #fff));
  background: var(--Linear, linear-gradient(91deg, #E42F77 8.92%, #EF4A79 80.16%, #F85D7C 89.38%));

}
.choose-btn{
  /* background: var(--Linear, linear-gradient(91deg, #E42F77 8.92%, #EF4A79 80.16%, #F85D7C 89.38%)); */
  background: linear-gradient(100.28deg, #EEC167 28.89%, #E56E44 113.11%);
  width: 230px !important;
    height: 38px;
    border-radius: 12px;
    border-radius: 12px;
    border: none;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
}
.ffff{
  border: 1px solid;
border-image-source: linear-gradient(91.41deg, #E42F77 8.92%, #EF4A79 80.16%, #F85D7C 89.38%);
background-color: yellowgreen;
}
.extra-button{
    height: 38px;
    border-radius: 12px;
    border-radius: 12px;
    border: 1px solid var(--Linear, #EEC167);
background: var(--white, #FFF);
display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    width: 230px !important;
    font-size: 16px;
}
</style>
