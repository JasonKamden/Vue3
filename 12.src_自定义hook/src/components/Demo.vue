<template>
  <h1>当前求和为:{{ sum }}</h1>
  <button @click="sum++"> 点我加一</button>
  <br>
  <h2>当前点击鼠标的坐标为 x:{{ point.x }} y:{{ point.y }}</h2>

</template>
<script>
import {ref} from "vue";
import usePoint from "@/hooks/usePoint";

export default {
  name: 'Demo',

  setup() {
    let sum = ref(0);
    let point = usePoint()



    return {sum, point};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
