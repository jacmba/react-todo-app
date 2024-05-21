import axios from "axios"

const retrieveHelloWorld = async username => {
  const uri = 'http://localhost:8080/hello-world/path-variable/' +
    username

  try  {
    const result = await axios.get(uri)
    console.log(result)
    return result.data.message
  } catch (e) {
    console.error(e)
    return null
  }
}

export default retrieveHelloWorld