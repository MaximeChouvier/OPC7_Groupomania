<template>
    <div class="the-chosen-div">
        <feedNav/>
        <feedPosts/>
    </div>
</template>

<script>
// @ is an alias to /src
import FeedNav from '@/components/FeedNav.vue'
import feedPosts from '@/components/feedPosts.vue'

export default {
  name: 'Feed',
  components: {
    FeedNav, feedPosts
  }
}
</script>
<style scoped>
.the-chosen-div{
  padding-bottom: 20% ;
}
</style>

