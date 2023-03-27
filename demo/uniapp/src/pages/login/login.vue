<template>
	<view id="app">
		<form>
            <h3>Login</h3>
            <label>
                <span>username</span>
                <input type="text" v-model="account" />
            </label>
            <label>
                <span>password</span>
                <input type="password" v-model="pass" />
            </label>
            <label>
                <button type="button" @click="onSubmit">Sign in</button>
            </label>
        </form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                account: '',
                pass:'',
			}
		},
		onShow() {
            console.log('JLSDK',JLSDK);
		},
		methods: {
            onSubmit(){
                let data = {
                    account:this.account,
                    pass:this.pass
                }
                JLSDK.login(data).then(res => {
                    const result = JSON.parse(decodeURIComponent(res.data || '{}'))
                    let authorization = result.data.accessToken
                    
                    JLSDK.authorize(authorization) 
                    
                    uni.navigateTo({
                        url:'/pages/list/list'
                    })
                })
            }
		}
	}
</script>