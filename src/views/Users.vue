<template>
  <div class="data">
    <h2>Users</h2>
    <div class="search_container">
      <SearchBar
        v-if="this.users.length"
        @searchQueryChanged="search = $event"
      />
    </div>
    <button @click="getUsers()" v-show="!this.users.length">Get Users</button>

    <UserList :users="filteredItems" />

    <button
      @click="loadMoreUsers()"
      v-if="this.users.length > 0 && this.users.length < 10"
    >
      load more
    </button>
  </div>
</template>

<script>
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
export default {
  components: {
    UserList,
    SearchBar,
  },
  name: 'Users',
  data() {
    return {
      users: [],
      limit: 5,
      search: '',
    };
  },

  computed: {
    filteredItems() {
      return this.users.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) >
          -1 /*||
          item.body.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1*/
        );
      });
    },
  },

  methods: {
    getUsers() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users?&_limit=${this.limit}`)
        .then((response) => {
          // handle success
          this.users = response.data;

          //console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },

    loadMoreUsers() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users?&_limit=${(this.limit += 5)}`
        )
        .then((response) => {
          // handle success
          this.users = response.data;

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
.search_container {
  width: 20%;
  margin: 1rem auto;
}

@media (max-width: 950px) {
  .search_container {
    width: 70%;
    position: relative;
    left: 2%;
  }
}
</style>
