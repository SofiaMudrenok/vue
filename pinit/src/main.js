import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faCirclePlus, faTrash, faPenToSquare, faCheck} from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faCirclePlus, faTrash, faPenToSquare, faCheck)
createApp(App).use(store).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
