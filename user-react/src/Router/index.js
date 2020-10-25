import React from 'react';

/* pages */
import HomePage from '../Feature/HomePage/HomePage';
import UserCenter from '../Feature/UserCenter/UserCenter';
import Mall from '../Feature/Mall/Mall';

export const routerConfig = [
  {
    path:'/homepage',
    component: HomePage
  },
  {
    path:'/usercenter',
    component: UserCenter
  },
  {
    path:'/mall',
    component: Mall
  },
  {
    path:'*',
    component:()=>{
      return (
        <div>404</div>
      );
    }
  },
];