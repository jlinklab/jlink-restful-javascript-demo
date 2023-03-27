<template>
  <main class="content">
    <form>
        <h3>Initialization</h3>
        <label>
            <span>appSecret</span>
            <input type="text" v-model="appSecret" />
        </label>
        <label>
            <span>movedCard</span>
            <input type="text" v-model="movedCard" />
        </label>
        <label>
            <span>appKey</span>
            <input type="text" v-model="appKey" />
        </label>
        <label>
            <span>uuid</span>
            <input type="text" v-model="uuid" />
        </label>
        <label>
            <button type="button" @click="onSubmit">Next</button>
        </label>
    </form>
    <div>
        Field Description：
        <a href="https://developer.jftech.com/docs/?menusId=e65803db0d0b446bb8bca02c6010f9f7&lang=en" target="_blank">https://developer.jftech.com/docs/?menusId=e65803db0d0b446bb8bca02c6010f9f7&lang=en</a>
    </div>
  </main>
</template>

<script setup>
    import { ref } from 'vue'
    import router from '../router';

    let appSecret = ref('90f8bc17be2a425db6068c749dee4f5d')
    let movedCard = ref(2)
    let appKey = ref('0621ef206a1d4cafbe0c5545c3882ea8')
    let uuid = ref('e0534f3240274897821a126be19b6d46')

    function onSubmit(){
        JLSDK.init({
            authorizationAppKey: appKey.value,
            lang: navigator.language,
            appSecret:appSecret.value,
            movedCard:movedCard.value,
            appKey:appKey.value,
            uuid:uuid.value
        })
        router.push('/register')
    }
</script>