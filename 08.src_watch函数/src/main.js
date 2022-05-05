
//引入的不再是vue构造函数，引入的是名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue';

//创建应用实例对象-app（类似于vue2中的vm）

const app = createApp(App);
app.mount('#app');
