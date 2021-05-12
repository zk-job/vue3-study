import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers'
import {
    ElButton,
    ElContainer,
    ElAside,
    ElMenu,
    ElSubmenu,
    ElMenuItemGroup,
    ElMenuItem,
    ElMessage
} from 'element-plus'

// import 'element-plus/lib/theme-chalk/index.css'
import '~/theme/index.css' //引入主题色

const app = createApp(App)

app.use(router)

app.use(ElButton)
    .use(ElContainer)
    .use(ElAside)
    .use(ElMenu)
    .use(ElSubmenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .use(ElMessage)
    
app.mount('#app')
