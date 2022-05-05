<template>
  <h1>我是App组件</h1>
  <h2 v-show="person.name">姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <button @click="test"> 测试触发demo的hello事件</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: 'Demo',
  props: ["msg", "school"],
  emits: ["hello"],
  setup(props, context) {
    //console.log("-----setup---------", props)
    console.log("-----setup---------", context)
    //console.log("-----setup---------", context.attrs)
    //console.log("-----setup---------", context.emit);
    //console.log("-----setup---------", context.emit);
    console.log("-----setup---------", context.slots);

    let person = reactive({
      name: "张三",
      age: 18,
    });

    function test() {
      context.emit("hello", 6666);
    }

    return {
      person,
      test,

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
