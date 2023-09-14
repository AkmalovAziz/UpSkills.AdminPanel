import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: ()=> import("../Layout/Layout.vue"),
      redirect: "/dashboard",
      children: [
        {
          path: "dashboard",
          component: ()=> import("../views/Dashboard/DashboardView.vue")
        },
        {
          path: "users",
          component: ()=> import("../views/Users/UsersView.vue")
        },
        {
          path: "categories",
          component: ()=> import("../views/Categories/CategoriesView.vue")
        },
        {
          path: "courses",
          component: ()=> import("../views/Courses/CourseView.vue")
        },
        {
          path: "orders",
          component: ()=> import("../views/Orders/OrdersView.vue")
        },
        {
          path: "auth/login",
          component: ()=> import("../views/auth/LoginView.vue")
        }  
      ]
    }
  ]
})

export default router