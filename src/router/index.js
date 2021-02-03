import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import PostSingle from '../views/PostSingle.vue';
import Users from '../views/Users.vue';
import UserSingle from '../views/UserSingle.vue';
import Comments from '../views/Comments.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },

  {
    path: '/posts/:id',
    name: 'PostSingle',
    component: PostSingle,
  },

  // users
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },

  {
    path: '/users/:id',
    name: 'UserSingle',
    component: UserSingle,
  },

  // Comments
  {
    path: '/comments',
    name: 'Comments',
    component: Comments,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
