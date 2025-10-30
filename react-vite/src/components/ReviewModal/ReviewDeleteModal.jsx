import { useState } from "react";
import { thunkDeleteRev, thunkOneDrink } from "../../redux/drinks";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/Modal";

function DeleteRevForm({ review, setMessage, setOpenMessage }) {
    const dispatch = useDispatch();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    let { drinkId } = useParams()
    const [errors, setErrors] = useState({});
    let { closeModal } = useModal()

    let handleDelete = async (e) => {
        // console.log(review)
        e.preventDefault()
        // setShowMenu(false)
        // setDelDrink(false)
        let res = await dispatch(thunkDeleteRev(review))
        if (res.message) {
            // alert(res.message)
            await dispatch(thunkOneDrink(drinkId))
            closeModal()
            setOpenMessage(true)
            setMessage(res.message)

        } else if (res.error) {
            setErrors(res)
            alert(errors)
        }
    }
    let handleNoDelete = () => {
        closeModal()
    }

    return (
        <div className="delete-rev-form-holder">
            <h2>Are you sure you want to delete your post?</h2>
            {errors.error && (
                <p>{errors.error}</p>
            )}
            <div className="delete-rev-buttons">
                <button className="options-for-delete" onClick={handleDelete}>Yes, delete review</button>
                <button className="options-for-update" onClick={handleNoDelete}>No, keep review</button>
            </div>

        </div>
    );
}

export default DeleteRevForm;
