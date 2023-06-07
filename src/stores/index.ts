import { checkTodoItemApi, deleteTodoItemApi, getTodoListApi, postTodoListApi } from '@/api'
import { defineStore } from 'pinia'
interface todoList {
  id: number
  name: string
  status: boolean
}
export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [] as todoList[]
  }),
  actions: {
    async getTodoList() {
      this.todoList = await getTodoListApi()
    },
    async addTodoItem(name: string) {
      const res = await postTodoListApi(name)
      this.todoList.push(res)
    },
    async deleteTodoItem(id: number) {
      this.todoList = this.todoList.filter((item) => item.id != id)
      await deleteTodoItemApi(id)
    },
    async checkTodoItem(itmeId: number) {
      this.todoList = this.todoList.map((item) => {
        if ((item.id === itmeId)) {
          item.status = true
          console.log("click");
          
        }
        return item
      })
      await checkTodoItemApi(itmeId)
      console.log(this.todoList);
      
    }
  }
})
