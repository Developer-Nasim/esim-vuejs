<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import 'bulma/css/bulma.css'
import { usePackageStore, useDataStore, useLanguagesStore, userStore } from '../stores/counter'
import { CurrencyEnum, PackagesEnum } from '@/models/orderLine'
import { ExtraType } from '@/models/PackageDays'
import Pay from './Pay.vue';
import NewUser from './NewUser.vue';

// import { it } from 'node:test';
export default {
  setup() {
    const index = 0
    const i = 'b1'
    const store = usePackageStore()
    const user = userStore()
    const Data = useDataStore()
    const Lang = useLanguagesStore()
    // const {getDaysByCode} = storeToRefs(Data) ;
    // const p = ref()
    return { index, i, store, Data, Lang , user}
  },
  data() {
    return {
      PackagesEnum: PackagesEnum,
      ExtraType: ExtraType,
      CurrencyEnum: CurrencyEnum,
      isOpen: '',
      currentStep: 0,
      addcart: false,
      rend: 0,
      paymentPageLink: "https://paymentsdev.payplus.co.il/4a689032-778d-46d7-98d1-eb44bc3020c3",
      chDev: true,
      approval: false,
      sure: false,
      needConfirm: true

    }
  },
  props: ['divName'],
  prop: [0],
 components: { Pay , NewUser},
  methods: {
    goToStage(num: number) {
      this.store.currentStep = num
      this.store.back = true
    },
    choose(idChoose: string,idUnChoose: string) {
      this.needConfirm = false;
      document.getElementById(idChoose)?.classList.remove('unchoose-btn');
      document.getElementById(idChoose)?.classList.add('choose-btn-buy');

      document.getElementById(idUnChoose)?.classList.remove('choose-btn-buy');
      document.getElementById(idUnChoose)?.classList.add('unchoose-btn');
      
      document.getElementById("days-wrap")?.classList.add('dnone');
      
    },
    ios(){
      this.chDev = true;
    },
    and(){
      this.chDev = false;
    }
  }
}
</script>

