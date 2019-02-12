<template>
  <div id="app" class="md-layout" style="height: 100%">

    <!-- Div showing VueX state -->
    <div class="md-layout-item md-size-25" style="height: 900px">
        <md-card md-with-hover>
          <md-ripple>
            <b>
            <md-card-header>VueX State</md-card-header>
            </b>
            <hr>
            <md-card-content>
              Current State:
              
            </md-card-content>
          </md-ripple>
        </md-card>      
    </div>

    <!-- Div with Scene -->
    <div class="md-layout-item md-size-75" style="height: 900px">
      <TestScene></TestScene>      
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import Vuex from 'vuex'

import 'vue-material/dist/vue-material.min.css'

import store from './store/store.js';
import TestScene from './components/TestScene.vue';

Vue.use(Vuex)
Vue.use(VueMaterial);

export default {
  name: 'app',
  store,
  components: {
    // HelloWorld,
    TestScene
  },
  mounted() {
    console.log("AppComponent mounted.");
  }
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
