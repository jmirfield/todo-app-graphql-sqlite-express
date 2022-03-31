const Container = (theme) => ({
    MuiContainer: {
        styleOverrides: {
            root: {
                padding: theme.spacing(20),
            }
        },
        defaultProps: {
            maxWidth: 'desktop'
        }
    },
})

export default Container