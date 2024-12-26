import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { thunkOneDrink } from "../../redux/drinks"
import DeleteDrinkForm from "../DeleteDrinkModal/DeleteDrinkForm"
import { SlOptions } from "react-icons/sl";
import OpenReviewModal from '../ReviewModal/ReviewModal'
import ReviewUpdateForm from "../ReviewModal/ReviewUpdateModal"
import DeleteRevForm from "../ReviewModal/ReviewDeleteModal"
// import UpdateDrink from "./UpdateDrink"



function DrinkPick() {
    let { drinkId } = useParams()
    let drink = useSelector(state => state.drinks.selected)
    // let drinkRevs = useSelector(state => state.drinks.drinks[drinkId])
    let user = useSelector(state => state.session.user)
    let dispatch = useDispatch()
    let [isLoaded, setIsLoaded] = useState(false)
    let navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false);
    const [showRevMenu, setShowRevMenu] = useState(false)
    const [delDrink, setDelDrink] = useState(true)
    // const [drinkHolder, setDrinkHolder] = useState('')
    const ulRef = useRef();


    // console.log(drink, 'this is the user')
    useEffect(() => {
        dispatch(thunkOneDrink(drinkId)).then(() => setIsLoaded(true))
    }, [dispatch, drinkId])

    let deletePost = () => {
        setShowMenu(true)
        setDelDrink(true)
        // console.log(drinkInfo)
        // dispatch(thunkDeleteDrink(drinkInfo.id))
        //     .then(() => navigate('/'))

    }

    let updateDrink = () => {
        navigate(`/drink/${drinkId}/update`)
    }


    const toggleRevMenu = (e) => {
        e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
        setShowRevMenu(!showRevMenu);
    };

    useEffect(() => {
        if (!showRevMenu) return;

        const closeRevMenu = (e) => {
            if (ulRef.current && !ulRef.current.contains(e.target)) {
                setShowRevMenu(false);
            }
        };

        document.addEventListener("click", closeRevMenu);

        return () => document.removeEventListener("click", closeRevMenu);
    }, [showRevMenu]);

    const closeRevMenu = () => setShowMenu(false);


    let postRev = () => {
        console.log('Hello')
    }

    // console.log(typeof(drink.reviews))
    // console.log(drink.reviews)
    let found = drink.reviews.find(rev => rev.user_id === user.id)
    // console.log(found)

    return (
        <div className={`drink-holder`}>
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
            {!isLoaded && (
                <div> Details are loading... </div>
            )}

            {user && drink.user_id == user.id && isLoaded && (
                <div>
                    <button onClick={deletePost}> Delete </button>
                    <button onClick={updateDrink}> Update </button>
                </div>

            )}


            {showMenu && delDrink && (
                <div className="delete-drink-option">
                    <DeleteDrinkForm drink={drink}
                        setShowMenu={setShowMenu}
                        setDelDrink={setDelDrink}
                    />
                </div>
            )}

            {drink.reviews && isLoaded && (
                <div className="review-holder-one-drink">
                    {drink.reviews.length > 0 && (
                        drink.reviews.map(rev => {
                            return (
                                <div key={rev.id}>
                                    <div>{rev.review}</div>
                                    <div>{rev.rating}/5 stars</div>
                                    {user && rev.user_id == user.id && (
                                        <div>
                                            <SlOptions
                                                onClick={toggleRevMenu}
                                            />
                                            {showRevMenu && (
                                                <div>
                                                    <OpenReviewModal
                                                        itemText='Delete'
                                                        onItemClick={closeRevMenu}
                                                        modalComponent={<DeleteRevForm review={rev} />}
                                                    />

                                                    <OpenReviewModal
                                                        itemText='Update'
                                                        onItemClick={closeRevMenu}
                                                        modalComponent={<ReviewUpdateForm review={rev} />}
                                                    />
                                                </div>
                                            )}

                                        </div>
                                    )}
                                </div>
                            )
                        })
                    )}
                </div>
            )}
            {user && (
                <div>
                    {!found && (Number(user.id) !== Number(drink.user_id)) && isLoaded && (
                        <div className="review-holder-one-drink">
                            <div>
                                Would you like to leave a review for this drink?
                            </div>
                            <button onClick={postRev}>Post Review</button>
                        </div>
                    )}
                    {(Number(user.id) === Number(drink.user_id)) && isLoaded && (
                        <div className="review-holder-one-drink">
                            Someone will agree with you soon bud!
                        </div>
                    )}
                </div>

            )}
            {!drink.reviews && !user && isLoaded && (
                <div className="review-holder-one-drink">
                    Login to be the first to leave your experience with this drink!
                </div>
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
