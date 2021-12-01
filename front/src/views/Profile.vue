<template>
  <div class="profile">
    <ProfileHeader/>
    <ProfilePostlist/>
    <FeedNav/>
  </div>
</template>

<script>
import ProfileHeader from '@/components/Profileheader.vue'
import ProfilePostlist from "@/components/ProfilePostlist.vue"
import FeedNav from "@/components/FeedNav.vue"

export default {
  name: 'Profile',
  components: {
    ProfileHeader, ProfilePostlist, FeedNav
  }
}
</script>

<style scoped>
html,body{

}
</style>
