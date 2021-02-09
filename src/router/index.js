import Vue from 'vue'
import VueRouter from 'vue-router'
import Bank from '../views/Bank.vue'
import Transactionhistory from "@/views/Transactionhistory";
Vue.use(VueRouter)

const routes = [
  {
    path: '/Bank',
    name: 'Bank',
    component: Bank
  },
  {
    path: '/Transactionhistory',
    name: 'Transactionhistory',
    component: Transactionhistory
  }

]

const router = new VueRouter({
  routes
})

export default router
