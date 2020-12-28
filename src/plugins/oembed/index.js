import FacebookOembed from './FacebookOembed.vue';
import InstagramOembed from './InstagramOembed.vue';

export default {
	install: (Vue) => {
		Vue.component('facebook-oembed', FacebookOembed);
		Vue.component('instagram-oembed', InstagramOembed);
	}
}