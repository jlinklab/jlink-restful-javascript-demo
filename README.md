# `【Introduce】`
> * In the process of IoT product development, front - and back-end interactions need to request various interfaces, such as obtaining device 'Token' for authentication, logging in to the device to have the right to operate the device, determining whether the device has certain functions by querying the device's capability set, and obtaining device status. The source of the interface is also different. Based on strong logic versatility and unified development habits and writing specifications, to improve the speed and quality of Iot product development, especially organize and develop SDK.<br/>
> * sdk full name:`jlink-restful-sdk-js`<br/>
> * sdk for short:`jssdk`<br/>
> * global:`JLSDK`<br/>

# `【Install And Use】`
## File import
You can start using the JS file by importing it into the index.html page (note that the correct file path is introduced,v1.x.x is the version number).
```js
<script src="jlink-restful-sdk-v1.x.x.js"></script>
```

# `【API】`
## `JLSDK.init`
### Function Introduction
> 1. After entering H5, you need to initialize `JLSDK`.<br/>
>   The purpose of initialization is to:<br/>
>   * Configuring the interface domain name(Optional).<br/>
>   * Configuring Open Platform Information (Mandatory) :`appSecret`、`movedCard`、`appKey`、`uuid`；<br/>
>   * Configure login, language, and product serial number (Mandatory) :`sn`、`lang`、`authorization`、`appKey`。<br/>
> 2. Return `JLSDK`<br/>
> 3. No callback<br/>

### Example
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

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| authorization | string | optional | Account authorization information | - |
| authorizationAppKey | string | mandatory | Account authorization appKey | - |
| sn | string | optional | Device serial number | - |
| lang | string | mandatory | Language | - |
| appSecret | string | mandatory | appSecret | - |
| movedCard | string | mandatory | movedCard | - |
| appKey | string | mandatory | appKey | - |
| uuid | string | mandatory | uuid | - |
| BaseURLRDS | string | optional | Domain name of the ReSTFul server | https://rds-viot.bcloud365.net |
| BaseURLUPGRADE | string | optional | Domain name of the device upgrade server | https://upgrade.secu100.net |
| BaseURLCAPS | string | optional | Domain name of the cloud storage server | https://caps.secu100.net |
| BaseURLTKS | string | optional | Domain name of the account system server | https://tks.xmeye.net |

---

## `JLSDK.authorize`
### Function Introduction
> * Equipment authorization<br/>
> * Retrun `JLSDK`<br/>
> * No callback<br/>

### Example
```js
JLSDK.authorize(authorization);
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| authorization | String | optional | authorization information | - |

---

## `JLSDK.setDevice`
### Function Introduction
> * Set device related information<br/>
> * Return `JLSDK`<br/>
> * No callback<br/>

### Example
```js
let params = {
    u:"",
    p:"",
    adminToken:""
    restfulToken:''
}
JLSDK.setDevice(params);
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| u | String | optional | Device login name | - |
| p | String | optional | Device login password | - |
| adminToken | String | mandatory | Device login Token | - |
| restfulToken | String | mandatory | Token of device | - |

---

## `JLSDK.deviceLogin`
### Function Introduction
> * Device login. After successful login, you can obtain device configuration and operate devices.<br/>
> * This method is integrated into `JLSDK.deviceLogin()` and is not often used alone in practical applications;<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=e2cb4e733e33496384f3539f9497f4bb&lang=zh <br/>

