import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { thunkDeleteDrink, thunkOneDrink } from "../../redux/drinks"



function DrinkPick() {
    let { drinkId } = useParams()
    let drink = useSelector(state => state.drinks.selected)
    let user = useSelector(state => state.session.user)
    let dispatch = useDispatch()
    let [isLoaded, setIsLoaded] = useState(false)
    let navigate = useNavigate()

    // console.log(user, 'this is the user')
    useEffect(() => {
        dispatch(thunkOneDrink(drinkId)).then(() => setIsLoaded(true))
    }, [dispatch, drinkId])

    let deletePost = (drinkInfo) => {
        dispatch(thunkDeleteDrink(drinkInfo.id))
        .then(() => navigate('/'))
    }




    return (
        <div>
            {drink && isLoaded && (
                <>
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
                </>
            )}

            {drink.user_id == user.id && isLoaded && (
                <div>
                    <button onClick={()=>deletePost(drink)}> Delete </button>
                    <button> Update </button>
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
