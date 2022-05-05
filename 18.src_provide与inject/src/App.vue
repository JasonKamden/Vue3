<template>
  <div>
  <div class="app">
    <h3>我是App组件(祖)</h3>
    <child></child>
  </div>
  </div>
</template>

<script>
import child from "@/components/Child";
import {provide, reactive, toRefs} from "vue";

export default {
  name: 'App',
  components: {child},
  setup() {
    let car = reactive({name: "奔驰", price: "40W",});
    provide("car", car);
    return {...toRefs(car)};
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
