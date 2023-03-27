import { PureComponent } from 'react'
import JLSDK from '../sdk'

export class Info extends PureComponent{
    constructor(){
        super()
        this.state = {
            hasChildLockSwitch:'',
            status:'',
            total:'',
            info:'',
            loading:false,
            onOff:false,
            onOffData:''
        }
    }

    
    componentDidMount(){
        this.getPowerSwitch()
    }

    propIncludes(){
        this.setState({
            loading:true
        })
        JLSDK.propIncludes(['childLockSwitch']).then(res => {
            this.setState({
                hasChildLockSwitch:res,
                loading:false
            })
        }).catch(err => {
            this.setState({
                loading:false
            })
        })
    }

    iotPropStatus(){
        this.setState({
            loading:true
        })
        JLSDK.iotPropStatus({
            sn: JLSDK.sn,
            props: ['plugCurrent', 'plugPower', 'plugVoltage']
        }).then(res => {
            this.setState({
                status:res.data.data,
                loading:false
            })
        }).catch(err => {
            this.setState({
                loading:false
            })
        })
    }

    iotQueryTotalElectricity(){
        this.setState({
            loading:true
        })
        JLSDK.iotQueryTotalElectricity({
            deviceSn: JLSDK.sn,
        }).then(res => {
            this.setState({
                total:res.data.data,
                loading:false
            })
        }).catch(err => {
            this.setState({
                loading:false
            })
        })
    }

    getInfo(){
        this.setState({
            loading:true
        })
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
            this.setState({
                info:res.data.data.SystemInfo,
                loading:false
            })
        }).catch(err => {
            this.setState({
                loading:false
            })
        })
    }

    getPowerSwitch() {
        let data = {
            sn: JLSDK.sn,
            props: ['powerSwitch']
        }

        JLSDK.iotPropGet(data)
        .then(response => {
            if(response && response.data && response.data.code === 2000 && response.data.data && response.data.data.Ret === 100){
                let onOff = response.data.data.props && response.data.data.props.powerSwitch && response.data.data.props.powerSwitch.action === 'ON'
                this.setState({
                    onOff:onOff,
                    onOffData:response.data
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    tapOnOff() {
        this.setState({
            loading:true
        })
        let data = {
            sn: JLSDK.sn,
            props: {
                powerSwitch: 'SWITCH'
            }
        }

        JLSDK.iotPropSet(data)
        .then(res => {
            if(res && res.data && res.data.code === 2000 && res.data.data.Ret === 100){
                this.setState({
                    onOff:!this.state.onOff,
                    onOffData:res.data
                })
            }
            this.setState({
                loading:false
            })
        }).catch(err => {
            this.setState({
                loading:false
            })
            console.log(err)
        })
    }

    render(){
        return (
            <div id='app'>
                <div className="content">
                    <div>
                        <button onClick={this.propIncludes.bind(this)}>Child lock</button>
                        <div>{ JSON.stringify(this.state.hasChildLockSwitch) }</div>
                    </div>
                    <div>
                        <button onClick={this.iotPropStatus.bind(this)}>Getting device status</button>
                        <div>{ JSON.stringify(this.state.status) }</div>
                    </div>
                    <div>
                        <button onClick={this.iotQueryTotalElectricity.bind(this)}>Electricity</button>
                        <div>{ JSON.stringify(this.state.total) }</div>
                    </div>
                    <div>
                        <button onClick={this.getInfo.bind(this)}>Basic information</button>
                        <div>
                            { JSON.stringify(this.state.info) }
                        </div>
                    </div>
                    <div>
                        <button onClick={this.tapOnOff.bind(this)}>
                            {
                                !this.state.onOff ? 'on' : 'off'
                            }
                        </button>
                        <div>
                        { JSON.stringify(this.state.onOffData) }
                        </div>
                    </div>
                    {
                        this.state.loading ? (<div className="popup" >loading</div>) : null
                    }
                    
                </div>
            </div>
        )
    }
}

export default Info