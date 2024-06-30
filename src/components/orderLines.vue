<script lang="ts">
import 'bulma/css/bulma.css'
import { usePackageStore, useLanguagesStore } from '../stores/counter'
import { PackagesEnum, orderLine } from '../models/orderLine'
import PersonalAreaPackage from './PersonalAreaPackage.vue';

export default {
  computed: {
    filteredOrderLines():orderLine[] {

      const currentDate = new Date();
      if (this.ordersType === 'current') {
        if (this.currentOrdersType === 'active') {
          return this.orderLines.filter(item => {
            const startDate = new Date(item.StartDate);
            const endDate = new Date();
            endDate.setDate(startDate.getDate() + item.CodeNumDays)
            return currentDate <= endDate && currentDate >= startDate;
          })
        }
        else {
          return this.orderLines.filter(item => {
            const startDate = new Date(item.StartDate);
            const endDate = new Date();
            endDate.setDate(startDate.getDate() + item.CodeNumDays)
            return currentDate <= endDate && currentDate < startDate;
          })
        }
      } else {
        return this.orderLines.filter(item => {
          const startDate = new Date(item.StartDate);
          const endDate = new Date();
          endDate.setDate(startDate.getDate() + item.CodeNumDays)
          return currentDate > endDate;
        });
      }
    }
  },
  data() {
    const store = usePackageStore();
    const Lang = useLanguagesStore();
    return {
      PackagesEnum: PackagesEnum,
      store,
      Lang,
      orderLines: Array<orderLine>(),
      showDetails: false,
      selectedOrderLine: null as orderLine | null,
      ordersType: 'current',
      currentOrdersType: 'active',
      curr: true,
      active: true
    }
  },
  async mounted() {

    const rawResponse = await fetch(this.Lang.baseURL + '/api/Order/GetUserLines', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include"

    })
    if (rawResponse.ok) {
      this.orderLines = await rawResponse.json();
      console.log(this.orderLines);
    } else {
      console.error('Error:', rawResponse.status);
    }


  },
  components: { PersonalAreaPackage },
  props: ['divName'],
  methods:{
    showDet( item:orderLine){
      this.selectedOrderLine = item;
      this.showDetails= true;
      this.store.addOnLineSelection= new orderLine(item.OrderLineDTOId,0,this.store.getRandomId(),1,new Date(),
                this.Lang.currentLang,this.Lang.currentCurrency,"","","","","","","")
    },
    showOrders() {
      this.showDetails = false;
    },
    showCurrentOrders() {
      this.ordersType = 'current';
      this.curr = true;
    },
    showArchivedESIMs() {
      this.ordersType = 'archived';
      this.curr = false;
    },
    showActiveOrders() {
      this.ordersType = 'current';
      this.currentOrdersType = 'active';
      this.active = true;
    },
    showFutureOrders() {
      this.ordersType = 'current';
      this.currentOrdersType = 'future';
      this.active = false;
    },
    // calc()
    // {
    //   this.orderLines = this.orderLines.filter(x=> x.StartDate >= )
    // }
  }
}
</script>

