<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to='/'>Rockwell</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/movies">Movies</router-link>
      </li>
       <li class="nav-item">
        <router-link v-if="auth" class="nav-link" to="/account">My Account</router-link>
      </li>
       <li class="nav-item">
        <router-link v-if="!auth" class="nav-link" to="/signIn">
          <button class="btn btn-warning">Sign In</button>
        </router-link>
      </li>
       <li class="nav-item">
        <router-link v-if="!auth" class="nav-link" to="/signUp">
          <button class="btn btn-outline-warning text-dark">Sign Up</button>
        </router-link>
      </li>
       <li class="nav-item">
       
          <button @click="onLogout" v-if="auth" class="btn btn-warning">Logout</button>
      </li>
     
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    computed:{
       auth(){
            return this.$store.state.token
        }
    },
    methods:{
      onLogout(){
        this.$store.dispatch("logout")
      }
    }
}
</script>

<style scoped>

</style>