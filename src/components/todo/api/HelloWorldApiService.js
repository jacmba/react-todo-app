import axios from "axios"

const client = axios.create({
  baseURL: 'http://localhost:8080/hello-world'
})

const retrieveHelloWorld = async username => {
  const uri = `/path-variable/${username}`

  try  {
    const result = await client.get(uri)
    console.log(result)
    return result.data.message
  } catch (e) {
    console.error(e)
    return null
  }
}

export default retrieveHelloWorld