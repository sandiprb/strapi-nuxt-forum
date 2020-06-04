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
import { mapGetters } from 'vuex'
import { CSpinner } from '@chakra-ui/vue'
import { URLS } from '../../../constants'
import axios from 'axios'
export default {
  name: 'AuthCallback',
  props: {},

  components: { CSpinner },

  data: () => ({}),

  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
    }),
  },

  watch: {
    isAuthenticated(val) {
      if (val) {
        this.proceedLogin()
      }
    },
  },

  methods: {
    proceedLogin() {
      this.$toast({
        title: 'Logged In Successfully',
        status: 'success',
        duration: 4000,
      })
      setTimeout(() => this.$router.push('/forum'), 1500)
    },
    async getToken() {
      this.$store.dispatch('auth/socialLoginCallback', {
        provider: 'google',
        params: this.$route.query,
      })
    },
  },

  mounted() {
    this.getToken()
  },
}
</script>
<style lang="postcss" scoped></style>
