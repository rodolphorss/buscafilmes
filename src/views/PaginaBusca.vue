<template>
    <title>Moggle</title>
    <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-multiline is-centered">
                    <div class="column is-half is-offset-one-quarter">
                        <img src="../assets/logo.png" alt="Moogle" width="272" height="92" />
                    </div>
                    <div class="column is-half">
                            <div class="control has-icons-left">
                                <input v-model="termoBusca" class="input is-medium is-rounded is-loading" type="search"
                                    placeholder="Digite o nome do filme"/>
                                <span class="icon is-medium is-left">
                                    <i class="fa fa-film"></i>
                                </span>
                            </div>
                            <div class="field has-addons">
                                <router-link :to="{name: 'ResultadoFilme', params: {nomeFilme: termoBusca}}">
                                    <button class="button is-rounded mt-2">
                                        <span class="icon is-small is-right">
                                            <i class="fa fa-search"></i>
                                        </span>
                                        Pesquisar
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
    import {
        defineComponent
    } from "vue";

    export default defineComponent({
        name: "PaginaBusca",
        data(){
             return {termoBusca: ''}
        }
    });
</script>