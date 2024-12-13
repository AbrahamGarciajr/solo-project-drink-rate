import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkAllCategories } from "../../redux/categories"
import { useNavigate } from "react-router-dom"



function CategoryBar(){
    let categories = useSelector(state => state.categories.categories)
    let [isLoaded, setIsLoaded] = useState(false)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    // console.log(categories)
    let arrCats = Object.values(categories)
    // console.log(arrCats)

    useEffect(() => {
        dispatch(thunkAllCategories()).then(() => setIsLoaded(true))
    }, [dispatch])

    let catClick = (cat) => {
        navigate(`/category/${cat.id}`)
    }


    return(
        <>
            {categories && isLoaded && (
                <div className="category_bar_option_holder">
                    {arrCats.map(cat => {
                        return (
                            <div className='category_bar_options' key={cat.id} onClick={() => catClick(cat)}>
                                {cat.name}
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    )
}


export default CategoryBar
