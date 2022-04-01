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
            if (todo.id === data.markTodo.id) return { ...todo, complete: !todo.complete }
            return todo
        })
    }))
}

export const addTodoItem = async (todo, setList) => {
    const response = await API.post('', {
        query: `
            mutation {
                addTodo(todo: "${todo}", complete: false) {
                    id
                    todo
                    complete
                }
            }
        `
    })
    const { data } = response.data
    setList(prev => ({
        ...prev,
        original: [data.addTodo, ...prev.original]
    }))
}

export const deleteTodoItem = async (id, setList) => {
    const response = await API.post('', {
        query: `
            mutation {
                deleteTodo(id: ${id})
            }
        `
    })
    const { data } = response.data
    setList(prev => ({
        ...prev,
        original: prev.original.filter(todo => todo.id !== data.deleteTodo)
    }))
}

export const editTodoItem = async (id, value, setList) => {
    const response = await API.post('', {
        query: `
            mutation {
                editTodo(id: ${id}, edit: "${value}"){
                    id
                    todo
                    complete
                }
            }
        `
    })
    const { data } = response.data
    setList(prev => ({
        ...prev,
        original: prev.original.map(todo => todo.id === id ? data.editTodo : todo)
    }))
}
