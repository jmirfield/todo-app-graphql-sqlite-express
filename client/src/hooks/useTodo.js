import { useState, useEffect } from 'react';
import { addTodoItem, getTodoList } from '../api';

const useTodo = () => {
    const [list, setList] = useState({})
    const [sort, setSort] = useState('DESC')
    const [newTodo, setNewTodo] = useState(false)
    const handleSort = (sort) => setSort(sort)
    const handleAdd = () => setNewTodo(true)
    const handleSubmit = (value) => {
        setNewTodo(false)
        if (value.trim().length > 0) addTodoItem(value, setList)
    }
    const handleLeave = () => {
        setNewTodo(false)
    }

    useEffect(() => {
        getTodoList(setList)
    }, []);

    return [
        {
            list,
            sort,
            newTodo
        },
        {
            setList,
            setNewTodo,
            handleSort,
            handleAdd,
            handleSubmit,
            handleLeave
        }
    ];
}

export default useTodo;