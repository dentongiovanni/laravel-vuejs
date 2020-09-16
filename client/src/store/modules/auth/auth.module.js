import { Auth } from '@/api/authentication';

const state = {
    all: {}
};

const actions = {
    login({ commit },payload) {
         Auth.login(payload)
            .then();
    },

    logout({ commit }) {
 /*      auth.logut()
            .then(
                user => commit('LOGOUT'),
            );*/
    }
};

const mutations = {
    LOGIN(state, users) {
      //  state.all = { items: users };
    },
    LOGOUT(state) {
       // state.all.items = state.all.items.filter(user => user.id !== id)
    },

};

const getters = {
     tokenExpired: state => state.tokenExpired,
};

export const auth = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
};
