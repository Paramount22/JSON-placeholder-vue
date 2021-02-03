<template>
  <transition-group tag="ul" name="comment" class="comments">
    <CommentItem
      v-for="Comment in Comments"
      :key="Comment.id"
      :Comment="Comment"
    />
  </transition-group>
</template>

<script>
import CommentItem from './CommentItem';
export default {
  components: {
    CommentItem,
  },
  name: 'CommentsList',

  props: {
    Comments: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.comments {
  width: 40%;
  margin: 1rem auto;
  list-style: none;
  position: relative;
  left: -1%;
}

.comment-enter-active,
.comment-leave-active {
  transition: all 0.3s;
}

.comment-enter,
.comment-leave-to {
  opacity: 0;
  transform: scale(0.75);
}

@media (max-width: 950px) {
  .comments {
    width: 80%;
  }
}
</style>
