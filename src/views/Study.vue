<template>
  <div>
    <h2>欢迎来到{{ addr }}</h2>
    <h2>当前数值是：{{ num }}</h2>
    <el-button type="primary" @click="num++">点我加一</el-button>
    <MyTem yname="张三" sex="男" :age="18"/>
    <MyTem yname="李四" sex="女" :age="19"/>
  </div>

</template>

<script>
import MyTem from '@/views/MyTem.vue'
import { hh } from '@/views/hunhe'

export default {
  name: 'Study',
  components: { MyTem },

  data() {
    return {
      addr: 'xian',
      num: 0,
    }
  },
  mixins: [hh]
}
</script>

<style scoped>

</style>
