import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkAllDrinks } from "../../redux/drinks"
import { useNavigate } from "react-router-dom"
import { FaStar } from "react-icons/fa";


function Home() {
    let drinks = useSelector(state => state.drinks.drinks)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [isLoaded, setIsLoaded] = useState(false)
    // console.log(categories)
    let arrDrinks = Object.values(drinks)
    // let mostRecent = []


    useEffect(() => {
        dispatch(thunkAllDrinks()).then(() => setIsLoaded(true))
    }, [dispatch])


    let drinkClick = (drink) => {
        navigate(`/drink/${drink.id}`)
    }



    return (
        // <div >
        <>
            {drinks && isLoaded && (
                <div className="home_page_drinks_holder">
                    {arrDrinks.reverse().map(drink => {
                        return (
                            <div className="home_page_drinks" key={drink.id} onClick={() => drinkClick(drink)}>
                                <div className="drink-img-holder">
                                    <img loading='lazy' className='drink-preview-img' src={drink.img} />
                                </div>
                                <div>
                                    {drink.name}
                                </div>
                                <div>
                                    {drink.avgRating.toFixed(2)}/5 <FaStar className="star-for-rating" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>

        // </div>
    )
}


export default Home
