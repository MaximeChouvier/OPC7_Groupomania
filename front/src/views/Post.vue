<template>
    <div>
        <h1>Nouveau post</h1>
        <PostForm/>



    </div>
</template>

<script>
// @ is an alias to /src
import PostForm from '@/components/PostForm.vue'


export default {
  name: 'Post',
  components: {
    PostForm
  }
}
</script>
<style scoped>
    h1{
        text-align: center;
    }
</style>
