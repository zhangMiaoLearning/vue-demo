import { request } from '@/utils'

export const getTodoListApi = () => request.get('/todolist').then((res) => res.data)
export const postTodoListApi = (name: string) =>
  request.post('todolist', { name: name, status: false }).then((res) => res.data)
export const deleteTodoItemApi = (id: number) =>
  request.delete(`/todolist` + `/${id}`).then((res) => res.data)
export const checkTodoItemApi = (id: number) =>
  request.patch(`/todolist/${id}`,{status:true}).then((res) => res.data)
