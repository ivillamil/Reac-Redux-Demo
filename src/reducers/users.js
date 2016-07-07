
function users(state = [], action) {

    if (action.type === "ADD_USER") {
        let newId = state[state.length - 1].id + 1;
        return [
            ...state,
            {
                id: newId,
                name: action.name,
                email: action.email
            }
        ];
    }

    if (action.type === "DELETE_USER") {
        return [
            ...state.splice(0, action.index),
            ...state.splice(action.index+1)
        ];
    }

    if (action.type === "EDIT_USER") {
        return [
            ...state.splice(0, action.index),
            { ...state[index], name: action.name, email: action.email },
            ...state.splice(action.index+1)
        ];
    }

    return state;
}

export default users;
