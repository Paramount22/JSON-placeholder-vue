<template>
  <div id="app">
    <HeaderComponent />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/comments">Comments</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from './components/HeaderComponent';

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
.data {
  margin-bottom: 2rem;
}

button {
  border: none;
  background: none;
  background: gray;
  color: white;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  text-align: left;
  border-radius: 0.2rem;
  transition: all 0.2s ease;

  &:hover {
    background: darken($color: grey, $amount: 10%);
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  box-shadow: 2px 1px 10px lightgray;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 1rem;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    padding-bottom: 0.3rem;

    &:hover,
    &.router-link-exact-active {
      color: #42b983;
      border-bottom: 2px solid#42b983;
    }
  }
}
</style>
