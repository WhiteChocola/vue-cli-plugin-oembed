# Oembed
 Vue plugin for social media oEmbed.
 This plugin was developed for supporting latest facebook / instagram / tiktok oembed api changes.

# Supported Oembed API
<ul>
 <li><a href="https://developers.facebook.com/docs/plugins/oembed/" target="_blank">Facebook</a></li>
 <li><a href="https://developers.facebook.com/docs/instagram/oembed/" target="_blank">Instagram</a></li>
 <li><a href="https://developers.tiktok.com/doc/embed-videos/" target="_blank">Tiktok</a></li>
</ul>

# Installation Guide
```bash
npm i vue-cli-plugin-oembed
```

# Usage
main.js
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import Oembed from 'vue-cli-plugin-oembed';

const app = createApp(App);
app.use(Oembed);
```
Html
```html
<instagram-oembed 
	url="https://www.instagram.com/p/CJD5bFMBt8S/" 
	app_id="Your App ID" 
	app_secret="Your App Secret"
></instagram-oembed>
```
```html
<facebook-oembed 
	url="https://www.facebook.com/POTUS/posts/1511527275583374"
	app_id="Your App ID" 
	app_secret="Your App Secret"
></facebook-oembed>
```
```html
<tiktok-oembed url="https://www.tiktok.com/@scout2015/video/6718335390845095173"></tiktok-oembed>
```

Custom Error Display
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