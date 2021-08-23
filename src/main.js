import Vue from 'vue'
import Chakra, {CThemeProvider, CReset} from '@chakra-ui/vue'
import router from "./router";
import { auth } from './firebase-config'
import Flutterwave from 'vue-flutterwave'

// var config = {
//   apiKey: "AIzaSyA40chCsqWoV0aYBxzTBR4t5tmjdcl5nNI",
//   authDomain: "jeff-project-da8ea.firebaseapp.com",
//   projectId: "jeff-project-da8ea",
//   storageBucket: "jeff-project-da8ea.appspot.com",
//   messagingSenderId: "24460730722",
//   appId: "1:24460730722:web:fc08bdfb3d7c831c68cc3b",
//   measurementId: "G-E5WJBCKZPG"
// };
//
// firebase.initializeApp(config);
// import store from "./store";
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-15c072025c5e56e99e4c859a7e0660b4-X' })

Vue.use(Chakra)


new Vue({
  router,
  // store,
  render: (h) => h(CThemeProvider, [h(CReset),h(App)])
}).$mount("#app");

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(CThemeProvider, [h(CReset),h(App)])
    }).$mount('#app')
  }

  if (user) {
    console.log(user)
    // store.dispatch('fetchUserProfile', user)
    //  router.push('/dash')
  }
})
