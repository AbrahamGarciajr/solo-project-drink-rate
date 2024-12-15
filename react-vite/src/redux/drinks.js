// actions
const GET_DRINKS = 'drinks/getAllDrinks'
const BRAND_DRINKS = 'drink/brandDrinks'
const ONE_DRINK = 'drink/oneDrink'
const DELETE_DRINK = 'drink/deleteDrink'


const getAllDrinks = (data) => ({
    type: GET_DRINKS,
    payload: data
})

const brandDrinks = (data) => ({
    type: BRAND_DRINKS,
    payload: data
})

const oneDrink = (data) => ({
    type: ONE_DRINK,
    payload: data
})

const deleteDrink = (drinkId) => ({
    type: DELETE_DRINK,
    payload: drinkId
})


// thunks

export const thunkAllDrinks = () => async dispatch => {
    const res = await fetch("/api/drinks")

    if (res.ok) {
        const data = await res.json()
        // console.log(data)
        dispatch(getAllDrinks(data))
    } else {
        return await res.json()
    }
}

export const thunkBrandDrinks = (brandId) => async dispatch => {
    const res = await fetch(`/api/drinks/brands/${brandId}`)
    if (res.ok) {
        let data = await res.json()
        dispatch(brandDrinks(data))
    } else {
        return await res.json()
    }
}

export const thunkOneDrink = (drinkId) => async dispatch => {
    const res = await fetch(`/api/drinks/${drinkId}`)
    if (res.ok) {
        let data = await res.json()
        // console.log(data, 'the good data')
        dispatch(oneDrink(data))
    } else {
        let data = await res.json()
        // console.log(data, 'the bad data')
        return data
    }
}

export const thunkDeleteDrink = (drinkId) => async dispatch => {
    // console.log(drinkId, 'from the thunk')
    const res = await fetch(`/api/drinks/${drinkId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        let data = await res.json()
        dispatch(deleteDrink(drinkId))
        return data
    } else {
        return await res.json()
    }
}

export const thunkCreateDrink = (drinkInfo) => async dispatch => {
    console.log(drinkInfo)
}





// reducer

const initialState = { drinks: {}, selected: {} };

function drinkReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DRINKS: {
            let newState = { ...state }
            action.payload.forEach(drink => {
                newState.drinks[drink.id] = drink
            })
            return newState
        }
        case BRAND_DRINKS: {
            let newState = { ...state }
            // console.log(action.payload)
            newState.drinks = {}
            if (action.payload.length > 0) {
                action.payload.forEach(drink => {
                    newState.drinks[drink.id] = drink
                })
            }
            return newState
        }
        case ONE_DRINK: {
            let newState = { ...state }
            newState.selected = action.payload
            return newState
        }
        case DELETE_DRINK: {
            let newState = { ...state }
            delete newState.drinks[action.payload]
            // console.log(action.payload, 'the payload')
            return newState
        }
        default:
            return state
    }
}


export default drinkReducer
