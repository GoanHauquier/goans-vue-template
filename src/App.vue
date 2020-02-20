<template>
  <div class="wrapper"> <!-- Main wrapper -->
    <div class="top-wrapper"> <!-- Top wrapper -->
      <Header />
      <router-view></router-view>
    </div>
    <Footer /> <!-- Footer -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
