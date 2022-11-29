<template>
  <header style="z-index: 10;">
        <div class="container">
            <div class="logo">
                <a href=""><img src="/images/logo.png"  /></a>
            </div>
            <div class="menu">
                <nav>
                    <div class="menumobile">
                        <div class="mm_line"></div>
                        <div class="mm_line"></div>
                        <div class="mm_line"></div>
                    </div>
                    <ul>
                       <li :class="{'active' : $nuxt.$route.path === '/'}"><a href="/">PÁGINA INICIAL</a></li>
                       <li :class="{'active' : $nuxt.$route.path === '/info'}"><a href="/info">INFORMAÇÕES</a></li> 
                       <li :class="{'active' : $nuxt.$route.path === '/testes'}"><a href="/testes">TESTES</a></li>
                       <li :class="{'active' : $nuxt.$route.path === '/comunidade'}"><a href="/comunidade">COMUNIDADE</a></li>
                       <li :class="{'active' : $nuxt.$route.path === '/sobre'}"><a href="/sobre">SOBRE NÓS</a></li>
                       <li :class="{'active' : $nuxt.$route.path === '/conta'}"><a href="/conta"> {{ returnLogin }}</a></li>
                    </ul>
                </nav>  
            </div>
        </div>
    </header>

</template>

<script>
export default {
    computed: {
    returnLogin(){
        try{
            return this.$nuxt.$fire.auth.currentUser.email ? this.$nuxt.$fire.auth.currentUser.email : 'LOGIN'
        } catch {
            return 'LOGIN'
        }
    }
}
}

</script>

<style>

</style>