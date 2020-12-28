<template>
	<div v-html="data"></div>
</template>

<script>
	import axios from 'axios'
	import {Retrieve_Facebook_Access_Token, Inject_Facebook_Script} from './helper.js'

	export default {
		name: 'facebook-oembed',
		props: {
			url: String,
			app_id: String,
			app_secret: String,
		},
		data() {
			return {
				data: '',
			}
		},
		methods: {
			get_facebook_oembed: function(url){
				return Retrieve_Facebook_Access_Token(this.app_id, this.app_secret).then(token => {
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
					this.data = html
				})
			},
		},
		mounted(){
			Inject_Facebook_Script()
			this.get_oembed(this.url)
		},
		watch: {
			url: function(newVal, oldVal){
				if(newVal != null){
					this.get_oembed(newVal)
				}else{
					this.data = ''
				}
			},
			data: function(newVal, oldVal){
				setTimeout(function(){
					window.FB.XFBML.parse()
				}, 100)
			}
		},
	}
</script>