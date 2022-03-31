const Toolbar = (theme) => ({
    MuiToolbar: {
        styleOverrides: {
            root: {
                backgroundColor: theme.palette.primary.main,
                justifyContent: 'space-between',
                borderTopLeftRadius: 'inherit',
                borderTopRightRadius: 'inherit',
            }
        }
    },
})

export default Toolbar