<script setup lang="ts">
import 'bulma/css/bulma.css'
</script>
<template>
<div class="countries welogscren" style="width: 100%;display: flex;" ><div class="div1"><figure style="width:85%" >
  <img src="@/assets/pe.png"/></figure></div>
  <div class="div2" style="text-align:center;width:35%;font-family: Modern Era;">
  <br><br>
  <h1 class="title is-5" style="text-align:center;color: #901efc;
  letter-spacing: 20px;font:icon;margin-left: 22px;">WELCOME</h1>
  <p class="title is-1" style="text-align:center; font-weight:bold;">לאיזור אישי</p>
  <br>
<form class="box" style="width:450px; background-color: #e3e4e6;border-radius: 10px">
  <div class="field">
    <label class="label" style="font-weight: bold;text-align: center;">כמה פרטים ואפשר להיכנס</label>
    <div class="control">
      <input class="input" style="text-align:right;border-radius: 10px" placeholder=".תעודת זהות או ח.פ">
    </div>
  </div>

  <div class="field">
    <div class="control">
      <input class="input" style="text-align:right;border-radius: 10px" placeholder="טלפון נייד">
    </div>
  </div>
</form>  <button class="button is-rounded" style="width:150px;text-align:center;background-color: #901efc;color: white">כניסה</button>

</div>
</div>
</template>
<style>
  .countries.welogscren {
    justify-content: center;
    height: 90vh;
    align-items: center;
    padding: 50px;
    min-height: 700px;
}
.countries.welogscren form.box {
    width: 100% !important;
}
.countries.welogscren > div{
  width: 40%;
}
  .countries.welogscren  figure{
      width: 100%;
}
</style>