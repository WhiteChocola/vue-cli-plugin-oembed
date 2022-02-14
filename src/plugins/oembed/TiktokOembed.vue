<template>
	<div>
		<div v-html="html" v-if="html">
		</div>
		<slot name="custom_error" v-else/>
	</div>
</template>

<script>
	import axios from 'axios'
	import Helper from './helper.js'

	export default {
		name: 'tiktok-oembed',
		props: {
			url: String,
		},
		data() {
			return {
				html: null,
			}
		},
		methods: {
			get_tiktok_oembed: function(url){
				return axios.get('https://www.tiktok.com/oembed', {
					params:{
						url: url,
					}
				})
				.then(response => {
					return response.data.html
				})
				.catch(errors => {
					return null
				})
			},
			get_oembed: function(url){
				this.get_tiktok_oembed(url).then(html => {
					this.html = html
				})
			},
		},
		mounted(){
			Helper.Inject_Tiktok_Script()
			this.get_oembed(this.url)
		},
		watch: {
			url: function(newVal, oldVal){
				if(newVal != null){
					this.get_oembed(newVal)
				}else{
					this.html = null
				}
			},
			html: function(newVal, oldVal){
				setTimeout(function(){
					
				}, 100)
			}
		},
	}
</script>