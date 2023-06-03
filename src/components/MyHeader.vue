<template>
  <div class="todo-header">
    <input type="text"
           placeholder="请输入你的任务名称，按回车键确认"
           v-model="title"
           @keyup.enter="addTask"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  props: ['addTodo'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTask() {
      // 校验数据
      if (!this.title.trim()) {
        return this.$message({
          showClose: true,
          message: '数据不能为空',
          type: 'warning',
          center: true
        });
      }
      // 将用户的输入包装为一个 to do 对象
      const todoObj = {id: nanoid(), title: this.title, status: false};
      // 通知 APP 组件添加这个对象
      this.addTodo(todoObj);
      // 清空输入框的数据
      this.title = ''
    },
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
