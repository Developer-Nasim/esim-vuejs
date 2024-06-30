
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
<br><br>
<div class="content;title is-5 " style="width:370px;font-size: 30px; font-weight: lighter;padding-bottom:20px">
  {{Lang.getTranslate("The packages pay off in the most conveninet and most useful way in israel")}}

</div>

<button class="button is-dark is-rounded" style="background-color: #646161; ">{{Lang.getTranslate("how it work")}} <figure class="image is-16x16">
  <img src="@/assets/logo1.png"/>
</figure> </button> 

<div class="columns" style="padding-top:160px">
  <div class="column is-narrow">
    <div class="box" style="width: 240px; height:450px;">
      <p class="title is-5">{{Lang.getTranslate("Eco (customizable)")}}</p>
      <p class="subtitle"><lable>{{Lang.getTranslate("form")}}-</lable></p>
    <h3 class="title is-1">$ 9.9</h3>
  <ul style="font-size:small;line-height:2.5">
  <p>√  7-45 {{Lang.getTranslate("Days")}}</p>
  <p>√  2 {{Lang.getTranslate("GB Surfing")}}</p>
  <p>√  60 {{Lang.getTranslate("Minutes")}}</p>
  <h4 style="font-weight:bold">{{Lang.getTranslate("Extras")}}</h4>
  <p>{{Lang.getTranslate("Up To 20 GB Surfing")}}</p>
  <p>Up To 120 Minutes Call</p>
  <p>International Call Forwarding</p>
 
  </ul >  <button class="button is-dark is-rounded" style="background-color: #646161;width:200px ">Continue</button>

    </div>
    
    </div>
      <div class="column is-narrow">
    <div class="box" style="width: 240px; height:450px;">
      <p class="title is-5">Medium</p>
      <div class="subtitle"><label>form-</label>
    <h3 class="title is-1">$ 34.9</h3>
  <ul style="font-size:small;line-height:2.5">
  <li>√  7-60 Days</li>
  <li>√  50 GB Surfing</li>
  <li>√  Unlimited Calls To Israel</li>
  <li>√ 180 Minutes And Massages</li>
  <li>To 20 Countries</li>
  </ul>

</div>
  <div style="height:40px"></div>
  <button class="button is-dark is-rounded" style="background-color: #646161; width:200px ">Continue </button>

    </div>
    </div>
      <div class="column is-narrow">
    <div class="box" style="width: 240px; height:450px;">
      <p class="title is-5">Business</p>
      <p class="subtitle"><lable>form-</lable></p>
    <h3 class="title is-1">$ 39.9</h3>
  <ul style="font-size:small;line-height:2.5">
  <p>√  7-60 Days</p>
  <p>√  100 GB Surfing</p>
  <p>√  Unlimited Calls</p>
  <p>√  Unlimited Massages</p>
  </ul>
  <br><br><br>
    <button class="button is-dark is-rounded" style="background-color: #646161; width:200px ">Continue </button>
    </div>

    </div>

  </div>

  

</template>