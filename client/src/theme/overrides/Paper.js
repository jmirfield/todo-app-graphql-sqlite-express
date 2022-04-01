const Paper = (theme) => ({
    MuiPaper: {
        styleOverrides: {
            root: {
                [theme.breakpoints.down('tablet')]: {
                    minHeight: '100%',
                },
            },
        },
    }
})

export default Paper