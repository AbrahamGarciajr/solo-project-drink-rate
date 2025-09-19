import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { thunkCategoryBrands } from "../../redux/categories"


function CategoryPick() {
    let { categoryId } = useParams()
    let category = useSelector(state => state.categories.categories[categoryId])
    let brands = useSelector(state => state.categories.brands)
    let dispatch = useDispatch()
    let [isLoaded, setIsLoaded] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(thunkCategoryBrands(categoryId))
            .then(() => setIsLoaded(true))
    }, [dispatch, categoryId])

    let brandClick = (brand) => {
        navigate(`/brand/${brand.id}`)
    }
    let arrBrands = Object.values(brands)

    return (
        <div >
            {arrBrands.length > 0 && isLoaded && (
                <div>
                    <div className="brands-for-brand-name">
                        Brands for {category.name}:
                    </div>
                    <div className="home_page_drinks_holder">
                        {arrBrands.map(brand => {
                            return (
                                <div className="category-page-brands" key={brand.id} onClick={() => brandClick(brand)}>
                                    {brand.name}
                                </div>
                            )
                        })}
                    </div>
                </div>

            )}
            {!isLoaded && (
                <div className="loading-sign">...Loading</div>
            )}
        </div>
    )
}



export default CategoryPick
