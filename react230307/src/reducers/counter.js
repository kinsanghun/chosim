export const ADD = "COUNT/ADD";
export const addCount = count => ({ type: ADD, count })

const initState = {
    count : 0
}

const counter = (state = initState, action) => {
    switch(action.type) {
        case ADD:
            return state, {
                ...state,
                count : state.count + 1
            };
        default:
            return state;
    }
}

export default counter;