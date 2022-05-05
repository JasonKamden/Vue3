<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>

</template>

<script>

import {ref, customRef} from "vue";

export default {
  name: 'App',
  setup() {
    let timer;
    function myRef(value,delay) {
      console.log("myRef", value);
      return customRef((track, trigger) => {

        return {
          get() {
            console.log(`有人从myRef中读取数据${value}`);
            track();
            return value;
          },
          set(newValue) {
            clearInterval(timer);
            console.log(`有人修改myRef中数据${newValue}`);
            timer = setInterval(() => {
              value = newValue;
              trigger();
            }, delay);
          },
        };

      });


    }

    //let keyWord = ref("hello");
    let keyWord = myRef("hello");
    return {keyWord}
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
