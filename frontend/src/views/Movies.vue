<template>
    <div class="detail">
        <div v-for="movie of movies" :key="movie.index">
            <h1 @click="goDetail(movie.id)" style="cursor:pointer">{{movie.name}}</h1>
            <img v-bind:src="movie.poster" class="poster">
            <section>
            <h2>영화정보</h2>
                <dl class="info">
                    <dt>감독</dt>
                    <dd>{{movie.director}}</dd>
                    <dt>출연</dt>
                    <dd>{{movie.actors}}</dd>
                    <dt>러닝타임</dt>
                    <dd>{{movie.time}}</dd>
                </dl>
            </section>
            <section>
                <h2>줄거리</h2>
                <p v-html="movie.synopsis" class="synopsis"></p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Movies',
  data () {
      return {
          movies: []
      }
  },
  beforeRouteLeave (to, from, next) {
      if (to.path.indexOf('movies') > 0) {
          this.$store.commit('setList', this.movies)
      } else {
          this.$store.commit('clearList')
      }
      next()
  },
  created () {
      const list = this.$store.state.list
      if (list !== null && list.length > 0) {
          this.movies = list
      } else {
          this.$http.get('/api/movies/')
            .then((response) => {
                this.movies = response.data
            })
      }
  },
  methods: {
      goDetail(id) {
          this.$router.push('/movies/' + id)
      }
  }
}
</script>