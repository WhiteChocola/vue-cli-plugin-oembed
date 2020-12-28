<template>
	<div v-html="data"></div>
</template>

<script>
	import axios from 'axios'
	import Helper from './helper.js'

	export default {
		name: 'instagram-oembed',
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
			get_instagram_oembed: function(url){
				return Helper.Retrieve_Facebook_Access_Token(this.app_id, this.app_secret).then(token => {
					return axios.get('https://graph.facebook.com/v9.0/instagram_oembed', {
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
				this.get_instagram_oembed(url).then(html => {
					this.data = html
				})
			},
		},
		mounted(){
			Helper.Inject_Instagram_Script()
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
					window.instgrm.Embeds.process()
				}, 100)
			}
		},
	}
</script>