import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { thunkUserRevs } from "../../redux/session";
import { thunkAllDrinks } from "../../redux/drinks";


function UserRevs() {
    let userId = useSelector(state => state.session.user.id)
    let userRevs = useSelector(state => state.session.revs)
    let drinks = useSelector(state => state.drinks.drinks)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [isLoaded, setIsLoaded] = useState(false)
    let [order, setOrder] = useState('')


    useEffect(() => {
        dispatch(thunkUserRevs(userId)).then(() => setIsLoaded(true))
        dispatch(thunkAllDrinks())
    }, [dispatch, userId])

    let revs
    if (userRevs) {
        revs = Object.values(userRevs)
    }

    let drinkClick = (rev) => {
        navigate(`/drink/${drinks[rev.beverage_post_id].id}`, { state: { revId: rev.id } })
    }

    let stars = function (stars) {
        let res = []
        let count = 0
        for (let i = 0; i < stars; i++) {
            res.push(<span key={`${count}A`}><FaStar className="star-for-rating" /></span>)
            count++
        }
        return res
    }



    return (
        <div>
            {revs && isLoaded && (
                <div className="home_page_drinks_holder">
                    <select name='order' className="select-order-user-posts" onChange={(e) => setOrder(e.target.value)} defaultValue='Recent'>
                        <option className='order-options' value='Recent' >Recent Posts</option>
                        <option className='order-options' value='Oldest'>Oldest Posts</option>
                        <option className='order-options' value='Highest Rating'>Highest Rated</option>
                    </select>
                    {(order === 'Recent' || order === '') && (
                        revs.reverse().map(rev => {
                            return (
                                <div className="home_page_drinks" key={rev.id} onClick={() => drinkClick(rev)}>
                                    <div className="drink-img-holder">
                                        <img className="drink-preview-img" src={drinks[rev.beverage_post_id]['img']} />
                                    </div>
                                    {rev.review.length > 25 ? (
                                        <div>
                                            {rev.review[0].toUpperCase() + rev.review.slice(1, 25) + '...'}
                                        </div>
                                    ) : (
                                        <div>
                                            {rev.review[0].toUpperCase() + rev.review.slice(1)}
                                        </div>
                                    )}
                                    <div>
                                        {stars(rev.rating)}
                                    </div>
                                </div>
                            )
                        })
                    )}
                    {revs.reverse().map(rev => {
                        return (
                            <div className="home_page_drinks" key={rev.id} onClick={() => drinkClick(rev)}>
                                <div className="drink-img-holder">
                                    <img className="drink-preview-img" src={drinks[rev.beverage_post_id]['img']} />
                                </div>
                                {rev.review.length > 25 ? (
                                    <div>
                                        {rev.review[0].toUpperCase() + rev.review.slice(1, 25) + '...'}
                                    </div>
                                ) : (
                                    <div>
                                        {rev.review[0].toUpperCase() + rev.review.slice(1)}
                                    </div>
                                )}
                                <div>
                                    {stars(rev.rating)}
                                </div>
                            </div>
                        )
                    })}


                </div>
            )}
        </div>
    )
}


export default UserRevs
