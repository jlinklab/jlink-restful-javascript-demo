import Vue from 'vue'
import App from './App'
// import JLSDK from 'jlink-sdk/dist/jlink-sdk'
import './jlink-sdk'

// 多次登录失败后，弹出消息窗口
window.jlkAlert = function() {
    // TODO
}

Vue.config.productionTip = false

App.mpType = 'app'

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});

const app = new Vue({
  ...App
})
app.$mount()
