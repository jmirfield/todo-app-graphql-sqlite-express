import { createTheme } from "@mui/material/styles"
import ComponentsOverrides from "./overrides"

const theme = createTheme({
    palette: {
        primary: { 
            main: '#42A5F5',
            lighter: '#85C5F8',
            darker: '#205077'
        },
        secondary: {
            main: '#EADD99',
            lighter: '#F1E8BD',
            darker: '#726B4A'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        }
    }
})

theme.components = ComponentsOverrides(theme)

console.log(theme)

export default theme