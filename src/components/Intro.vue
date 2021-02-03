<template>
  <div class="home">
    <h2>
      {JSON} Placeholder
    </h2>
    <p>
      Free to use fake online REST API for testing and prototyping.
    </p>
    <p>
      Powered by JSON Server + LowDB
    </p>

    <small>
      As of Dec 2020, serving <strong>~1.8 billion requests each month.</strong>
    </small>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 68vh;
  background: lighten(#42b983, 30%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  color: black;

  h2 {
    font-size: 3.5rem;
    font-weight: lighter;
    margin-bottom: 1rem 0;
  }
  p {
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  small {
    font-size: 1.1rem;
  }
}
</style>
