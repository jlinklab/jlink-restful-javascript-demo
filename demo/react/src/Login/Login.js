import { useState } from 'react';
import { useNavigate } from 'react-router';
import JLSDK from '../sdk';

function Login(){

    const [account, setAccount] = useState('')
    const [pass, setPass] = useState('')

    function onChangeAccount(ev){
        setAccount(ev.target.value)
    }

    function onChangePass(ev){
        setPass(ev.target.value)
    }

    let navigate = useNavigate()
    function navigateTo(path){
        navigate(path)
    }

    function onSubmit(){
        let data = {
            account:account,
            pass:pass
        }
        JLSDK.login(data).then(res => {
            const result = JSON.parse(decodeURIComponent(res.data || '{}'))
            let authorization = result.data.accessToken
            JLSDK.authorize(authorization) 
            navigateTo('/list')
        })
    }

    return (
        <div id='app'>
            <form>
                <h3>Login</h3>
                <label>
                    <span>username</span>
                    <input type="text" value={account} onChange={onChangeAccount}/>
                </label>
                <label>
                    <span>password</span>
                    <input type="password" value={pass} onChange={onChangePass}/>
                </label>
                <label>
                    <button type="button" onClick={onSubmit}>Sign in</button>
                </label>
            </form>
        </div>
    )
}

export default Login