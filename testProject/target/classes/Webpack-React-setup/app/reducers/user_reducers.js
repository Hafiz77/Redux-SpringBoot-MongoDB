var userInitialState = {
    users: []
};

export default function(state = userInitialState, action) {
    switch(action.type) {

        case 'GET_USERS':
            console.log("From GET_USERS");
            var newState = Object.assign({}, state);
            newState.users = action.users;
            return newState;
        case 'CREATE_USERS':
            console.log("From CREATE_USERS");
            var newState = Object.assign({}, state);
            newState.users = action.users;
            return newState;
        case 'GET_USER':
            console.log("From Get_USER");
            var newState = Object.assign({}, state);
            newState.users = action.users;
            return newState;
        case 'DELETE_USER':
            console.log("From Delete_USER");
            var newState = Object.assign({}, state);
            newState.users = action.users;
            return newState;

        default:
            return state;

    }
}
