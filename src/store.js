import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoading: true
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        }
    },
    actions: {
        startLoading({ commit }) {
            commit('setLoading', true);
        },
        stopLoading({ commit }) {
            commit('setLoading', false);
        }
    }
});