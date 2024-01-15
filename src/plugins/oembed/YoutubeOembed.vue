<template>
	<div :id="'youtube-player-'+instance_id"></div>
</template>

<script>
	import { defineComponent, getCurrentInstance, onMounted, ref, watch } from "vue";
	import Helper from './helper.js';

	export default defineComponent({
		name: "youtube-oembed",
		props: ['url'],
		setup(props, { emit }) {
			const player = ref();
			const error = ref();
			const instance_id = getCurrentInstance().uid;
			const standard_embed_url = ref('https://www.youtube.com/embed/');

			onMounted(() => {
				Helper.Inject_Youtube_Script();
				let test = setInterval(() => {
					if(window.YT && window.YT.loaded){
						init();
						clearInterval(test);
					}
				}, 100);
    		});

    		watch(() => props.url, async (newUrl, oldUrl) => {
    			error.value = null;
    			load_video();
			});

			const init = (url) => {
				player.value = new window.YT.Player('youtube-player-'+instance_id, {
					playerVars: {
						'playsinline': 1
					},
					events: {
						'onReady': load_video,
						'onError': handle_error,
					}
				});
			};

			const load_video = (e) => {
				if(typeof props.url === 'string'){
					let id = get_video_id(props.url);
					player.value.cueVideoById(id);
					// player.value.loadVideoById(id);
				}else{
					let ids = [];
					props.url.forEach((url) => {
						ids.push(get_video_id(url));
					});
					player.value.cuePlaylist(ids);
					// player.value.loadPlaylist(ids);
				}
			};

			const get_video_id = (url) => {
				if(url.includes(standard_embed_url.value))
					return url.slice(standard_embed_url.value.length);
				else
					return new URL(url).searchParams.get('v');
			};

			const handle_error = (e) => {
				if(e.data == 2)
					error.value = 'The request contains an invalid parameter value.';
				else if(e.data == 5)
					error.value = 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.';
				else if(e.data == 100)
					error.value = 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.';
				else if(e.data == 101 || e.data == 150)
					error.value = ' The owner of the requested video does not allow it to be played in embedded players.';
				else
					error.value = 'Something went wrong.';

				emit('error', error.value);
			};

			return { error, instance_id };
		},
	});
</script>