<template>
  
  <div v-if="store.upDown == divName || store.currentStep == divName" class="all-cont">
    <div class="order-details"></div>
    <template v-if="needConfirm">
    <div class="select-os">
      <div class="warning">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z" fill="url(#paint0_linear_3398_2705)"/>
      <circle cx="9" cy="9" r="9" fill="url(#paint1_linear_3398_2705)"/>
      <path d="M9 10.75C8.59 10.75 8.25 10.41 8.25 10V5C8.25 4.59 8.59 4.25 9 4.25C9.41 4.25 9.75 4.59 9.75 5V10C9.75 10.41 9.41 10.75 9 10.75Z" fill="white"/>
      <path d="M9 13.9999C8.87 13.9999 8.74 13.9699 8.62 13.9199C8.5 13.8699 8.39 13.7999 8.29 13.7099C8.2 13.6099 8.13 13.5099 8.08 13.3799C8.03 13.2599 8 13.1299 8 12.9999C8 12.8699 8.03 12.7399 8.08 12.6199C8.13 12.4999 8.2 12.3899 8.29 12.2899C8.39 12.1999 8.5 12.1299 8.62 12.0799C8.86 11.9799 9.14 11.9799 9.38 12.0799C9.5 12.1299 9.61 12.1999 9.71 12.2899C9.8 12.3899 9.87 12.4999 9.92 12.6199C9.97 12.7399 10 12.8699 10 12.9999C10 13.1299 9.97 13.2599 9.92 13.3799C9.87 13.5099 9.8 13.6099 9.71 13.7099C9.61 13.7999 9.5 13.8699 9.38 13.9199C9.26 13.9699 9.13 13.9999 9 13.9999Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear_3398_2705" x1="17.0625" y1="0.937444" x2="1.7357" y2="1.02191" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2072F9"/>
      <stop offset="1" stop-color="#0962F5"/>
      </linearGradient>
      <linearGradient id="paint1_linear_3398_2705" x1="18" y1="-6.23611e-05" x2="0.891016" y2="0.0942212" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2072F9"/>
      <stop offset="1" stop-color="#0962F5"/>
      </linearGradient>
      </defs>
      </svg>

      <span>{{Lang.getTranslate("Please select the operating system of your device:")}}</span>
    </div>
    <div class="select-os-btns">
      <button @click="ios()" :class="'select-btn' + (chDev ? ' choose-dev' : '')">
        <span v-if="chDev">

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
        IOS
      
      </button>
      <button @click="and()" :class="'select-btn' + (!chDev ? ' choose-dev' : '')">
        <span v-if="!chDev">

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
        Android
      
      </button>

    </div>
  </div>
</template>
<template v-else>
  <div style="margin-bottom: -30px;">
    <span>Secure Checkout</span>
  </div>
</template>

<div class="paDe">
  
    <div class="pack-det">
      <div class="package-type-background">
        <img style="    width: 540px;" src="@\assets\PersonalAreaPackage\package-esim.png" />
      </div>
 
      <div class="od-pack">
        <div class="pack-title-div-od">
          <span class="pack-title-od">{{ PackagesEnum[Data.getDaysByCode?.PackageType || 0] }}</span>
        </div>
        <div>
        <div class="all-details-data">
          <div class="package-date-od">
            <span class="each-row">
              <img src="@\assets\part4\calander-icon.png" />
              <span>{{
                store.orders[store.currentOrderIndex].StartDate.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })
              }}</span>
            </span>
            &nbsp;
            <span class="each-row">
              <img src="@\assets\part4\clock-icon.png" />
              <span
                >{{Lang.getTranslate("At")}}
                {{
                  new Date(store.orders[store.currentOrderIndex].StartDate).toLocaleTimeString(
                    'en-US',
                    { hour: 'numeric', minute: '2-digit' }
                  )
                }}
                {{Lang.getTranslate("o'clock")}}</span
              >
            </span>
          </div>
          <!-- <div class="end-section"></div> -->
          <div class="base-package">
            <div class="each-row with-change-option">
              <div>
                <label>{{ Data.getDaysByCode?.Days }} {{Lang.getTranslate("Days")}}</label>
                <!-- <label style="font-weight: 500;text-indent: 285px;"> Change </label> -->
              </div>
            </div>
            <div class="each-row">
              {{
                Data.getDaysByCode?.Settings.find((x) => x.Type == ExtraType.Surfing)?.Quantity
              }}
              {{Lang.getTranslate("Gigabytes")}}
            </div>
            <div class="each-row">
              {{
                Data.getDaysByCode?.Settings.find((x) => x.Type == ExtraType.MinutesToIsrael)
                  ?.Quantity
              }}
              {{Lang.getTranslate("Minutes")}}
            </div>
          </div>
          <div class="end-section"></div>

          <div> 
            <!-- class="extras" -->
            <div v-if="store.orders[store.currentOrderIndex].AddCodeSurfing != ''">
              <div class="with-change-option">
                <div class="each-row">{{Lang.getTranslate("Extra Surfing")}}</div>
              </div>
              <div class="each-row">
                {{ store.orders[store.currentOrderIndex].AddCodeSurfing }} $
              </div>
              <!-- <div class="end-section"></div> -->
            </div>
            <div v-if="store.orders[store.currentOrderIndex].EMinutesToisrael != ''">
              <div class="with-change-option">
                <div class="each-row">{{Lang.getTranslate("Extra Minutes To Israel")}}</div>
              </div>
              <div class="each-row">
                {{ store.orders[store.currentOrderIndex].EMinutesToisrael }} $
              </div>
              <!-- <div class="end-section"></div> -->
            </div>
            <div v-if="store.orders[store.currentOrderIndex].EMinutesTo23Countries != ''">
              <div class="with-change-option">
                <div class="each-row">{{Lang.getTranslate("Extra Minutes To 23 Countries")}}</div>
              </div>
              <div class="each-row">
                {{ store.orders[store.currentOrderIndex].EMinutesTo23Countries }} $
              </div>
              <!-- <div class="end-section"></div> -->
            </div>
            <div v-if="store.orders[store.currentOrderIndex].TransferringCalls != ''">
              <div class="with-change-option">
                <div class="each-row">{{Lang.getTranslate("Extra Transferring Calls")}}</div>
              </div>
              <div class="each-row">
                {{ store.orders[store.currentOrderIndex].TransferringCalls }} $
              </div>
              <!-- <div class="end-section"></div> -->
            </div>
            <div v-if="store.orders[store.currentOrderIndex].FixedNumberForLife != ''">
              <div class="with-change-option">
                <div class="each-row">{{Lang.getTranslate("Extra Fixed Number For Life")}}</div>
              </div>
              <div class="each-row">
                {{ store.orders[store.currentOrderIndex].FixedNumberForLife }} $
              </div>
              <!-- <div class="end-section"></div> -->
            </div>
          </div>
          <div class="end-section"></div>
        <div>
          <div class="od-total">
            <strong>{{Lang.getTranslate("Total")}}</strong>
            <strong
              >{{ Data.getDaysByCode?.Price }}
              <strong v-if="Lang.currentCurrency == CurrencyEnum.EUR">€</strong>
              <strong v-if="Lang.currentCurrency == CurrencyEnum.USD">$</strong>
            </strong>
          </div>
        </div>
        </div>
         
        </div>
      </div>
    
  
