<template>
  <div class="mt-28 container mx-auto rounded w-4/5 h-full bg-gray-200">

    {{ article.titre }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Detail",
  data () {
    return {
      article : null,
      id : this.$route.params.id
    }
  },
  methods: {
    call: function (){
      axios
          .get('https://nicolas-castex.fr/api/article/'+ this.id)
          .then(response => (this.article = response.data))
          .catch(error => console.log(error))

    }
  },
  mounted() {
    this.call()
    console.log(this.$route.query.id)
  }
}
</script>