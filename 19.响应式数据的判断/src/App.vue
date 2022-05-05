<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
  </div>
</template>

<script>
import {isProxy, isReactive, isReadonly, isRef, provide, reactive, readonly, ref, toRefs} from "vue";

export default {
  name: 'App',
  setup() {
    let car = reactive({name: "奔驰", price: "40W",});
    let sum = ref(0);
    let car2 = readonly(car);

    console.log(isRef(sum))
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car2));
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
