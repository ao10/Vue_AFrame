<template>
  <div id="app" class="md-layout" style="height: 100%">

    <div class="md-layout-item md-size-25" style="height: 100%">
      <h1>Hello World</h1>
    </div>

    <div class="md-layout-item md-size-75" style="height: 900px">
      <TestScene></TestScene>      
    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import Vuex from 'vuex'

import 'vue-material/dist/vue-material.min.css'

import TestScene from './components/TestScene.vue';

Vue.use(Vuex)
Vue.use(VueMaterial);

export default {
  name: 'app',
  components: {
    // HelloWorld,
    TestScene
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
