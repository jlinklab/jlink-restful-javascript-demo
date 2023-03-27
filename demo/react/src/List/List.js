import { PureComponent } from 'react'
import JLSDK from '../sdk';
import enhanceUseNavigate from '../enhanceUseNavigate';

export class List extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            userId:'',
            groupList:[],
            groupId:'',
            deviceList:[],
            sn:'',
            adminToken:''
        }
    }

    onChangeSn(ev){
        this.setState({
            sn:ev.target.value
        })
    }
    onChangeAdminToken(ev){
        this.setState({
            adminToken:ev.target.value
        })
    }

    componentDidMount(){
        this.userinfo2()
        this.iotGetUserGroupListByPage()
    }

    userinfo2(){
        JLSDK.userinfo2().then(res => {
            const result = JSON.parse(decodeURIComponent(res.data || '{}'))
            let userId = result.data.userId
            this.setState({
                userId:userId
            })
        })
    }

    iotGetUserGroupListByPage(){
        let data = {
            page: 1,
            limit: 999
        }
        JLSDK.iotGetUserGroupListByPage(data).then(res => {
            let groupList = res && res.data && res.data.data && res.data.data.data || []
            this.setState({
                groupList:groupList
            })
        })
    }

    iotGetDeviceListByPage(){
        let data = {
            userGroupId:this.state.groupId,
            page: 1,
            limit: 999
        }
        JLSDK.iotGetDeviceListByPage(data).then(res => {
            let deviceList = res && res.data && res.data.data && res.data.data.data || []
            this.setState({
                deviceList:deviceList
            })
        })
    }

    onChange(ev){
        this.setState({
            groupId:ev.target.value
        },()=>{
            this.iotGetDeviceListByPage()
        })
    }

    onClick(item){
        this.setState({
            sn: item.deviceNo,
            adminToken: item.adminToken
        })
    }

    onSubmit(){
        JLSDK.setDevice({
            sn:this.state.sn,
            adminToken:this.state.adminToken
        })
        this.props.router.navigate('/info')
    }

    render(){
        return (
            <div id='app'>
                <div className="content">
                    <div style={{textAlign: 'center'}}>
                        <h3>Family</h3>
                        <select onChange={this.onChange.bind(this)}>
                        <option key='' value='' >select</option>
                            {
                                this.state.groupList.map(item => {
                                    return <option key={item.id} value={item.id} >{item.groupName} </option>
                                })
                            }
                        </select>
                    </div>
                    <div style={{clear:'both',overflow: 'hidden'}}>
                        {
                            this.state.deviceList.map(item => {
                                return <div className="item" key={item.deviceNo} onClick={this.onClick.bind(this,item)}>{ item.deviceName }</div>
                            })
                        }
                    </div>
                    
                    <form>
                        <h3>Get or customize device information</h3>
                        <label>
                            <span>sn</span>
                            <input type="text" defaultValue={this.state.sn} onChange={this.onChangeSn.bind(this)}/>
                        </label>
                        <label>
                            <span>adminToken</span>
                            <input type="text" defaultValue={this.state.adminToken} onChange={this.onChangeAdminToken.bind(this)}/>
                        </label>
                        <label>
                            <button type="button" onClick={this.onSubmit.bind(this)}>Device login</button>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default enhanceUseNavigate(List)