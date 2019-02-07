<template>
  <a-scene stats>
    <a-assets>
      <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg">
      <img id="skyTexture" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg">
    </a-assets>
    <a-sky src="#skyTexture"></a-sky>
    <!-- https://aframe.io/docs/0.8.0/guides/building-a-basic-scene.html#placing-our-box-in-front-of-the-camera -->
    <!-- position = x y z -->
    <!-- X is LEFT/RIGHT -->
    <!-- Y is UP/DOWN -->
    <!-- Z is TOWARDS/AWAY -->
    <a-box src="#boxTexture" position="-4.4 0.5 -8" ></a-box>
    <a-box src="#boxTexture" position="4.4 0.5 -8" ></a-box>
    <a-box src="#boxTexture" position="-4.4 0.5 8" ></a-box>
    <a-box src="#boxTexture" position="4.4 0.5 8" ></a-box>
    
    <a-plane color="#0F2" height="20" width="10" transparent=true rotation="-90 0 0"></a-plane>
  </a-scene>
</template>

<script>
import 'aframe'

export default {
    name: 'TestScene'
}
</script>