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

        dispatch(getCats(data))
    }
}

export const thunkCategoryBrands = (catId) => async dispatch => {
    const res = await fetch(`/api/drinks/categories/${catId}`)

    if (res.ok) {
        let data = await res.json()

        dispatch(getCatBrands(data))
    }
}







// reducer

const initialState = { categories: {}, brands: {} };

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATS: {
            let newState = { ...state }
            action.payload.forEach(cat => {
                newState.categories[cat.id] = cat
            });
            return newState
        }
        case GET_BRANDS: {
            let newState = { ...state }
            newState.brands = {}
            action.payload.forEach(brand => {
                newState.brands[brand.id] = brand
            })
            return newState
        }

        default:
            return state
    }
}


export default categoryReducer
