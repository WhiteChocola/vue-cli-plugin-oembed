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
		name: 'facebook-oembed',
		props: {
			url: String,
			app_id: String,
			app_secret: String,
		},
		data() {
			return {
				html: null,
			}
		},
		methods: {
			get_facebook_oembed: function(url){
				return Helper.Retrieve_Facebook_Access_Token(this.app_id, this.app_secret).then(token => {
					return axios.get('https://graph.facebook.com/v9.0/oembed_post', {
						params:{
							url: url,
							access_token: token,
						}
					})
					.then(response => {
						return response.data.html
					})
					.catch(errors => {
						return null
					})
				})
			},
			get_oembed: function(url){
				this.get_facebook_oembed(url).then(html => {
					this.html = html
				})
			},
		},
		mounted(){
			Helper.Inject_Facebook_Script()
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
					window.FB.XFBML.parse()
				}, 100)
			}
		},
	}
</script>