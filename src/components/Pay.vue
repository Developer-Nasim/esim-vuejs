<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import 'bulma/css/bulma.css'
import { usePackageStore , useLanguagesStore} from '../stores/counter'

export default {
  data() {
    const store = usePackageStore()
    const Lang = useLanguagesStore();
    return {
      store,
      Lang
    }
  },
  props: ['divName']
}
</script>

<template>

    <div class="locate-form">
        <form>
            <div class="all-form-content">
                <div>
                    
                </div>
                <div class="choose-payment">
                    <span class="choose-span">{{Lang.getTranslate("Choose Payment Method")}}</span>
                    <span class="all-transaction">{{Lang.getTranslate("All Transaction Are Secure And Encreypted")}}</span>
                </div>
           <div class="credit-card">
        <div class="control personal-details">
            <div class="credit-carrd-img">
                <div>
                <span>{{Lang.getTranslate("Credit Card")}}</span>
            </div>
            <div>
                <img src="@\assets\Pay\visa-icon.png">
            </div>
            </div>
            <div>
            <input placeholder="card number" class="big-input input Rectangle389">
        </div>
        <div>
            <input placeholder="Name On Card" class="big-input input Rectangle389">
        </div>
        <div class="above-two-input control">
            <input placeholder="expiration date (mm/yy)" class="small-input input Rectangle389">
            <input placeholder="security code" class="small-input input Rectangle389">
        </div>
        </div>
        <div class="control with-check">
                <input type="checkbox">
                <span>{{Lang.getTranslate("I'd like to save my card securely.")}}</span>
            </div>
        </div>
        <div class="buy-now-div">
            <button class="buy-now-btn">{{Lang.getTranslate("Pay")}}</button>
        </div>
    </div>
        </form>
    </div>
</template>

<style>
.locate-form{
    position: relative;
    z-index: 300;
    margin-top: -373px;
    background-color: white;
    border-radius: 12px;
}
.credit-carrd-img{
    display: flex;
    justify-content: space-between;
}
.all-transaction{
    font-size: 14px;
    font-weight: 400;
}
.choose-span{
    font-size: 16px;
    font-weight: 500;
}
.credit-card{
    border-radius: 12px;
    border: 1px solid #EFEFEF;
    padding: 17px;
}
.choose-payment{
    display: grid;
    padding-left: 17px;
    padding-bottom: 12px;
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
}
.connect-ways{
    gap: 32px;
    display: flex;
    justify-content: center;
}
.connect-with-div{
    padding-top: 51px;
    padding-bottom: 25px;
}
.connect-with-span{
    font-size: 16px;
}
</style>