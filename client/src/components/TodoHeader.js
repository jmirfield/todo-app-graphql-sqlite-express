import { Toolbar, Tabs, Tab, SvgIcon, IconButton } from "@mui/material";
import { BiMessageSquareAdd } from 'react-icons/bi'

const TodoHeader = ({ tab, onChange, onAdd }) => {
    return (
        <Toolbar>
            <Tabs selectionFollowsFocus
                value={tab}
                onChange={onChange}
                indicatorColor='secondary'
            >
                <Tab label="all" />
                <Tab label="incomplete" />
                <Tab label="complete" />
            </Tabs>
            <IconButton onClick={onAdd}>
                <SvgIcon component={BiMessageSquareAdd} />
            </IconButton>
        </Toolbar>
    );
}

export default TodoHeader;