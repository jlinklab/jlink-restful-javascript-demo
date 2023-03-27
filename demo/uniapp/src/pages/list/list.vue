<template>
	<view id="app">
        <view style="text-align: center;">
            <h3>Family</h3>
            <select v-model="groupId" @change="onchange">
                <option value="">select</option>
                <option v-for="item in groupList" :key="item.id" :value="item.id" >{{ item.groupName }}</option>
            </select>
        </view>
        <view style="clear:both;overflow: hidden;">
            <view class="item" v-for="item in deviceList" :key="item.deviceNo" @click="onClick(item)">{{ item.deviceName }}</view>
        </view>
        
        <form>
            <h3>Get or customize device information</h3>
            <label>
                <span>sn</span>
                <input type="text" v-model="sn" />
            </label>
            <label>
                <span>adminToken</span>
                <input type="text" v-model="adminToken" />
            </label>
            <label>
                <button type="button" @click="onSubmit">Device login</button>
            </label>
        </form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                userId:'',
                groupList:[],
                groupId:'',
                deviceList:[],

                sn: '',
                adminToken:''
			}
		},
		onShow() {
            console.log('JLSDK',JLSDK);
            this.userinfo2()
            this.iotGetUserGroupListByPage()
		},
		methods: {
            userinfo2(){
                JLSDK.userinfo2().then(res => {
                    const result = JSON.parse(decodeURIComponent(res.data || '{}'))
                    this.userId = result.data.userId
                    console.log('userinfo2',result,this.userId)
                })
            },
            iotGetUserGroupListByPage(){
                let data = {
                    page: 1,
					limit: 999
                }
                JLSDK.iotGetUserGroupListByPage(data).then(res => {
                    this.groupList = res.data.data.data
                })
            },
            iotGetDeviceListByPage(){
                let data = {
                    userGroupId:this.groupId,
                    page: 1,
					limit: 999
                }
                JLSDK.iotGetDeviceListByPage(data).then(res => {
                    this.deviceList = res.data.data.data
                    console.log(this.deviceList);
                })
            },
            onchange(){
                this.iotGetDeviceListByPage()
                console.log('JLSDK',JLSDK);
            },
            onClick(item){
                this.sn = item.deviceNo
                this.adminToken = item.adminToken
            },
            onSubmit(){
                JLSDK.setDevice({
                    sn:this.sn,
                    adminToken:this.adminToken
                })
                uni.navigateTo({
                    url:'/pages/info/info'
                })
            }
		}
	}
</script>