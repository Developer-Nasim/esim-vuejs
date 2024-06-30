<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import 'bulma/css/bulma.css'
import { usePackageStore,useLanguagesStore } from '../stores/counter'
import { userStore } from '../stores/counter'
import Pay from './Pay.vue';

export default {
  data() {
    const store = usePackageStore()
    const user = userStore()
    const Lang = useLanguagesStore();
    return {
      store,
      user,
      Lang,
      paymentPageLink : "",
      pay: false
    }
  },
  props: ['divName'],
  components: { Pay},
  methods: {
      async registerUserAndBuy(){
            let userID= await this.user.addNewUser();
            let orderLine= await this.store.sendOrderLine();
            this.paymentPageLink =  await this.store.getIFrameLink();
            this.pay = true;
            //go to payment
            //let orderID= await this.store.checkOutOrderLine();
      }
  }
}
</script>


<!-- firstName: "",
lastName: "",
email: "",
phone: "",
address: "",
password: "",
remenberMe: false,
aprovalForRegultion: false,
howDidYouHearAboutUs: "" -->
<template>
    <div class="locate-form">
        <form style="border-radius: 18px">
            <div class="all-form-content">
            <div class="connect-with-div">
            <span class="connect-with-span">{{Lang.getTranslate("connect with")}}</span>
        </div>
        <div class="connect-ways">
            <button type="button"><img src="@\assets\Pay\apple.png"></button>
            <button type="button"><img src="@\assets\Pay\google.png"></button>
            <button type="button"><img src="@\assets\Pay\facebook.png"></button> 
        </div>
        <div class="or">
            <span>{{Lang.getTranslate("or")}}</span>
        </div>
        <div class="control email-part">
            <div>
            <input type="text" placeholder="Email" class="big-input input Rectangle389" v-model="user.email">
        </div>
        <div class="with-check"> 
            <label class="checkbox" for="ckb0">
                <input type="checkbox" id="ckb0">
                <span class="checkmark"></span> 
            </label> 
            <span>{{Lang.getTranslate("Send me news and offers")}}</span>
        </div>
        </div>
        <div class="control personal-details">
            <span>{{Lang.getTranslate("billing address")}}</span>
            <div>
            <input placeholder="country/region" class="big-input input Rectangle389">
        </div>
        <div class="above-two-input control">
            <input placeholder="first name*" class="small-input input Rectangle389" v-model="user.firstName">
            <input placeholder="last name*" class="small-input input Rectangle389" v-model="user.lastName">
        </div>
        <div class="control">
            <input placeholder="address" class="big-input input Rectangle389" v-model="user.address">
        </div>
        </div>
        <div class="personal-details2">
            <div class="above-two-input control">
                <input placeholder="Postal Code" class="small-input input Rectangle389">
                <input placeholder="City" class="small-input input Rectangle389">
            </div>
            <div class="control">
                <input placeholder="Phone number*" class="big-input input Rectangle389" v-model="user.phone">
            </div>
        </div>
        <div class="remember">
            <div class="control with-check">
                    <label class="checkbox" for="ckb">
                        <input type="checkbox" id="ckb" v-model="user.remenberMe">
                        <span class="checkmark"></span> 
                    </label> 
                <span>{{Lang.getTranslate("remember me")}}</span>
            </div>
            <div class="control with-check">
                    <label class="checkbox" for="ckb2">
                        <input type="checkbox" id="ckb2" v-model="user.aprovalForRegultion">
                        <span class="checkmark"></span> 
                    </label> 
                <span>{{Lang.getTranslate("Approval of regulations")}}</span>
            </div>
        </div>
        <div class="buy-now-div">
            <button class="buy-now-btn"
                type="button"
            @click="registerUserAndBuy()">{{Lang.getTranslate("Pay")}}</button>
        </div>
    </div>
        </form>
    </div>

<iframe v-if="paymentPageLink != ''" :src="paymentPageLink" width="100%" height="600px" frameborder="0"></iframe>


<!-- <template v-if="pay">
    <Pay></Pay>
</template> -->
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

.all-form-content{
    padding-left: 29px;
    width: 575px;
}
.big-input{
    width: -webkit-fill-available;
}
.small-input{
    width: 49%;
}
.above-two-input{
    display: flex;
    justify-content: space-between;
}
.personal-details{
    padding-bottom: 45px;
    display: grid;
    gap: 13px;
}
.personal-details2{
    padding-bottom: 16px;
    display: grid;
    gap: 13px;
}
.email-part{
    padding-bottom: 40px;
    display: grid;
    gap: 10px;
}
.or{
    padding-bottom: 12px;
    padding-top: 18px;
    text-align: center;
}
.with-check{
    display: flex;
    gap: 9px;
}
.remember{
    padding-bottom: 16px;
}
.remember .control.with-check {
    margin-bottom: 8px;
}
.buy-now-div{
    padding-bottom: 30px;
}
.buy-now-btn{
    width: -webkit-fill-available;
    border-radius: 12px;
    background: linear-gradient(269.68deg, #2072F9 0%, #0962F5 94.53%);
    height: 40px;
    color: #FFF;
    font-family: Modern Era;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
}
.connect-ways{
    gap: 15px;
    display: flex;
    justify-content: center;
}
.connect-ways button {
    display: flex;
    align-items: center;
    border-radius: 12px;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
}
.connect-with-div{
    padding-top: 51px;
    padding-bottom: 25px;
}
.connect-with-span{
    font-size: 16px;
}
.all-form-content input {
    height: auto;
    padding: 10px;
}
.locate-form{
    position: relative;
    z-index: 300;
    margin-top: -373px;
    background-color: white;
    border-radius: 12px;
}
</style>