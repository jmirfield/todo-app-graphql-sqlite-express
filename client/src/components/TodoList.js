import React, { useState, useEffect } from 'react';
import { getTodoList } from '../api';
import { List, ListItem, ListItemButton, Paper, Toolbar, Typography } from '@mui/material';

const TodoList = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        getTodoList(setList)
    }, []);

    return (
        <Paper elevation={10}>
            <Toolbar>
                <span>
                    {new Date().toString()}
                </span>
                <span>
                    +
                </span>
            </Toolbar>
            <List>
                {list && list.map(todo => (
                    <ListItem disableGutters dense divider key={todo.id}>
                        <ListItemButton>
                            <Typography>
                                {todo.todo}
                            </Typography>
                            <Typography variant='subtitle2' sx={{ marginLeft: 1 }}>
                                {todo.complete ? '  true' : '  false'}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;