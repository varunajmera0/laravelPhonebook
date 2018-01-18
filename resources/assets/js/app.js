require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var Myheader = require('./components/MyHeader.vue');
var Myfooter = require('./components/MyFooter.vue');
var Home = require('./components/Home.vue');
var About = require('./components/About.vue');


const routes =[
    { path: '/home', component: Home },
    { path: '/about', component: About }
    ];

const router = new VueRouter({
    // mode: 'history',
    routes // short for `routes: routes`
})
const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,
                Myfooter}
});
