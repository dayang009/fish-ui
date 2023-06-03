<template>
  <div class="demo">
    <h3> {{ msg }}</h3>
    <h1>姓名：{{ sName }}</h1>
    <h1>性别：{{ sGender }}</h1>
    <h1>年龄：{{ sAge }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: '我是消息'
    }
  },
  props: {
    sName: String,
    sGender: String,
    sAge: Number
  }
}
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>
