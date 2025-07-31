import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkUserPosts } from "../../redux/drinks"
import { useNavigate } from "react-router-dom"
import { FaStar } from "react-icons/fa";


function UserRevs() {
    let userId = useSelector(state => state.session.user.id)
    let drinks = useSelector(state => state.drinks.users)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [isLoaded, setIsLoaded] = useState(false)
    // console.log(categories)
    // let mostRecent = []


    // useEffect(() => {
    //     dispatch(thunkUserPosts(userId)).then(() => setIsLoaded(true))
    // }, [dispatch, userId])

    // let arrDrinks
    // if (drinks) {
    //     arrDrinks = Object.values(drinks)
    // }

    // let drinkClick = (drink) => {
    //     navigate(`/drink/${drink.id}`)
    // }



    return (
        <div>
            {/* {drinks && isLoaded && (
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
            )} */}
            Hello
            {/* {location.state && message && (
                <div className="delete-message-holder">
                    {location.state.message}
                </div>
            )} */}
        </div>
    )
}


export default UserRevs
