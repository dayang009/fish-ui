<template>
  <div class="demo">
    <h2>学校名称： {{ schoolName }}</h2>
    <h2>学校地址： {{ schoolAddress }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      schoolName: "建院",
      schoolAddress: "张家口"
    }
  },
}
</script>

<style scoped>
.demo {
  background-color: grey;
}

</style>
