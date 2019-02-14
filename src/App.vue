<template>
  <div id="app" class="md-layout" style="height: 100%">

    <!-- Div showing VueX state -->
    <div class="md-layout-item md-size-25" style="height: 900px">
      <form class="md-layout">
        <md-card md-with-hover>
          <!-- <md-ripple> -->
            <b>
            <md-card-header>VueX State</md-card-header>
            </b>
            <hr>
            <md-card-content>
              Current State: {{ this.getTourState }}
              <div class="md-layout">
                <label>Camera 1 Movement Value: </label>
                <md-field class="md-layout-item md-size:50">
                  <label>X</label>
                  <md-input type="number"></md-input>
                </md-field>

                <md-field class="md-layout-item md-size:20">
                  <label>Y</label>
                  <md-input type="number"></md-input>
                </md-field>

                <md-field class="md-layout-item">
                  <label>Z</label>
                  <md-input type="number"></md-input>
                </md-field>

              </div>

              <md-field>
                <label>Camera 2 Movement Value: </label>
                <md-input type="number"></md-input>
              </md-field>

              <md-field>
                <label>Camera 3 Movement Value: </label>
                <md-input type="number"></md-input>
              </md-field>

              <md-field>
                <label>Camera 4 Movement Value: </label>
                <md-input type="number"></md-input>
              </md-field>


            </md-card-content>
          <!-- </md-ripple> -->
        </md-card>
        </form>
        <md-button class="md-raised md-primary" v-on:click="runTour">Run Tour</md-button>
    </div>
    <!-- Div with Scene -->
    <div class="md-layout-item md-size-75" style="height: 900px">
      <TestScene></TestScene>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import Vuex from 'vuex';
import {mapGetters} from 'vuex';

import 'vue-material/dist/vue-material.min.css';

import store from './store/store.js';
import TestScene from './components/TestScene.vue';

Vue.use(Vuex);
Vue.use(VueMaterial);

export default {
  name: 'app',
  store,
  components: {
    // HelloWorld,
    TestScene
  },

  computed: {
    ...mapGetters([
      'getTourState',
      'getBox1',
      'getBox2',
      'getBox3',
      'getBox4',
      'getCamera1',
      'getCamera2',
      'getCamera3',
      'getCamera4'
    ])
  },

  mounted() {
    // console.log(store);
    console.log("AppComponent mounted.");
    // console.log(this.getTourState);
  },

  watch: {

  },

  methods: {
    runTour: function(event){
      console.log(store);
      store.commit('activateTour');
    },

    moveToOrigin: function(event){
      console.log("Moving to origin");
    }

  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
