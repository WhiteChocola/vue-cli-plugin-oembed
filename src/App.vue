<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->

	<instagram-oembed url="https://www.instagram.com/p/CKQuWYLpYQR/?utm_source=ig_web_copy_link" app_id="299211157663041" app_secret="e1a7fbbbf2ea1945b7eba983a9e03415">
		<template v-slot:custom_error>
		    <h1>Custom Error</h1>
		</template>
	</instagram-oembed>
	<facebook-oembed url="https://www.facebook.com/POTUS/posts/1511527275583374" app_id="299211157663041" app_secret="e1a7fbbbf2ea1945b7eba983a9e03415">
		<template v-slot:custom_error>
		    <h1>Custom Error</h1>
		</template>
	</facebook-oembed>
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
