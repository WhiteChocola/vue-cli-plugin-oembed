# Oembed
> Vue plugin for social media oEmbed.
> This plugin was developed for supporting latest facebook / instagram / tiktok / youtube oembed api changes.

# Supported Oembed / iFrame API
- [Facebook](https://developers.facebook.com/docs/plugins/oembed/)
- [Instagram](https://developers.facebook.com/docs/instagram/oembed/)
- [Tiktok](https://developers.tiktok.com/doc/embed-videos/)
- [Youtube](https://developers.google.com/youtube/iframe_api_reference)

# Special Note
App in development mode unable to consume Facebook Oembed Graph API? 

Take a look into [community reference](https://developers.facebook.com/community/threads/388554676046719/) for easier to get permission approval.

# Installation Guide
```bash
npm i vue-cli-plugin-oembed
```

# Usage
**main.js**
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import Oembed from 'vue-cli-plugin-oembed';

const app = createApp(App);
app.use(Oembed);
```

# Html Integrations
**Instagram Embed**
```html
<instagram-oembed 
	url="https://www.instagram.com/p/CJD5bFMBt8S/" 
	app_id="Your App ID" 
	app_secret="Your App Secret"
></instagram-oembed>
```
**Facebook Embed**
```html
<facebook-oembed 
	url="https://www.facebook.com/POTUS/posts/1511527275583374"
	app_id="Your App ID" 
	app_secret="Your App Secret"
></facebook-oembed>
```
**Tiktok Embed**
```html
<tiktok-oembed url="https://www.tiktok.com/@scout2015/video/6718335390845095173"></tiktok-oembed>
```
**Youtube Video**
```html
<youtube-oembed url="https://www.youtube.com/watch?v=M7lc1UVf-VE"></youtube-oembed>
```
**Youtube Video List**
```html
<youtube-oembed :url="['https://www.youtube.com/watch?v=M7lc1UVf-VE', 'https://www.youtube.com/embed/tgbNymZ7vqY', 'https://www.youtube.com/watch?v=qI3P7zMMsgY', 'https://www.youtube.com/watch?v=KxvKCSwlUv8']"></youtube-oembed>
```

# Events
| Event Name | Description |
| ----------- | ----------- |
| error | Error events feedback. |
Sample:
```html
<instagram-oembed 
	url="https://www.instagram.com/p/CJD5bFMBt8S/" 
	app_id="Your App ID" 
	app_secret="Your App Secret"
	@error="Error Function"
></instagram-oembed>
```

Customizable Error Display:
```html
<instagram-oembed 
	url="https://www.instagram.com/p/CJD5bFMBt8S/" 
	app_id="Your App ID" 
	app_secret="Your App Secret"
>
	<template v-slot:custom_error>
	    <div>Custom Error HTML Tags</div>
	</template>
</instagram-oembed>
```
