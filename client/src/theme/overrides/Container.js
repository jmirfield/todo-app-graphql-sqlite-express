const Container = (theme) => ({
    MuiContainer: {
        styleOverrides: {
            root: {
                padding: theme.spacing(10),
                [theme.breakpoints.up('laptop')]: {
                    paddingLeft: theme.spacing(20),
                    paddingRight: theme.spacing(20),
                },
                [theme.breakpoints.down('tablet')]: {
                    padding: 0
                },
                backgroundColor: theme.palette.secondary.lighter,
                height: '100vh'
            }
        },
        defaultProps: {
            disableGutters: true
        }
    },
})

export default Container