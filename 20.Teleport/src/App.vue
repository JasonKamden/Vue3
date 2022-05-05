<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
    <child></child>
  </div>
</template>

<script>
import child from "@/components/Child";
import {provide, reactive, toRefs} from "vue";

export default {
  name: 'App',
  components: {child},

};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
