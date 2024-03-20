<template>
  <div>
    <h2 class="cname">姓名：{{ yname }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年龄：{{ upAge }}</h2><br/>
    <el-button type="info" @click="updateAge">尝试修改接受到的年龄</el-button>

  </div>
</template>

<script>
export default {
  name: 'MyTem',
  props: ['yname', 'sex', 'age'],
  data() {
    return {
      upAge: this.age
    }
  },
  methods: {
    updateAge() {
      this.upAge++
    },
  }
}
</script>

<style scoped>
.cname {
  background-color: #42b983;
}

</style>
