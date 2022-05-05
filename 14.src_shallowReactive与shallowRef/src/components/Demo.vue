<template>

  <h4>当前x wei :{{ x.y }}</h4>
  <button @click="x.y++">点我x+1</button>

  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.j1.salary }}k</h2>
  <button @click="name +='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">长薪</button>
</template>
<script>
import {reactive, ref, shallowReactive, shallowRef, toRef, toRefs} from "vue";

export default {
  name: 'Demo',

  setup() {

    //let person = shallowReactive({
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        }
      }
    });

    let x = ref({
          y: 0
        }
    );

    return {
      x,
      person,
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
