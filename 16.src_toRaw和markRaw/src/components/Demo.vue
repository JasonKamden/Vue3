<template>

  <h4>当前sum为 :{{ sum }}</h4>
  <button @click="sum++">点我sum+1</button>

  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.j1.salary }}k</h2>
  <h3>客车：{{ person.car }}</h3>
  <button @click="name +='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">长薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加车</button>
  <button @click="person.car.name+= '~'">换车名</button>
  <button @click="person.car.price++">换价格</button>

</template>
<script>
import {markRaw, reactive, ref, toRaw, toRefs} from "vue";

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
      },

    });

    function showRawPerson() {
      const p = toRaw(person);
      console.log(p)
    }

    function addCar() {
      let car = {name: "奔驰", price: 40};
      person.car = car;
      //person.car = markRaw(car);
    }


    return {
      sum,
      person,
      showRawPerson,
      addCar,
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
