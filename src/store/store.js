import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        tour_positions: [
            // Position 1
            ["0", "1.6", "-10"],
            // Position 2
            ["0", "1.6", "10"],
            // Position 3
            ["0", "1.6", "20"],
            // Position 4
            ["0", "1.6", "10"]
        ],
    },

    mutations: {
        increment(state) {
            state.count++;
        }
    },

    // https://vuex.vuejs.org/guide/getters.html
    getters: {

    }

});