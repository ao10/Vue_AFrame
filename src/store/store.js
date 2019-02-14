import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        camera_position: ["0", "1.6", "0"],
        box_positions: [
            // Box 1 (Top-Left)
            ["-4.4", "0.5", "-8"],
            // Box 2 (Top-Right)
            ["4.4", "0.5", "-8"],
            // Box 3 (Bottom-Left)
            ["-4.4", "0.5", "8"],
            // Box 4 (Bottom-Right)
            ["4.4", "0.5", "8"]
        ],
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
            // console.log(state);
            state.count++;
            // console.log(state);
        },
        activateTour(state) {
            // console.log(state);
            state.tourIsOn = true;
            // console.log(state);
        },
        deactivateTour(state) {
            // console.log(state);
            state.tourIsOn = false;
            // console.log(state);
        }
    },

    // https://vuex.vuejs.org/guide/getters.html
    getters: {

        getCameraPosition: state => {
            return state.camera_position;
        },

        getTourState: state => {
            return state.tourIsOn;
        },

        getBox1: state => {
            return state.box_positions[0];
        },

        getBox2: state => {
            return state.box_positions[1];
        },

        getBox3: state => {
            return state.box_positions[2]
        },

        getBox4: state => {
            return state.box_positions[3]
        },
        
        getCamera1: state => {
            return state.tour_positions[0]
        },

        getCamera2: state => {
            return state.tour_positions[1]
        },

        getCamera3: state => {
            return state.tour_positions[2]
        },

        getCamera4: state => {
            return state.tour_positions[3]
        }
    }
});