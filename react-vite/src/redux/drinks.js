// actions
const GET_DRINKS = 'drinks/getAllDrinks'
const BRAND_DRINKS = 'drink/brandDrinks'
const ONE_DRINK = 'drink/oneDrink'
const DELETE_DRINK = 'drink/deleteDrink'
const CREATE_DRINK = 'drink/createDrink'
const USER_DRINKS = 'rev/userPosts'


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

const userPosts = (data) => ({
    type: USER_DRINKS,
    payload: data
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
    // console.log(drinkInfo)
    let res = await fetch(`/api/drinks/post-drink`, {
        method: 'POST',
        body: drinkInfo
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(createDrink(data));
        return data
        // console.log(data, 'data')
    } else if (res.status < 500) {
        const errorMessages = await res.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }

}

export const thunkUpdateDrink = (drinkInfo) => async () => {
    // console.log(drinkInfo)
    let res = await fetch(`/api/drinks/${drinkInfo.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(drinkInfo)
    })

    if (res.ok) {
        const data = await res.json();
        // dispatch(updateDrink(drinkInfo));
        // console.log(data, 'dataaaaa')
        return data
    } else if (res.status < 500) {
        const errorMessages = await res.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
}

export const thunkUpdateRev = (revInfo) => async () => {
    // console.log(revInfo)
    let res = await fetch(`/api/reviews/user/${revInfo.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(revInfo)
    })

    if (res.ok) {
        const data = await res.json();
        // dispatch(updateRev(revInfo));
        // console.log(data, 'data')
        return data
    } else if (res.status < 500) {
        const errorMessages = await res.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
}

export const thunkDeleteRev = (revInfo) => async () => {
    let res = await fetch(`/api/reviews/user/${revInfo.id}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    })

    if (res.ok) {
        return await res.json()
    } else if (res.status < 500) {
        const errorMessages = await res.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
}

export const thunkCreateRev = (revInfo) => async () => {
    let res = await fetch(`/api/reviews/${revInfo.beverage_post_id}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(revInfo)
    })

    if (res.ok) {
        let data = await res.json()

        return data

    } else if (res.status < 500) {
        const errorMessages = await res.json();
        return errorMessages
    } else {
        return { server: "Something went wrong. Please try again" }
    }
}

export const thunkUserPosts = (userId) => async dispatch => {
    let res = await fetch(`/api/users/${userId}/posts`)
    if (res.ok) {
        let data = await res.json()
        dispatch(userPosts(data))
    } else {
        let data = await res.json()
        return data
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
            // console.log(action.payload)
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
        case USER_DRINKS: {
            let newState = { ...state }
            // console.log(action.payload)
            newState.users = {}
            if (action.payload.length > 0) {
                action.payload.forEach(drink => {
                    newState.users[drink.id] = drink
                })
            }
            return newState
        }
        default:
            return state
    }
}




export default drinkReducer
