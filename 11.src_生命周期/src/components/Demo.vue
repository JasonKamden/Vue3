<template>
  <h1>当前求和为:{{ sum }}</h1>
  <button @click="sum++"> 点我加一</button>

</template>
<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
  name: 'Demo',

  setup() {
    let sum = ref(0);
    console.log("setup")
    onBeforeMount(() => {
      console.log("onBeforeMount")
    });

    onMounted(() => {
      console.log("onMounted")
    });


    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    });

    onUpdated(() => {
      console.log("onUpdated")
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
    });
    onUnmounted(() => {
      console.log("onUnmounted")
    });


    return {sum,};
  },
  //#region
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  unmounted() {
    console.log("unmounted")
  },
  //#endregion
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
