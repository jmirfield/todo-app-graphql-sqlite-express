import { merge } from 'lodash'
import Container from './Container'
import Toolbar from './Toolbar'
import Tab from './Tab'
import Paper from './Paper'

const ComponentsOverrides = (theme) => {
    return merge(
        Container(theme),
        Toolbar(theme),
        Tab(theme),
        Paper(theme)
    )
}

export default ComponentsOverrides