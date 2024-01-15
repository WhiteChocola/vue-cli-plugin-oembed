<template>
  	<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  	<!-- <HelloWorld msg="Vue3 Oembed" /> -->
  	<div class="content-center m p">
		<h1>Youtube iFrame Video</h1>
		<youtube-oembed url="https://www.youtube.com/watch?v=M7lc1UVf-VE"></youtube-oembed>
  	</div>

  	<div class="content-center m p">
		<h1>Youtube iFrame Video List</h1>
		<youtube-oembed :url="['https://www.youtube.com/watch?v=M7lc1UVf-VE', 'https://www.youtube.com/embed/tgbNymZ7vqY', 'https://www.youtube.com/watch?v=qI3P7zMMsgY', 'https://www.youtube.com/watch?v=KxvKCSwlUv8']"></youtube-oembed>
	</div>

	<div class="content-center m p">
		<h1>Instagram Embed</h1>
  		<instagram-oembed url="https://www.instagram.com/p/CliA3T1LfyY/?igshid=YmMyMTA2M2Y%3D" app_id="299211157663041" app_secret="e1a7fbbbf2ea1945b7eba983a9e03415"></instagram-oembed>
	</div>

	<div class="content-center m p">
		<h1>Facebook Embed</h1>
  		<facebook-oembed url="https://www.facebook.com/POTUS/posts/1511527275583374" app_id="299211157663041" app_secret="e1a7fbbbf2ea1945b7eba983a9e03415"></facebook-oembed>
  	</div>

  	<div class="content-center m p">
		<h1>Tiktok Embed</h1>
  		<tiktok-oembed url="https://www.tiktok.com/@scout2015/video/6718335390845095173"></tiktok-oembed>
  	</div>
</template>

<script>
  	import HelloWorld from './components/HelloWorld.vue'

  	export default {
  		name: 'App',
  		components: {
  			HelloWorld,
  		},
  	}
</script>

<style>
	.content-center {
		align-content: center;
	}

	.m {
		margin: 10px 20px;	
	}

	.p {
		padding: 10px 20px;
	}
</style>