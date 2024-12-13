// actions
const GET_DRINKS = 'drinks/getAllDrinks'


const getAllDrinks = (data) => ({
    type: GET_DRINKS,
    payload: data
})


// thunks

export const thunkAllDrinks = () => async dispatch => {
    const res = await fetch("/api/drinks")

    if (res.ok) {
        const data = await res.json()
        // console.log(data)
        dispatch(getAllDrinks(data))
    }
}





// reducer

const initialState = { drinks: {}, selected: {}};

function drinkReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DRINKS: {
            let newState = { ...state }
            action.payload.forEach(drink => {
                newState.drinks[drink.id] = drink
            });
            return newState
        }
        default:
            return state
    }
}


export default drinkReducer
