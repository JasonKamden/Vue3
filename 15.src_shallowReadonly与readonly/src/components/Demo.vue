<template>

  <h4>当前sum为 :{{ sum }}</h4>
  <button @click="sum++">点我sum+1</button>

  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.j1.salary }}k</h2>
  <button @click="name +='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">长薪</button>
</template>
<script>
import {reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRef, toRefs} from "vue";

export default {
  name: 'Demo',

  setup() {
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        }
      }
    });

    person = readonly(person);
    person = shallowReadonly(person);
    return {
      sum,
      ...toRefs(person)

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
