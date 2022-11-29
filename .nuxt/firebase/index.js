import createApp from './app.js'

import authService from './service.auth.js'

const appConfig = {"apiKey":"AIzaSyDERR0qw7KbcVKw3eK3QKD97lOQE7IGCAE","authDomain":"bootcamp-impacta.firebaseapp.com","projectId":"bootcamp-impacta","storageBucket":"bootcamp-impacta.appspot.com","messagingSenderId":"626445280778","appId":"1:626445280778:web:23ac6acb1a55e3da1aa1f3"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}