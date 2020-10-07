import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(axios);
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        users: []
    },
    actions:{
        loadUsers({commit}){
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(data => {
                    console.log(data.data)
                    let users = data.data
                    //users = _.filter(users, {id: 1});
                    commit('SET_USERS', users)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
    mutations: {
        SET_USERS(state, payload){
            state.users = payload
        }
    },
    
})