### Example
```js
JLSDK.deviceLogin(callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| callback | function | mandatory | - | - |

---

## `JLSDK.devcieKeepAlive`
### Function Introduction
> * The device is alive after successful login, so that the device is connected for a long time. If the device does not operate for 1 minute, it will be disconnected. Therefore, the activation need to be invoked every 20 seconds (2-3 times in 1 minute) to prevent the device from being disconnected due to occasional activation failure due to network fluctuations.<br/>
> * This method is integrated into `JLSDK.deviceLogin()` and is not often used alone in practical applications;<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=fd36dc9c968a45a9b72fd3dce7c553f8&lang=zh

### Example
```js
JLSDK.devcieKeepAlive(callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| callback | function | mandatory | - | - |

---

## `window.jlkAlert`
### Function Introduction
> Global pop-up information window<br/>
> Information window that pops up after successive login failures<br/>
> mandatory

### default
```js
window.jlkAlert = function() {
	// jlk.modal({
	// 	title: 'title',
	// 	content: 'message',
	// 	showCancel: false,
	// 	ok: () => {
	// 		// TODO
	// 	}
	// })
}
```

# ***Interfaces for different services (except tokens)***
## `JLSDK.getLatestCache`
### Function Introduction
> * Obtain the version information of the last reported server according to the device serial number;<br/>
> * Return status :200 means updated version, 204 means no updated version;

### Example
```js
JLSDK.getLatestCache()
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |

---

## `JLSDK.getReqCaps`
### Function Introduction
> * Gets the cloud storage status

### Example
```js
JLSDK.getReqCaps()
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |

---

# ***RS User System***
## `JLSDK.scmail`
### Function Introduction
> * Send the email verification code<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=f243f5c79698478399a881b20a0bb6b4&lang=zh

### Example
```js
JLSDK.scmail(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.scphone`
### Function Introduction
> * Send SMS verification code<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=b49bd0225ad14538a46831849d265d6e&lang=zh

### Example
```js
JLSDK.scphone(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.usercheckMail`
### Function Introduction
> * Verify mailbox uniqueness<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=e6443f3d61214f1584f3f7c327ddea92&lang=zh

### Example
```js
JLSDK.usercheckMail(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.usercheckPhone`
### Function Introduction
> * Verify the uniqueness of mobile phone number<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=024c8d350f664b789797a25098d89dce&lang=zh

### Example
```js
JLSDK.usercheckPhone(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.usercheck`
### Function Introduction
> * Verify username uniqueness<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=3d741c2dd00449168e823e5e12a2b335&lang=zh

### Example
```js
JLSDK.usercheck(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.userregPhone`
### Function Introduction
> * Mobile user registration<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=8a9e56e45c04499fa5e3d315ae7b4094&lang=zh

### Example
```js
JLSDK.userregPhone(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.userregMail`
### Function Introduction
> * Mail user registration<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=090e8f8d87b84a31b28b42bce4772453&lang=zh

### Example
```js
JLSDK.userregMail(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.login`
### Function Introduction
> * Account login<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=c544b02348bc46629801bacaaa9494d1&lang=zh

### Example
```js
JLSDK.login(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.userinfo2`
### Function Introduction
> * Get user information<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=0069a55ba6d5400ba5929ea3beaca072&lang=zh

### Example
```js
JLSDK.userinfo2(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.fpphone`
### Function Introduction
> * Reset password via SMS<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=b1a147f995614e1b9aafa4a9879caffc&lang=zh

### Example
```js
JLSDK.fpphone(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.fpmail`
### Function Introduction
> * Reset your password via email<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=bddd822b7849472a84754fcb0f27e734&lang=zh

### Example
```js
JLSDK.fpmail(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.mdadd`
### Function Introduction
> * add equipments<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=9cdb31477a33417680800f7326b1af51&lang=zh

### Example
```js
JLSDK.mdadd(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.mdedit`
### Function Introduction
> * Modification of equipment<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=720d3df59d6e4d79a52e34cd5c759a56&lang=zh

### Example
```js
JLSDK.mdedit(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.mdrm`
### Function Introduction
> * Removing the device<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=65078d8a076f4109beaf0e7670c16ac6&lang=zh

### Example
```js
JLSDK.mdrm(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.mdlist`
### Function Introduction
> * List of devices<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=6b2c7bd69a914456b877c03d1946aca1&lang=zh

### Example
```js
JLSDK.mdlist(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.mdeditPass`
### Function Introduction
> * Modify the device login password (device password recorded by the server)<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=afb1f39005414ffca07d0f08a0fee789&lang=zh

### Example
```js
JLSDK.mdeditPass(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

# ***Device***
## `JLSDK.deviceStatus`
### Function Introduction
> * Get device status<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=f9a14124139c4951bab08863ce3d9e4c&lang=zh

### Example
```js
JLSDK.deviceStatus(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---

## `JLSDK.deviceWakeup`
### Function Introduction
> * Low power device wake up<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=6727225d2b21415a8ec3e16d44609bbc&lang=zh

### Example
```js
JLSDK.deviceWakeup(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Object of parameters | --- |

---


# ***Login device required***
* The Token acquisition and login process has been integrated into each of the following interfaces. During the request process, if you want to process certain transactions after the Token acquisition is successful, or give the user some hints when the login fails, you need to have relevant callback functions. The second parameter of the following interface is the object containing various callbacks.
```js
callback = {
    // Get token successful callback
    tokenSuccess: res => {
        console.log('tokenSuccess');
    },
    // Get token failure callback
    tokenFail: res => {
        console.log('tokenFail');
    },
    // Gets the token error callback
    tokenError:err => {
        console.log('tokenError');
    },
    // Get the token to complete the callback
    tokenComplete:res => {
        console.log('tokenComplete');
    },
    // Login success callback
    loginSuccess: res => {
        console.log('loginSuccess');
    },
    // Device callback for failed login
    loginRetFail: res => {
        console.log('loginRetFail');
    },
    // Login failed server callback
    loginFail: res => {
        console.log('loginFail');
    },
    // Login error callback
    loginError: err => {
        console.log('loginError');
    },
    // Login to complete the callback
    loginComplete: res => {
        console.log('loginComplete');
    }
}
```
## `JLSDK.getInfo` or `JLSDK.deviceGetInfo`
### Function Introduction
> * Get basic device information<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=475ce9e125aa4d4994b6f51fc15fecba&lang=zh<br/>

### Example
```js
JLSDK.getInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
// or
JLSDK.deviceGetInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceGetability`
### Function Introduction
> * Gets the device capability set<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=fc5fd025b24743899aae3e023df7d45a&lang=zh

### Example
```js
JLSDK.deviceGetability(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.getconfig` or `JLSDK.deviceGetconfig`
### Function Introduction
> * Get the current configuration of the device through the interface.<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=89b89a89849d4288958f07e8cd14c22e&lang=zh<br/>

### Example
```js
JLSDK.getconfig(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
// or
JLSDK.deviceGetconfig(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.setconfig` or `JLSDK.deviceSetconfig`
### Function Introduction
> * Set the configuration of the device through the interface.<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=943e846115734cebb3acd46d8f93e91d&lang=zh<br/>

### Example
```js
JLSDK.setconfig(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
// or
JLSDK.deviceSetconfig(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

## `JLSDK.opdev` or `JLSDK.deviceOpdev`
### Function Introduction
> * Operate equipment PTZ control, upgrade and other functions.<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=b628c5577bbf448da9b9694ee396879d&lang=zh<br/>

### Example
```js
JLSDK.opdev(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
// or
JLSDK.deviceOpdev(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceUsermanage`
### Function Introduction
> * Device user related.<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=743be86073b74d548a195aee97db70ed&lang=zh

### Example
```js
JLSDK.deviceUsermanage(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.getDeviceLogout`
### Function Introduction
> * Device logout operation<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=a2e1b36828024616a64b4dd3cebbc6aa&lang=zh

### Example
```js
JLSDK.getDeviceLogout(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceLivestream`
### Function Introduction
> * Device live address - Get<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=975d05181b9741ebaf9641de49bab8b3&lang=zh

### Example
```js
JLSDK.deviceLivestream(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceCloseLivestream`
### Function Introduction
> * Device live address - Turn off live stream<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=975d05181b9741ebaf9641de49bab8b3&lang=zh

### Example
```js
JLSDK.deviceCloseLivestream(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceCapture`
### Function Introduction
> * Equipment capture diagram<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eca538d5ff9544f0847ab3b1ac082f4b&lang=zh

### Example
```js
JLSDK.deviceCapture(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceSubscribeMessage`
### Function Introduction
> * Device Alarm message subscription - Subscribe<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=51948fa838f0457a82a780625b5851a6&lang=zh

### Example
```js
JLSDK.deviceSubscribeMessage(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceUnsubscribeMessage`
### Function Introduction
> * Device Alarm message Subscription - Unsubscribe<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=51948fa838f0457a82a780625b5851a6&lang=zh

### Example
```js
JLSDK.deviceUnsubscribeMessage(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceVoesSetPhones`
### Function Introduction
> * Voice call function - set up the joint phone number<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=2e98a4861e2a4986860a0d9ee6b5c532&lang=zh

### Example
```js
JLSDK.deviceVoesSetPhones(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceVoesGetInfo`
### Function Introduction
> * Voice calling function - Get voes subscription information<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=2e98a4861e2a4986860a0d9ee6b5c532&lang=zh

### Example
```js
JLSDK.deviceVoesGetInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceVoesQuery`
### Function Introduction
> * Voice call function - Get historical call history<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=2e98a4861e2a4986860a0d9ee6b5c532&lang=zh

### Example
```js
JLSDK.deviceVoesQuery(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceVoesCallHangup`
### Function Introduction
> * Voice call function - actively hang up<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=2e98a4861e2a4986860a0d9ee6b5c532&lang=zh

### Example
```js
JLSDK.deviceVoesCallHangup(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceGetDeviceAlarmList`
### Function Introduction
> * Gets a list of alarm messages<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=4078169e6ccc4981a70586acedbff2a4&lang=zh

### Example
```js
JLSDK.deviceGetDeviceAlarmList(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.devicePlaybackUrl`
### Function Introduction
> * Device playback address - Gets the device playback address<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=bb64d42f584f40928ee758c377e1c256&lang=zh

### Example
```js
JLSDK.devicePlaybackUrl(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceGetDeviceLocalPic`
### Function Introduction
> * Device playback address - Gets the local image url of the device<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=bb64d42f584f40928ee758c377e1c256&lang=zh

### Example
```js
JLSDK.deviceGetDeviceLocalPic(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceGetPicUrl`
### Function Introduction
> * Cloud Storage alarm application - Get cloud storage alarm pictures or videos<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=261c0dba03d9409585ee4343068c6519&lang=zh

### Example
```js
JLSDK.deviceGetPicUrl(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceGetVideoUrl`
### Function Introduction
> * Cloud alarm application - Get the url of alarm video<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=261c0dba03d9409585ee4343068c6519&lang=zh

### Example
```js
JLSDK.deviceGetVideoUrl(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceGetVideoList`
### Function Introduction
> * Cloud Storage Alarm application - Get a list of cloud storage videos<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=261c0dba03d9409585ee4343068c6519&lang=zh

### Example
```js
JLSDK.deviceGetVideoList(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceGetVideoPicUrl`
### Function Introduction
> * Cloud Storage alarm application - Get cloud storage video thumbnail<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=261c0dba03d9409585ee4343068c6519&lang=zh

### Example
```js
JLSDK.deviceGetVideoPicUrl(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceSmsSetPhones`
### Function Introduction
> * SMS alarm function - set up the joint phone number<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=07ed9742bf274b2cb4334edef1c20067&lang=zh

### Example
```js
JLSDK.deviceSmsSetPhones(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceSmsSetAlarmType`
### Function Introduction
> * SMS alarm function - Set the subscription alarm type<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=07ed9742bf274b2cb4334edef1c20067&lang=zh

### Example
```js
JLSDK.deviceSmsSetAlarmType(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceSmsGetInfo`
### Function Introduction
> * SMS alarm function - Get SMS subscription information<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=07ed9742bf274b2cb4334edef1c20067&lang=zh

### Example
```js
JLSDK.deviceSmsGetInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceSmsQuery`
### Function Introduction
> * SMS alarm function - Get the history of sending SMS records<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=07ed9742bf274b2cb4334edef1c20067&lang=zh

### Example
```js
JLSDK.deviceSmsQuery(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceAudioSetPhones`
### Function Introduction
> * Voice call function - set up the joint phone number<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eb83b8c8dc6b4162bb6dfae0529a8616&lang=zh

### Example
```js
JLSDK.deviceAudioSetPhones(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceAudioSetAlarmType`
### Function Introduction
> * Voice call function - Set subscription alarm type<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eb83b8c8dc6b4162bb6dfae0529a8616&lang=zh

### Example
```js
JLSDK.deviceAudioSetAlarmType(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceAudioGetInfo`
### Function Introduction
> * Voice calling function - Get audio subscription information<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eb83b8c8dc6b4162bb6dfae0529a8616&lang=zh

### Example
```js
JLSDK.deviceAudioGetInfo(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.deviceAudioQuery`
### Function Introduction
> * Voice call function - Get historical call history<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=eb83b8c8dc6b4162bb6dfae0529a8616&lang=zh

### Example
```js
JLSDK.deviceAudioQuery(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotFeeder`
### Function Introduction
> * One-click feeding<br/>
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=88b592c6262d4f5fa402ec27aaac360a&lang=zh

### Example
```js
JLSDK.iotFeeder(data,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| data | Object | mandatory | --- | --- |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotPropSet`
### Function Introduction
> * Set iot device properties
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### Example
```js
JLSDK.iotPropSet(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Pass the corresponding parameters according to different devices | - |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotPropGet`
### Function Introduction
> * Get iot device attributes
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### Example
```js
JLSDK.iotPropGet(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Pass the corresponding parameters according to different devices | - |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotTimer`
### Function Introduction
> * timer
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### Example
```js
JLSDK.iotTimer(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Pass the corresponding parameters according to different devices | - |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotLightSourceSet`
### Function Introduction
> * Light source mode/white light brightness/cooling and warming value/color light/scene
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### Example
```js
JLSDK.iotLightSourceSet(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Pass the corresponding parameters according to different devices | - |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotLightSourceGet`
### Function Introduction
> * Light source mode/white light brightness/cooling and warming value/color light/scene
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### Example
```js
JLSDK.iotLightSourceGet(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Pass the corresponding parameters according to different devices | - |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotLightSourceControl`
### Function Introduction
> * Light source mode/white light brightness/cooling and warming value/color light/scene
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### Example
```js
JLSDK.iotLightSourceControl(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Pass the corresponding parameters according to different devices | - |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotDoorLockRemoteUnlock`
### Function Introduction
> * Remote unlock/temporary password setting
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### Example
```js
JLSDK.iotDoorLockRemoteUnlock(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Pass the corresponding parameters according to different devices | - |
| callback | Object | optional | Get callbacks for token and login | --- |

---

## `JLSDK.iotPropInterlock`
### Function Introduction
> * interlocking
> * reference：https://developer.jftech.com/docs/?menusId=7623b997428c49dd9976d3041af56b03&siderid=df83f11bd676409fbb8f336d0f1194a7&lang=zh

### Example
```js
JLSDK.iotPropInterlock(params,callback)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Pass the corresponding parameters according to different devices | - |
| callback | Object | optional | Get callbacks for token and login | --- |

---

# ***No token and no login required***
## `JLSDK.propIncludes`
### Function Introduction
> * Device capability set query;<br/>
> * Capability set refers to some special configuration, which can not be configured in the GUI interface in general. It can be configured by special capability set configuration tools through the network, and some customized capability sets can also be added to the program package.<br/>
> * No callbacks.<br/>

### Example
```js
let params = ['plugCurrent','plugPower','plugVoltage']
let bool = JLSDK.propIncludes(params) 
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Array[string] | mandatory | string array | - |

### 响应说明
> Returns a Boolean value

---

## `JLSDK.iotPropAttrs`
### Function Introduction
> * Get iot device properties <br/>
> * This method is integrated into `JLSDK.propIncludes()` and is not often used alone in real-world applications;<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/8807 <br/>

### Example
```js
JLSDK.iotPropAttrs(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotPropStatus`
### Function Introduction
> * Get iot device status<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/13574<br/>

### Example
```js
JLSDK.iotPropStatus(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotQueryTotalElectricity`
### Function Introduction
> * Query the total power consumption of single plug and today's power consumption<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/16574<br/>

### Example
```js
JLSDK.iotQueryTotalElectricity(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotQueryElectricityRecord`
### Function Introduction
> * Query single-plug power consumption records<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/16566<br/>

### Example
```js
JLSDK.iotQueryElectricityRecord(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotGetPropStatusRecordByPage`
### Function Introduction
> * Pagination queries state change records<br/>
> * reference：http://10.2.11.100:3000/project/616/interface/api/16422<br/>

### Example
```js
JLSDK.iotGetPropStatusRecordByPage(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotGetRoomListByPage`
### Function Introduction
> * Paginate the room list<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/13238<br/>

### Example
```js
JLSDK.iotGetRoomListByPage(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotGetDeviceListByPage`
### Function Introduction
> * Paginate the device list, looking up specific devices by room id or group id or user id<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/8797<br/>

### Example
```js
JLSDK.iotGetDeviceListByPage(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotMoveDeviceToRoom`
### Function Introduction
> * Move the device to a room<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/8797<br/>

### Example
```js
JLSDK.iotMoveDeviceToRoom(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotDelDeviceFromUser`
### Function Introduction
> * Cancel the permission of normal team members to use equipment<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/8796<br/>

### Example
```js
JLSDK.iotDelDeviceFromUser(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotUpdateDevice`
### Function Introduction
> * Editing device <br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/8798<br/>

### Example
```js
JLSDK.iotUpdateDevice(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotSelectNearestTimer`
### Function Introduction
> * Query the next nearest task execution time <br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/10494<br/>

### Example
```js
JLSDK.iotSelectNearestTimer(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotGetPicList`
### Function Introduction
> * Query the device recommendation graph <br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/10614<br/>

### Example
```js
JLSDK.iotGetPicList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotDelDevice`
### Function Introduction
> * Deleting a device <br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/8799<br/>

### Example
```js
JLSDK.iotDelDevice(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotConflictCheck`
### Function Introduction
> * Query for conflicts in new or set configurations <br/>
> * reference：http://10.2.11.100:3000/project/616/interface/api/15334<br/>

### Example
```js
JLSDK.iotConflictCheck(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotUpdateLightSourceScene`
### Function Introduction
> * Light scene update <br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/16486<br/>

### Example
```js
JLSDK.iotUpdateLightSourceScene(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotLightSourceSceneGetList`
### Function Introduction
> * Light source scene list acquisition <br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/16494<br/>

### Example
```js
JLSDK.iotLightSourceSceneGetList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---

## `JLSDK.iotLightSourceSceneInfoGet`
### Function Introduction
> * Light source scene details are obtained<br/>
> * reference：http://10.2.11.100:3000/project/532/interface/api/16502<br/>

### Example
```js
JLSDK.iotLightSourceSceneInfoGet(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | - | - |

---


## `JLSDK.iotChannelInfoByDeviceNoForApp`(deprecated)
### Function Introduction
> * Obtaining channel information

### Example
```js
JLSDK.iotChannelInfoByDeviceNoForApp(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotGetDeviceChannelList`
### Function Introduction
> * Query the device channel name list
> * reference：http://10.2.11.100:3000/project/532/interface/api/17590

### Example
```js
JLSDK.iotGetDeviceChannelList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotAddOrUpdateDeviceChannel`
### Function Introduction
> * Add or update device channel names
> * reference：http://10.2.11.100:3000/project/532/interface/api/17582

### Example
```js
JLSDK.iotAddOrUpdateDeviceChannel(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotRemoteControlList`
### Function Introduction
> * Query remote key list (can pass fuzzy query terms)
> * reference：http://10.2.11.100:3000/project/532/interface/api/19646

### Example
```js
JLSDK.iotRemoteControlList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotRemoteControlUpdate`
### Function Introduction
> * Add or remove remote keys by device serial number and remote id
> * reference：http://10.2.11.100:3000/project/532/interface/api/19654

### Example
```js
JLSDK.iotRemoteControlUpdate(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotResetLightSourceScene`
### Function Introduction
> * Light source resets the color scene
> * reference：http://10.2.11.100:3000/project/532/interface/api/22686

### Example
```js
JLSDK.iotResetLightSourceScene(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotCustom`
### Function Introduction
> * Customize the panel to get the rendered effect
> * reference：http://10.2.11.100:3000/project/532/interface/api/24182

### Example
```js
JLSDK.iotCustom(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotInterLockCheckConflict`(deprecated)
### Function Introduction
> * Check if interlocks are in conflict
> * reference：http://10.2.11.100:3000/project/532/interface/api/24158 

### Example
```js
JLSDK.iotInterLockCheckConflict(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotBiorhythmList`
### Function Introduction
> * Biorhythm query
> * reference：http://10.2.11.100:3000/project/532/interface/api/26214

### Example
```js
JLSDK.iotBiorhythmList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotBiorhythmAdd`
### Function Introduction
> * New biological rhythms
> * reference：http://10.2.11.100:3000/project/532/interface/api/26222

### Example
```js
JLSDK.iotBiorhythmAdd(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotBiorhythmEdit`
### Function Introduction
> * Biorhythm editing
> * reference：http://10.2.11.100:3000/project/532/interface/api/26230

### Example
```js
JLSDK.iotBiorhythmEdit(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.iotBiorhythmDelete`
### Function Introduction
> * Biorhythm deletion
> * reference：http://10.2.11.100:3000/project/532/interface/api/26238

### Example
```js
JLSDK.iotBiorhythmDelete(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.getCustomizeIconList`
### Function Introduction
> * Query scene icon (app)
> * reference：http://10.2.11.100:3000/project/532/interface/api/24758

### Example
```js
JLSDK.getCustomizeIconList(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.resetBiorhythm`
### Function Introduction
> * Reset biological rhythms
> * reference：http://10.2.11.100:3000/project/532/interface/api/30350

### Example
```js
JLSDK.resetBiorhythm(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.musicRhythmAppGetListByLan`
### Function Introduction
> * Query all APP music beats
> * reference：http://10.2.11.100:3000/project/532/interface/api/34965

### Example
```js
JLSDK.musicRhythmAppGetListByLan(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.musicRhythmLocalGetListByLan`
### Function Introduction
> * Find all local music beats
> * reference：http://10.2.11.100:3000/project/532/interface/api/34970

### Example
```js
JLSDK.musicRhythmLocalGetListByLan(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---

## `JLSDK.musicRhythmLocalSetSensitivity`
### Function Introduction
> * Setting sensitivity
> * reference：http://10.2.11.100:3000/project/532/interface/api/34975

### Example
```js
JLSDK.musicRhythmLocalSetSensitivity(params)
.then(res => {
    // TODO
})
.catch(err => {
    // TODO
})
```

### Parameter
| key | type | optional | remark | default |
| --- | --- | ---- | --- | --- |
| params | Object | mandatory | Parameters are passed according to the device | - |

---