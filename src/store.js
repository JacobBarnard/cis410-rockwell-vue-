import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        movies: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeMovies(state, myMovies){
            state.movies = myMovies
        }
    },
    actions:{
        getMovies({commit}){
            axios.get('/movies')
            .then((myResponse)=>{
                console.log("response from getMovies action", myResponse)
                commit('storeMovies', myResponse.data)
            })
            .catch(()=>{console.log("error getting movies")})
        }
    }
})