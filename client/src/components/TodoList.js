import React, { useEffect } from 'react';
import { List, Paper } from '@mui/material';
import useTab from '../hooks/useTab';
import handleTodos from '../util/handleTodos';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoSort from './TodoSort';
import NewTodo from './NewTodo';
import useTodo from '../hooks/useTodo';

const TodoList = () => {
    const [tab, handleChange] = useTab()
    const [state,
        {
            setList,
            setNewTodo,
            handleSort,
            handleAdd,
            handleSubmit,
            handleLeave
        }
    ] = useTodo()

    const { list, sort, newTodo } = state

    useEffect(() => {
        if (list?.original) handleTodos(tab, sort, setList)
    }, [tab, sort, list.original, setList]);

    return (
        <Paper elevation={10}>
            <TodoHeader tab={tab} onChange={handleChange} onAdd={handleAdd} />
            <TodoSort sort={sort} onSort={handleSort} />
            <List>
                {newTodo && <NewTodo setNewTodo={setNewTodo} onSubmit={handleSubmit} onBlur={handleLeave} />}
                {list?.filter && list.filter.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onChange={setList}
                    />
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;