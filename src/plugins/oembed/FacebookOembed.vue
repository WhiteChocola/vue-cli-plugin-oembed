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
	import { ref, watch, onMounted } from 'vue';
	import Helper from './helper.js';

	export default {
		name: 'facebook-oembed',
		props: {
			url: String,
			app_id: String,
			app_secret: String,
			classes: String,
		},
		setup(props, { emit }) {
			const html = ref(null);
			const error = ref(null);

			const get_oembed = (url) => {
				Helper.Facebook_Oembed(props.app_id, props.app_secret, url).then(data => {
					html.value = data.html;
				}).catch(err => {
					error.value = err;
					emit('error', err);
				});
			};

			onMounted(() => {
				Helper.Inject_Facebook_Script();
				get_oembed(props.url);
			});

			watch(() => props.url, (newVal) => {
				html.value = null;
				error.value = null;
				if (newVal != null) {
					get_oembed(newVal);
				} else {
					html.value = null;
				}
			});

			watch(html, () => {
				setTimeout(() => {
					window.FB.XFBML.parse();
				}, 100);
			});

			return {
				html,
				error,
				get_oembed
			};
		}
	};
</script>