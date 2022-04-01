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
    setList({ original: data.Todos })
}

export const markTodoItem = async (id, status, setList) => {
    const response = await API.post('', {
        query: `
            mutation {
                markTodo(id: ${id}, complete: ${!status}){
                    id
                }
            }
        `
    })
    const { data } = response.data
    setList(prev => ({
        ...prev,
        original: prev.original.map(todo => {
            if (todo.id === data.markTodo.id) return { ...todo, complete: !todo.complete}
            return todo
        })
    }))
}
