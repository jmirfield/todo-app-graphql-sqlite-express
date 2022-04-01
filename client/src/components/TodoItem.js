import React, { useState, useEffect, useRef } from 'react';
import { ListItem, ListItemButton, Checkbox, Typography, Box, SvgIcon, IconButton, TextField, Button } from '@mui/material';
import { markTodoItem, deleteTodoItem, editTodoItem } from '../api';
import { BiXCircle } from 'react-icons/bi'

const TodoItem = ({ todo, onChange }) => {
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

    return (
        <ListItem divider ref={ref}
            sx={{
                backgroundColor: todo.complete && 'action.focus',
                justifyContent: 'space-between'
            }}
            onMouseOver={handleHoverOver}
            onMouseLeave={handleHoverOff}
        >
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Checkbox checked={todo.complete} onChange={handleCheck} />
                {!isEdit
                    ? <ListItemButton onClick={handleEdit}>
                        <Typography>
                            {todo.todo}
                        </Typography>
                    </ListItemButton>
                    : <TextField
                        sx={{
                            ml: 1,
                            width: {
                                laptop: 700,
                                tablet: 300,
                                mobile: 200
                            }
                        }}
                        value={value}
                        onChange={handleChange}
                        autoFocus
                        InputProps={{
                            endAdornment: <Button variant='contained' onClick={handleEditSubmit}>Edit</Button>,
                        }}
                    />
                }
            </Box>
            {isHover &&
                <IconButton disableRipple onClick={handleDelete}>
                    <SvgIcon component={BiXCircle} sx={{ marginRight: 1 }} />
                </IconButton>
            }
        </ListItem >
    );
}

export default React.memo(TodoItem);