import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ef6588d4 = () => interopDefault(import('../pages/comunidade/index.vue' /* webpackChunkName: "pages/comunidade/index" */))
const _120d3f48 = () => interopDefault(import('../pages/conta/index.vue' /* webpackChunkName: "pages/conta/index" */))
const _106a2112 = () => interopDefault(import('../pages/info/index.vue' /* webpackChunkName: "pages/info/index" */))
const _aa8992b4 = () => interopDefault(import('../pages/sobre/index.vue' /* webpackChunkName: "pages/sobre/index" */))
const _16c604ee = () => interopDefault(import('../pages/testes/index.vue' /* webpackChunkName: "pages/testes/index" */))
const _4fb146da = () => interopDefault(import('../pages/auth/signin.vue' /* webpackChunkName: "pages/auth/signin" */))
const _79d53e50 = () => interopDefault(import('../pages/auth/signout.vue' /* webpackChunkName: "pages/auth/signout" */))
const _05640f08 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/comunidade",
    component: _ef6588d4,
    name: "comunidade"
  }, {
    path: "/conta",
    component: _120d3f48,
    name: "conta"
  }, {
    path: "/info",
    component: _106a2112,
    name: "info"
  }, {
    path: "/sobre",
    component: _aa8992b4,
    name: "sobre"
  }, {
    path: "/testes",
    component: _16c604ee,
    name: "testes"
  }, {
    path: "/auth/signin",
    component: _4fb146da,
    name: "auth-signin"
  }, {
    path: "/auth/signout",
    component: _79d53e50,
    name: "auth-signout"
  }, {
    path: "/",
    component: _05640f08,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
