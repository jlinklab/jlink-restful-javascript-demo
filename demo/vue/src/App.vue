<script setup>
import { RouterView } from 'vue-router'
// 初始化
JLSDK.init({
    authorizationAppKey: '7f60e376151ac5341e53dfa76e51847e',
    lang: navigator.language,
    appSecret:'90f8bc17be2a425db6068c749dee4f5d',
    movedCard:2,
    appKey:'0621ef206a1d4cafbe0c5545c3882ea8',
    uuid:'e0534f3240274897821a126be19b6d46'
})
</script>

<template>
    <div>
        <RouterView />
    </div>
</template>

<style>
#app{
    width: 500px;
}
.content {
    padding: 20px;
}
h3{
    text-align: center;
    padding: 10px 0;
}
label{
    display: flex;
    align-items: center;
    padding: 4px 20px;
}
label span{
    flex: 1;
    padding-right:10px;
    text-align: right;
}
label input{
    flex: 3;
    padding: 8px;
    border: 1px solid #EEE;
}
label button{
    width: 100%;
}
.item{
    display: inline-block;
    float: left;
    width: 40%;
    margin: 2%;
    background:#cededf;
    padding:2%;
}
.popup {
    position: fixed;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    background: rgba(0, 0, 0, 0.75);
    text-align: center;
    line-height: 100px;
    color: white;
}
div button {
    margin: 10px 0;
}
</style>
