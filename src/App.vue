<template>
  <div id="app">
    <!-- Wrapper -->
			<div id="wrapper">
				<!-- Main -->
					<div id="main">
						<div class="inner">
              <Header />
              <router-view />
              <Footer />
            </div>
          </div>
          <Siderbar />
      </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Siderbar from '@/components/Siderbar.vue'

export default { 
  mounted() {
    $.initialize();
  }, 
  components: {
    Header,
    Footer,
    Siderbar
  }
}
</script>
