<template>
	<div :class="class">
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
		name: 'tiktok-oembed',
		props: {
			url: String,
			class: String,
		},
		data() {
			return {
				html: null,
				error: null,
			}
		},
		methods: {
			get_oembed: function(url){
				Helper.Tiktok_Oembed(url).then(data => {
					this.html = data.html
				}).catch(error => {
					this.error = error
					this.$emit('error', error)
				})
			},
		},
		mounted(){
			this.get_oembed(this.url)
		},
		watch: {
			url: function(newVal, oldVal){
				this.error = null
				if(newVal != null){
					this.get_oembed(newVal)
				}
			},
			html: function(newVal, oldVal){
				setTimeout(function(){
					Helper.Inject_Tiktok_Script()
				}, 100)
			}
		},
	}
</script>