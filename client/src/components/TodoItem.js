import React from 'react';
import { ListItem, ListItemButton, Checkbox, Typography } from '@mui/material';
import { markTodoItem } from '../api';

const TodoItem = ({ todo, onChange }) => {
    const handleCheck = () => markTodoItem(todo.id, todo.complete, onChange)
    return (
        <ListItem disableGutters dense divider sx={{ backgroundColor: todo.complete && 'action.focus' }}>
            <ListItemButton>
                <Checkbox checked={todo.complete} onChange={handleCheck} />
                <Typography>
                    {todo.todo}
                </Typography>
            </ListItemButton>
        </ListItem>
    );
}

export default React.memo(TodoItem);