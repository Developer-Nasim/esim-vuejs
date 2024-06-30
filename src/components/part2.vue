<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import 'bulma/css/bulma.css'
import { useLanguagesStore,usePackageStore } from '../stores/counter'
import DxDateBox from 'devextreme-vue/date-box';
//import DateBoxBase from 'devextreme-vue/date-box.d'

export default {
  data() {
    const store = usePackageStore();
    const Lang = useLanguagesStore();
    return {
      store,
      Lang,
      selectedStartDate: new Date() // Initialize with the current date or any default date you prefer
    }
  },
  props: ["divName"],
  components: { DxDateBox },
  methods: {
    handleDateChange() {
      this.store.orders[this.store.currentOrderIndex].StartDate = this.selectedStartDate;
    }
  }
}

</script>

<template>
    <div v-if="store.upDown == divName || store.currentStep == divName">
      <div>{{Lang.getTranslate("Choose A Period And Time (Release Date)")}}</div>
      <div class="date-box">
        <DxDateBox v-model="selectedStartDate" :value="selectedStartDate" :input-attr="{ 'aria-label': 'DateRange And Time' }" type="datetime"
        :opened="true" :range="true" @value-changed="handleDateChange"/>
         
    </div>
  </div>
</template>

<style>
.date-box{
  margin-top: 18px;
}
</style>