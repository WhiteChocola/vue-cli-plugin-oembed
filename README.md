# Oembed
 Vue plugin for social media oEmbed. 

# Supported Oembed API
<ul>
 <li>Facebook </li>
 <li>Instagram </li>
</ul>

# Installation Guide
```bash
npm i vue-cli-plugin-oembed
```

# Usage
main.js
```javascript
import Vue from './App.vue';
import Oembed from 'vue-cli-plugin-oembed';
Vue.use(Oembed);
```
Html
```html
<instagram-oembed 
	url="https://www.instagram.com/p/CJD5bFMBt8S/" 
	app_id="Your Graph API App ID" 
	app_secret="Your Graph API App Secret"
></instagram-oembed>
```
```html
<facebook-oembed 
	url="https://www.facebook.com/POTUS/posts/1511527275583374"
	app_id="Your Graph API App ID" 
	app_secret="Your Graph API App Secret"
></facebook-oembed>
```
