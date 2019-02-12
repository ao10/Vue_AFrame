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
    <a-entity camera wasd-controls look-controls position="0 1.6 0"></a-entity>
    <!-- https://aframe.io/docs/0.8.0/guides/building-a-basic-scene.html#placing-our-box-in-front-of-the-camera -->
    <!-- position = x y z -->
    <!-- X is LEFT/RIGHT -->
    <!-- Y is UP/DOWN -->
    <!-- Z is TOWARDS/AWAY -->
    <a-box src="#boxTexture" position="-4.4 0.5 -8"></a-box>
    <a-box src="#boxTexture" position="4.4 0.5 -8"></a-box>
    <a-box src="#boxTexture" position="-4.4 0.5 8"></a-box>
    <a-box src="#boxTexture" position="4.4 0.5 8"></a-box>

    <a-light type="ambient" color="#445451"></a-light>
    <a-light type="point" intensity="2" position="2 4 4"></a-light>

    <a-plane color="#0F2" height="20" width="10" transparent="true" rotation="-90 0 0"></a-plane>
  </a-scene>
</template>

<script>
import "aframe";
export default {
  name: "TestScene",
  data() {
    return {
      tour_positions: [
        // Position 1
        ["0", "1.6", "-10"],
        // Position 2
        ["0", "1.6", "10"],
        // Position 3
        ["0", "1.6", "20"],
        // Position 4
        ["0", "1.6", "10"]
      ]
    };
  },

  mounted() {
    console.log("Component mounted.");
    console.log(this.$store);
  }

};
</script>