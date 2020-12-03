import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store.js'

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import MovieDeatil from './components/MovieDetail.vue';
import Movies from './components/Movies.vue';
import Notfound from './components/Notfound.vue';
import ReviewCreate from './components/ReviewCreate.vue';
import SignUp from './components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token){next()}
            else{next('/signin')}
    }},
    {path: '/signin', component: Login},
    {path: '/movies', component: Movies},
    {path: '/movies/:pk', component: MovieDeatil,
        childern: [
            {path: 'review', component: ReviewCreate}
        ]},
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: Notfound}


]

export default new VueRouter ({mode: 'history', routes})