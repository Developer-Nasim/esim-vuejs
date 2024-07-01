<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts">
import { defineComponent } from 'vue';
import { CurrencyEnum, PackagesEnum } from '@/models/orderLine';
import 'bulma/css/bulma.css';
import DxDateBox from 'devextreme-vue/date-box';
import CreateAccount from './createAccount.vue'; 

import Part1 from './part1.vue';
import Part2 from './part2.vue';
import Part3 from './part3.vue';
import Part4 from './part4.vue';
import Part5 from './Part5.vue';
import Triangle from './Triangle.vue';
import { useDataStore, useLanguagesStore, usePackageStore } from '../stores/counter'
import { PackageDays, Option, ExtraOptions, ExtraType } from '@/models/PackageDays';
//import 'vue3-date-time-picker';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

export default defineComponent({
  setup() {
    const index = 0;
    const i = "b1";
    const store = usePackageStore();
    const Data = useDataStore();
    const Lang = useLanguagesStore();
    // const {getDaysByCode} = storeToRefs(Data) ;
    const p = ref()
    return { index, i, store, Data, p, Lang };
  },
  data() {
    return {
      PackagesEnum: PackagesEnum,
      ExtraType: ExtraType,
      CurrencyEnum: CurrencyEnum,
      isOpen: '',
      currentStep: 0,
      addcart: false,
      rend: 0
    };
  },
  props: ['propName'],
  prop: [0],
  components: { 
      // CreateAccount,
      Part1,
      Part2,
      Part3,
      Part4,
      // Triangle,
      // Part5 
    },
  methods:{
    goToStage(num: number){
      this.store.currentStep = num;
      this.store.back = true;
    }
  }
  //components: { DatepickerMenu }
})

</script>
<template>
   <!-- <div v-if="store.showBackImage"  class="img-background">
    <img src="@\assets\DeviceCompatibilityCheck\package-background.png">
    
  </div>

  <div v-if="store.showBackImage" class="img-background-gray">
    <img src="@\assets\DeviceCompatibilityCheck\gray-backg.png" class="background-image">
</div> -->



