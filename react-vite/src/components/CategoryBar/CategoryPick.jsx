import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { thunkAllCategories, thunkCategoryBrands } from "../../redux/categories"


function CategoryPick(){
    let {categoryId} = useParams()
    let category = useSelector(state => state.categories.categories[categoryId])
    let brands = useSelector(state => state.categories.brands)
    let dispatch = useDispatch()
    // console.log(categories)
    // console.log(categoryId)

    useEffect(() => {
        dispatch(thunkAllCategories()).then(() => thunkCategoryBrands(categoryId))
    }, [dispatch, categoryId])

    console.log(category)
    console.log(brands)


    return(
        <>hello</>
    )
}



export default CategoryPick
