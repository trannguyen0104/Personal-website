import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import VeeValidate from "vee-validate";

// Vue.use(VeeValidate);

Vue.config.productionTip = false


export default {
    components: {}
}

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')