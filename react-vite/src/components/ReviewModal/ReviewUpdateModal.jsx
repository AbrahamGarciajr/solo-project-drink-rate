import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkOneDrink, thunkUpdateRev } from "../../redux/drinks";
import { useModal } from "../../context/Modal";
// import "./LoginForm.css";


function ReviewUpdateForm({ review, setMessage, setOpenMessage }) {
    const dispatch = useDispatch();
    let { drinkId } = useParams()
    const [rating, setRating] = useState(review.rating);
    const [rev, setRev] = useState(review.review);
    const [errors, setErrors] = useState({});
    let { closeModal } = useModal()

    // console.log(drinkId)

    let handleSub = async (e) => {
        e.preventDefault()
        // console.log(rating)
        // console.log(rev)

        if (rating >= 0 && rating <= 5 && rating.toString().length < 2) {
            if (rev.length > 3) {
                setErrors({})
                let newRev = {
                    id: review.id,
                    rating,
                    review: rev
                }
                let res = await dispatch(thunkUpdateRev(newRev))

                if (res.message) {
                    // alert(res.message)

                    await dispatch(thunkOneDrink(drinkId))
                    closeModal()
                    setOpenMessage(true)
                    setMessage(res.message)
                } else {
                    setErrors(res)
                }
            } else {
                let error = { 'error': 'You have to at least say one thing dude' }
                setErrors(error)
            }
        } else {
            let error = { 'error': 'The rating must be a whole number between 0-5', 'error0': 'If your rating leads with 0, please delete it' }
            setErrors(error)
        }
    }


    return (
        <div className="update-rev-form-holder">
            <h2>Update Your Review</h2>
            <form onSubmit={handleSub}>
                {errors.error && (
                    <p style={{ color: "red" }}>{errors.error}</p>
                )}
                {errors.error0 && (
                    <p style={{ color: "orange" }}>{errors.error0}</p>
                )}

                <div className="post-rev-form-details">
                    <label>
                        Rating:
                        <input
                            type='number'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-rev-form-details">
                    <label>
                        Review:
                        <input
                            type='text'
                            value={rev}
                            onChange={(e) => setRev(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-rev-form-details">
                    <button className="submit-update-rev" type='submit'>Update</button>
                </div>
            </form>
        </div>
    );
}

export default ReviewUpdateForm;
