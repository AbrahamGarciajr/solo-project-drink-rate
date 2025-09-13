import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkAllCategories } from "../../redux/categories"
import { useNavigate } from "react-router-dom"



function CategoryBar() {
    let categories = useSelector(state => state.categories.categories)
    let user = useSelector(state => state.session.user)
    let [isLoaded, setIsLoaded] = useState(false)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let arrCats = Object.values(categories)

    useEffect(() => {
        dispatch(thunkAllCategories()).then(() => setIsLoaded(true))
    }, [dispatch])

    let catClick = (cat) => {
        navigate(`/category/${cat.id}`)
    }

    let createPost = () => {
        navigate('/drink/create')
    }


    return (
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
                    {user && (
                        <div className="category_bar_options" onClick={createPost}>
                            Create a Post
                        </div>
                    )}

                </div>
            )}
        </>
    )
}


export default CategoryBar
