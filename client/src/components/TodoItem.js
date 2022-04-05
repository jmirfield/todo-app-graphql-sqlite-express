import React from 'react';
import { ListItem, ListItemButton, Checkbox, Typography, Box, SvgIcon, IconButton, TextField, Button } from '@mui/material';
import { BiXCircle } from 'react-icons/bi'
import useTodoItem from '../hooks/useTodoItem';

const TodoItem = ({ todo, onChange }) => {
    const [ref, state, actions] = useTodoItem(todo, onChange)

    const {
        isHover,
        isEdit,
        value
    } = state

    const {
        handleCheck,
        handleDelete,
        handleChange,
        handleHoverOff,
        handleHoverOver,
        handleEdit,
        handleEditSubmit
    } = actions

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
                    ? <ListItemButton sx={{ height: (theme) => theme.spacing(6) }}>
                        <Typography onClick={handleEdit}>
                            {todo.todo}
                        </Typography>
                        {isHover &&
                            <IconButton disableRipple onClick={handleDelete}>
                                <SvgIcon component={BiXCircle} sx={{ marginRight: 1 }} />
                            </IconButton>
                        }
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
        </ListItem >
    );
}

export default React.memo(TodoItem);