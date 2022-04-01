import React, { useState, useRef } from 'react';
import { Box, IconButton, SvgIcon, Popover, MenuList, MenuItem } from '@mui/material'
import { BiSort, BiSortDown, BiSortUp } from 'react-icons/bi'

const TodoSort = ({ sort, onSort }) => {
    const [open, setOpen] = useState(false)
    const sortRef = useRef(null)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 1 }}>
                <IconButton size='small' disableRipple onClick={handleOpen} ref={sortRef}>
                    <SvgIcon component={BiSort} />
                </IconButton>
            </Box>
            <Popover
                open={open}
                onClose={handleClose}
                anchorEl={sortRef.current}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{minHeight: 1}}
            >
                <MenuList sx={{ p: 0 }}>
                    <MenuItem sx={{ backgroundColor: sort === 'DESC' && 'action.focus' }} onClick={onSort.bind(this, 'DESC')}>
                        <IconButton size='small' disableRipple>
                            <SvgIcon component={BiSortDown} />
                        </IconButton>
                    </MenuItem>
                    <MenuItem sx={{ backgroundColor: sort === 'ASCE' && 'action.focus' }} onClick={onSort.bind(this, 'ASCE')}>
                        <IconButton size='small' disableRipple>
                            <SvgIcon component={BiSortUp} />
                        </IconButton>
                    </MenuItem>
                </MenuList>
            </Popover>
        </>
    );
}

export default TodoSort;