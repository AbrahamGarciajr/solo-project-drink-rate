import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkBrandDrinks } from "../../redux/drinks"
import { useNavigate, useParams } from "react-router-dom"



function BrandPick() {
    let { brandId } = useParams()
    let drinks = useSelector(state => state.drinks.drinks)
    let dispatch = useDispatch()
    let [isLoaded, setIsLoaded] = useState(false)
    let navigate = useNavigate()
    // console.log(drinks, 'drinks from the brandPick')

    useEffect(() => {
        dispatch(thunkBrandDrinks(brandId))
            .then(() => setIsLoaded(true))
    }, [dispatch, brandId])


    let drinkClick = (drink) => {
        navigate(`/drink/${drink.id}`)
    }

    let arrDrinks = Object.values(drinks)


    return (
        <div >
            {arrDrinks.length > 0 && isLoaded && (
                <div className="home_page_drinks_holder">
                    {arrDrinks.map(drink => {
                        return (
                            <div className="home_page_drinks" key={drink.id} onClick={() => drinkClick(drink)}>
                                {drink.name}
                            </div>
                        )
                    })}
                </div>
            )}
            {!isLoaded && (
                <div>...Loading</div>
            )}
            {arrDrinks.length < 1 && isLoaded && (
                <>
                There are no drink posts for this brand
                </>
            )}
        </div>
    )
}



export default BrandPick
