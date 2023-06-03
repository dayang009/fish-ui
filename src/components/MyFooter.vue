<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"/>
    </label>
    <span>
      <span>已完成 {{ doneTotal }}</span> / 全部 {{ todos.length }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ['todos'],
  computed: {
    doneTotal() {
      // let i = 0;
      // this.todos.forEach(todo => {
      //   if (todo.status) {
      //     i++;
      //   }
      // })
      // return i;
      // 高级写法，使用 reduce 过滤
      return this.todos.reduce((pre, todo) => pre + (todo.status ? 1 : 0), 0)
    },
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
