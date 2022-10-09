import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import PaginaPrincipal from '../views/PaginaBusca.vue'
import BuscaFilme from '../views/BuscaFilme.vue'
import ApiFilme from '@/components/ApiFilme.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'PaginaBusca',
        component: PaginaPrincipal
    },

    {
        path: '/filme',
        name: 'ResultadoFilme',
        component: BuscaFilme,
        children: [
            {
                path: '/filme',
                component: ApiFilme}
        ],
        props: true
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;