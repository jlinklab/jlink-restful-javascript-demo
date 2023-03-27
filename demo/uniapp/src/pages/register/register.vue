<template>
	<view id="app">
		<form>
            <h3>Register</h3>
            <label>
                <span>username</span>
                <input type="text" v-model="name" />
            </label>
            <label>
                <span>password</span>
                <input type="password" v-model="password" />
            </label>
            <label>
                <span>confirm password</span>
                <input type="password" v-model="confirmPass" />
            </label>
            <label>
                <span>email</span>
                <view style="display: flex; justify-items: center; align-items: center;">
                    <input type="text" v-model="mail" style="flex:1"/>
                    <button type="button" @click="onSendCode" style="flex:1">Send code</button>
                </view>
            </label>
            <label>
                <span>code</span>
                <input type="text" v-model="verCode"/>
            </label>
            <label>
                <button type="button" @click="onSubmit">Sign up</button>
                <button type="button" @click="onLogin">Sign in</button>
            </label>
        </form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                name: '',
                password:'',
                confirmPass:'',
                mail:'',
                verCode:''
			}
		},
		onShow() {
            console.log('JLSDK',JLSDK);
		},
		methods: {
            onSendCode(){
                let data = {
                    mail:this.mail,
                    type:'re',
                    language:1,
                    username:''
                }
                JLSDK.scmail(data).then(res => {
                    const result = JSON.parse(decodeURIComponent(res.data || '{}'))
                    console.log(result);
                })
            },
            onSubmit(){
                let data = {
                    name:this.name,
                    password:this.password,
                    confirmPass:this.confirmPass,
                    mail:this.mail,
                    verCode:this.verCode
                }
                JLSDK.login(data).then(res => {
                    const result = JSON.parse(decodeURIComponent(res.data || '{}'))
                    console.log(result);
                    if(result.code === 2000){
                        uni.navigateTo({
                            url:'/pages/login/login'
                        })
                    }
                })
            },
            onLogin(){
                uni.navigateTo({
                    url:'/pages/login/login'
                })
            }
		}
	}
</script>