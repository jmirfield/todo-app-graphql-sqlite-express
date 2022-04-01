export default function handleTodos(tab, sort, setList) {
    switch (tab) {
        case 0: {
            setList(list => ({ ...list, filter: list.original }))
            break;
        }
        case 1: {
            setList(list => ({ ...list, filter: list.original.filter(todo => todo.complete === false) }))
            break;
        }
        case 2: {
            setList(list => ({ ...list, filter: list.original.filter(todo => todo.complete === true) }))
            break;
        }
        default: {
            return
        }
    }

    switch (sort) {
        case 'DESC': {
            setList(list => ({ ...list, filter: list.filter.sort((a, b) => b.id - a.id) }))
            break;
        }
        case 'ASCE': {
            setList(list => ({ ...list, filter: list.filter.sort((a, b) => a.id - b.id) }))
            break;
        }
        default: {
            return
        }
    }
}