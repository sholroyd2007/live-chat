<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import getUser from '../Composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from '@vue/runtime-core'

export default {
  components: {
    Navbar
  },
  setup() {
    const router = useRouter()
    const { user } = getUser()

    watch(user => {
      if(!user){
      router.push({name: 'welcome'})
      }   
    })
  }
}
</script>

<style>

</style>