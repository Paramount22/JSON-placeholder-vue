<template>
  <div class="data">
    <h2>Comments</h2>
    <button @click="getComments" v-show="!this.comments.length">
      Comments
    </button>

    <CommentsList :comments="comments" />

    <button
      @click="loadMoreComments()"
      v-if="this.comments.length > 0 && this.comments.length < 500"
    >
      load more
    </button>
  </div>
</template>

<script>
import CommentsList from '../components/CommentsList';
import axios from 'axios';
export default {
  name: 'Comments',
  components: {
    CommentsList,
  },
  data() {
    return {
      comments: [],
      limit: 15,
    };
  },

  methods: {
    getComments() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/comments?&_limit=${this.limit}`
        )
        .then((response) => {
          // handle success

          this.comments = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },

    loadMoreComments() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/comments?&_limit=${(this.limit += 15)}`
        )
        .then((response) => {
          // handle success
          this.comments = response.data;

          //console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  letter-spacing: 1px;
}

li {
  background: rgb(46, 45, 45);
  color: white;
  padding: 0.3rem 0.5rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  line-height: 1.4rem;
}
</style>