<template>
  <!-- <div>
        {{ orderLines }}
    </div> -->
    <div class="page-center">
  <div class="all-content-page">
    <div class="orders-title">
      <span @click="showCurrentOrders" :class="'orders' + (curr ? ' choose' : '')">current orders</span>
      <span @click="showArchivedESIMs" :class="'orders' + (!curr  ? ' choose' : '')">archived eSIMs</span>
    </div>
    <div class="current-orders-status">
      <span @click="showActiveOrders" :class="'orders-af' + (active ? ' act' : '')">active</span>
      <span @click="showFutureOrders" :class="'orders-af' + (!active ? ' act' : '')">Future</span>
    </div>
    <!-- {{item.OrderLineId}} -->
    <div class="all-lines" v-if="!showDetails">
     <template   v-if="filteredOrderLines && filteredOrderLines.length > 0">
      <div v-for="(item, index) in filteredOrderLines" :key="index" class="line"> <!-- in order lines calc()-->
        <div>
          <div><span style="font-size: 18px;">{{ PackagesEnum[item.Package] }}</span></div>
          <!-- {{ item.PackageType }} -->
        </div>
        <div class="data-info">
          <div class="text-icon">
            <img src="@\assets\Line\sim_icon.png">
            <span>ICCID</span>
          </div>
          <div><span>{{ item.SimNumber }}</span></div>
        </div>
        <div class="data-info">
          <div class="text-icon">
            <img src="@\assets\Line\phone_icon.png">
            <span>Nunber Phone</span>
          </div>
          <div><span>{{ item.IsraeliNumber }}</span></div>
        </div>
        <div class="data-info">
          <div class="text-icon">
            <img src="@\assets\Line\location_icon.png">
            <span>Destination</span>
          </div>
          <div><span>Israel</span></div>
        </div>
        <div class="data-info">
          <div class="text-icon">
            <img src="@\assets\Line\date_icon.png">
            <span>Dates</span>
          </div>
          <div><span>{{ new Date(item.StartDate).toLocaleDateString() }}</span></div>
        </div>
        <div class="data-info" v-if="parseInt(item.AddCodeSurfing) > 0">
          <div class="text-icon">
            <img src="@\assets\Line\surfing_icon.png">
            <span>Surfing</span>
          </div>
          <div><span>{{ item.AddCodeSurfing }}</span></div>
        </div>
        <div class="data-info" v-if="parseInt(item.EMinutesTo23Countries) > 0">
          <div class="text-icon">
            <img src="@\assets\Line\phone_icon.png">
            <span>EMinutesTo23Countries</span>
          </div>
          <div><span>{{ item.EMinutesTo23Countries }}</span></div>
        </div>
        <div class="data-info" v-if="parseInt(item.EMinutesToisrael) > 0">
          <div class="text-icon">
            <img src="@\assets\Line\phone_icon.png">
            <span>EMinutesToisrael</span>
          </div>
          <div><span>{{ item.EMinutesToisrael }}</span></div>
        </div>
        <div class="data-info" v-if="parseInt(item.FixedNumberForLife) == 0">
          <div class="text-icon">
            <img src="@\assets\Line\phone_icon.png">
            <span>FixedNumberForLife</span>
          </div>
        </div>
        <div class="data-info" v-if="parseInt(item.TransferringCalls) == 0">
          <div class="text-icon">
            <img src="@\assets\Line\phone_icon.png">
            <span>TransferringCalls</span>
          </div>
        </div>
        <div class="line-btns">
        <button class="topup-btn">top up</button>
        <button class="details-btn" @click="showDet(item)">Details</button>
      </div>
      </div>

    </template>
      <div v-else>
        There is no orders
      </div>

    </div>
    <div v-if="showDetails">
      <PersonalAreaPackage :selectedOrderLine="selectedOrderLine"></PersonalAreaPackage>
      <!-- <button @click="showOrders()" class="show-orders-btn">show orders</button> -->
    </div>
    <!-- <div class="footer">
      <img src="@\assets\Home\contact-information.png" class="contact">
      <div class="pay">
        <img src="@\assets\Home\pay.png">
      </div>
    </div> -->
    <div class="store" v-if="!selectedOrderLine">
      
      <div class="text-qts">
        <span style="font-size: 18px;">Would you like to buy a new esim?</span>
        <span style="font-size: 16px; align-content: center;">You can visit our store and choose one!</span>
      </div>
      <div>
        <button class="store-btn">Store</button>
      </div>
      
    </div>
  </div>
</div>
</template>
<style>
.text-icon{
  display: flex;
    gap: 5px;
}
.act{
  font-weight: bold;
}
.choose{
  text-decoration: underline;
}
.store-btn{
  width: 144px;
    height: 44px;
    border: none;
    border-radius: 12px;
    opacity: 0px;
    background: #FFFFFF;
}
.text-qts{
  display: flex;
    gap: 17px;
}
.store{
  background: linear-gradient(100.28deg, rgba(238, 193, 103, 0.15) 28.89%, rgba(174, 84, 123, 0.15) 113.11%);
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
    height: 72px;
    align-items: center;
}
.line-btns{
  display: flex;
    justify-content: space-between;
}
.page-center{
  width: 100vw;
    display: flex;
    justify-content: center;
    top: 13%;
    position: absolute;
}
.orders {
  cursor: pointer;
  font-size: 20px;
}
.orders-af {
  cursor: pointer;
  font-size: 16px;
}

.data-info {
  display: flex;
  justify-content: space-between;
}

.all-content-page {
  display: grid;
  gap: 25px;
  width: fit-content;
  width: 1100px;
}

.orders-title {
  gap: 90px;
  display: flex;
  font-size: 18px;
}

.current-orders-status {
  gap: 20px;
  display: flex;
  font-size: 16px;
}

.line {
  background: #ECF3FD;
  border-radius: 10px;
  padding: 15px;
  width: 355px;
  display: grid;
    gap: 20px;
}

.details-btn {
  background: linear-gradient(269.68deg, #2072F9 0%, #0962F5 94.53%);
  width: 145px;
    height: 40px;
    border-radius: 8px;
    border: none;
    color: white;
}

.topup-btn {
  width: 145px;
    height: 40px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #0962F5;
    color: #0962F5;
}

.all-lines {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer {
  margin-top: 170px;
  padding-bottom: 40px;
}

.contact {
  width: 100vw;
}

.pay {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.show-orders-btn {
  z-index: 1;
  position: absolute;
}</style>
