<template>
  <div class="content">
    <div>
        <button @click="propIncludes">Child lock</button>
        <div>{{ hasChildLockSwitch }}</div>
    </div>
    <div>
        <button @click="iotPropStatus">Getting device status</button>
        <div>{{ status }}</div>
    </div>
    <div>
        <button @click="iotQueryTotalElectricity">Electricity</button>
        <div>{{ total }}</div>
    </div>
    <div>
        <button @click="getInfo">Basic information</button>
        <div>
            {{ info }}
        </div>
    </div>
    <div>
        <button @click="tapOnOff">{{ !onOff?'on':'off' }}</button>
        <div>
            {{ onOffData }}
        </div>
    </div>

    <div class="popup" v-if="loading">loading</div>
</div>
</template>

<script setup>
    import { ref } from 'vue'
    console.log('JLSDK',JLSDK);

    let loading = ref(false)
    let hasChildLockSwitch = ref(null)
    let status = ref('')
    let total = ref('')
    let info = ref('')
    let onOff = ref(false)
    let onOffData = ref('')

    getPowerSwitch()

    function propIncludes() {
        loading.value = true
        JLSDK.propIncludes(['childLockSwitch']).then(res => {
            hasChildLockSwitch.value = res
            loading.value = false
            console.log('JLSDK',JLSDK);
        }).catch(err => {
            loading.value = false
            console.log('propIncludes err:',err);
        })
    }

    function iotPropStatus() {
        loading.value = true
        JLSDK.iotPropStatus({
            sn: JLSDK.sn,
            props: ['plugCurrent', 'plugPower', 'plugVoltage']
        }).then(res => {
            status.value = res.data.data
            loading.value = false
            console.log('JLSDK',JLSDK);
        }).catch(err => {
            loading.value = false
            console.log('iotPropStatus err:',err);
        })
    }


    function iotQueryTotalElectricity() {
        loading.value = true
        JLSDK.iotQueryTotalElectricity({
            deviceSn: JLSDK.sn,
        }).then(res => {
            total.value = res.data.data
            loading.value = false
            console.log('JLSDK',JLSDK);
        }).catch(err => {
            loading.value = false
            console.log('iotQueryTotalElectricity err:',err);
        })
    }

    function getInfo() {
        loading.value = true
        JLSDK.getInfo({
            Name: 'SystemInfo'
        }, {
            tokenSuccess: res => {
                console.log('tokenSuccess');
            },
            tokenFail: res => {
                console.log('tokenFail');
            },
            tokenComplete: res => {
                console.log('tokenComplete');
            },
            tokenError: err => {
                console.log('tokenError');
            },
            loginSuccess: res => {
                console.log('loginSuccess');
            },
            loginRetFail: res => {
                console.log('loginRetFail');
            },
            loginFail: res => {
                console.log('loginFail');
            },
            loginError: err => {
                console.log('loginError');
            },
            loginComplete: res => {
                console.log('loginComplete');
            }
        }).then(res => {
            info.value = res.data.data.SystemInfo
            loading.value = false
            console.log('JLSDK',JLSDK);
        }).catch(err => {
            loading.value = false
            console.log('getInfo err:',err);
        })
    }

    function getPowerSwitch() {
        loading.value = true
        
        let data = {
            sn: JLSDK.sn,
            props: ['powerSwitch']
        }

        JLSDK.iotPropGet(data)
        .then(response => {
            if(response && response.data && response.data.code === 2000 && response.data.data && response.data.data.Ret === 100){
                onOff.value = response.data.data.props && response.data.data.props.powerSwitch && response.data.data.props.powerSwitch.action === 'ON'
                onOffData.value = response.data
            }
            loading.value = false
        })
        .catch(err => {
            loading.value = false
            console.log(err)
        })
    }

    function tapOnOff() {
        loading.value = true
        let data = {
            sn: JLSDK.sn,
            props: {
                powerSwitch: 'SWITCH'
            }
        }
        JLSDK.iotPropSet(data)
        .then(res => {
            if(res && res.data && res.data.code === 2000 && res.data.data.Ret === 100){
                onOff.value = !onOff.value
                onOffData.value = res.data
            }
            loading.value = false
        }).catch(err => {
            loading.value = false
            console.log(err)
        })
    }
</script>