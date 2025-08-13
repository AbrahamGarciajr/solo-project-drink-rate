import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkAllDrinks } from "../../redux/drinks"
import { useNavigate } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";


function Home() {
    let drinks = useSelector(state => state.drinks.drinks)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [isLoaded, setIsLoaded] = useState(false)
    // console.log(categories)
    let arrDrinks = Object.values(drinks)
    // let mostRecent = []
    let location = useLocation()
    let [message, setMessage] = useState(false)
    let [order, setOrder] = useState('')


    useEffect(() => {
        if (location.state) {
            setMessage(true)
            let message = () => {
                setMessage(false)
            }
            setTimeout(message, 3500)
        }
    }, [location.state])


    useEffect(() => {
        dispatch(thunkAllDrinks()).then(() => setIsLoaded(true))
    }, [dispatch])


    let drinkClick = (drink) => {
        navigate(`/drink/${drink.id}`)
    }
    // console.log(order)

    return (
        // <div >
        <>
            {drinks && isLoaded && (
                <div className="home_page_drinks_holder">
                    <select name='order' className="select-order" onChange={(e) => setOrder(e.target.value)} defaultValue='Recent'>
                        <option value='Recent' >Recent Posts</option>
                        <option value='Oldest'>Oldest Posts</option>
                        <option value='Highest Rating'>Highest Rated</option>
                    </select>


                    {(order === 'Recent' || order === '') && (
                        arrDrinks.reverse().map(drink => {
                            return (
                                <div className="home_page_drinks" key={drink.id} onClick={() => drinkClick(drink)}>
                                    <div className="drink-img-holder">
                                        <img loading='lazy' className='drink-preview-img' src={drink.img} />
                                    </div>
                                    <div>
                                        {drink.name[0].toUpperCase() + drink.name.slice(1)}
                                    </div>
                                    <div>
                                        {drink.avgRating.toFixed(2)}/5 <FaStar className="star-for-rating" />
                                    </div>
                                </div>
                            )
                        })
                    )}

                    {order === 'Oldest' && (
                        arrDrinks.map(drink => {
                            return (
                                <div className="home_page_drinks" key={drink.id} onClick={() => drinkClick(drink)}>
                                    <div className="drink-img-holder">
                                        <img loading='lazy' className='drink-preview-img' src={drink.img} />
                                    </div>
                                    <div>
                                        {drink.name[0].toUpperCase() + drink.name.slice(1)}
                                    </div>
                                    <div>
                                        {drink.avgRating.toFixed(2)}/5 <FaStar className="star-for-rating" />
                                    </div>
                                </div>
                            )
                        })
                    )}


                </div>
            )}
            {location.state && message && (
                <div className="delete-message-holder">
                    {location.state.message}
                </div>
            )}
        </>

        // </div>
    )
}


export default Home
