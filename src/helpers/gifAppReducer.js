

export const gifAppReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'Add Category':
            return [action.payload, ...initialState]

        case 'Remove Category':
            return initialState.filter(cat => cat.toLowerCase() !== action.payload.toLowerCase())

        case 'Remove All Categories':
            return []

        default:
            return initialState;
    }
}