<template>
  <section class="post-card">
    <h2>{{ post.title }}</h2>
    <p>
      {{ post.body }}
    </p>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      post: {},
    };
  },

  created() {
    axios
      .get(
        'https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id
      )
      .then((response) => {
        this.post = response.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.post-card {
  width: 40%;
  margin: 2rem auto;
  border: 5px solid#2d8b61;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 12px 15px 20px lightgray;
  background: #42b983;
  color: white;

  h2 {
    font-size: 2.2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgrey;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@media (max-width: 950px) {
  .post-card {
    width: 70%;
  }
}
@media (max-width: 500px) {
  .post-card {
    width: 80%;
  }
}
</style>
