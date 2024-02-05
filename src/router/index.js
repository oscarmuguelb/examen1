import VueRouter from 'vue-router'
import Vue from 'vue'
import Inicio from '../components/Inicio.vue'
import Error404 from '../views/ErrorPages/Error404.vue'
import Formulario from '../components/Formulario.vue'
import Paginacion from '../components/Paginacion.vue'
import LandingPage from '../components/LandingPage.vue'

Vue.use(VueRouter)
const routes =[
    //la ruta base 
    {
        path:'/',
        name:'inicio',
        component: Inicio 
    },
    {
        path:"/",
        
        component:{
            render(c){
                return c('router-view');
            },
        },
        children:[
            {
                path:'/404',
                name:'404',
                component: Error404 
            },
            {
                path:'/formulario',
                name:'formulario',
                component: Formulario 
            },
            {
                path:'/paginacion',
                name:'paginacion',
                component: Paginacion
            },
            {
                path:'/landingpage',
                name:'landingpage',
                component: LandingPage
            },
            {
                path:'*',
                redirect: '/404'
            }
        ]
    }
]
const router = new VueRouter({routes,})
export default router;