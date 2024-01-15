import FacebookOembed from './FacebookOembed.vue';
import InstagramOembed from './InstagramOembed.vue';
import TiktokOembed from './TiktokOembed.vue';
import YoutubeOembed from './YoutubeOembed.vue';

export default {
	install: (Vue) => {
		Vue.component('facebook-oembed', FacebookOembed);
		Vue.component('instagram-oembed', InstagramOembed);
		Vue.component('tiktok-oembed', TiktokOembed);
		Vue.component('youtube-oembed', YoutubeOembed);
	}
}