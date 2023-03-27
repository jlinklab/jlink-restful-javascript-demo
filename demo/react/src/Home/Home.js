import { useState } from 'react';
import { useNavigate } from 'react-router';
import JLSDK from '../sdk';

function Home(){
    
    const [appSecret, setAppSecret] = useState('90f8bc17be2a425db6068c749dee4f5d')
    const [movedCard, setMovedCard] = useState(2)
    const [appKey, setAppKey] = useState('0621ef206a1d4cafbe0c5545c3882ea8')
    const [uuid, setUuid] = useState('e0534f3240274897821a126be19b6d46')

    let navigate = useNavigate()
    function navigateTo(path){
        navigate(path)
    }

    function onChangeAppSecret(ev){
        setAppSecret(ev.target.value)
    }
    function onChangeMovedCard(ev){
        setMovedCard(ev.target.value)
    }
    function onChangeAppKey(ev){
        setAppKey(ev.target.value)
    }
    function onChangeUuid(ev){
        setUuid(ev.target.value)
    }

    function onSubmit(){
        
        JLSDK.init({
            authorizationAppKey: appKey,
            lang: navigator.language,
            appSecret:appSecret,
            movedCard:movedCard,
            appKey:appKey,
            uuid:uuid
        })
        navigateTo('/register')
    }

    return (
        <div id='app'>
            <form>
                <h3>Initialization</h3>
                <label>
                    <span>appSecret</span>
                    <input type="text" value={appSecret} onChange={onChangeAppSecret}/>
                </label>
                <label>
                    <span>movedCard</span>
                    <input type="text" value={movedCard} onChange={onChangeMovedCard}/>
                </label>
                <label>
                    <span>appKey</span>
                    <input type="text" value={appKey} onChange={onChangeAppKey}/>
                </label>
                <label>
                    <span>uuid</span>
                    <input type="text" value={uuid} onChange={onChangeUuid}/>
                </label>
                <label>
                    <button type="button" onClick={onSubmit}>Next</button>
                </label>
            </form>
            <div>
                Field Description：
                <a href="https://developer.jftech.com/docs/?menusId=e65803db0d0b446bb8bca02c6010f9f7&lang=en" target="_blank">https://developer.jftech.com/docs/?menusId=e65803db0d0b446bb8bca02c6010f9f7&lang=en</a>
            </div>
        </div>
    )
}

export default Home