</div>

</div>

<template v-if="needConfirm">

  <div class="confirms">
    <div class="confirm">
        <label class="checkbox" for="ckb">
          <input type="checkbox" id="ckb"  v-model="approval">
          <span class="checkmark"></span> 
      </label>
    <!-- <input type="checkbox" v-model="approval"> -->
    <span class="confirm-text">{{Lang.getTranslate("Completing the order constitutes your approval of our ")}}<a class="move">{{Lang.getTranslate("terms and conditions")}}</a> {{Lang.getTranslate("and")}} <a class="move">{{Lang.getTranslate("privacy policy")}}</a>.</span>
  </div>
  <div class="confirm">
        <label class="checkbox" for="ckb2">
          <input type="checkbox" id="ckb2"  v-model="sure">
          <span class="checkmark"></span> 
      </label>
    <!-- <input type="checkbox" v-model="sure"> -->
    <span class="confirm-text">{{Lang.getTranslate("It is important to make sure that the device is compatible with eSIM cards and does not include a network lock.")}} <a class="move">{{Lang.getTranslate("Learn more")}}</a></span>
  </div>
  </div>

    <div class="btns-co">
    <div class="con-btns">
      <button @click="choose('buy','add')" id="buy" :class="'choose-btn-buy' + ((approval && sure) ? '' : ' dis-bg')" :disabled="!(approval && sure)" >{{Lang.getTranslate("Buy Now")}}</button>
      <!-- <button @click="choose('buy','add'), store.sendOrderLine()" id="buy" :class="'choose-btn-buy' + ((approval && sure) ? '' : ' dis-bg')" :disabled="!(approval && sure)" >{{Lang.getTranslate("Buy Now")}}</button> -->
      <!-- ,store.checkOutOrderLine() -->
      <button @click="choose('add','buy')" id="add" :class="'unchoose-btn' + ((approval && sure) ? '' : ' dis-bg')" :disabled="!(approval && sure)">{{Lang.getTranslate("Add Package")}}</button>
      <!-- <button @click="choose('add','buy'),store.sendOrderLine()" id="add" :class="'unchoose-btn' + ((approval && sure) ? '' : ' dis-bg')" :disabled="!(approval && sure)">{{Lang.getTranslate("Add Package")}}</button> -->
    </div>
  </div>
</template>
<template v-if="!needConfirm">
  <div style ="margin-top: 70px;">
  <span>Inpormation > Payment</span>
</div>
  <div class="blue-bg">
  </div>

    <br>
    <!-- <iframe :src="paymentPageLink" width="100%" height="600px" frameborder="0"></iframe> -->
    
    <!-- <br>
      <Pay></Pay>
      <br>
       -->
       <NewUser></NewUser>
       <!-- <Pay></Pay> -->
      </template>
    </div>

</template>
<style>


.checkbox {
    position: relative;
    display: flex;
    align-items: center; 
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
}

.checkbox input {
    position: absolute;
    width: 0;
    left: 50px;
    height: 0;
    opacity: 0;
    cursor: pointer;
}

.checkbox .checkmark {
    position: relative;
    display: block;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 3px;
    outline: 1px solid #acacac;
    transition: all 0.2s ease;
}

.checkbox:hover .checkmark {
    background: #f4f4f5;
    transition: all 0.2s ease;
}

.checkbox input:checked ~.checkmark {
    background: #2D2D2D;
    outline: 1px solid #2D2D2D;
}

.checkbox input[type="radio"] ~ .checkmark {
    border-radius: 50%;
}

.checkbox .checkmark::after {
    position: absolute;
    display: block;
    content: "";
    left: 50%;
    top: 41%;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
    transition: all 0.2s ease;
}

.checkbox input:checked~.checkmark::after {
    opacity: 1;
    transition: all 0.2s ease;
}



















