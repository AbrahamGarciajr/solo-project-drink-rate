// actions
const GET_CATS = 'categories/getCats'
const GET_BRANDS = 'brands/getCatBrands'

const getCats = (data) => ({
    type: GET_CATS,
    payload: data
})

const getCatBrands = (data) => ({
    type: GET_BRANDS,
    payload: data
})


// thunks

export const thunkAllCategories = () => async dispatch => {
    const res = await fetch("/api/drinks/categories")

    if (res.ok) {
        const data = await res.json()
        // console.log(data)
        dispatch(getCats(data))
    }
}

export const thunkCategoryBrands = (catId) => async dispatch => {
    // console.log(catId, 'this is the cat id')
    const res = await fetch(`/api/drinks/categories/${catId}`)

    if (res.ok) {
        let data = await res.json()
        // console.log('from the thunk res', data)
        // dispatch(resetState())
        dispatch(getCatBrands(data))
    }
}







// reducer

const initialState = { categories: {}, brands: {} };

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATS: {
            let newState = { ...state }
            // console.log(newState)
            // console.log(action.payload)
            action.payload.forEach(cat => {
                newState.categories[cat.id] = cat
                // console.log(cat)
            });
            return newState
        }
        case GET_BRANDS: {
            let newState = { ...state }
            // console.log(newState, ' from reducer')
            newState.brands = {}
            action.payload.forEach(brand => {
                newState.brands[brand.id] = brand
            })
            // console.log(newState)
            return newState
        }
        // case RESET_STATE:
        //     return initialState
        default:
            return state
    }
}


export default categoryReducer
