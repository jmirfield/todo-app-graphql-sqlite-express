import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:8080/graphql" })
API.defaults.headers.post['Content-Type'] = 'application/json'

export const getTodoList = async (setList) => {
    const response = await API.post('', {
        query: `
            {
                Todos {
                    id
                    todo
                    complete
                }
            }
        `
    })
    const { data } = response.data
    setList(data.Todos)
}
