<template>
  <li :id="`item-${Comment.id}`">
    <article>
      <h2>{{ Comment.name }}</h2>

      <p>
        {{ Comment.body }}
      </p>

      <small>
        {{ Comment.email }}
      </small>
    </article>
  </li>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    Comment: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
li:nth-child(4n + 1) article {
  background: #42b983;
}

li:nth-child(4n + 3) article {
  background: #2c3e50;
}
li:nth-child(4n + 2) article {
  background: #2d8b61;
}
li:nth-child(4n + 4) article {
  background: #435b74;
}

article {
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
}

small {
  margin-bottom: 1rem;
}

a {
  color: white;
  text-decoration: none;
}
</style>
