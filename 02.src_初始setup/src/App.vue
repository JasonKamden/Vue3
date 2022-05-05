<template>
  <h1>我是App组件</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别:{{sex}}</h2>
  <button @click="sayHello">说话(vue3)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(vue2)</button>
  <br>
  <br>
  <button @click="test1">测试vue2配置中读取vue3中的数据和方法</button>
  <br>
  <button @click="test2">测试vue3配置中读取vue2中的数据和方法</button>


</template>

<script>
import {h} from "vue";

export default {
  name: 'App',
  data() {
    return {sex: "男"};
  },
  methods: {
    sayWelcome() {
      alert("上海理工大学");
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    },
  },
  setup() {
    let name = "张三";
    let age = 18;

    function sayHello() {
      alert(`我叫${name},我今年${age}岁`);
    }

    function test2() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayWelcome);
    }
    return {
      name,
      age,
      sayHello,
      test2,
    }
    //return () => h("h1", "JasonKamden");
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