<div class="days-wrap" id="days-wrap"> 
  <div class="all-content">
    <div>
      <nav class="breadcrumb has-dot-separator nav" aria-label="breadcrumbs">
        <ul style="color:#C1C1C1">
          <li @click="goToStage(1)"
            aria-current="page">
            <span v-bind:class="store.currentStep > 1 || store.back == true ? 'black-text' : store.currentStep == 1 ? 'black' : 'gray'" style="display: flex;">
              <img src="@\assets\v-black.png" v-if="store.currentStep > 1 || store.back == true" />
              {{Lang.getTranslate("Days")}}
            </span> 
          </li>
          <li @click="goToStage(2)">
            <span v-bind:class="store.currentStep > 2  || store.back == true ? 'black-text' : store.currentStep == 2 ? 'black' :'gray'"><img src="@\assets\v-black.png" v-if="store.getcurrentStep > 2 || store.back == true"/> {{Lang.getTranslate("Period")}}</span>
            
          </li>
          <li @click="goToStage(3)"><span v-bind:class="store.currentStep > 3 || store.back == true  ? 'black-text' : store.currentStep == 3 ? 'black' : 'gray'"><img src="@\assets\v-black.png" v-if="store.getcurrentStep > 3 || store.back == true" /> {{Lang.getTranslate("Extra")}}</span> 
          
          </li>
         
          <!-- <li><span v-bind:class="store.currentStep > 5 ? 'blue-text' : store.currentStep == 5 ? 'black' : 'gray'">Ordering Details</span> <img
              src="@\assets\v-pink.png" v-if="store.currentStep > 5" style="margin-top: -30px;" /> </li> -->
              <li><span v-bind:class="store.currentStep > 4 ? 'black-text' : store.currentStep == 4 ? 'black' : 'gray'"><img src="@\assets\v-black.png" v-if="store.currentStep > 4 || store.back == true"  /> {{Lang.getTranslate("Ordering Details Check")}}</span>
            
          </li>
              <!-- <li><span v-bind:class="store.currentStep > 6 ? 'blue-text' : store.currentStep == 6 ? 'black' : 'gray'">Device Compatibility
            Check</span>
            <img src="@\assets\v-pink.png" v-if="store.currentStep > 6 || store.back == true"  />
          </li> -->
          <li><span v-bind:class="store.currentStep > 7 ? 'black-text': store.currentStep == 7 ? 'black' : 'C1C1C1'"> <img src="@\assets\v-black.png" v-if="store.currentStep > 7 || store.back == true"  /> {{Lang.getTranslate("Pay")}} </span></li>
        </ul>
      </nav>
      <div class="show-choose-package">
        <div class="first-column">
          <Part1 divName="1"></Part1>
          <Part2 divName="2"></Part2>
          <Part3 divName="3"></Part3>
          <!-- <CreateAccount divName="2" /> -->
          <!-- <Part5 divName="6"></Part5> -->
          <button v-if="store.currentStep < 4" class="button continue" name="d33" id="cd"
          @click="rend++, store.currentSteps()"> {{Lang.getTranslate("Continue")}}
          </button>
        </div>
        <Part4 divName="4"></Part4>
        <!-- {{ store.orders[store.currentOrderIndex] }} -->
        <div v-if="store.currentStep < 4"> 
          <div class="pack">
              <div class="pack-title-div"><span class="pack-title">
                <img src="@\assets\Israel-flag.png" class="logo-img">
                {{PackagesEnum[Data.getDaysByCode?.PackageType || 0] }} israel</span>
              </div>

              <div class="all-without-total">
                  <div class="base-package">
                  <div class="each-row with-change-option">
                    <div>
                      <label>{{ Data.getDaysByCode?.Days }} {{Lang.getTranslate("Days")}}</label>
                      <!-- <label style="font-weight: 500;text-indent: 285px;"> Change </label> -->
                  </div>
                  <div class="blue-text" @click="goToStage(1)">
                    {{Lang.getTranslate("change")}}
                  </div>
                </div>
                  <div class="each-row"> {{ Data.getDaysByCode?.Settings.find(x => x.Type == ExtraType.Surfing)?.Quantity }} {{Lang.getTranslate("Gigabytes")}}</div>
                  <div class="each-row"> {{ Data.getDaysByCode?.Settings.find(x => x.Type == ExtraType.MinutesToIsrael)?.Quantity }} {{Lang.getTranslate("Minutes")}}</div>
                </div>
                <div class="end-section"></div>
                <div class="package-date">
                  <div class="with-change-option">
                    <div>
                  <dt class="each-row"> {{ store.orders[store.currentOrderIndex].StartDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }}</dt>
                </div>
                <div class="blue-text" @click="goToStage(2)">
                  {{Lang.getTranslate("change")}}
                </div>
                </div>
                  <div class="each-row">{{Lang.getTranslate("At")}} {{ new Date(store.orders[store.currentOrderIndex].StartDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) }} {{Lang.getTranslate("o'clock")}}</div>
                </div>
                <div class="end-section"></div>
                <div >
                  <!-- class="extras" -->
                  <div v-if="store.orders[store.currentOrderIndex].AddCodeSurfing!=''" >
                    <div class="with-change-option">
                    <div class="each-row">{{Lang.getTranslate("Extra Surfing")}} </div>
                    <div class="blue-text" @click="goToStage(3)">
                      {{Lang.getTranslate("change")}}
                </div>
              </div>
                    <div class="each-row"> {{ store.orders[store.currentOrderIndex].AddCodeSurfing }} $</div> 
                    <div class="end-section"></div>
                  </div>   
                  <div v-if="store.orders[store.currentOrderIndex].EMinutesToisrael!=''">
                    <div class="with-change-option">
                    <div class="each-row">{{Lang.getTranslate("Extra Minutes To Israel")}} </div> 
                    <div class="blue-text" @click="goToStage(3)">
                      {{Lang.getTranslate("change")}}
                </div>
                  </div>
                    <div class="each-row">{{ store.orders[store.currentOrderIndex].EMinutesToisrael }} $ </div>
                    <div class="end-section"></div>
                  </div>   
                  <div v-if="store.orders[store.currentOrderIndex].EMinutesTo23Countries!=''">
                    <div class="with-change-option">
                    <div class="each-row">{{Lang.getTranslate("Extra Minutes To 23 Countries")}}</div>
                    <div class="blue-text" @click="goToStage(3)">
                      {{Lang.getTranslate("change")}}
                </div>
                  </div>
                    <div class="each-row"> {{ store.orders[store.currentOrderIndex].EMinutesTo23Countries }} $</div>
                    <div class="end-section"></div>
                  </div>   
                  <div v-if="store.orders[store.currentOrderIndex].TransferringCalls!=''">
                    <div class="with-change-option">
                    <div class="each-row">{{Lang.getTranslate("Extra Transferring Calls")}} </div>
                    <div class="blue-text" @click="goToStage(3)">
                      {{Lang.getTranslate("change")}}
                </div>
                  </div>
                    <div class="each-row"> {{ store.orders[store.currentOrderIndex].TransferringCalls }} $</div>
                    <div class="end-section"></div>
                  </div>   
                  <div v-if="store.orders[store.currentOrderIndex].FixedNumberForLife!=''">
                    <div class="with-change-option">
                    <div class="each-row">{{Lang.getTranslate("Extra Fixed Number For Life")}} </div>
                    <div class="blue-text" @click="goToStage(3)">
                      {{Lang.getTranslate("change")}}
                </div>
                  </div>
                    <div class="each-row"> {{ store.orders[store.currentOrderIndex].FixedNumberForLife}} $</div>
                    <div class="end-section"></div>
                  </div>   
                </div>
              </div>

              <div class="end">
                  <div class="total">
                    <span>{{Lang.getTranslate("Total")}}</span>
                    <span>{{ Data.getDaysByCode?.Price }}
                    <span v-if="Lang.currentCurrency == CurrencyEnum.EUR">€</span>
                    <span v-if="Lang.currentCurrency == CurrencyEnum.USD">$</span>
                  </span>
                  </div>
                </div>
          </div>
            
            
          <div class="upgrade">
            <span>{{Lang.getTranslate("Upgrade")}} {{Lang.getTranslate("To")}} {{Lang.getTranslate("Medium")}}</span>
            <div class="upgrade-arrow">
              <span>{{Lang.getTranslate("For")}} $28</span>&nbsp;
              <span >
              <!-- <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8.90171C8 9.55574 7.74876 10.2098 7.2556 10.705L1.18872 16.7968C0.918871 17.0677 0.47223 17.0677 0.202384 16.7968C-0.0674615 16.5258 -0.0674615 16.0774 0.202384 15.8064L6.26926 9.71457C6.71591 9.2661 6.71591 8.53732 6.26926 8.08884L0.202384 1.99702C-0.0674621 1.72607 -0.0674621 1.27759 0.202384 1.00663C0.47223 0.735678 0.918871 0.735678 1.18872 1.00663L7.2556 7.09845C7.74876 7.59365 8 8.24768 8 8.90171Z" fill="#535353"/>
              </svg> -->
              </span>
            </div>
          </div>

        </div>

      </div> 
    </div>
  </div> 
  <div v-if="store.currentStep == 4" class="withbgshap" id="withbgshap"> 
    <img src="@\assets\part4\background.png" alt="">
  </div>
