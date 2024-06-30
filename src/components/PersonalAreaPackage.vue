
<script lang="ts">
import 'bulma/css/bulma.css'
import { usePackageStore , useLanguagesStore, useDataStore} from '../stores/counter'
import { orderLine } from '@/models/orderLine';

export default {
  data() {
    const store = usePackageStore();
    const Lang = useLanguagesStore();
    const Extra = useDataStore();
    return {
      Extra,
      store,
      Lang
    }
  },
  props: ['divName', 'selectedOrderLine'],
  methods:{
    pick(item: string, father: string) {
      var order = this.store.addOnLineSelection;
   
      switch (father) {
        case 'surfing':
          order.AddCodeSurfing = order.AddCodeSurfing == item ? '' : item
          break
        case 'exMinTIsr':
          order.EMinutesToisrael = order.EMinutesToisrael == item ? '' : item
          break
        case 'exMitoCountries':
          order.EMinutesTo23Countries = order.EMinutesTo23Countries == item ? '' : item
          break
        case 'TrCalls':
          order.TransferringCalls = order.TransferringCalls == item ? '' : item
          break
        case 'fxnumlife':
          order.FixedNumberForLife = order.FixedNumberForLife == item ? '' : item
          break

        default:
          break
      }
    }
    ,
   async SaveExtras(){
      alert("Save Extras");
      console.log("start!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      
console.log(this.store.addOnLineSelection);
console.log("end!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

     //const baseURL = 'https://localhost:44343';
       const baseURL = 'https://easy.datasyspro.com';
        const rawResponse = await fetch(baseURL + `/api/Order/AddExtraOptions`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.store.addOnLineSelection),
          credentials: "include"
        })
        console.log(rawResponse);
    }
  }
}
</script>

