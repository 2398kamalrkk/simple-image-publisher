import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";
import locale from 'element-ui/lib/locale/lang/en'
// import './assets/element-variables.scss'

Vue.use(ElementUI, {locale});
import App from './App.vue'

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyCfY2lrJThKUEg1ZTe5p0jxffCdSOd33yM",
    authDomain: "scenaries-7c397.firebaseapp.com",
    databaseURL: "https://scenaries-7c397.firebaseio.com",
    projectId: "scenaries-7c397",
    storageBucket: "scenaries-7c397.appspot.com",
    messagingSenderId: "907399479158",
    appId: "1:907399479158:web:72bfaabaed2de7ad7b0457",
    measurementId: "G-B33GK2YMN8"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
