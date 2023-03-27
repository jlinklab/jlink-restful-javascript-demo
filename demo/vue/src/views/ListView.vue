<template>
  <div class="content">
    <div style="text-align: center;">
        <h3>Family</h3>
        <select v-model="groupId" @change="onchange">
            <option value="">select</option>
            <option v-for="item in groupList" :key="item.id" :value="item.id" >{{ item.groupName }}</option>
        </select>
    </div>
    <div style="clear:both;overflow: hidden;">
        <div class="item" v-for="item in deviceList" :key="item.deviceNo" @click="onClick(item)">{{ item.deviceName }}</div>
    </div>
    
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
</div>
</template>

<script setup>
    import { ref } from 'vue'
    import router from '../router';
    console.log('JLSDK',JLSDK);

    let userId = ref('')
    let groupList = ref([])
    let groupId = ref('')
    let deviceList = ref([])
    let sn = ref('')
    let adminToken = ref('')

    userinfo2()
    iotGetUserGroupListByPage()

    function userinfo2(){
        JLSDK.userinfo2().then(res => {
            const result = JSON.parse(decodeURIComponent(res.data || '{}'))
            userId.value = result.data.userId
            console.log('userinfo2',result,userId.value)
        })
    }

    function iotGetUserGroupListByPage(){
        let data = {
            page: 1,
            limit: 999
        }
        JLSDK.iotGetUserGroupListByPage(data).then(res => {
            groupList.value = res.data.data.data
        })
    }

    function iotGetDeviceListByPage(){
        let data = {
            userGroupId:groupId.value,
            page: 1,
            limit: 999
        }
        JLSDK.iotGetDeviceListByPage(data).then(res => {
            deviceList.value = res.data.data.data
            console.log(deviceList);
        })
    }

    function onchange(){
        iotGetDeviceListByPage()
        console.log('JLSDK',JLSDK);
    }

    function onClick(item){
        sn.value = item.deviceNo
        adminToken.value = item.adminToken
    }

    function onSubmit(){
        JLSDK.setDevice({
            sn:sn.value,
            adminToken:adminToken.value
        })

        router.push('/info')
    }
</script>