<template>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

  <div class="all-page-content">

    <div class="package-details">
    
      <img src="@\assets\PersonalAreaPackage\packageDetailsBackgNew.png" class="packDetBackground"/>
      <div>
      <div class="package-data">
   
        <div class="name-and-date">
          <span class="name">{{Lang.getTranslate("Eco")}}</span>
          <span class="date">{{ new Date(selectedOrderLine.StartDate).toLocaleDateString().replace(/\//g, '.') }} - {{
    new Date(
      new Date(selectedOrderLine.StartDate).getTime() +
        selectedOrderLine.CodeNumDays * 24 * 60 * 60 * 1000
    ).toLocaleDateString().replace(/\//g, '.')
  }}</span>
        </div>
        <div class="all-details">
        <div class="country">
          <img src="@\assets\PersonalAreaPackage\location-icon.png" class="icon" />
          <span class="text-content">{{Lang.getTranslate("israel")}}</span>
        </div>
        <div class="phone">
          <img src="@\assets\PersonalAreaPackage\phone-icon.png" class="icon" />
          <span class="text-content">{{selectedOrderLine.IsraeliNumber}} </span>
          <!-- {{selectedOrderLine.phone}} -->
        </div>
        <div class="cell-phone" v-if="selectedOrderLine.InternationalNum">
          <img src="@\assets\PersonalAreaPackage\cell-phone-icon.png" class="icon" />
          <span class="text-content">{{selectedOrderLine.InternationalNum}} </span>
        </div>
      </div>
    </div>
      <div class="activ-div">
          <button class="activ-btn"><span class="active-text">{{Lang.getTranslate("Active")}}</span></button>
        </div>
      <div class="package-type-background">
        <img src="@\assets\PersonalAreaPackage\package-esim.png" />
      </div>
    </div>

    
    </div>
    <div class="all-use">
      <div class="use">
        <div class="use-title">
          <div class="data-icon">
          <img src="@\assets\PersonalAreaPackage\data-icon.png">
        </div>
        <div>
          <span class="use-title-text" style="color: black;">{{Lang.getTranslate("Data")}}</span>
        </div>
        </div>
        <div class="w3-light-grey w3-round-xlarge max-percentage">
        <div class="w3-container w3-light-blue w3-round-xlarge percentage-of-realization" :style="{width: (100.0 * (selectedOrderLine?.LineMeters?.DataValue /1000000000 || 0) / (selectedOrderLine?.LineMeters?.DataInitialValue /1000000000 || 1)) + '%'}">
      </div>
    <div class="use-details">
      <div>
<strong>{{selectedOrderLine.LineMeters.DataValue / 1000000000}} {{Lang.getTranslate("GB")}}</strong>
      </div>
      <div>
       <span>{{Lang.getTranslate("Total")}} <strong>{{selectedOrderLine.LineMeters.DataInitialValue / 1000000000}} {{Lang.getTranslate("GB")}}</strong></span>
      </div>
    </div>
</div>
      </div>
      <div class="use">
        <div class="use-title">
          <div class="data-icon">
          <img src="@\assets\PersonalAreaPackage\phone-icon.png">
        </div>
        <div>
          <span class="use-title-text" style="color: black;">{{Lang.getTranslate("Local Calls")}}</span>
        </div>
        </div>
        <div class="w3-light-grey w3-round-xlarge max-percentage">
    <!-- <div class="w3-container w3-light-blue w3-round-xlarge percentage-of-realization" style="width:20% ;"> -->
      <div class="w3-container w3-light-blue w3-round-xlarge percentage-of-realization" :style="{width: (100.0 * (selectedOrderLine?.LineMeters?.CallNationalValue || 0) / (selectedOrderLine?.LineMeters?.CallNationalInitialValue || 1)) + '%'}">

    </div>
    <div class="use-details">
      <div>
<strong>{{selectedOrderLine?.LineMeters?.CallNationalValue / 60000000000}} {{Lang.getTranslate("Min")}}</strong>
      </div>
      <div>
       <span>{{Lang.getTranslate("Total")}} <strong>{{ selectedOrderLine?.LineMeters?.CallNationalInitialValue / 60000000000 }} {{Lang.getTranslate("Min")}}</strong></span>
      </div>
    </div>
</div>
      </div>
      <div class="use">
        <div class="use-title">
          <div class="data-icon">
          <img src="@\assets\PersonalAreaPackage\phone-icon.png">
        </div>
        <div>
          <span class="use-title-text" style="color: black;">{{Lang.getTranslate("Int’l Calls")}}</span>
        </div>
        </div>
        <div class="w3-light-grey w3-round-xlarge max-percentage">
          <div class="w3-container w3-light-blue w3-round-xlarge percentage-of-realization" :style="{width: (100.0 * (selectedOrderLine?.LineMeters?.CallIntlValue  || 0) / (selectedOrderLine?.LineMeters?.CallIntlInitialValue  || 1)) + '%'}">

  
    </div>
    <div class="use-details">
      <div>
<strong>{{ selectedOrderLine?.LineMeters?.CallIntlValue / 60000000000 }} {{Lang.getTranslate("GB")}}</strong>
      </div>
      <div>
       <span>{{Lang.getTranslate("Total")}}  <strong>{{ selectedOrderLine?.LineMeters?.CallIntlInitialValue / 60000000000 }} {{Lang.getTranslate("Min")}}</strong></span>
      </div>
    </div>
</div>
      </div>
    </div>
    <div class="buy-extra">
      <span class="by-extra-title">{{Lang.getTranslate("Buy Extra For The Package")}}</span>
      <div class="by-extra-types">
        <div class="use-title">
          <div class="data-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.72802 15.8488C7.49084 15.8488 7.25366 15.7725 7.06641 15.6092L3.27151 12.2992C2.9095 11.9834 2.9095 11.4608 3.27151 11.145C3.63352 10.8293 4.23272 10.8293 4.59473 11.145L8.38963 14.4551C8.75164 14.7708 8.75164 15.2935 8.38963 15.6092C8.21487 15.7725 7.97768 15.8488 7.72802 15.8488Z" fill="white"/>
          <path d="M7.7275 15.8482C7.21569 15.8482 6.79126 15.478 6.79126 15.0316V3.81662C6.79126 3.3702 7.21569 3 7.7275 3C8.23931 3 8.66374 3.3702 8.66374 3.81662V15.0425C8.66374 15.4889 8.2518 15.8482 7.7275 15.8482Z" fill="white"/>
          <path d="M16.0669 7.94349C15.8297 7.94349 15.5925 7.86727 15.4053 7.70395L11.6104 4.39391C11.2484 4.07815 11.2484 3.55551 11.6104 3.23975C11.9724 2.92399 12.5716 2.92399 12.9336 3.23975L16.7285 6.54979C17.0905 6.86555 17.0905 7.38819 16.7285 7.70395C16.5413 7.85639 16.3041 7.94349 16.0669 7.94349Z" fill="white"/>
          <path d="M12.2724 15.8482C11.7606 15.8482 11.3362 15.478 11.3362 15.0316V3.81662C11.3362 3.3702 11.7606 3 12.2724 3C12.7842 3 13.2087 3.3702 13.2087 3.81662V15.0425C13.2087 15.4889 12.7842 15.8482 12.2724 15.8482Z" fill="white"/>
          </svg>


        </div>
        <div>
          <span class="use-title-text">{{Lang.getTranslate("Data")}}</span>
        </div>
        </div>
        <div class="use-title">
          <div class="data-icon">
          <!-- <img src="@\assets\PersonalAreaPackage\phone-icon.png"> -->
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5417 18.9582C13.6001 18.9582 12.6084 18.7332 11.5834 18.2998C10.5834 17.8748 9.57508 17.2915 8.59175 16.5832C7.61675 15.8665 6.67508 15.0665 5.78341 14.1915C4.90008 13.2998 4.10008 12.3582 3.39175 11.3915C2.67508 10.3915 2.10008 9.3915 1.69175 8.42484C1.25841 7.3915 1.04175 6.3915 1.04175 5.44984C1.04175 4.79984 1.15841 4.18317 1.38341 3.60817C1.61675 3.0165 1.99175 2.4665 2.50008 1.9915C3.14175 1.35817 3.87508 1.0415 4.65842 1.0415C4.98342 1.0415 5.31675 1.1165 5.60008 1.24984C5.92508 1.39984 6.20008 1.62484 6.40008 1.92484L8.33342 4.64984C8.50842 4.8915 8.64175 5.12484 8.73341 5.35817C8.84175 5.60817 8.90008 5.85817 8.90008 6.09984C8.90008 6.4165 8.80841 6.72484 8.63341 7.0165C8.50841 7.2415 8.31675 7.48317 8.07508 7.72484L7.50842 8.3165C7.51675 8.3415 7.52508 8.35817 7.53341 8.37484C7.63342 8.54984 7.83341 8.84984 8.21675 9.29984C8.62508 9.7665 9.00842 10.1915 9.39175 10.5832C9.88342 11.0665 10.2917 11.4498 10.6751 11.7665C11.1501 12.1665 11.4584 12.3665 11.6417 12.4582L11.6251 12.4998L12.2334 11.8998C12.4917 11.6415 12.7417 11.4498 12.9834 11.3248C13.4417 11.0415 14.0251 10.9915 14.6084 11.2332C14.8251 11.3248 15.0584 11.4498 15.3084 11.6248L18.0751 13.5915C18.3834 13.7998 18.6084 14.0665 18.7417 14.3832C18.8667 14.6998 18.9251 14.9915 18.9251 15.2832C18.9251 15.6832 18.8334 16.0832 18.6584 16.4582C18.4834 16.8332 18.2667 17.1582 17.9917 17.4582C17.5167 17.9832 17.0001 18.3582 16.4001 18.5998C15.8251 18.8332 15.2001 18.9582 14.5417 18.9582ZM4.65842 2.2915C4.20008 2.2915 3.77508 2.4915 3.36675 2.8915C2.98341 3.24984 2.71675 3.6415 2.55008 4.0665C2.37508 4.49984 2.29175 4.95817 2.29175 5.44984C2.29175 6.22484 2.47508 7.0665 2.84175 7.93317C3.21675 8.8165 3.74175 9.73317 4.40841 10.6498C5.07508 11.5665 5.83342 12.4582 6.66675 13.2998C7.50008 14.1248 8.40008 14.8915 9.32508 15.5665C10.2251 16.2248 11.1501 16.7582 12.0667 17.1415C13.4917 17.7498 14.8251 17.8915 15.9251 17.4332C16.3501 17.2582 16.7251 16.9915 17.0667 16.6082C17.2584 16.3998 17.4084 16.1748 17.5334 15.9082C17.6334 15.6998 17.6834 15.4832 17.6834 15.2665C17.6834 15.1332 17.6584 14.9998 17.5917 14.8498C17.5667 14.7998 17.5167 14.7082 17.3584 14.5998L14.5917 12.6332C14.4251 12.5165 14.2751 12.4332 14.1334 12.3748C13.9501 12.2998 13.8751 12.2248 13.5917 12.3998C13.4251 12.4832 13.2751 12.6082 13.1084 12.7748L12.4751 13.3998C12.1501 13.7165 11.6501 13.7915 11.2667 13.6498L11.0417 13.5498C10.7001 13.3665 10.3001 13.0832 9.85841 12.7082C9.45842 12.3665 9.02508 11.9665 8.50008 11.4498C8.09175 11.0332 7.68341 10.5915 7.25842 10.0998C6.86675 9.6415 6.58342 9.24984 6.40841 8.92484L6.30841 8.67484C6.25842 8.48317 6.24175 8.37484 6.24175 8.25817C6.24175 7.95817 6.35008 7.6915 6.55841 7.48317L7.18341 6.83317C7.35008 6.6665 7.47508 6.50817 7.55841 6.3665C7.62508 6.25817 7.65008 6.1665 7.65008 6.08317C7.65008 6.0165 7.62508 5.9165 7.58342 5.8165C7.52508 5.68317 7.43341 5.53317 7.31675 5.37484L5.38341 2.6415C5.30008 2.52484 5.20008 2.4415 5.07508 2.38317C4.94175 2.32484 4.80008 2.2915 4.65842 2.2915ZM11.6251 12.5082L11.4917 13.0748L11.7167 12.4915C11.6751 12.4832 11.6417 12.4915 11.6251 12.5082Z" fill="white"/>
</svg>

        </div>
        <div>
          <span class="use-title-text">{{Lang.getTranslate("Local Calls")}}</span>
        </div>
        </div>
        <div class="use-title">
          <div class="data-icon">
          <!-- <img src="@\assets\PersonalAreaPackage\phone-icon.png"> -->
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5417 18.9582C13.6001 18.9582 12.6084 18.7332 11.5834 18.2998C10.5834 17.8748 9.57508 17.2915 8.59175 16.5832C7.61675 15.8665 6.67508 15.0665 5.78341 14.1915C4.90008 13.2998 4.10008 12.3582 3.39175 11.3915C2.67508 10.3915 2.10008 9.3915 1.69175 8.42484C1.25841 7.3915 1.04175 6.3915 1.04175 5.44984C1.04175 4.79984 1.15841 4.18317 1.38341 3.60817C1.61675 3.0165 1.99175 2.4665 2.50008 1.9915C3.14175 1.35817 3.87508 1.0415 4.65842 1.0415C4.98342 1.0415 5.31675 1.1165 5.60008 1.24984C5.92508 1.39984 6.20008 1.62484 6.40008 1.92484L8.33342 4.64984C8.50842 4.8915 8.64175 5.12484 8.73341 5.35817C8.84175 5.60817 8.90008 5.85817 8.90008 6.09984C8.90008 6.4165 8.80841 6.72484 8.63341 7.0165C8.50841 7.2415 8.31675 7.48317 8.07508 7.72484L7.50842 8.3165C7.51675 8.3415 7.52508 8.35817 7.53341 8.37484C7.63342 8.54984 7.83341 8.84984 8.21675 9.29984C8.62508 9.7665 9.00842 10.1915 9.39175 10.5832C9.88342 11.0665 10.2917 11.4498 10.6751 11.7665C11.1501 12.1665 11.4584 12.3665 11.6417 12.4582L11.6251 12.4998L12.2334 11.8998C12.4917 11.6415 12.7417 11.4498 12.9834 11.3248C13.4417 11.0415 14.0251 10.9915 14.6084 11.2332C14.8251 11.3248 15.0584 11.4498 15.3084 11.6248L18.0751 13.5915C18.3834 13.7998 18.6084 14.0665 18.7417 14.3832C18.8667 14.6998 18.9251 14.9915 18.9251 15.2832C18.9251 15.6832 18.8334 16.0832 18.6584 16.4582C18.4834 16.8332 18.2667 17.1582 17.9917 17.4582C17.5167 17.9832 17.0001 18.3582 16.4001 18.5998C15.8251 18.8332 15.2001 18.9582 14.5417 18.9582ZM4.65842 2.2915C4.20008 2.2915 3.77508 2.4915 3.36675 2.8915C2.98341 3.24984 2.71675 3.6415 2.55008 4.0665C2.37508 4.49984 2.29175 4.95817 2.29175 5.44984C2.29175 6.22484 2.47508 7.0665 2.84175 7.93317C3.21675 8.8165 3.74175 9.73317 4.40841 10.6498C5.07508 11.5665 5.83342 12.4582 6.66675 13.2998C7.50008 14.1248 8.40008 14.8915 9.32508 15.5665C10.2251 16.2248 11.1501 16.7582 12.0667 17.1415C13.4917 17.7498 14.8251 17.8915 15.9251 17.4332C16.3501 17.2582 16.7251 16.9915 17.0667 16.6082C17.2584 16.3998 17.4084 16.1748 17.5334 15.9082C17.6334 15.6998 17.6834 15.4832 17.6834 15.2665C17.6834 15.1332 17.6584 14.9998 17.5917 14.8498C17.5667 14.7998 17.5167 14.7082 17.3584 14.5998L14.5917 12.6332C14.4251 12.5165 14.2751 12.4332 14.1334 12.3748C13.9501 12.2998 13.8751 12.2248 13.5917 12.3998C13.4251 12.4832 13.2751 12.6082 13.1084 12.7748L12.4751 13.3998C12.1501 13.7165 11.6501 13.7915 11.2667 13.6498L11.0417 13.5498C10.7001 13.3665 10.3001 13.0832 9.85841 12.7082C9.45842 12.3665 9.02508 11.9665 8.50008 11.4498C8.09175 11.0332 7.68341 10.5915 7.25842 10.0998C6.86675 9.6415 6.58342 9.24984 6.40841 8.92484L6.30841 8.67484C6.25842 8.48317 6.24175 8.37484 6.24175 8.25817C6.24175 7.95817 6.35008 7.6915 6.55841 7.48317L7.18341 6.83317C7.35008 6.6665 7.47508 6.50817 7.55841 6.3665C7.62508 6.25817 7.65008 6.1665 7.65008 6.08317C7.65008 6.0165 7.62508 5.9165 7.58342 5.8165C7.52508 5.68317 7.43341 5.53317 7.31675 5.37484L5.38341 2.6415C5.30008 2.52484 5.20008 2.4415 5.07508 2.38317C4.94175 2.32484 4.80008 2.2915 4.65842 2.2915ZM11.6251 12.5082L11.4917 13.0748L11.7167 12.4915C11.6751 12.4832 11.6417 12.4915 11.6251 12.5082Z" fill="white"/>
</svg>

        </div>
        <div>
          <span class="use-title-text">{{Lang.getTranslate("Int’l Calls")}}</span>
        </div>
        </div>
      </div>
      
      <div class="extras">
        <!-- class="extras" -->
      <div v-for="(extr, index) in Extra.ExtraDAta.filter(x=> (x.Code != 'TrCalls' && 'fxnumlife' != x.Code) )" :key="index">
      <!-- {{ extr }}   -->
      <div >
          <!-- v-if="Extra.getDaysByCode?.PackageType != 0 ? extr.OnlyEcoNew == false : {}" -->
          
          <div class="extras-group">
            
          <!-- <p class="extra-group-name">{{ extr.TextEn }}:</p> -->
            <button
              v-for="(item, index) in extr.OptionValues"
              :key="index"
              :class="
                (store.addOnLineSelection.AddCodeSurfing === item.Code ||
                store.addOnLineSelection.EMinutesTo23Countries === item.Code ||
                store.addOnLineSelection.EMinutesToisrael === item.Code ||
                store.addOnLineSelection.TransferringCalls === item.Code ||
                store.addOnLineSelection.FixedNumberForLife === item.Code
                  ? 'choose-btn1'
                  : 'extra-btn')
              "
              name="gb"
              id="{{item.Code}}"
              @click="pick(item.Code, extr.Code)"
              > 
              <span>
              <span v-if="item.Quantity != 0">{{ item.Quantity }}</span>&nbsp;
              <span style="text-align: left"> {{ item.TextEn }}</span>
            </span>
              <span style="font-weight: bold; text-align: right">+ $ {{ item.USD }} </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- <button @click="SaveExtras()">Save Extras</button> -->



    </div>


    <!-- more extras -->

    <div class="buy-extra" style="    height: 194px;">
      <span class="by-extra-title">{{Lang.getTranslate("more extras")}}</span>
      <div class="by-extra-types">
        <div class="use-title2">
          
        <div>
          <span class="use-title-text">{{Lang.getTranslate("Transferring calls:")}}</span>
        </div>
        <div>
          <span class="use-title-text">{{Lang.getTranslate("Fixed number for life:")}}</span>
        </div>
        </div>
        
        
        
      </div>
      
      <div class="extras2">
        <!-- class="extras" -->
      <div v-for="(extr, index) in Extra.ExtraDAta.filter(x=> (x.Code == 'TrCalls' ||   x.Code == 'fxnumlife') )" :key="index">
        <div >
          <!-- v-if="Extra.getDaysByCode?.PackageType != 0 ? extr.OnlyEcoNew == false : {}" -->
          
          <div class="extras-group">
            
          <!-- <p class="extra-group-name">{{ extr.TextEn }}:</p> -->
            <button
              v-for="(item, index) in extr.OptionValues"
              :key="index"
              :class="
                (store.addOnLineSelection.AddCodeSurfing === item.Code ||
                store.addOnLineSelection.EMinutesTo23Countries === item.Code ||
                store.addOnLineSelection.EMinutesToisrael === item.Code ||
                store.addOnLineSelection.TransferringCalls === item.Code ||
                store.addOnLineSelection.FixedNumberForLife === item.Code
                  ? 'choose-btn1'
                  : 'extra-btn')
              "
              name="gb"
              id="{{item.Code}}"
              @click="pick(item.Code, extr.Code)"
              > 
              <span v-if="item.Quantity != 0">{{ item.Quantity }}</span>
              <span style="text-align: left"> {{ item.TextEn }}</span
              ><label style="font-weight: bold; text-align: right">$ {{ item.USD }} </label>
            </button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- <button @click="SaveExtras()">Save Extras</button> -->



    </div>


  </div>
</template>
<style>
.all-details{
  display: grid;
    gap: 15px;
}
.by-extra-title{
  color: white;
    font-family: Modern Era;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
}
.by-extra-types{
  display: flex;
    justify-content: space-between;
}
.buy-extra{
height: 290px;
flex-shrink: 0;
border-radius: 24px;
background: #FFF;
margin-top: 36px;
padding: 26px 25px 0px 25px;
background: linear-gradient(100.28deg, rgba(238, 193, 103, 0.8) 28.89%, rgba(229, 110, 68, 0.8) 113.11%);

}
.use-details{
  display: flex;
    justify-content: space-between;
    padding-top: 15px;
    font-size: 16px;
}
.max-percentage{
  height: 22px;
  border-radius: 8px;
background: linear-gradient(270deg, rgba(45, 117, 236, 0.20) 0%, rgba(90, 152, 255, 0.20) 94.53%);
margin-top: 20px;
}
.percentage-of-realization{
  border-radius: 8px;
  background: linear-gradient(269.68deg, #2072F9 0%, #0962F5 94.53%);
height: 22px; 
}
.data-icon{
  display: grid;
    align-self: center;
}
.use-title-text{
  color: white;
    font-family: Modern Era;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    
}
.use-title{
  display: flex;
    gap: 5px;
    padding-top: 18px;
    align-items: center;
}
.use-title2{
  display: flex;
    gap: 183px;
    padding-top: 18px;
}
.all-use{
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
}
.use{
  width: 350px;
  height: 160px;
  flex-shrink: 0;
  border-radius: 16px;
background: #FFF;

/* Drop Shadow */
box-shadow: 0px 0px 6px 0px rgba(0, 34, 210, 0.15);
padding-left: 22px;
    padding-right: 22px;
}
.active-text{
  color: var(--white, #FFF);
text-align: right;
font-family: Modern Era;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: capitalize;
}
.activ-div{
  position: absolute;
    left: 0px;
    bottom: 0px;
}
.activ-btn{
  width: 123px;
    height: 49px;
    border-radius: 0px 24px;
    background: #0060FF66;
    border: none;
}
.packDetBackground{
  height: 100%;
}
.package-type-background{
  position: absolute;
    right: 0px;
    top: 28px;
}
.text-content {
  padding-left: 9px;
}
.name {
  color: #535353;
  text-align: right;
  font-family: Modern Era;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}
.date {
  color: #535353;
  font-family: Modern Era;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: center;
}
.package-data {
  position: absolute;
  top: 16px;
  padding-left: 24px;
  display: grid;
  gap: 9px;
}
.name-and-date {
  width: 257px;
  display: flex;
  justify-content: space-between;
}
.icon {
  /* padding-right: 9px; */
}
.country {
}
.phone {
}
.cell-phone {
}
.package-details {
  width: calc(100vw * 0.12 + 867px);
  position: relative;
}
@media only screen and (max-width: 768px) {
}
.all-page-content {
  display: grid;
  justify-content: center;
  top: 155px;
    position: relative;
}
.package-type {
}
.extra-btn{
  width: 300px;
    height: 38px;
    border-radius: 12px;
    border-radius: 12px;
    border: none;
    background: var(--white, #FFF);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 25px;
    padding-left: 25px;
}
.choose-btn1{
    background: linear-gradient(100.28deg, #EEC167 28.89%, #E56E44 113.11%);
    height: 38px;
    border-radius: 12px;
    border-radius: 12px;
    border: 1px solid white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 25px;
    padding-left: 25px;
}
.extras-group{
  display: grid;
    gap: 14px;
}
.extras{
  display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.extras2{
  display: flex;
    flex-direction: row;
    gap: 55px;
}
</style>
