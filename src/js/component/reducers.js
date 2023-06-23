import { ADD_TITLE } from "./actions.js"

const initialState = {
    title: 'A Warm Welcome!'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TITLE:
            // console.log('Here something', action);
            return{

                title: action.title
            }
    
        default:
            return state
    }
}

export default reducer