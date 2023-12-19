import axios from 'axios'

export default {
	Retrieve_Facebook_Access_Token: function(app_id, app_secret) {
		return axios.get('https://graph.facebook.com/oauth/access_token', {
			headers:{},
			params:{
				client_id: app_id,
				client_secret: app_secret,
				grant_type: 'client_credentials',
			}
		})
		.then(response => {
			return response.data.access_token
		})
		.catch(errors => {
			return null
		});
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
			s.src = `${protocolToUse}//connect.facebook.net/ms_MY/sdk.js#xfbml=1&version=v9.0`
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
}
