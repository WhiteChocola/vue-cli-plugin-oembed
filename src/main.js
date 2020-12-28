import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import Oembed from './plugins/oembed';

const app = createApp(App);
app.use(Oembed);

app.mount('#app')
