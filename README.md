# Vue-3-Reactive-LocalStorage-
Add reactivity to LocalStorage in your Vue 3 Project 

```vue
<template>
  <button @click="handler">{{ls.number}}</button>
</template>

<script setup>
import {reactive} from "vue"

import useLocalStorage from "./components/useLocalStorage.js"
const ls = useLocalStorage('stg', reactive({number: 18}))

function handler(){
  ls.number++
}

</script>

<style>
</style>
```
