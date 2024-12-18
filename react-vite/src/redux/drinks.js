// actions
const GET_DRINKS = 'drinks/getAllDrinks'
const BRAND_DRINKS = 'drink/brandDrinks'
const ONE_DRINK = 'drink/oneDrink'
const DELETE_DRINK = 'drink/deleteDrink'
const CREATE_DRINK = 'drink/createDrink'
// const UPDATE_DRINK = 'drink/updateDrink'


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

const createDrink = (data) => ({
    type: CREATE_DRINK,
    payload: data
})

// const updateDrink = (data) => ({
//     type: UPDATE_DRINK,
//     payload: data
// })


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
    // console.log(drinkInfo)
    let res = await fetch(`/api/drinks/post-drink`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(drinkInfo)
    })

    // console.log(res,'theres')


    if (res.ok) {
        const data = await res.json();
        dispatch(createDrink(data));
        // console.log(data, 'data')
    } else if (res.status < 500) {
        const errorMessages = await res.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }

}

export const thunkUpdateDrink = (drinkInfo) => async dispatch => {
    // console.log(drinkInfo.id)
    let res = await fetch(`/api/drinks/${drinkInfo.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(drinkInfo)
    })

    if (res.ok) {
        const data = await res.json();
        // dispatch(updateDrink(data));
        // console.log(data, 'data')
        return data
    } else if (res.status < 500) {
        const errorMessages = await res.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
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
        case CREATE_DRINK: {
            let newState = { ...state }
            // console.log(action.payload)
            newState[action.payload.id] = action.payload
            return newState
        }
        default:
            return state
    }
}


export default drinkReducer
