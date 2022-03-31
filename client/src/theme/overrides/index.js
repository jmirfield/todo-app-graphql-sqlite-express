import { merge } from 'lodash'
import Container from './Container'
import Toolbar from './Toolbar'

const ComponentsOverrides = (theme) => {
    return merge(
        Container(theme),
        Toolbar(theme)
    )
}

export default ComponentsOverrides