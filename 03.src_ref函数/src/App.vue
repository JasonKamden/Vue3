<template>
  <h1>我是App组件</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工作种类:{{ job.type }}</h2>
  <h2>工作薪水:{{ job.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'App',

  setup() {
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30K",

    })

    function changeInfo() {
      name.value = "李四";
      age.value = 48;
      job.value.type = " 全栈工程师";
      job.value.salary = "60K";
      console.log(name, age);
    }

    return {
      name,
      age,
      job,
      changeInfo,

    }
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
