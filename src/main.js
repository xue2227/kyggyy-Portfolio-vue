import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; 
import Lenis from '@studio-freight/lenis';
import './assets/styles/tailwind.css';

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  createApp(App)
  .use(router)
  .use(store) 
  .mount('#app');