<script lang="ts">
 import { usePackageStore } from '../stores/counter'
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const store = usePackageStore();
        const open=true;
        return { store,open };
    },
   
    props:['field']
   
})

</script>
<template>
    <span v-if="store.currentStep<=field  && store.currentField!=field || store.currentField==field && store.upDown>0 " class='triangle' ></span> 
    <span v-if="store.currentStep>field && store.currentField!=field || store.currentField==field && store.upDown<0 " class='triangle2' ></span>   
</template>
<style>
.triangle {
   border-left: 2.5px solid rgb(123, 119, 119);
   border-bottom: 2.5px solid rgb(123, 119, 119);
   width: 8px;
   height:8px;
   transform:rotate(135deg);
   float: right;
}
.triangle2 {
   border-left: 2.5px solid rgb(123, 119, 119);
   border-bottom: 2.5px solid rgb(123, 119, 119);
   width: 8px;
   height:8px;
   transform:rotate(-45deg);
   float: right;
  }
</style>