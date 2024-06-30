<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <DatePicker v-model="selectedDate" :format="dateFormat"></DatePicker>
  </div>
</template>

<script setup lang="ts">
//import Datepicker from 'vue3-date-time-picker';
//import 'vue3-date-time-picker'
//import DatePicker from '../../node_modules/vue-datepicker';

</script>

<script lang="ts">
export default {
  components: {
  //  DatePicker
  },
  data() {
    return {
      selectedDate: null,
      dateFormat: 'yyyy-MM-dd',
    };
  },
};
</script>