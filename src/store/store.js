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
        tourIsOn: false
    },

    mutations: {
        increment(state) {
            console.log(state);
            state.count++;
            console.log(state);
        },
        activateTour(state) {
            console.log(state);
            state.tourIsOn = true;
            console.log(state);
        },
        deactivateTour(state) {
            console.log(state);
            state.tourIsOn = false;
            console.log(state);
        }
    },

    // https://vuex.vuejs.org/guide/getters.html
    getters: {
        getBox1: state => {
            return state.tour_positions[0]
        },
        getBox2: state => {
            return state.tour_positions[1]
        },
        getBox3: state => {
            return state.tour_positions[2]
        },
        getBox4: state => {
            return state.tour_positions[3]
        }
    }
});