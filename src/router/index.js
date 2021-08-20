import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/pages/Home"
import SinglePage from "../components/pages/singlePage"
import Login from "../components/authentication/login"
import Register from "../components/authentication/register"
import DashHome from "../components/dash/home"
import Dashboard from "../components/dash/dashboard"
import Checkout from "../components/dash/checkout"
Vue.use(VueRouter)
const routes=[
    {
        path:"/",
        name: "Home",
        component:Home
    },
    {
        path:"/singlepage",
        name:"SinglePage",
        component: SinglePage
    },
    {
        path:"/login",
        name: "Login",
        component: Login,
        
    },
    {
        path:"/register",
        name: "Register",
        component: Register,
        
    },{
        path:"/dash",
        name:"DashHome",
        component: DashHome,
        children:[
            {
                path:"/",
                name:"Dashboard",
                component:Dashboard
            },
            {
                path:"/checkout",
                name:"Checkout",
                component: Checkout
            }
        ]
    }

]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;
  