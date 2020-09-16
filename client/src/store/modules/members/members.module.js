import { normalize } from 'normalizr';
import { Resource } from '@/api/resource';
import { findIndex } from 'lodash';


const state = {
    saved: false,
    data: [],
    selected: {id:'',name:'',email:'',password:'password123',role:'2'},
};

const actions = {
  collect({commit},query) {
        Resource.query(query).then(response=>{
         commit('DATA_FETCHED', response);
         });
      },
   store({commit},payload){
       Resource.save(payload).then(response=>{
          commit('DATA_SAVED', response);
         });
   },
   update({commit},payload){
        Resource.update(payload).then(response=>{
          commit('DATA_UPDATED', response);
         });
   },
   destroy({commit},payload){
        Resource.destroy(payload).then(response=>{
          commit('DATA_DELETED', response);
         });
   }



};

const mutations = {
     DATA_FETCHED(state, payload) {
      state.data = payload.data;
     },
     DATA_SAVED(state,payload){
       state.data.push(payload);
     },
     DATA_UPDATED(state,payload){
        state.data.map(item => {
          if (item.id == payload.id)
            Object.assign(item, payload);
        });
     },
     DATA_DELETED(state, payload) {
       let item = findIndex(state.data, {'id' : payload.id})
       state.data.splice(item,1);
    },

};

const getters = {
   current: (state) => (id) => {
             //  state.data.filter(data => data.id === id);
       return state.data.filter(data =>{
                  if(data.id === id){
                    state.selected = data
                    return data;
                  }
              });
    }
};


export const members = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
