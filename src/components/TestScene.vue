<template>
  <a-scene stats>
    <a-assets>
      <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg">
      <img id="skyTexture" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg">
    </a-assets>
    <!-- <a-entity camera="active: true" look-controls wasd-controls position="0 1.6 0" data-aframe-default-camera> -->
      <!-- <a-entity geometry="primitive: plane; height: 0.2; width: 0.2" position="1.4 1.55 -2" -->
            <!-- material="color: red;" text="value: Hello World;"></a-entity> -->
    <!-- </a-entity> -->
    <a-sky src="#skyTexture"></a-sky>
    <!-- https://aframe.io/docs/0.8.0/guides/building-a-basic-scene.html#placing-our-box-in-front-of-the-camera -->
    <!-- position = x y z -->
    <!-- X is LEFT/RIGHT -->
    <!-- Y is UP/DOWN -->
    <!-- Z is TOWARDS/AWAY -->
    <a-entity look-controls wasd-controls camera="userHeight: 1.6"
                universal-controls="movementControls: checkpoint"
                checkpoint-controls="mode: animate">
      <a-entity cursor
                  position="0 0 -1"
                  geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03;"
                  material="color: #CCC; shader: flat;"
      >
      </a-entity>
      <!-- <a-animation attribute="position"
        dur="3000"
        easing="linear"
        to="0 1.6 -10">
      </a-animation> -->
    </a-entity>
    <a-box animation__color="property: material.color; dir: alternate; dur: 1000;
                                easing: easeInSine; loop: true; to: #FFF" src="#boxTexture" position="-4.4 0.5 -8" ></a-box>
    <a-box src="#boxTexture" position="4.4 0.5 -8" ></a-box>
    <a-box src="#boxTexture" position="-4.4 0.5 8" ></a-box>
    <a-box src="#boxTexture" position="4.4 0.5 8" ></a-box>
    <a-light type="ambient" color="#445451"></a-light>
    <a-light type="point" intensity="2" position="2 4 4"></a-light>
    <a-plane color="#0F2" height="20" width="10" transparent=true rotation="-90 0 0"></a-plane>
  </a-scene>
</template>

<script>
import 'aframe'
import 'aframe-animation-component';

export default {
    name: 'TestScene',
    data: function() { 
      return {
        "tour_postitions": [
          // Position 1
          ["0", "1.6", "-10"],
          // Position 2
          ["0", "1.6", "10"],
          // Position 3
          ["0", "1.6", "20"],
          // Position 4
          ["0", "1.6", "10"]
        ]
      }
    },
    created: function() {
      // console.log(this.$data)
    },
    mounted: function() {
      console.log("Component mounted.");
      console.log(this.$data.tour_positions);
    }

}

AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    console.log(this.el.object3D.rotation);

    // `position` is a three.js Vector3.
    console.log(this.el.object3D.position);
  }
});


</script>