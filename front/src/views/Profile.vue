<template>
  <div class="profile">
    <ProfileHeader/>
    <ProfilePostlist/>
  </div>
</template>

<script>
import ProfileHeader from '@/components/Profileheader.vue'
import ProfilePostlist from "@/components/ProfilePostlist.vue"

export default {
  name: 'Profile',
  components: {
    ProfileHeader, ProfilePostlist  
  }
}
</script>

<style scoped>

</style>
