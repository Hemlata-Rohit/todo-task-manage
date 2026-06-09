import axiosInstance from "../axiosInstance"

 export const getTodoApi =()=>{
    return axiosInstance.get("/todo")
 }

 export const addTodoApi =(payload)=>{
    return axiosInstance.post("/todo",payload)
 }

 export const editTodoApi =({id,payload})=>{
    return axiosInstance.put(`/todo/${id}`,payload)
 }

 export const deleteTodoApi =(id)=>{
    return axiosInstance.delete(`/todo/${id}`)
 }