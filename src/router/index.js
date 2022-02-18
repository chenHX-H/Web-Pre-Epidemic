import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {path:'/',
   redirect:'/dashboard'
  },
  {
    path:'/',
    component:()=>import('../views/Home.vue'),
    children:[
      {path:"dashboard",component:()=>import('../views/dashboard.vue')},
      {path:'/material', component:()=>import('../views/material.vue')},
      {path:'/chinaMap',component:()=>import('../components/ChinaMap.vue')}
    ]
  },
  {
    path:'/login',
    component:()=>import('../views/Login.vue')
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
    let state=localStorage.getItem('user')
    if(!state && to.fullPath!='/login'){
      next("/login")
    }
    next()
})
export default router
