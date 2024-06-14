import { createWebHistory, createRouter } from 'vue-router'


// Import delle Pagine dell'Applicativo
import AppHome from './pages/AppHome.vue'
import AppContact from './pages/AppContact.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppProject from './pages/AppProject.vue'
import AppNotFound from './pages/AppNotFound.vue'


// Creazione delle Rotte

const routes = [

    { 
        path: '/', name:'home', component:AppHome 
    },

    { 
        path: '/contact', name:'contact', component: AppContact 
    },

    {
        path: '/portfolio', name:'portfolio', component: AppPortfolio 
    },

    {
        path: '/portfolio/:slug', name:'projects.show', component: AppProject, props: true 
    },
        
    {   // will match everything and put it under `route.params.pathMatch`
        path: '/:pathMatch(.*)*', name: 'NotFound', component: AppNotFound 
    },

]


const router = createRouter({

    history: createWebHistory(),

    routes: routes,

})


export default router