import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:8080'
})

export const retrieveUserTodos = async username => {
  const uri = `/users/${username}/todos`
  try {
    const {data} = await client.get(uri)
    return data
  } catch (e) {
    console.error(e)
    return []
  }
}

export const retrieveSingleTodo = async (username, id) => {
  const uri = `/users/${username}/todos/${id}`
  return await client.get(uri)
}

export const deleteUserTodo = async (username, id) => {
  const uri = `/users/${username}/todos/${id}`
  return await client.delete(uri)
}

export const updateTodo = async (username, todo) => {
  const uri = `/users/${username}/todos`
  return await client.put(uri, todo)
}

export const createTodo = async (username, todo) => {
  const uri = `/users/${username}/todos`
  return await client.post(uri, todo)
}