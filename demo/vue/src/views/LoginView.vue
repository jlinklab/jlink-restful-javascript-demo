<template>
  <main class="content">
    <form>
        <h3>Login</h3>
        <label>
            <span>username</span>
            <input type="text" v-model="account" />
        </label>
        <label>
            <span>password</span>
            <input type="password" v-model="pass" />
        </label>
        <label>
            <button type="button" @click="onSubmit">Sign in</button>
        </label>
    </form>
  </main>
</template>

<script setup>
    import { ref } from 'vue'
    import router from '../router';

    console.log('JLSDK',JLSDK);

    let account = ref('')
    let pass = ref('')

    function onSubmit(){
        let data = {
            account:account.value,
            pass:pass.value
        }
        JLSDK.login(data).then(res => {
            const result = JSON.parse(decodeURIComponent(res.data || '{}'))
            let authorization = result.data.accessToken
            console.log('res',res,'result',result,'authorization',authorization);
            JLSDK.authorize(authorization) 
            router.push('/list')
        })
    }
</script>