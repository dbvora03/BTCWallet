
export const initialState = null


export const reducer = (state, action) => {
    //Protects user data from being lost when refreshed
    if(action.type === "USER") {
        //Sets the state to payload
        return action.payload
    }
    //Sets state to null, meaning the user has signed out
    if(action.type === "CLEAR") {
        return null
    }


    return state
}