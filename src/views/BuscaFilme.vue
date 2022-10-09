<template>
        <nav class="navbar has-shadow is-fixed-top">
        <div class="navbar-brand">
            <img class="my-1 mx-4 p-2" src="../assets/logo.png" alt="Moogle" width="100">
        </div>
        <div class="navbar-item campo-busca">
            <div class="control has-icons-left has-icons-right my-1 campo-busca">
                <input class="input is-normal is-rounded" type="search" placeholder="Digite o nome do filme" />
                <span class="icon is-medium is-right">
                    <i class="fa fa-search"></i>
                </span>
                <span class="icon is-medium is-left">
                    <i class="fa fa-film"></i>
                </span>
            </div>
        </div>
    </nav>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <ApiFilme :nomeFilme=this.nomeFilme></ApiFilme>
        </div>
    </section>
</template>

<script lang='ts'>
    import {defineComponent} from 'vue'
    import ApiFilme from '../components/ApiFilme.vue'

    export default defineComponent({
        name: 'BuscaFilme',
        components: {ApiFilme},
        props: ['nomeFilme'],
        data() {
            return {
                listaDeFilmes: [], 
                }}
    })
</script>

<style scoped>
    .campo-busca {
        width: 70%;
    }
</style>
