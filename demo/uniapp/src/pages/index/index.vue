<template>
	<view id="app">
		<form>
            <h3>Initialization</h3>
            <label>
                <span>appSecret</span>
                <input type="text" v-model="appSecret" />
            </label>
            <label>
                <span>movedCard</span>
                <input type="text" v-model="movedCard" />
            </label>
            <label>
                <span>appKey</span>
                <input type="text" v-model="appKey" />
            </label>
            <label>
                <span>uuid</span>
                <input type="text" v-model="uuid" />
            </label>
            <label>
                <button type="button" @click="onSubmit">Next</button>
            </label>
        </form>
        <view>
            Field Description：
            <a href="https://developer.jftech.com/docs/?menusId=e65803db0d0b446bb8bca02c6010f9f7&lang=en" target="_blank">https://developer.jftech.com/docs/?menusId=e65803db0d0b446bb8bca02c6010f9f7&lang=en</a>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                appSecret: '90f8bc17be2a425db6068c749dee4f5d',
                movedCard:2,
                appKey:'0621ef206a1d4cafbe0c5545c3882ea8',
                uuid:'e0534f3240274897821a126be19b6d46'
			}
		},
		onShow() {
            console.log('JLSDK',JLSDK);
		},
		methods: {
            onSubmit(){
                JLSDK.init({
                    authorizationAppKey: this.appKey,
                    lang: navigator.language,
                    appSecret:this.appSecret,
                    movedCard:this.movedCard,
                    appKey:this.appKey,
                    uuid:this.uuid
                })
                uni.navigateTo({
                    url:'/pages/register/register'
                })
            }
		}
	}
</script>
