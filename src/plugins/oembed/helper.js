import axios from 'axios'

const fb_graph = axios.create({
	baseURL: 'https://graph.facebook.com/',
});

const tiktok_api = axios.create({
	baseURL: 'https://www.tiktok.com/',
});

export default {
	Retrieve_Facebook_Access_Token: function(app_id, app_secret) {
		return fb_graph.get('oauth/access_token', {
			params:{
				client_id: app_id,
				client_secret: app_secret,
				grant_type: 'client_credentials',
			}
		})
		.then(response => {
			return response.data.access_token
		})
		.catch(error => {
			return Promise.reject(error)
		})
	},

	Facebook_Oembed: function(app_id, app_secret, url){
		return this.Retrieve_Facebook_Access_Token(app_id, app_secret).then(token => {
			return fb_graph.get('v18.0/oembed_post', {
				params:{
					url: url,
					access_token: token,
				}
			})
			.then(response => {
				return response.data
			})
			.catch(error => {
				return Promise.reject(error)
			})
		})
	},

	Instagram_Oembed: function(app_id, app_secret, url){
		return this.Retrieve_Facebook_Access_Token(app_id, app_secret).then(token => {
			return fb_graph.get('v18.0/instagram_oembed', {
				params:{
					url: url,
					access_token: token,
				}
			})
			.then(response => {
				return response.data
			})
			.catch(error => {
				return Promise.reject(error)
			})
		})
	},

	Tiktok_Oembed: function(url){
		return tiktok_api.get('oembed', {
			params:{
				url: url,
			}
		})
		.then(response => {
			return response.data
		})
		.catch(error => {
			return Promise.reject(error)
		})
	},

	Inject_Instagram_Script: function() {
		let existingScript = document.getElementById('vue-instagram-embed-script');
		if(!existingScript){
			let protocolToUse = 'https:'
			let s = document.createElement('script')
			s.async = s.defer = true
			s.src = `${protocolToUse}//www.instagram.com/embed.js`
			s.id = 'vue-instagram-embed-script'
			const body = document.body
			if (body) {
				body.appendChild(s)
			}
		}
	},

	Inject_Facebook_Script: function() {
		let existingScript = document.getElementById('vue-facebook-embed-script');
		if(!existingScript){
			let protocolToUse = 'https:'
			let s = document.createElement('script')
			s.async = s.defer = true;
			s.src = `${protocolToUse}//connect.facebook.net/ms_MY/sdk.js#xfbml=1&version=v18.0`
			s.id = 'vue-facebook-embed-script'
			const body = document.body
			if (body) {
				body.appendChild(s)
			}
		}
	},

	Inject_Tiktok_Script: function() {
		let existingScript = document.getElementById('vue-tiktok-embed-script');

		if(existingScript)
			existingScript.remove();

		let protocolToUse = 'https:'
		let s = document.createElement('script')
		s.async = s.defer = true;
		s.src = `${protocolToUse}//lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/falcon/embed/embed_v1.0.11.js`
		s.id = 'vue-tiktok-embed-script'
		const body = document.body
		if (body) {
			body.appendChild(s)
		}
	},

	Inject_Youtube_Script: function() {
		let existingScript = document.getElementById('vue-youtube-embed-script');
		if(!existingScript){
			let protocolToUse = 'https:'
			let s = document.createElement('script')
			s.async = s.defer = true;
			s.src = `${protocolToUse}//www.youtube.com/iframe_api`
			s.id = 'vue-youtube-embed-script'
			const body = document.body
			if (body) {
				body.appendChild(s)
			}
		}
	},
}
