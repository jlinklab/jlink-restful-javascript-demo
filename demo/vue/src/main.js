import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import JLSDK from 'jlink-sdk/dist/jlink-sdk'
import './jlink-sdk'

// 多次登录失败后，弹出消息窗口
window.jlkAlert = function() {
    // TODO
}

const app = createApp(App)

app.use(router)

app.mount('#app')
