<template>
	<div :class="classes">
		<div v-html="html" v-if="html">
		</div>
		<slot name="custom_error" v-else-if="error">
			<div style="color:red">{{ error.response.data }}</div>
		</slot>
	</div>
</template>

<script>
	import Helper from './helper.js'

	export default {
		name: 'facebook-oembed',
		props: {
			url: String,
			app_id: String,
			app_secret: String,
			classes: String,
		},
		data() {
			return {
				html: null,
				error: null,
			}
		},
		methods: {
			get_oembed: function(url){
				Helper.Facebook_Oembed(this.app_id, this.app_secret, url).then(data => {
					this.html = data.html
				}).catch(error => {
					this.error = error
					this.$emit('error', error)
				})
			},
		},
		mounted(){
			Helper.Inject_Facebook_Script()
			this.get_oembed(this.url)
		},
		watch: {
			url: function(newVal, oldVal){
				this.html = null
				this.error = null
				if(newVal != null){
					this.get_oembed(newVal)
				}else{
					this.html = null
				}
			},
			html: function(newVal, oldVal){
				setTimeout(function(){
					window.FB.XFBML.parse()
				}, 100)
			}
		},
	}
</script>