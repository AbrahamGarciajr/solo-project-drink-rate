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
        // console.log(rating)
        // console.log(rev)

        if (rating > 0 && rating <= 5 && rating.toString().length < 2) {
            if (rev.length > 3) {
                setErrors({})
                let newRev = {
                    user_id: user.id,
                    beverage_post_id: drinkId,
                    rating,
                    review: rev
                }

                // console.log(newRev)
                let res = await dispatch(thunkCreateRev(newRev))

                if (res.message) {
                    // alert(res.message)
                    setCreateRev(false)
                    // setPostMessage(true)
                    setMessage(res)
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
            <h2>Post your review</h2>
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
                    <button type='submit'>Post</button>
                </div>
                <div>
                    <button onClick={cancelPost}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default ReviewPostForm;