.days-wrap{
  position: relative;
  z-index: 2;
}
.paDe{
  margin-top: 55px;
}
.all-content{
  /* background-color: #e42f77; */
}
.blue-bg{
  height: 390px;
    position: relative;
    /* top: 726px; */
    margin-left: calc((1124px - 100vw) / 2);
    margin-right: calc((1124px - 100vw) / 2);
    gap: 0px;
    opacity: 0px;
    background: #F2F7FF;
    margin-top: 15px;
}
.dis-bg{
  opacity: 40% !important;
  
}
.confirms{
  display: grid;
    gap: 25%;
    margin-top: 38px;
}
  /* .confirm input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #485fc7;
        padding: 0;
        margin-right: 10px;
        vertical-align: middle;
        border-radius: 6px;
    }

    .confirm input[type="checkbox"]:checked {
        background-color: #2072F9;
    } */

    /* Style the text beside the checkbox */
    .choose-dev{
      background: #D9E7FF !important;
      color: #0962F5;

    }
    .confirm .confirm-text {
        vertical-align: middle;
    }
.move{
  color: black !important;
    text-decoration: underline;
    
}
.move:hover{
  background: none;
}
.confirm-text{
  font-size: 16px;
    font-weight: 400;
    line-height: 22.64px;
}
.confirm{
  display: flex;
    gap: 1%;
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
    display: flex;
    place-items: center;
    justify-content: center;
}
.warning{
  padding: 1%;
  display: flex;
  gap: 10px;
}
.select-os{
  width: 1097px;
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
.pack-det{
  position: relative;
  width: 1124px;
    /* display: flex;
    justify-content: center; */
}
.btns-co{
  display: grid;
    justify-items: center;
    margin-bottom: 100px;

}
.con-btns{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 50px;
}
.choose-btn-buy{
    width: 49%;
    border: none;
    height: 45px;
    flex-shrink: 0;
    border-radius: 12px;
    background: linear-gradient(269.68deg, #2072F9 0%, #0962F5 94.53%);
    color: white;
    font-family: Modern Era;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
}
.unchoose-btn{
    width: 49%;
    height: 45px;
    flex-shrink: 0;
    border-radius: 12px;
    
    font-family: Modern Era;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    border-radius: 12px;
    border: 1px solid var(--Linear, #0962F5);
    background: linear-gradient(269.68deg, #2072F9 0%, #0962F5 94.53%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.all-cont{
 
}
.package-date-od {
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}
.pack-title-div-od{
    padding-top: 25px;
    padding-bottom: 12px;
}
.pack-title-od{
    text-align: right;
    font-family: Modern Era;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.od-total{
    display: flex;
    justify-content: space-between;
    padding-bottom: 23px;
}
.all-details-data{
    width: fit-content;
}
.od-pack {
    min-height: 330px;
    width: calc(100vw* 0.16 + 800px);
    border-radius: 12px;
    border: 0.2px solid var(--3, #f1eded);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    padding-left: 76px;
    border-radius: 12px;
    border: 0.2px solid #8a8a8a21;
    background: linear-gradient(100.28deg, rgba(238, 193, 103, 0.15) 28.89%, rgba(174, 84, 123, 0.15) 113.11%);
}
.order-details {
}
.comment {
  color: #535353;
  font-family: Modern Era;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}
.extras-span {
  color: #535353;
  font-family: Modern Era;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
}
.extra-title {
  padding-bottom: 23px;
}
.extra-group-name {
  padding-bottom: 4px;
  color: var(--3, #8a8a8a);
  font-family: Modern Era;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}
.all-extras {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.extra-group {
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
  background: var(--Linear, linear-gradient(91deg, #e42f77 8.92%, #ef4a79 80.16%, #f85d7c 89.38%));
}
.choose-btn {
  background: linear-gradient(100.28deg, rgba(238, 193, 103, 0.15) 28.89%, rgba(229, 110, 68, 0.15) 113.11%);  width: 149px;
  height: 38px;
  border-radius: 12px;
  border-radius: 12px;
  border: 1px solid var(--Linear, #EEC167);
    color: black;
}
.ffff {
  border: 1px solid;
  border-image-source: linear-gradient(91.41deg, #e42f77 8.92%, #ef4a79 80.16%, #f85d7c 89.38%);
  background-color: yellowgreen;
}
.extra-button {
  width: 149px;
  height: 38px;
  border-radius: 12px;
  border-radius: 12px;
  border: 1px solid var(--Linear, #EEC167);
  background: var(--white, #fff);
}
</style>
