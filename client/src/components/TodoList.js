import React, { useState, useEffect } from 'react';
import { getTodoList } from '../api';
import { List, ListItem, Paper, SvgIcon, TextField, InputAdornment, IconButton } from '@mui/material';
import useTab from '../hooks/useTab';
import handleTodos from '../util/handleTodos';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoSort from './TodoSort';
import { BiXCircle } from 'react-icons/bi'

const TodoList = () => {
    const [list, setList] = useState({})
    const [tab, handleChange] = useTab()
    const [sort, setSort] = useState('DESC')
    const [newTodo, setNewTodo] = useState(false)

    const handleSort = (sort) => setSort(sort)
    const handleAdd = () => setNewTodo(true)

    useEffect(() => {
        getTodoList(setList)
    }, []);

    useEffect(() => {
        if (list?.original) handleTodos(tab, sort, setList)
    }, [tab, sort, list.original]);

    return (
        <Paper elevation={10}>
            <TodoHeader tab={tab} onChange={handleChange} onAdd={handleAdd} />
            <TodoSort sort={sort} onSort={handleSort} />
            <List>
                {newTodo &&
                    <ListItem>
                        <TextField autoFocus variant='filled' fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment>
                                        <IconButton onClick={() => setNewTodo(false)}>
                                            <SvgIcon component={BiXCircle} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                sx: { fontSize: '18px' }
                            }}
                        />
                    </ListItem>
                }
                {list?.filter && list.filter.map(todo => <TodoItem
                    key={todo.id}
                    todo={todo}
                    onChange={setList}
                />)}
            </List>
        </Paper>
    );
}

export default TodoList;