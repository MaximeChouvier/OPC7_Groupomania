<template>
    <div>
        <feedNav/>
        <postTest/>
        <postTest2/>
    </div>
</template>

<script>
// @ is an alias to /src
import FeedNav from '@/components/FeedNav.vue'
import postTest from "@/components/postTest.vue"
import postTest2 from "@/components/postTest2.vue"


export default {
  name: 'Feed',
  components: {
    FeedNav, postTest, postTest2,
  }
}
</script>
<style scoped>

</style>

