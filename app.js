import Vue from 'vue';
import MainApp from '@/MainApp';

window.onload = ()=>{
    new Vue({
        el:"#app",
       render: h => h(MainApp)
    })
}