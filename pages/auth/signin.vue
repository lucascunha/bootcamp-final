<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" align="center" justify="center">
      <v-card width="500" class="pa-5 elevation-1 text-left">
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Entrar na conta</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="auth.email"
            ></v-text-field>

            <v-text-field
              label="Senha"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="auth.password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-btn
            class=" my-2 pa-2 login-button"
            @click="login"
            depressed
            large
            >Login</v-btn
          >
          <v-btn class=" my-2 pa-2 reset-button" @click="forgotPassword" depressed large
            >Esqueceu a senha</v-btn
          >
          <v-divider class="my-3"></v-divider>
          <v-btn
            class="login-button my-2 pa-2"
            width="100%"
            @click="githubLogin"
            depressed
            large
            >
            <v-icon color="black" large>
              mdi-github
            </v-icon>&nbsp;logar com Github
          </v-btn>
          <v-btn
            class="login-button my-2 pa-2"
            width="100%"
            @click="facebookLogin"
            depressed
            large
            >
            <v-icon color="blue" large>
              mdi-facebook
            </v-icon>&nbsp;logar com Facebook
          </v-btn>
          <v-btn
            class="login-button my-2 pa-2"
            width="100%"
            @click="googleLogin"
            depressed
            large
            >
            <v-icon color="red" large>
              mdi-google
            </v-icon>&nbsp;logar com Google
          </v-btn>
      </v-card>
      <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        absolute
        bottom
        center
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/')
      })
    },
    githubLogin() {
      let that = this
      const provider = new $nuxt.$fireModule.auth.GithubAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/')
      })
    },
    facebookLogin() {
let that = this
      const provider = new $nuxt.$fireModule.auth.FacebookAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/')
      })
    },
    googleLogin() {
let that = this
      const provider = new $nuxt.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/')
      })
    },
    forgotPassword() {
      let that = this
      this.$fire.auth.sendPasswordResetEmail(this.auth.email)
      .then(function (){
        that.snackbarText = 'reset link sent to ' + that.auth.email
        that.snackbar = true
      })
      .catch(function (error) {
        that.snackbarText = error.message
        that.snackbar = true
      })
    }
  }
}
</script>