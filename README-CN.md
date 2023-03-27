# `【介绍】`
> * 在IoT产品开发过程中，前后端交互需要请求各种接口，如需要获取设备`Token`用于鉴权，需要登录设备才有权限操作设备，通过查询设备的能力集判断设备是否拥有某些功能，获取设备的状态等等；此外接口的来源也不同。基于逻辑通用性强以及统一开发习惯和书写规范，提升Iot产品开发速度与质量，特整理开发SDK。<br/>
> * sdk全称：`jlink-restful-sdk-js`<br/>
> * sdk简称：`jssdk`<br/>
> * 全局变量：`JLSDK`<br/>

# `【安装使用】`
## 文件引入
在index.html页面上引入JS文件即可开始使用（注意引入正确的文件路径,v1.x.x为版本号）
```js
<script src="jlink-restful-sdk-v1.x.x.js"></script>
```

# `【接口】`
## `JLSDK.init`
### 功能介绍
> 1. 进入H5后，需要初始化`JLSDK`。<br/>
>   初始化的目的是为了：<br/>
>   * 配置接口域名（可选）；<br/>
>   * 配置开放平台相关信息（必选）：`appSecret`、`movedCard`、`appKey`、`uuid`；<br/>
>   * 配置登录、语言、产品序列号等相关信息（必选）：`sn`、`lang`、`authorization`、`appKey`等。<br/>
> 2. 此接口返回`JLSDK`<br/>
> 3. 无回调<br/>

### 请求示例
```js
JLSDK.init({
    authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJycyIsImFwcEtleSI6ImNlNmUzOGQ5YzVkOTg5ZGUzNWUyMjRlMThkNjc4ZjNlIiwiZXhwIjoxNjgxNTQxNjY3LCJ0eXBlIjoiY29tIiwiYWNjb3VudCI6IjRmNTYxMmI0OTliMzQ1NmQ4NjJlZDc4ZjU2OTNjYjdkIn0.6WiTDUj3etOyzFJmn3SLm9sCfjF7v99sP1MB0NzyaPI.1',
    authorizationAppKey: 'ce6e38d9c5d989de35e224e18d678f3e',
    sn: '9ed1cfc3d9c79a9a8ahe',
    lang: 'en',
    appSecret:'90f8bc17be2a425db6068c749dee4f5d',
    movedCard:2,
    appKey:'0621ef206a1d4cafbe0c5545c3882ea8',
    uuid:'e0534f3240274897821a126be19b6d46'
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 默认值 |
| --- | --- | ---- | --- | --- |
| authorization | string | 可选 | 账号授权信息 | - |
| authorizationAppKey | string | 必须 | 账号授权appKey | - |
| sn | string | 可选 | 设备序列号| - |
| lang | string | 必须 | 语言 | - |
| appSecret | string | 必须 | appSecret | - |
| movedCard | string | 必须 | movedCard | - |
| appKey | string | 必须 | appKey | - |
| uuid | string | 必须 | uuid | - |
| BaseURLRDS | string | 可选 | ReSTFul服务器域名 | https://rds-viot.bcloud365.net |
| BaseURLUPGRADE | string | 可选 | 设备升级服务器域名 | https://upgrade.secu100.net |
| BaseURLCAPS | string | 可选 | 云存储服务器域名 | https://caps.secu100.net |
| BaseURLTKS | string | 可选 | 账户系统服务器域名 | https://tks.xmeye.net |

---

## `JLSDK.authorize`
### 功能介绍
> * 设备授权<br/>
> * 此接口返回`JLSDK`<br/>
> * 无回调<br/>

### 请求示例
```js
JLSDK.authorize(authorization);
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| authorization | String | 可选 | 授权信息 | - |

---

## `JLSDK.setDevice`
### 功能介绍
> * 设置设备相关信息<br/>
> * 此接口返回`JLSDK`<br/>
> * 无回调<br/>

