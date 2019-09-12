const initialState = ['Hello, I am from intitialState']


export const firstReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GREETING':
            return [...state, action.payload]

        default:
            return state
    }
}