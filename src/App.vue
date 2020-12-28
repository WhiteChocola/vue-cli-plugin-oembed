<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->

  <instagram-oembed url="https://www.instagram.com/p/CJD5bFMBt8S/" app_id="299211157663041" app_secret="e1a7fbbbf2ea1945b7eba983a9e03415"></instagram-oembed>
  <facebook-oembed url="https://www.facebook.com/POTUS/posts/1511527275583374" app_id="299211157663041" app_secret="e1a7fbbbf2ea1945b7eba983a9e03415"></facebook-oembed>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>
