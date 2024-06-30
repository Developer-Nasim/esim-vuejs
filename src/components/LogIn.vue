
<script lang="ts">
import { useDataStore,useLanguagesStore, usePackageStore } from '../stores/counter'
import { userStore } from '../stores/counter'
export default {
  data() {
    const store = usePackageStore()
    const Data = useDataStore()
    const user = userStore()
    const Lang = useLanguagesStore();
    return {
      store,
      Data,
      user,
      email:"",
      Lang
    }
  },
  props: ['divName'],
  methods: {
    async login() {
       await this.user.loginUser(this.email);

    }
  }
}
</script>


<template>
<br><br><br>
<h1>{{Lang.getTranslate("LogIn")}}</h1>
<input type="text" v-model="email"/>
<button @click="login()">{{Lang.getTranslate("LogIn")}}</button>
</template>


