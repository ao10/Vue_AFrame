<template>
  <a-scene embedded>
    <a-assets>
      <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg">
      <img
        id="skyTexture"
        src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
      >
    </a-assets>
    <a-sky src="#skyTexture"></a-sky>

    <!-- <a-entity look-controls wasd-controls camera="userHeight: 1.6"></a-entity> -->
    <a-entity 
      camera 
      wasd-controls
      look-controls 
      v-bind:animation="cameraAnimation"
      v-on:animationcomplete="completedTour"
      v-bind:position="cameraPosition">
    </a-entity>
    <!-- https://aframe.io/docs/0.8.0/guides/building-a-basic-scene.html#placing-our-box-in-front-of-the-camera -->
    <!-- position = x y z -->
    <!-- X is LEFT/RIGHT -->
    <!-- Y is UP/DOWN -->
    <!-- Z is TOWARDS/AWAY -->
    <!-- Gets box position into format of x y z instead of ["x y z", __ob__ : Observer]     -->
    <a-box src="#boxTexture" v-bind:position="box1"></a-box>
    <a-box src="#boxTexture" v-bind:position="box2"></a-box>
    <a-box src="#boxTexture" v-bind:position="box3"></a-box>
    <a-box src="#boxTexture" v-bind:position="box4"></a-box>

    <a-light type="ambient" color="#445451"></a-light>
    <a-light type="point" intensity="2" position="2 4 4"></a-light>

    <a-plane color="#0F2" height="20" width="10" transparent="true" rotation="-90 0 0"></a-plane>
  </a-scene>
</template>

<script>
import "aframe";
import { mapGetters } from 'vuex';

import store from '../store/store.js';


export default {
  name: "TestScene",
  store,
  data() {
    return {};
  },

  computed: {
    ...mapGetters([
      'getCameraPosition',
      'getTourState',
      'getBox1',
      'getBox2',
      'getBox3',
      'getBox4',
    ]),

    cameraPosition() {
      return this.getCameraPosition.join(' ');
    },

    cameraAnimation() {
      if(this.getTourState)
        return "property: position; to: 5 1.6 0; dur: 1500; easing: linear";
    },

    box1 (){
      return this.getBox1.join(' ');
    },

    box2 (){
      return this.getBox2.join(' ');
    },

    box3 (){
      return this.getBox3.join(' ');
    },

    box4 (){
      return this.getBox4.join(' ');
    }

  },

  mounted() {
    console.log("Component mounted.");
    console.log(this.getBox1[0] + " " + this.getBox1[1]+ " " + this.getBox1[2]);
  },
  
  methods: {
    completedTour: function(event){            
      store.commit('deactivateTour');
      console.log("TOUR IS DONE.");
    }
  },

};
</script>