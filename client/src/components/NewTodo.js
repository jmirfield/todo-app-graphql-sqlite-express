import React, { useState, useEffect } from 'react';
import { IconButton, TextField, ListItem, SvgIcon } from "@mui/material";
import { BiXCircle } from 'react-icons/bi'

const NewTodo = ({ setNewTodo, onSubmit, onBlur }) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => setValue(e.target.value)
    useEffect(() => {
        const handleSubmit = (e) => e.key === 'Enter' && onSubmit(value)
        window.addEventListener('keyup', handleSubmit)
        return () => window.removeEventListener('keyup', handleSubmit)
    })
    return (
        <ListItem>
            <IconButton disableRipple onClick={() => setNewTodo(false)}>
                <SvgIcon component={BiXCircle} />
            </IconButton>
            <TextField autoFocus fullWidth
                size='small'
                variant='filled'
                InputProps={{ sx: { fontSize: '18px' } }}
                value={value}
                onChange={handleChange}
                onBlur={onBlur}
            />
        </ListItem>
    );
}

export default NewTodo;