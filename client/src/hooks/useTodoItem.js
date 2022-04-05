import { useState, useEffect, useRef } from 'react';
import { markTodoItem, deleteTodoItem, editTodoItem } from '../api';

const useTodoItem = (todo, onChange) => {

    const ref = useRef(null)

    const [isHover, setIsHover] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(todo.todo)

    const handleCheck = () => markTodoItem(todo.id, todo.complete, onChange)
    const handleDelete = () => deleteTodoItem(todo.id, onChange)
    const handleChange = (e) => setValue(e.target.value)
    const handleHoverOver = () => setIsHover(true)
    const handleHoverOff = () => setIsHover(false)
    const handleEdit = () => setIsEdit(true)
    const handleEditSubmit = () => {
        setIsEdit(false)
        if (value.trim() !== todo.todo && value.trim().length > 0) editTodoItem(todo.id, value, onChange)
        else { setValue(todo.todo) }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setIsEdit(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [ref])

    return [
        ref,
        {
            isHover,
            isEdit,
            value
        },
        {
            handleCheck,
            handleDelete,
            handleChange,
            handleHoverOff,
            handleHoverOver,
            handleEdit,
            handleEditSubmit
        }
    ];
}

export default useTodoItem;