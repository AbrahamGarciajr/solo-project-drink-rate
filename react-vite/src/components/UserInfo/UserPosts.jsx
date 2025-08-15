import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkUserPosts } from "../../redux/drinks"
import { useNavigate } from "react-router-dom"
import { FaStar } from "react-icons/fa";


function UserPosts() {
    let userId = useSelector(state => state.session.user.id)
    let drinks = useSelector(state => state.drinks.users)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [isLoaded, setIsLoaded] = useState(false)
    let [order, setOrder] = useState('')
    // console.log(categories)
    // let mostRecent = []


    useEffect(() => {
        dispatch(thunkUserPosts(userId)).then(() => setIsLoaded(true))
    }, [dispatch, userId])

    let arrDrinks
    if (drinks) {
        arrDrinks = Object.values(drinks)
    }

    let drinkClick = (drink) => {
        navigate(`/drink/${drink.id}`)
    }



    return (
        <div>
            {arrDrinks.length > 0 && isLoaded && (
                <div className="home_page_drinks_holder">
                    <select name='order' className="select-order-user-posts" onChange={(e) => setOrder(e.target.value)} defaultValue='Recent'>
                        <option className='order-options' value='Recent' >Recent Posts</option>
                        <option className='order-options' value='Oldest'>Oldest Posts</option>
                        <option className='order-options' value='Highest Rating'>Highest Rated</option>
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

                    {order === 'Highest Rating' && (
                        arrDrinks.sort((a, b) => b['avgRating'] - a['avgRating']).map(drink => {
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
            {!isLoaded && (
                <div className="loading-sign">...Loading</div>
            )}
            {arrDrinks.length < 1 && isLoaded && (
                <div className="loading-sign">
                    Once you have made a post they will be here.
                </div>
            )}
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


        </div>
    )
}


export default UserPosts
