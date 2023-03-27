<template>
    <view id="app">
        <view>
            <button @click="propIncludes">Child lock</button>
            <view>{{ hasChildLockSwitch }}</view>
        </view>
        <view>
            <button @click="iotPropStatus">Getting device status</button>
            <view>{{ status }}</view>
        </view>
        <view>
            <button @click="iotQueryTotalElectricity">Electricity</button>
            <view>{{ total }}</view>
        </view>
        <view>
            <button @click="getInfo">Basic information</button>
            <view>
                {{ info }}
            </view>
        </view>
        <view>
            <button @click="tapOnOff">{{ !onOff?'on':'off' }}</button>
            <view>
                {{ onOffData }}
            </view>
        </view>

        <view class="popup" v-if="loading">loading</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            hasChildLockSwitch: null,
            status: '',
            total: '',
            info: '',
            onOff:false,
            onOffData:''
        }
    },
    onShow() {
        console.log('JLSDK',JLSDK);
        this.getPowerSwitch()
    },
    methods: {
        propIncludes() {
            this.loading = true
            JLSDK.propIncludes(['childLockSwitch']).then(res => {
                this.hasChildLockSwitch = res
                this.loading = false
                console.log('JLSDK',JLSDK);
            }).catch(err => {
                this.loading = false
                console.log('propIncludes err:',err);
            })
        },
        iotPropStatus() {
            this.loading = true
            JLSDK.iotPropStatus({
                sn: JLSDK.sn,
                props: ['plugCurrent', 'plugPower', 'plugVoltage']
            }).then(res => {
                this.status = res.data.data
                this.loading = false
                console.log('JLSDK',JLSDK);
            }).catch(err => {
                this.loading = false
                console.log('iotPropStatus err:',err);
            })
        },
        iotQueryTotalElectricity() {
            this.loading = true
            JLSDK.iotQueryTotalElectricity({
                deviceSn: JLSDK.sn,
            }).then(res => {
                this.total = res.data.data
                this.loading = false
                console.log('JLSDK',JLSDK);
            }).catch(err => {
                this.loading = false
                console.log('iotQueryTotalElectricity err:',err);
            })
        },
        getInfo() {
            this.loading = true
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
                this.info = res.data.data.SystemInfo
                this.loading = false
                console.log('JLSDK',JLSDK);
            }).catch(err => {
                this.loading = false
                console.log('getInfo err:',err);
            })
        },
        getPowerSwitch() {
            this.loading = true
            
            let data = {
                sn: JLSDK.sn,
                props: ['powerSwitch']
            }

            JLSDK.iotPropGet(data)
            .then(response => {
                if(response && response.data && response.data.code === 2000 && response.data.data && response.data.data.Ret === 100){
                    this.onOff = response.data.data.props && response.data.data.props.powerSwitch && response.data.data.props.powerSwitch.action === 'ON'
                    this.onOffData = response.data
                }
                this.loading = false
            })
            .catch(err => {
                this.loading = false
                console.log(err)
            })
        },
        tapOnOff() {
            this.loading = true
            let data = {
                sn: JLSDK.sn,
                props: {
                    powerSwitch: 'SWITCH'
                }
            }
            JLSDK.iotPropSet(data)
            .then(res => {
                if(res && res.data && res.data.code === 2000 && res.data.data.Ret === 100){
                    this.onOff = !this.onOff
                    this.onOffData = res.data
                }
                this.loading = false
            }).catch(err => {
                this.loading = false
                console.log(err)
            })
        }
    }
}
</script>