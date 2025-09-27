import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { thunkOneDrink } from "../../redux/drinks"
import DeleteDrinkForm from "../DeleteDrinkModal/DeleteDrinkForm"
import { SlOptions } from "react-icons/sl";
import OpenReviewModal from '../ReviewModal/ReviewModal'
import ReviewUpdateForm from "../ReviewModal/ReviewUpdateModal"
import DeleteRevForm from "../ReviewModal/ReviewDeleteModal"
import ReviewPostForm from "../ReviewModal/ReviewPostForm"
import { FaStar } from "react-icons/fa";
import { useLocation } from 'react-router'




function DrinkPick() {
    let { drinkId } = useParams()
    let drink = useSelector(state => state.drinks.selected)
    let user = useSelector(state => state.session.user)
    let dispatch = useDispatch()
    let [isLoaded, setIsLoaded] = useState(false)
    let navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false);
    const [showRevMenu, setShowRevMenu] = useState(false)
    const [delDrink, setDelDrink] = useState(true)
    const [createRev, setCreateRev] = useState(false)
    const [openMessage, setOpenMessage] = useState(false)
    const [message, setMessage] = useState('')
    const ulRef = useRef();
    const location = useLocation()


    useEffect(() => {
        dispatch(thunkOneDrink(drinkId)).then(() => setIsLoaded(true))
    }, [dispatch, drinkId])

    let deletePost = () => {
        setShowMenu(true)
        setDelDrink(true)

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
        setCreateRev(true)
    }


    let found
    if (drink.reviews) {
        if (user) {
            found = drink.reviews.find(rev => rev.user_id === user.id)
        }

    }

    useEffect(() => {
        if (location.state || message) {
            setOpenMessage(true)
            let close = () => {
                setOpenMessage(false)
                setMessage('')
            }
            setTimeout(close, 3500)
        }
    }, [location.state, message])

    // if(location.state){
    //     console.log(location.state)
    //     console.log(openMessage)
    // }


    // useEffect(() => {
    //     if (location.state){
    //         console.log(location.state, 'the update')
    //     }
    // },[location.state])

    return (
        <div className={`drink-holder`}>
            {drink && isLoaded && (
                <div className="one-drink-info">
                    <div>
                        <img className="drink-post-pic" src={drink.img} />
                    </div>
                    <div className="drink-info-holder">
                        <div className="larger-print">
                            Drink Info:
                        </div>
                        <div className="the-drinks-information">
                            Name of beverage: {drink.name}
                        </div>
                        <div className="the-drinks-information">
                            Alcohol: {Number(drink.alc).toFixed(2)}%
                        </div>
                        <div className="the-drinks-information">
                            Oz: {Number(drink.oz).toFixed(2)} oz
                        </div>
                        <div className="the-drinks-information">
                            Calories: {Number(drink.cal).toFixed(2)}
                        </div>
                        <div className="the-drinks-information">
                            Carbs: {Number(drink.carbs).toFixed(2)}
                        </div>
                        <div className="the-drinks-information">
                            Sodium: {Number(drink.sodium).toFixed(2)}
                        </div>
                    </div>

                    <div className="user-experience-holder">
                        <div className="user-experience-border">
                            <div className="larger-print">
                                User Experience:
                            </div>
                            <div className="user-experience">
                                User rating: {drink.rating.toFixed(2)}/5 rating
                            </div>
                            <div className="user-desc-holder">
                                <div>
                                    Description:
                                </div>
                                <div>
                                    {drink.desc}
                                </div>

                            </div>
                        </div>


                        <div className="avg-rating">
                            <div className="overall-rating">
                                Overall Rating: {drink.avgRating.toFixed(2)}/5
                                <span className="star-rating-for-drink">
                                    <FaStar className="star-for-rating" />
                                </span>

                            </div>

                        </div>
                    </div>
                    {user && drink.user_id == user.id && isLoaded && (
                        <div className="update-delete-buttons-one-drink">
                            <button className="options-for-delete" onClick={deletePost}> Delete </button>
                            <button className="options-for-update" onClick={updateDrink}> Update </button>
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
                </div>
            )}

            {!isLoaded && (
                <div className="loading-sign"> Details are loading... </div>
            )}


            {createRev && (
                <div className="post-rev-form">
                    <ReviewPostForm setCreateRev={setCreateRev} setMessage={setMessage} />
                </div>
            )}
            {openMessage && isLoaded && location.state?.data && (
                <div className="review-drink-message">
                    {location.state.data}
                </div>
            )}
            {openMessage && isLoaded && message && (
                <div className="review-drink-message">
                    {message}
                </div>
            )}

            {drink.reviews && isLoaded && (
                <div className="review-holder-one-drink">
                    <div className="reviews-for-drink-name">Reviews for {drink.name}</div>
                    {drink.reviews.length > 0 && (
                        drink.reviews.map(rev => {
                            return (
                                <div className="reviews" key={rev.id}>
                                    <div className="review-details">
                                        <div>
                                            {/* {console.log(rev)} */}
                                            <div>{rev.review}</div>
                                            <div>{rev.rating}/5 stars</div>
                                        </div>
                                        <span>
                                            {user && rev.user_id == user.id && (
                                                <div>
                                                    <SlOptions
                                                        className="options-for-update-delete"
                                                        onClick={toggleRevMenu}
                                                    />
                                                    {showRevMenu && (
                                                        <div>
                                                            <OpenReviewModal
                                                                itemText='Delete'
                                                                onItemClick={closeRevMenu}
                                                                modalComponent={<DeleteRevForm setMessage={setMessage} setOpenMessage={setOpenMessage} review={rev} />}
                                                            />

                                                            <OpenReviewModal
                                                                itemText='Update'
                                                                onItemClick={closeRevMenu}
                                                                modalComponent={<ReviewUpdateForm setMessage={setMessage} setOpenMessage={setOpenMessage} review={rev} />}
                                                            />
                                                        </div>
                                                    )}

                                                </div>
                                            )}
                                        </span>
                                    </div>

                                </div>
                            )
                        })
                    )}

                    {user && (
                        <div>
                            {!found && (Number(user.id) !== Number(drink.user_id)) && isLoaded && (
                                <div className="review-message-for-user">
                                    <div>
                                        Would you like to leave a review for this drink?
                                    </div>
                                    <button className="button-to-post-rev" onClick={postRev}>Post Review</button>
                                </div>
                            )}
                        </div>
                    )}
                    {!user && (
                        <div className="review-message-for-user">
                            Login to leave your experience with this drink!
                        </div>
                    )}

                </div>
            )}


            {!drink.reviews && isLoaded && (
                <div className="review-holder-one-drink">
                    <div className="reviews-for-drink-name">Reviews for {drink.name}</div>
                    {!user && isLoaded && (
                        <div>
                            Login to be the first to leave your experience with this drink!
                        </div>
                    )}
                    {user && (Number(user.id) !== Number(drink.user_id)) && isLoaded && (
                        <div className="review-message-for-user">
                            <div>
                                Would you like to leave a review for this drink?
                            </div>
                            <button className="button-to-post-rev" onClick={postRev}>Post Review</button>
                        </div>
                    )}
                    {user && (Number(user.id) === Number(drink.user_id)) && isLoaded && (
                        <div className="review-message-for-user">
                            Someone will agree with you soon bud!
                        </div>
                    )}
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
