<template>
  <a-scene stats>
    <a-sky color="#8ddfff"></a-sky>
    <!-- https://aframe.io/docs/0.8.0/guides/building-a-basic-scene.html#placing-our-box-in-front-of-the-camera -->
    <a-box color="red" position="0 0 -5" ></a-box>
    <a-plane color="#0F2" height="20" width="10" rotation="-90 0 0"></a-plane>
  </a-scene>
</template>

<script>
import 'aframe'

export default {
    name: 'TestScene'
}
</script>