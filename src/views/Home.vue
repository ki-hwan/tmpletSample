<template>
  <div class="home">
    <Banner />
    <Info1 />
    <Info2 />
  </div>
</template>

<script>
import Banner from '@/components/Home/banner.vue'
import Info1 from '@/components/Home/info1.vue'
import Info2 from '@/components/Home/info2.vue'
export default {
  name: 'home',
  components: {
    Banner,
    Info1,
    Info2
  }
}
</script>
