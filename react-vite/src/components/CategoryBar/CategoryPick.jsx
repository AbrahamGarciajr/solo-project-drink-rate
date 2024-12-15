import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { thunkAllCategories, thunkCategoryBrands } from "../../redux/categories"


function CategoryPick() {
    let { categoryId } = useParams()
    let category = useSelector(state => state.categories.categories[categoryId])
    let brands = useSelector(state => state.categories.brands)
    let dispatch = useDispatch()
    let [isLoaded, setIsLoaded] = useState(false)
    let navigate = useNavigate()
    // console.log(categories)
    // console.log(categoryId)

    useEffect(() => {
        dispatch(thunkCategoryBrands(categoryId))
            .then(() => setIsLoaded(true))
    }, [dispatch, categoryId])

    // console.log(category, 'this')
    // console.log(brands, 'that')


    let brandClick = (brand) => {
        navigate(`/brand/${brand.id}`)
    }

    let arrBrands = Object.values(brands)
    // let actualBrands = arrBrands.filter(brand => {
    //     return brand.category_id == categoryId
    // })

    // console.log(actualBrands)

    return (
        <div >
            {arrBrands.length > 0 && isLoaded && (
                <div className="home_page_drinks_holder">
                    {arrBrands.map(brand => {
                        return (
                            <div className="home_page_drinks" key={brand.id} onClick={() => brandClick(brand)}>
                                {brand.name}
                            </div>
                        )
                    })}
                </div>
            )}
            {!isLoaded && (
                <div>...Loading</div>
            )}
        </div>
    )
}



export default CategoryPick
