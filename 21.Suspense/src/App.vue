<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
    <Suspense>
     <template v-slot:default>
       <Child></Child>
     </template>
      <template v-slot:fallback>
        <h3>加载中。。。</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
//import child from "@/components/Child";
import {defineAsyncComponent} from "vue";

const Child = defineAsyncComponent(() => import("@/components/Child"));

export default {
  name: 'App',
  components: {Child},

};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
