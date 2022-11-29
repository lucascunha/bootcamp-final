<template>
    <div style="padding-top: 30px;">
      <h1>Bem vindo ao dashboard</h1>
      <p>Voce esta logado em  {{ $nuxt.$fire.auth.currentUser.email }}</p>
      <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
      <v-btn @click="$router.push('/')">home</v-btn>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
    return {
      data: '',
    }
  },
    async mounted() {
    try{
     if(!$nuxt.$fire.auth.currentUser.email)
     {
        this.$router.push('/auth/signin')
     }
    } catch {
        this.$router.push('/auth/signin')
    }
    try{
      this.data = await this.$axios.$get(
          `http://localhost:4000/unidades`,
          {},
        )
    } catch {
    }
  },
    
  }
  </script>
  