<template>
  <main class="content">
    <form>
        <h3>Register</h3>
        <label>
            <span>username</span>
            <input type="text" v-model="name" />
        </label>
        <label>
            <span>password</span>
            <input type="password" v-model="password" />
        </label>
        <label>
            <span>confirm password</span>
            <input type="password" v-model="confirmPass" />
        </label>
        <label>
            <span>email</span>
            <div style="display: flex; justify-items: center; align-items: center;">
                <input type="text" v-model="mail" style="flex:1"/>
                <button type="button" @click="onSendCode" style="flex:1">Send code</button>
            </div>
        </label>
        <label>
            <span>code</span>
            <input type="text" v-model="verCode"/>
        </label>
        <label>
            <button type="button" @click="onSubmit">Sign up</button>
            <button type="button" @click="onLogin">Sign in</button>
        </label>
    </form>
  </main>
</template>

<script setup>
    import { ref } from 'vue'
    import router from '../router';

    console.log('JLSDK',JLSDK);

    let name = ref('')
    let password = ref('')
    let confirmPass = ref('')
    let mail = ref('')
    let verCode = ref('')

    function onSendCode(){
        let data = {
            mail:mail.value,
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
            name:name.value,
            password:password.value,
            confirmPass:confirmPass.value,
            mail:mail.value,
            verCode:verCode.value
        }
        JLSDK.login(data).then(res => {
            const result = JSON.parse(decodeURIComponent(res.data || '{}'))
            console.log(result)
            if(result.code === 2000){
                router.push('/login')
            }
        })
    }

    function onLogin(){
        router.push('/login')
    }
</script>