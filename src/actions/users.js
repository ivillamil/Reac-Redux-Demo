function addUser(name, email) {
    return {
        type: 'ADD_USER',
        name,
        email
    }
}

function deleteUser() {
    return {
        type: 'DELETE_USER',
        index
    }
}

function editUser() {
    return {
        type: 'EDIT_USER',
        index,
        name,
        email
    }
}

module.exports = {
    addUser,
    deleteUser,
    editUser
};
