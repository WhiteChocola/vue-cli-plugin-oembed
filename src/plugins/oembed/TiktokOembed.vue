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
		name: 'tiktok-oembed',
		props: {
			url: String,
			classes: String,
		},
		setup(props, { emit }) {
			const html = ref(null);
			const error = ref(null);

			const get_oembed = (url) => {
				Helper.Tiktok_Oembed(url).then(data => {
					html.value = data.html;
				}).catch(err => {
					error.value = err;
					emit('error', err);
				});
			};

			onMounted(() => {
				get_oembed(props.url);
			});

			watch(() => props.url, (newVal) => {
				html.value = null;
				error.value = null;
				if (newVal != null) {
					get_oembed(newVal);
				}
			});

			watch(html, () => {
				setTimeout(() => {
					Helper.Inject_Tiktok_Script();
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