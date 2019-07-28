import Vue from 'vue'
import Router from 'vue-router'
import AddPackage from "@/components/AddPackage";
import RookieStation from "@/views/RookieStation";
import BookPickUp from "@/components/BookPickUp";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'RookieStation',
      component: RookieStation
    },
    {
      path: '/customer',
      name: 'BookPickUp',
      component: BookPickUp
    },
    { path: '/add',
      name:'addPackage',
      component: AddPackage
    }
  ]
})
