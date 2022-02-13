import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    component:()=>import('../views/Home.vue'),
    children:[
      {path:"dashboard",component:()=>import('../views/dashboard.vue')}
    ]
  },
  {
    path:'/login',
    component:()=>import('../views/Login.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
    let state=localStorage.getItem('online')
    console.log("state:",state)
    console.log("to:",to.path)
    console.log("from",from.path)
    if(!state && to.fullPath!='/login'){
      next("/login")
    }
    next()
})
export default router
