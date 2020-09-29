import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: "/regist",
    name: "Regist",
    component: ()=>import("../views/regist")
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue")
  },
  {
    path:'/homepage',
    name:'HomePage',
    redirect:'/homepage/center/userinfo',
    component:()=>import("../views/homepage.vue"),
    children:[
      {
        path:"center",
        name:"Center",
        redirect:"/homepage/center/userinfo",
        component:()=>import("../views/center.vue"),
        children:[
          {
            path:"record",
            name:"Record",
            component:()=>import("../views/record")
          },
          {
            path:"userinfo",
            name:"UserInfo",
            component:()=>import("../views/userinfo")
          }
        ]
      },
      {
        path:"price",
        name:"Price",
        component:()=>import("../views/price.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
  if(!(to.name=="Login"||to.name=="Regist")){
    const isLogin=JSON.parse(localStorage.getItem("userInfo"))||"";
    if(!isLogin){
      next({
        name:"Login"
      });
    }else{
      next();
    }
  }else{
    next();
  }  
})

export default router;
