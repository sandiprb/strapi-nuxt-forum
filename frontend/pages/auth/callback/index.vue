<template>
  <div class="min-h-screen w-full flex items-center justify-center">
    <c-spinner
      thickness="4px"
      speed="0.65s"
      empty-color="green.200"
      color="vue.500"
      size="xl"
    />
  </div>
</template>

<script>
import { CSpinner } from '@chakra-ui/vue'
import { URLS } from '../../../constants'
import axios from "axios";
export default {
  name: 'AuthCallback',
  props: {},

  components: { CSpinner },

  data: () => ({}),

  methods: {
    async getToken(){
      this.$store.dispatch('auth/socialLoginCallback', {
        provider: 'google', params: this.$route.query
      })
    }
  },

  mounted(){
    this.getToken()
  }
}
</script>
<style lang="postcss" scoped></style>
