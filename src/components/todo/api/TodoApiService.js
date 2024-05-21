import axios from "axios";

const client = axios.create({
  baseURL: 'http://localhost:8080'
})

const retrieveUserTodos = async username => {
  const uri = `/users/${username}/todos`
  try {
    const {data} = await client.get(uri)
    return data
  } catch (e) {
    console.error(e)
    return []
  }
}

export default retrieveUserTodos