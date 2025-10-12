import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkCreateRev, thunkOneDrink } from "../../redux/drinks";
// import "./LoginForm.css";


function ReviewPostForm({ setCreateRev, setMessage }) {
    const dispatch = useDispatch();
    let user = useSelector(state => state.session.user)
    let { drinkId } = useParams()
    const [rating, setRating] = useState(0);
    const [rev, setRev] = useState('');
    const [errors, setErrors] = useState({});
    // let { closeModal } = useModal()

    // console.log(drinkId)

    let cancelPost = () => {
        setCreateRev(false)
    }

    let handleSub = async (e) => {
        e.preventDefault()

        if (rating >= 0 && rating <= 5 && rating.toString().length < 2) {
            if (rev.length > 3) {
                setErrors({})
                let newRev = {
                    user_id: user.id,
                    beverage_post_id: drinkId,
                    rating,
                    review: rev
                }

                let res = await dispatch(thunkCreateRev(newRev))

                if (res.message) {
                    setCreateRev(false)
                    setMessage(res.message)
                    await dispatch(thunkOneDrink(drinkId))

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
        <div className="post-rev-form-holder">
            <h2>Post Your Review</h2>
            <form onSubmit={handleSub}>
                {errors.error && (
                    <p style={{ color: "red" }}>{errors.error}</p>
                )}
                {errors.error0 && (
                    <p style={{ color: "orange" }}>{errors.error0}</p>
                )}

                <div className='post-rev-form-details'>
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
                <div className='post-rev-form-details'>
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
                <div className="post-rev-form-buttons">
                    <div className='button-to-post-rev'>
                        <button className="options-for-post" type='submit'>Post</button>
                    </div>
                    <div className='button-to-post-rev'>
                        <button className="options-for-update" onClick={cancelPost}>Cancel</button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default ReviewPostForm;
