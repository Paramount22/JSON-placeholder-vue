<template>
  <header>
    <h1><a href="/">{JSON} Placeholder</a></h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-start;
  background: #2c3e50;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  h1 {
    padding-left: 1rem;
  }
}
</style>
