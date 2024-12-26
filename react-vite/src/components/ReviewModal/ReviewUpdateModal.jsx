import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { thunkOneDrink, thunkUpdateRev } from "../../redux/drinks";
import { useModal } from "../../context/Modal";
// import "./LoginForm.css";


function ReviewUpdateForm({ review }) {
    const dispatch = useDispatch();
    let navigate = useNavigate()
    let {drinkId} = useParams()
    const [rating, setRating] = useState(review.rating);
    const [rev, setRev] = useState(review.review);
    const [errors, setErrors] = useState({});
    let {closeModal} = useModal()

    // console.log(drinkId)

    let handleSub = async (e) => {
        e.preventDefault()
        // console.log(rating)
        // console.log(rev)

        if (rating > 0 && rating <= 5 && rating.toString().length < 2) {
            if (rev.length > 3) {
                let newRev = {
                    id: review.id,
                    rating,
                    review: rev
                }
                let res = await dispatch(thunkUpdateRev(newRev))

                if (res.message) {
                    alert(res.message)
                    closeModal()
                    await dispatch(thunkOneDrink(drinkId))

                } else {
                    setErrors(res)
                }
            } else {
                let error = { 'error': 'You have to at least say one thing dude' }
                setErrors(error)
            }
        } else {
            let error = { 'error': 'The rating must be a whole number between 0-5' }
            setErrors(error)
        }
    }


    return (
        <div>
            <h2>Update your review</h2>
            <form onSubmit={handleSub}>
                {errors.error && (
                    <p>{errors.error}</p>
                )}

                <div>
                    <label>
                        Rating
                        <input
                            type='number'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Review
                        <input
                            type='text'
                            value={rev}
                            onChange={(e) => setRev(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    );
}

export default ReviewUpdateForm;