### 请求示例
```js
let params = {
    u:"",
    p:"",
    adminToken:""
    restfulToken:''
}
JLSDK.setDevice(params);
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| u | String | 可选 | 设备登录名 | - |
| p | String | 可选 | 设备登录密码 | - |
| adminToken | String | 必须 | 设备登录Token | - |
| restfulToken | String | 必须 | 设备Token | - |

---

## `JLSDK.deviceLogin`
### 功能介绍
> * 设备登录，登录成功后方可获取设备配置，操作设备等；<br/>
> * 此方法集成进 `JLSDK.deviceLogin()` 中，在实际应用中不常单独使用；<br/>
> * 参数：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=e2cb4e733e33496384f3539f9497f4bb&lang=zh <br/>

### 请求示例
```js
JLSDK.deviceLogin(callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| callback | function | 必须 | - | - |

---

## `JLSDK.devcieKeepAlive`
### 功能介绍
> * 设备登录成功后保活，使设备长时间处于连接状态；设备1分钟无操作会断开连接，因此保活需要每隔20秒钟调用一次（1分钟内请求2~3次），防止因网络波动造成偶尔一次保活失败，导致设备断开连接。<br/>
> * 此方法集成进 `JLSDK.deviceLogin()` 中，在实际应用中不常单独使用；<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=fd36dc9c968a45a9b72fd3dce7c553f8&lang=zh

### 请求示例
```js
JLSDK.devcieKeepAlive(callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| callback | function | 必须 | - | - |

---

## `window.jlkAlert`
### 功能介绍
> 全局弹出信息窗口<br/>
> 连续登录失败后弹出的信息窗口<br/>
> 必须

### 示例
```js
window.jlkAlert = function() {
	// jlk.modal({
	// 	title: '标题',
	// 	content: '消息内容',
	// 	showCancel: false,
	// 	ok: () => {
	// 		// TODO
	// 	}
	// })
}
```

# ***不同服务的接口(除token)***
## `JLSDK.getLatestCache`
### 功能介绍
> * 根据设备序列号获取最后一次上报服务器的版本信息；<br/>
> * 返回状态:200表示有更新版本，204表示无更新版本；

### 请求示例
```js
JLSDK.getLatestCache()
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |

---

## `JLSDK.getReqCaps`
### 功能介绍
> * 获取云存储状态

### 请求示例
```js
JLSDK.getReqCaps()
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |

---

# ***RS用户系统***
## `JLSDK.scmail`
### 功能介绍
> * 发送邮件验证码<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=f243f5c79698478399a881b20a0bb6b4&lang=zh

### 请求示例
```js
JLSDK.scmail(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.scphone`
### 功能介绍
> * 发送短信验证码<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=b49bd0225ad14538a46831849d265d6e&lang=zh

### 请求示例
```js
JLSDK.scphone(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.usercheckMail`
### 功能介绍
> * 验证邮箱唯一性<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=e6443f3d61214f1584f3f7c327ddea92&lang=zh

### 请求示例
```js
JLSDK.usercheckMail(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.usercheckPhone`
### 功能介绍
> * 验证手机号唯一性<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=024c8d350f664b789797a25098d89dce&lang=zh

### 请求示例
```js
JLSDK.usercheckPhone(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.usercheck`
### 功能介绍
> * 验证用户名唯一性<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=3d741c2dd00449168e823e5e12a2b335&lang=zh

### 请求示例
```js
JLSDK.usercheck(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.userregPhone`
### 功能介绍
> * 手机用户注册<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=8a9e56e45c04499fa5e3d315ae7b4094&lang=zh

### 请求示例
```js
JLSDK.userregPhone(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.userregMail`
### 功能介绍
> * 邮件用户注册<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=090e8f8d87b84a31b28b42bce4772453&lang=zh

### 请求示例
```js
JLSDK.userregMail(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.login`
### 功能介绍
> * 账户登录<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=c544b02348bc46629801bacaaa9494d1&lang=zh

### 请求示例
```js
JLSDK.login(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.userinfo2`
### 功能介绍
> * 获取用户信息<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=0069a55ba6d5400ba5929ea3beaca072&lang=zh

### 请求示例
```js
JLSDK.userinfo2(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.fpphone`
### 功能介绍
> * 通过短信重置密码<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=b1a147f995614e1b9aafa4a9879caffc&lang=zh

### 请求示例
```js
JLSDK.fpphone(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.fpmail`
### 功能介绍
> * 通过邮箱重置密码<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=bddd822b7849472a84754fcb0f27e734&lang=zh

### 请求示例
```js
JLSDK.fpmail(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.mdadd`
### 功能介绍
> * 添加设备<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=9cdb31477a33417680800f7326b1af51&lang=zh

### 请求示例
```js
JLSDK.mdadd(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.mdedit`
### 功能介绍
> * 修改设备<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=720d3df59d6e4d79a52e34cd5c759a56&lang=zh

### 请求示例
```js
JLSDK.mdedit(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.mdrm`
### 功能介绍
> * 删除设备<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=65078d8a076f4109beaf0e7670c16ac6&lang=zh

### 请求示例
```js
JLSDK.mdrm(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.mdlist`
### 功能介绍
> * 设备列表<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=6b2c7bd69a914456b877c03d1946aca1&lang=zh

### 请求示例
```js
JLSDK.mdlist(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.mdeditPass`
### 功能介绍
> * 修改设备登录密码(服务器记录的设备密码)<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=afb1f39005414ffca07d0f08a0fee789&lang=zh

### 请求示例
```js
JLSDK.mdeditPass(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

# ***设备***
## `JLSDK.deviceStatus`
### 功能介绍
> * 获取设备状态<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=f9a14124139c4951bab08863ce3d9e4c&lang=zh

### 请求示例
```js
JLSDK.deviceStatus(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---

## `JLSDK.deviceWakeup`
### 功能介绍
> * 低功耗设备唤醒<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=6727225d2b21415a8ec3e16d44609bbc&lang=zh

### 请求示例
```js
JLSDK.deviceWakeup(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 参数对象 | --- |

---


# ***需要登录设备***
* 获取Token和登录流程已经集成到以下每个接口中，在请求过程中，如果在获取Token成功之后想处理某些事务，或者在登录失败时给用户某些提示，就需要有相关的回调函数,以下接口的第二个参数是包含了各种回调的对象
```js
callback = {
    // 获取token成功回调
    tokenSuccess: res => {
        console.log('tokenSuccess');
    },
    // 获取token失败回调
    tokenFail: res => {
        console.log('tokenFail');
    },
    // 获取token错误回调
    tokenError:err => {
        console.log('tokenError');
    },
    // 获取token完成回调
    tokenComplete:res => {
        console.log('tokenComplete');
    },
    // 登录成功回调
    loginSuccess: res => {
        console.log('loginSuccess');
    },
    // 登录失败设备端回调
    loginRetFail: res => {
        console.log('loginRetFail');
    },
    // 登录失败服务端回调
    loginFail: res => {
        console.log('loginFail');
    },
    // 登录错误回调
    loginError: err => {
        console.log('loginError');
    },
    // 登录完成回调
    loginComplete: res => {
        console.log('loginComplete');
    }
}
```
## `JLSDK.getInfo` 或 `JLSDK.deviceGetInfo`
### 功能介绍
> * 获取设备基本信息<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=475ce9e125aa4d4994b6f51fc15fecba&lang=zh<br/>

### 请求示例
```js
JLSDK.getInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
// 或
JLSDK.deviceGetInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceGetability`
### 功能介绍
> * 获取设备能力集<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=fc5fd025b24743899aae3e023df7d45a&lang=zh

### 请求示例
```js
JLSDK.deviceGetability(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.getconfig` 或 `JLSDK.deviceGetconfig`
### 功能介绍
> * 通过接口获取设备当前的配置。<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=89b89a89849d4288958f07e8cd14c22e&lang=zh<br/>

### 请求示例
```js
JLSDK.getconfig(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
// 或
JLSDK.deviceGetconfig(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.setconfig` 或 `JLSDK.deviceSetconfig`
### 功能介绍
> * 通过接口设置设备的配置。<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=943e846115734cebb3acd46d8f93e91d&lang=zh<br/>

### 请求示例
```js
JLSDK.setconfig(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
// 或
JLSDK.deviceSetconfig(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

## `JLSDK.opdev` 或 `JLSDK.deviceOpdev`
### 功能介绍
> * 操作设备云台控制，升级等功能<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=b628c5577bbf448da9b9694ee396879d&lang=zh<br/>

### 请求示例
```js
JLSDK.opdev(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
// 或
JLSDK.deviceOpdev(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceUsermanage`
### 功能介绍
> * 设备用户相关<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=743be86073b74d548a195aee97db70ed&lang=zh

### 请求示例
```js
JLSDK.deviceUsermanage(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.getDeviceLogout`
### 功能介绍
> * 设备登出操作<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=a2e1b36828024616a64b4dd3cebbc6aa&lang=zh

### 请求示例
```js
JLSDK.getDeviceLogout(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceLivestream`
### 功能介绍
> * 设备直播地址 - 获取<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=975d05181b9741ebaf9641de49bab8b3&lang=zh

### 请求示例
```js
JLSDK.deviceLivestream(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceCloseLivestream`
### 功能介绍
> * 设备直播地址 - 关闭直播流<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=975d05181b9741ebaf9641de49bab8b3&lang=zh

### 请求示例
```js
JLSDK.deviceCloseLivestream(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceCapture`
### 功能介绍
> * 设备抓图<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eca538d5ff9544f0847ab3b1ac082f4b&lang=zh

### 请求示例
```js
JLSDK.deviceCapture(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceSubscribeMessage`
### 功能介绍
> * 设备报警消息订阅 - 订阅<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=51948fa838f0457a82a780625b5851a6&lang=zh

### 请求示例
```js
JLSDK.deviceSubscribeMessage(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceUnsubscribeMessage`
### 功能介绍
> * 设备报警消息订阅 - 取消订阅<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=51948fa838f0457a82a780625b5851a6&lang=zh

### 请求示例
```js
JLSDK.deviceUnsubscribeMessage(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceVoesSetPhones`
### 功能介绍
> * 语音电话功能 - 设置关联手机号<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=2e98a4861e2a4986860a0d9ee6b5c532&lang=zh

### 请求示例
```js
JLSDK.deviceVoesSetPhones(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceVoesGetInfo`
### 功能介绍
> * 语音电话功能 - 获取voes订阅信息<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=2e98a4861e2a4986860a0d9ee6b5c532&lang=zh

### 请求示例
```js
JLSDK.deviceVoesGetInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceVoesQuery`
### 功能介绍
> * 语音电话功能 - 获取历史通话记录<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=2e98a4861e2a4986860a0d9ee6b5c532&lang=zh

### 请求示例
```js
JLSDK.deviceVoesQuery(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceVoesCallHangup`
### 功能介绍
> * 语音电话功能 - 主动挂断<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=2e98a4861e2a4986860a0d9ee6b5c532&lang=zh

### 请求示例
```js
JLSDK.deviceVoesCallHangup(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceGetDeviceAlarmList`
### 功能介绍
> * 获取报警消息列表<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=4078169e6ccc4981a70586acedbff2a4&lang=zh

### 请求示例
```js
JLSDK.deviceGetDeviceAlarmList(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.devicePlaybackUrl`
### 功能介绍
> * 设备回放地址 - 获取设备回放地址<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=bb64d42f584f40928ee758c377e1c256&lang=zh

### 请求示例
```js
JLSDK.devicePlaybackUrl(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceGetDeviceLocalPic`
### 功能介绍
> * 设备回放地址 - 获取设备本地图片url<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=bb64d42f584f40928ee758c377e1c256&lang=zh

### 请求示例
```js
JLSDK.deviceGetDeviceLocalPic(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceGetPicUrl`
### 功能介绍
> * 云存报警应用 - 获取云存报警图片或视频<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=261c0dba03d9409585ee4343068c6519&lang=zh

### 请求示例
```js
JLSDK.deviceGetPicUrl(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceGetVideoUrl`
### 功能介绍
> * 云存报警应用 - 获取报警视频url<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=261c0dba03d9409585ee4343068c6519&lang=zh

### 请求示例
```js
JLSDK.deviceGetVideoUrl(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceGetVideoList`
### 功能介绍
> * 云存报警应用 - 获取云存视频列表<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=261c0dba03d9409585ee4343068c6519&lang=zh

### 请求示例
```js
JLSDK.deviceGetVideoList(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceGetVideoPicUrl`
### 功能介绍
> * 云存报警应用 - 获取云存视频缩略图<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=261c0dba03d9409585ee4343068c6519&lang=zh

### 请求示例
```js
JLSDK.deviceGetVideoPicUrl(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceSmsSetPhones`
### 功能介绍
> * 短信报警功能 - 设置关联手机号<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=07ed9742bf274b2cb4334edef1c20067&lang=zh

### 请求示例
```js
JLSDK.deviceSmsSetPhones(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceSmsSetAlarmType`
### 功能介绍
> * 短信报警功能 - 设置订阅报警类型<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=07ed9742bf274b2cb4334edef1c20067&lang=zh

### 请求示例
```js
JLSDK.deviceSmsSetAlarmType(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceSmsGetInfo`
### 功能介绍
> * 短信报警功能 - 获取sms订阅信息<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=07ed9742bf274b2cb4334edef1c20067&lang=zh

### 请求示例
```js
JLSDK.deviceSmsGetInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceSmsQuery`
### 功能介绍
> * 短信报警功能 - 获取历史发送短信记录<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=07ed9742bf274b2cb4334edef1c20067&lang=zh

### 请求示例
```js
JLSDK.deviceSmsQuery(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceAudioSetPhones`
### 功能介绍
> * 语音电话功能 - 设置关联手机号<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eb83b8c8dc6b4162bb6dfae0529a8616&lang=zh

### 请求示例
```js
JLSDK.deviceAudioSetPhones(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceAudioSetAlarmType`
### 功能介绍
> * 语音电话功能 - 设置订阅报警类型<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eb83b8c8dc6b4162bb6dfae0529a8616&lang=zh

### 请求示例
```js
JLSDK.deviceAudioSetAlarmType(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceAudioGetInfo`
### 功能介绍
> * 语音电话功能 - 获取audio订阅信息<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eb83b8c8dc6b4162bb6dfae0529a8616&lang=zh

### 请求示例
```js
JLSDK.deviceAudioGetInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.deviceAudioQuery`
### 功能介绍
> * 语音电话功能 - 获取历史通话记录<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eb83b8c8dc6b4162bb6dfae0529a8616&lang=zh

### 请求示例
```js
JLSDK.deviceAudioQuery(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotFeeder`
### 功能介绍
> * 一键喂食<br/>
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=88b592c6262d4f5fa402ec27aaac360a&lang=zh

### 请求示例
```js
JLSDK.iotFeeder(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| data | Object | 必须 | --- | --- |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotPropSet`
### 功能介绍
> * 设置iot设备属性
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### 请求示例
```js
JLSDK.iotPropSet(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotPropGet`
### 功能介绍
> * 获取iot设备属性
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### 请求示例
```js
JLSDK.iotPropGet(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotTimer`
### 功能介绍
> * 定时器
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### 请求示例
```js
JLSDK.iotTimer(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotLightSourceSet`
### 功能介绍
> * 光源模式/白光亮度/冷暖值/彩光/场景
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### 请求示例
```js
JLSDK.iotLightSourceSet(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotLightSourceGet`
### 功能介绍
> * 光源模式/白光亮度/冷暖值/彩光/场景
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### 请求示例
```js
JLSDK.iotLightSourceGet(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotLightSourceControl`
### 功能介绍
> * 光源模式/白光亮度/冷暖值/彩光/场景
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### 请求示例
```js
JLSDK.iotLightSourceControl(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotDoorLockRemoteUnlock`
### 功能介绍
> * 远程解锁/临时密码设置
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### 请求示例
```js
JLSDK.iotDoorLockRemoteUnlock(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

## `JLSDK.iotPropInterlock`
### 功能介绍
> * 互锁
> * 参考：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### 请求示例
```js
JLSDK.iotPropInterlock(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |
| callback | Object | 可选 | 获取token和登录的回调 | --- |

---

# ***不需要token和登录***
## `JLSDK.propIncludes`
### 功能介绍
> * 设备能力集查询；<br/>
> * 能力集是指一些特殊的配置，该配置一般在GUI界面上无法进行配置，需要特殊的能力集配置工具通过网络才可以配置，也可以在程序包中加入客户定制的一些能力集；<br/>
> * 无回调。<br/>

### 请求示例
```js
let params = ['plugCurrent','plugPower','plugVoltage']
let bool = JLSDK.propIncludes(params) // 返回true或false
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Array[string] | 必须 | 字符串数组 | - |

### 响应说明
> 返回 布尔值

---

## `JLSDK.iotPropAttrs`
### 功能介绍
> * 获取iot设备属性 <br/>
> * 此方法集成进 `JLSDK.propIncludes()` 中，在实际应用中不常单独使用；<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/8807 <br/>

### 请求示例
```js
JLSDK.iotPropAttrs(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotPropStatus`
### 功能介绍
> * 获取iot设备状态<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/13574<br/>

### 请求示例
```js
JLSDK.iotPropStatus(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotQueryTotalElectricity`
### 功能介绍
> * 查询单插总用电量和今日用电量<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/16574<br/>

### 请求示例
```js
JLSDK.iotQueryTotalElectricity(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotQueryElectricityRecord`
### 功能介绍
> * 查询单插用电量记录<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/16566<br/>

### 请求示例
```js
JLSDK.iotQueryElectricityRecord(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotGetPropStatusRecordByPage`
### 功能介绍
> * 分页查询状态变化记录<br/>
> * 参考：http://10.2.11.100:3000/project/616/interface/api/16422<br/>

### 请求示例
```js
JLSDK.iotGetPropStatusRecordByPage(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotGetRoomListByPage`
### 功能介绍
> * 分页查询房间列表<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/13238<br/>

### 请求示例
```js
JLSDK.iotGetRoomListByPage(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotGetDeviceListByPage`
### 功能介绍
> * 分页查询设备列表，根据房间id或者用户组id或用户id,查询具体的某个设备<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/8797<br/>

### 请求示例
```js
JLSDK.iotGetDeviceListByPage(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotMoveDeviceToRoom`
### 功能介绍
> * 移动设备到某房间<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/8797<br/>

### 请求示例
```js
JLSDK.iotMoveDeviceToRoom(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotDelDeviceFromUser`
### 功能介绍
> * 取消普通组员设备使用权限<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/8796<br/>

### 请求示例
```js
JLSDK.iotDelDeviceFromUser(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotUpdateDevice`
### 功能介绍
> * 编辑设备 <br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/8798<br/>

### 请求示例
```js
JLSDK.iotUpdateDevice(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotSelectNearestTimer`
### 功能介绍
> * 查询下次最近任务执行时间 <br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/10494<br/>

### 请求示例
```js
JLSDK.iotSelectNearestTimer(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotGetPicList`
### 功能介绍
> * 查询设备推荐图 <br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/10614<br/>

### 请求示例
```js
JLSDK.iotGetPicList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotDelDevice`
### 功能介绍
> * 删除设备 <br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/8799<br/>

### 请求示例
```js
JLSDK.iotDelDevice(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotConflictCheck`
### 功能介绍
> * 查询新增或设置配置是否冲突 <br/>
> * 参考：http://10.2.11.100:3000/project/616/interface/api/15334<br/>

### 请求示例
```js
JLSDK.iotConflictCheck(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotUpdateLightSourceScene`
### 功能介绍
> * 光源场景更新 <br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/16486<br/>

### 请求示例
```js
JLSDK.iotUpdateLightSourceScene(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotLightSourceSceneGetList`
### 功能介绍
> * 光源场景列表获取 <br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/16494<br/>

### 请求示例
```js
JLSDK.iotLightSourceSceneGetList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---

## `JLSDK.iotLightSourceSceneInfoGet`
### 功能介绍
> * 光源场景详情获取<br/>
> * 参考：http://10.2.11.100:3000/project/532/interface/api/16502<br/>

### 请求示例
```js
JLSDK.iotLightSourceSceneInfoGet(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | - | - |

---


## `JLSDK.iotChannelInfoByDeviceNoForApp`(弃用)
### 功能介绍
> * 获取通道信息

### 请求示例
```js
JLSDK.iotChannelInfoByDeviceNoForApp(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotGetDeviceChannelList`
### 功能介绍
> * 查询设备通道名列表
> * 参考：http://10.2.11.100:3000/project/532/interface/api/17590

### 请求示例
```js
JLSDK.iotGetDeviceChannelList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotAddOrUpdateDeviceChannel`
### 功能介绍
> * 新增或更新设备通道名
> * 参考：http://10.2.11.100:3000/project/532/interface/api/17582

### 请求示例
```js
JLSDK.iotAddOrUpdateDeviceChannel(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotRemoteControlList`
### 功能介绍
> * 查询遥控器名称列表(可传入模糊查询条件)
> * 参考：http://10.2.11.100:3000/project/532/interface/api/19646

### 请求示例
```js
JLSDK.iotRemoteControlList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotRemoteControlUpdate`
### 功能介绍
> * 通过设备序列号和遥控器id新增或删除遥控器名称
> * 参考：http://10.2.11.100:3000/project/532/interface/api/19654

### 请求示例
```js
JLSDK.iotRemoteControlUpdate(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotResetLightSourceScene`
### 功能介绍
> * 光源重置颜色场景
> * 参考：http://10.2.11.100:3000/project/532/interface/api/22686

### 请求示例
```js
JLSDK.iotResetLightSourceScene(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotCustom`
### 功能介绍
> * 自定义面板获取渲染效果
> * 参考：http://10.2.11.100:3000/project/532/interface/api/24182

### 请求示例
```js
JLSDK.iotCustom(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotInterLockCheckConflict`(弃用)
### 功能介绍
> * 检测互锁是否冲突
> * 参考：http://10.2.11.100:3000/project/532/interface/api/24158 

### 请求示例
```js
JLSDK.iotInterLockCheckConflict(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotBiorhythmList`
### 功能介绍
> * 生物节律查询
> * 参考：http://10.2.11.100:3000/project/532/interface/api/26214

### 请求示例
```js
JLSDK.iotBiorhythmList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotBiorhythmAdd`
### 功能介绍
> * 生物节律新增
> * 参考：http://10.2.11.100:3000/project/532/interface/api/26222

### 请求示例
```js
JLSDK.iotBiorhythmAdd(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotBiorhythmEdit`
### 功能介绍
> * 生物节律编辑
> * 参考：http://10.2.11.100:3000/project/532/interface/api/26230

### 请求示例
```js
JLSDK.iotBiorhythmEdit(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.iotBiorhythmDelete`
### 功能介绍
> * 生物节律删除
> * 参考：http://10.2.11.100:3000/project/532/interface/api/26238

### 请求示例
```js
JLSDK.iotBiorhythmDelete(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.getCustomizeIconList`
### 功能介绍
> * 查询场景图标（app）
> * 参考：http://10.2.11.100:3000/project/532/interface/api/24758

### 请求示例
```js
JLSDK.getCustomizeIconList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.resetBiorhythm`
### 功能介绍
> * 重置生物节律
> * 参考：http://10.2.11.100:3000/project/532/interface/api/30350

### 请求示例
```js
JLSDK.resetBiorhythm(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.musicRhythmAppGetListByLan`
### 功能介绍
> * 查询全部APP音乐律动
> * 参考：http://10.2.11.100:3000/project/532/interface/api/34965

### 请求示例
```js
JLSDK.musicRhythmAppGetListByLan(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.musicRhythmLocalGetListByLan`
### 功能介绍
> * 查询全部本地音乐律动
> * 参考：http://10.2.11.100:3000/project/532/interface/api/34970

### 请求示例
```js
JLSDK.musicRhythmLocalGetListByLan(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---

## `JLSDK.musicRhythmLocalSetSensitivity`
### 功能介绍
> * 设置灵敏度
> * 参考：http://10.2.11.100:3000/project/532/interface/api/34975

### 请求示例
```js
JLSDK.musicRhythmLocalSetSensitivity(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### 参数说明
| 名称 | 类型 | 是否必须 | 备注 | 示例 |
| --- | --- | ---- | --- | --- |
| params | Object | 必须 | 根据不同设备传递相应的参数 | - |

---