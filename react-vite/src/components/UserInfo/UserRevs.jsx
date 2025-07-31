import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { thunkUserRevs } from "../../redux/session";


function UserRevs() {
    let userId = useSelector(state => state.session.user.id)
    let userRevs = useSelector(state => state.session.revs)
    let dispatch = useDispatch()
    // let navigate = useNavigate()
    let [isLoaded, setIsLoaded] = useState(false)
    // console.log(userRevs)
    // let mostRecent = []


    useEffect(() => {
        dispatch(thunkUserRevs(userId)).then(() => setIsLoaded(true))
    }, [dispatch, userId])

    let revs
    if (userRevs) {
        revs = Object.values(userRevs)
    }

    let drinkClick = (rev) => {
        // navigate(`/drink/${drink.id}`)
        console.log(rev)
    }



    return (
        <div>
            {revs && isLoaded && (
                // <>hello</>
                <div className="home_page_drinks_holder">
                    {revs.reverse().map(rev => {
                        return (
                            <div className="home_page_drinks" key={rev.id} onClick={() => drinkClick(rev)}>
                                <div className="drink-img-holder">
                                    {rev.review}
                                </div>
                                {/* <div>
                                    {drink.name}
                                </div> */}
                                {/* <div>
                                    {drink.avgRating.toFixed(2)}/5 <FaStar className="star-for-rating" />
                                </div> */}
                            </div>
                        )
                    })}
                </div>
            )}
            {/* {location.state && message && (
                <div className="delete-message-holder">
                    {location.state.message}
                </div>
            )} */}
        </div>
    )
}


export default UserRevs