</div>
 
<div class="footer">
  <img src="@\assets\Home\contact-information.png" class="contact"> 
  <div class="pay">
  <img src="@\assets\Home\pay.png">
  </div>
</div>



</template>

<style>
.pink-text:hover {
  cursor: default;
  }
.all-without-total{
  padding-bottom: 40px;
}
/* .breadcrumb li > img {
    position: absolute;
    top: 0;
    left: 50%;
} */

.withbgshap {
    width: 100%;
    position: absolute;
    border-bottom: 250px solid #F4F4F4;
    bottom: 0;
    left: 0;
    z-index: -1;

}
.dnone .withbgshap{
  display:  none !important;
}
.withbgshap img {
    display: block;
}
.end{
  bottom: 10px;
    position: absolute;
    width: calc(100% - 54px);
}
.with-change-option{
  display: flex;
    justify-content: space-between;
}
 .each-row{
  padding-bottom: 10px;
 }
.package-date-od .each-row {
    padding-bottom: 0px;
    display: flex;
    align-items: center;
    line-height: 1;
    gap: 5px;
}
.end-section{
  width: 100%;
  height: 100%;
  border: 0.50px #E2E2E2 solid;
  margin-bottom: 10px;
}
.total{
  display: flex;
    justify-content: space-between;
}
.black{
  color: black;
}
.gray{
 color: "#C1C1C1"; 
}
.pink-text{
  background: var(--Linear, linear-gradient(91deg, #E42F77 8.92%, #EF4A79 80.16%, #F85D7C 89.38%));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
.blue-text{
  background: linear-gradient(269.68deg, #2072F9 0%, #0962F5 94.53%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
.footer{
  margin-top: 170px;
    padding-bottom: 40px;
}
.contact{
    width: 100vw;
}
.pay{
    width: 100vw;
    display: flex;
    justify-content: center;
}
.upgrade-arrow{
  display: flex;
}
.upgrade{
  border-radius: 12px;
    border: none;
    background: linear-gradient(100.28deg, #EEC167 28.89%, #E56E44 113.11%);
    margin-top: 25px;
    width: calc(100vw * 0.056 + 213px);
    height: 53px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
    color: white;
    font-family: Modern Era;
font-size: 18px;
font-weight: 400;
line-height: 18px;
text-align: left;

}
.pack-title{
    font-size: 23px;
    letter-spacing: 0em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.pack-title-div{
  text-align: center;
  padding-bottom: 40px;
}
.first-column{
  width: 693px;
}
.all-content{
  width: 1124px;
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.nav{
  display: flex;
    justify-content: center;
}
.show-choose-package{
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
}
.continue{
  border-radius: 16px;
  width: -webkit-fill-available;
  background: linear-gradient(269.68deg, #2072F9 0%, #0962F5 94.53%);
    margin-top: 24px;
    color: white !important;
}
.continue:hover{
color: white !important;
}
.ex {
  height: 30px;
  padding: 5px;
}

.myTitle {
  font-weight: 500;
}

.circle {
  border-radius: 30px;
  border: 2px solid var(--unnamed, #535353);
  width: 40px;
  height: 40px;
  position: absolute;
  margin-left: -20px;
  text-align: center;

}

.myb {
  box-shadow: none
}

.day {
  width: 600px;
  top: 239px;
  left: 418px;
  border-radius: 12px;
  border: 1px;
  border: 1px solid rgba(223, 223, 223, 1);
}

.one {
  border: 1px solid var(--white, #FFF);
  background: var(--unnamed, #535353) !important;
  color: var(--white, var(--white, #FFF));

}

.cell {
  width: 111px;
    height: 82px;
  border: 1px solid var(--unnamed, #535353);
  border-radius: 12px;
  background-color: #FFF;
}

.text {
  margin-left: 25px;
  font-family: Modern Era;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  width: 90%;
  padding: 20px;
}

.up {
  padding-left: 490px;
  width: 15px;
  height: 8px;
  position: fixed;
}

nav.breadcrumb.has-dot-separator.nav {
    margin-top: 80px;
    width: 100%;
    max-width: 100%;
    display: block;
}
.breadcrumb ul, .breadcrumb ol { 
    justify-content: space-between;
    position: relative;
    z-index: 2;
}
.breadcrumb ul::after, .breadcrumb ol::after{
  content: "";
  width: 100%;
  height: 1px;
  border: 1px dashed #C9C9C9;
  position: absolute;
  top: 75%;
  left: 0;
  z-index: -1;
  transform: translateY(-50%);
}
.breadcrumb li > span{
  background: #fff;
  padding: 0 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}
.breadcrumb li{
  width: 20%;
}
.breadcrumb li:last-child {
    text-align: right;
    justify-content: flex-end;
}
.pack {
  border-radius: 12px;
  border: 0.2px solid var(--3, #f1eded);
  width: calc(100vw * 0.056 + 213px);
  min-height: 402px;
    color: #535353;
    font-family: Modern Era;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 141.523%;
    text-transform: capitalize;
    padding: 21px 27px; 
    position: relative;
}

#clockContainer {
  position: relative;
  margin-left: auto;
  height: 200px;
  /*to make the height and width responsive*/
  width: 200px;
  background: url(https://media.geeksforgeeks.org/wp-content/uploads/20210302161254/imgonlinecomuaCompressToSizeOmNATjUMFKw-300x300.jpg) no-repeat;
  /*setting our background image*/
  background-size: 100%;
}

#hour,
#minute,
#second {
  position: absolute;
  background: rgb(11, 11, 11);
  border-radius: 10px;
  transform-origin: bottom;
}

#hour {
  width: 1.8%;
  height: 25%;
  top: 25%;
  left: 48.85%;
  opacity: 0.8;
}

#minute {
  width: 1.6%;
  height: 30%;
  top: 19%;
  left: 48.9%;
  opacity: 0.8;

}

#second {
  width: 1%;
  height: 40%;
  top: 9%;
  left: 49.25%;
  opacity: 0.8;
  background: rgb(246, 3, 3);

}

.black-text{
  color: black;
}


.img-background{
  position: absolute;
  top: -5%;    
  width: 100vw;
}
.img-background-gray{
  position: absolute;
  width: 100vw;
  top: 60%;
    height: 16.7%;
}

.img-background-gray {
    position: absolute;
    width: 100vw;
    top: 60%; /* Adjust as needed */
}

.background-image {
    height: calc(100vh - 60%);
}
</style>
