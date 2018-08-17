const INITIAL_STATE = {customersList:[]}

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CUSTOMERS_FETCHED':
            return { ...state, customersList: action.payload.data }

        default:
            return state
    }
}