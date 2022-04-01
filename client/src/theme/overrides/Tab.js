const Tab = (theme) => ({
    MuiTab: {
        styleOverrides: {
            root: {
                "&.MuiTab-root": {
                    color:'#fff'
                },
                "&.Mui-selected": {
                    color:'#fff',
                    fontWeight: 'bold',
                    border: 'none'
                }
            }
        },
    },
})

export default Tab