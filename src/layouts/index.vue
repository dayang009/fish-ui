<template>
  <div>
    <Demo class="buju">
      <MyHeaderr></MyHeaderr>
      <MyAside></MyAside>
      <MyConten></MyConten>
      <MyFooterr></MyFooterr>
    </Demo>
  </div>
</template>
<script>
import MyHeaderr from '@/layouts/MyHeaderr.vue'
import MyAside from '@/layouts/MyAside.vue'
import MyConten from '@/layouts/MyConten.vue'
import MyFooterr from '@/layouts/MyFooterr.vue'

export default {
  name: 'index',
  components: { MyFooterr, MyConten, MyAside, MyHeaderr }
}
</script>

<style scoped>
.buju {
  height: 100vh;
  display: grid;
  grid-template-columns: 200px auto;
  grid-auto-rows: 60px auto 60px;
}
my-headerr, my-footerr {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
