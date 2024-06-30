<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
//import createAccount from './components/createAccount.vue'
import routing from './components/routing.vue';
import { useDataStore, useLanguagesStore, userStore, opinionsStore,QuestionsAndAnswerStore} from './stores/counter';

const Data=useDataStore();

Data.getPackageDurtion;
Data.getExtraOption;
const lang=useLanguagesStore();
lang.getDictionary;

const user =userStore();
user.getUserLogedIn;

const opStore = opinionsStore();
opStore.getOpinions;

const QAAStore = QuestionsAndAnswerStore();
QAAStore.getQueAndAns;

</script>
<template> 
<div >
<routing/>
</div>
</template>
<style>
@font-face{
    font-family: "Modern Era";
    src: url("/fonts/74613e9d0612d09be09dd6de7c898d50.eot");
    src: url("/fonts/74613e9d0612d09be09dd6de7c898d50.eot?#iefix")format("embedded-opentype"),
        url("/fonts/74613e9d0612d09be09dd6de7c898d50.woff")format("woff"),
        url("/fonts/74613e9d0612d09be09dd6de7c898d50.woff2")format("woff2"),
        url("/fonts/74613e9d0612d09be09dd6de7c898d50.ttf")format("truetype"),
        url("/fonts/74613e9d0612d09be09dd6de7c898d50.svg#Modern Era")format("svg");
    font-weight:normal;
    font-style:normal;
    font-display:swap;
}

@font-face{
    font-family: "Modern Era";
    src: url("/fonts/Modern-Era-Bold.woff"); 
    font-weight:bold;
    font-style:normal;
    font-display:swap;
}
</style>