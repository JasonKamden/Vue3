<template>
  <h1>当前求和为:{{ sum }}</h1>
  <button @click="sum++"> 点我加一</button>
  <br>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪水：{{ person.job.j1.salary }}k</h2>
  <button @click="person.name +='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">长薪</button>
</template>

<script>
import {ref, watch, reactive} from "vue";

export default {
  name: 'Demo',
  //watch: {
  //  //sum(newValue, oldValue) {
  //  //  console.log("sum的值发生变化了", newValue, oldValue);
  //  //},
  //  sum: {
  //    deep: true,
  //    immediate: true,
  //    handle(newValue, oldValue) {
  //      console.log("sum的值发生变化了", newValue, oldValue);
  //    },
  //  }
  //},
  setup() {
    let sum = ref(0);
    let msg = ref("你好呀！");
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        }
      }
    });
    watch(sum, (newValue, oldValue) => {
      console.log("sum发生变化", newValue, oldValue)
    });

    watch(person, (newValue, oldValue) => {
      console.log("person发生变化", newValue, oldValue)
    },{deep: true});


    return {
      sum,
      msg,
      person
    };
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
