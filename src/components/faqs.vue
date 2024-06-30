
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
<h1>{{Lang.getTranslate("FAQs")}}</h1>
</template>