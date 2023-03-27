import { useState } from 'react';
import { useNavigate } from 'react-router';
import JLSDK from '../sdk';

function Register(){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [mail, setMail] = useState('')
    const [verCode, setVerCode] = useState('')

    function onChangeName(ev){
        setName(ev.target.value)
    }
    function onChangePassword(ev){
        setPassword(ev.target.value)
    }
    function onChangeConfirmPass(ev){
        setConfirmPass(ev.target.value)
    }
    function onChangeMail(ev){
        setMail(ev.target.value)
    }
    function onChangeVerCode(ev){
        setVerCode(ev.target.value)
    }

    let navigate = useNavigate()
    function navigateTo(path){
        navigate(path)
    }

    // 发送邮箱验证码
    function onSendCode(){
        let data = {
            mail:mail,
            type:'re',
            language:1,
            username:''
        }
        JLSDK.scmail(data).then(res => {
            const result = JSON.parse(decodeURIComponent(res.data || '{}'))
            console.log(result);
        })
    }

    function onSubmit(){
        let data = {
            name:name,
            password:password,
            confirmPass:confirmPass,
            mail:mail,
            verCode:verCode
        }
        JLSDK.login(data).then(res => {
            const result = JSON.parse(decodeURIComponent(res.data || '{}'))
            console.log(result);
            if(result.code === 2000){
                navigateTo('/login')
            }
        })
    }

    function onLogin(){
        navigateTo('/login')
    }

    return (
        <div id='app'>
            <form>
                <h3>Register</h3>
                <label>
                    <span>username</span>
                    <input type="text" value={name} onChange={onChangeName}/>
                </label>
                <label>
                    <span>password</span>
                    <input type="password" value={password} onChange={onChangePassword}/>
                </label>
                <label>
                    <span>confirm password</span>
                    <input type="password" value={confirmPass} onChange={onChangeConfirmPass}/>
                </label>
                <label>
                    <span>email</span>
                    <div style={{flex:3,display: 'flex'}}>
                        <input type="text" value={mail} onChange={onChangeMail}/>
                        <button type="button" onClick={onSendCode}>Send code</button>
                    </div>
                </label>
                <label>
                    <span>code</span>
                    <input type="text" value={verCode} onChange={onChangeVerCode}/>
                </label>
                <label>
                    <button type="button" onClick={onSubmit}>Sign up</button>
                    <button type="button" onClick={onLogin}>Sign in</button>
                </label>
            </form>
        </div>
    )
}

export default Register