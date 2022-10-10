<template>

  <section class="container">
    <div class="columns is-multiline mt-5">
      <div class="column is-one-quarter" v-for="filme in listaDeFilmes" :key="filme.id">
        <div class="card is-shady">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src=filme.image alt="Capa do Filme">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Título: {{filme.title}}</h4>
              <h6>Ano de Lançamento: {{filme.year}}</h6>
              <h6>Genero: {{filme.genres}}</h6>
              <h6>Duração: {{filme.runtimeStr}}</h6>
              <span>
                  <h6>Nota: {{filme.imDbRating}}</h6>
                  <progress class="progress is-info" :value=filme.imDbRating max="10">{{filme.imDbRating}}</progress>
              </span>
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
import axios from "axios";

export default defineComponent({
  name: "ApiFilme",
  props: ["nomeFilme"],
  data() {
    return {
      listaDeFilmes: [],
      // declaração da chave da API Imdb: https://imdb-api.com/
      // keyApi:"k_2o2u3z7c", //falsa
      keyApi:"k_2o2u3z7q"
      // keyApi:"k_1unla4vt"
      // keyApi:"k_k38ug10j"
    };
  },
  mounted() {
    this.getFilmes(this.nomeFilme);
  },

  methods: {
    getFilmes(nomeFilme) {
      console.log('Bagaça')
      axios.get("https://imdb-api.com/en/API/SearchMovie/" + this.keyApi + "/" + nomeFilme)

        .then((res) => {
          res.data.results.map(x => x.id).forEach(y => this.getDetalhesFilme(y));
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getDetalhesFilme(idFilme) {
      axios.get("https://imdb-api.com/pt/API/Title/" + this.keyApi + "/" + idFilme +
        "/Images,Ratings,Wikipedia,")

        .then((res) => {
          this.listaDeFilmes.push(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    setup(){
      console.log('caçaralho');
      this.getFilmes(this.nomeFilme);
    }
  }
})
</script>

<style scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>