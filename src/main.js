
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyB51cuf-QqUtA0BQNjBevF9KZr_ceAeO48",
  authDomain: "",
  databaseURL: "https://waspycalendar.firebaseio.com",
  projectId: "waspycalendar",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')