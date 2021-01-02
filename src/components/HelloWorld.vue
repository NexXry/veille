<template>
  <div class="container w-4/5 flex flex-wrap justify-between mx-auto ">
    <div v-for="article in articles" v-bind:key="article">
      <div class="mb-5 mt-28 max-w-lg lg:h-48 mx-auto bg-indigo-900 rounded-xl shadow-md md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="object-contain md:object-scale-down lg:w-80 lg:h-40 md:w-48 md:h-32 sm:w-16 sm:h-10" v-bind:src="`https://nicolas-castex.fr/uploads/images/articles/${article.image}`" alt="Image de l'article">
          </div>
          <div class="p-8">
            <div class="uppercase overflow-x-hidden lg:w-80 md:w-52 sm:w-32 tracking-wide text-sm text-white font-semibold">{{ article.titre }}</div>
            <!--<p class="mt-2 text-white overflow-y-auto  h-20">{{article.contenuArticle}}</p>-->
            <br>

            <router-link :to="{ name: 'Detail', params:  {'id': article.id} }">
              <a class="py-2 px-4 mt-16 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                Détail de  l'article : {{article.id}}
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: 'HelloWorld',
  props: {
    action: String,
  },
  data () {
    return {
      articles : null
    }
  },
  methods: {
    call: function (){
      axios
          .get('https://nicolas-castex.fr/api')
          .then(response => (this.articles = response.data))
          .catch(error => console.log(error))

    }
  },
  mounted() {
    this.call()
  }
}
</script>

