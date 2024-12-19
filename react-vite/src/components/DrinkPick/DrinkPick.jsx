import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { thunkDeleteDrink, thunkOneDrink } from "../../redux/drinks"
// import UpdateDrink from "./UpdateDrink"



function DrinkPick() {
    let { drinkId } = useParams()
    let drink = useSelector(state => state.drinks.selected)
    // let drinkRevs = useSelector(state => state.drinks.drinks[drinkId])
    let user = useSelector(state => state.session.user)
    let dispatch = useDispatch()
    let [isLoaded, setIsLoaded] = useState(false)
    let navigate = useNavigate()

    // console.log(drink, 'this is the user')
    useEffect(() => {
        dispatch(thunkOneDrink(drinkId)).then(() => setIsLoaded(true))
    }, [dispatch, drinkId])

    let deletePost = (drinkInfo) => {
        dispatch(thunkDeleteDrink(drinkInfo.id))
            .then(() => navigate('/'))
    }

    let updateDrink = () => {
        navigate(`/drink/${drinkId}/update`)
    }

    let deleteRev = (rev) => {
        // dispatch(thunkDeleteDrink(drinkInfo.id))
        //     .then(() => navigate('/'))
        // console.log(rev)
    }

    let updateRev = (rev) => {
        // navigate(`/drink/${drinkId}/update`)
        // console.log(rev)
        

    }

    let postRev = () => {
        // console.log('will come soon')
    }



    return (
        <div>
            {drink && isLoaded && (
                <div className="one-drink-info">
                    <div>
                        {drink.name} name
                    </div>
                    <div>
                        {drink.alc}% of alcohol
                    </div>
                    <div>
                        {drink.oz} oz of drink
                    </div>
                    <div>
                        {drink.desc}
                    </div>
                    <div>
                        {drink.avgRating}/5 rating
                    </div>
                </div>
            )}

            {drink.user_id == user.id && isLoaded && (
                <div>
                    <button onClick={() => deletePost(drink)}> Delete </button>
                    <button onClick={updateDrink}> Update </button>
                </div>

            )}

            {drink.reviews && (
                <div className="review-holder-one-drink">
                    {drink.reviews.length > 0 && (
                        drink.reviews.map(rev => {
                            return (
                                <div key={rev.id}>
                                    <div>{rev.review}</div>
                                    <div>{rev.rating}/5 stars</div>
                                    {rev.user_id == user.id && (
                                        <div>
                                            <button onClick={() => deleteRev(rev)}> Delete </button>
                                            <button onClick={() => updateRev(rev)}> Update </button>
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    )}
                </div>
            )}
            {!drink.reviews && !user && (
                <div className="review-holder-one-drink">
                    Login to be the first to leave your experience with this drink!
                </div>
            )}
            {!drink.reviews && user && Number(user.id) !== Number(drink.user_id) && (
                <div className="review-holder-one-drink">
                    <div>
                        Would you like to leave a review for this drink?
                    </div>
                    <button onClick={postRev}>Post Review</button>
                </div>
            )}
            {!drink.reviews && user && Number(user.id) === Number(drink.user_id) && (
                <div className="review-holder-one-drink">
                        Someone will agree with you soon bud!
                </div>
            )}

            {!isLoaded && (
                <div> Details are loading... </div>
            )}

            {!drink && isLoaded && (
                <div>I really do not understand how you got this far.
                    There is no drink for this url path and you should have received an error code.
                    So here is an easter egg.
                </div>
            )}

        </div>
    )
}


export default DrinkPick
