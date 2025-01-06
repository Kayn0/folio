import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store }  from "./store.js"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faSearch, faPen, faMapMarkerAlt, faBuilding, faUsers, faUser, faEnvelope, faShoppingCart, faPhone, faChevronDown, faChevronLeft, faPlusCircle, faFont} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import 'animate.css';

import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

library.add(faFacebookSquare, faTwitter, faYoutube, faTimes, faSearch, faPen, faMapMarkerAlt, faBuilding, faUsers, faUser, faEnvelope, faShoppingCart, faPhone, faChevronDown, faChevronLeft, faPlusCircle, faFont);
<style>
    import "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
</style>
createApp(App)
.use(router)
.use(store)
.use(Equal)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
