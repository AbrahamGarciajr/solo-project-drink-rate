import { useState } from "react";
import { thunkDeleteRev, thunkOneDrink } from "../../redux/drinks";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/Modal";
// import "./LoginForm.css";

function DeleteRevForm({ review, setMessage }) {
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
            setMessage(res)

        } else if (res.error) {
            setErrors(res)
            alert(errors)
        }
    }
    let handleNoDelete = () => {
        closeModal()
    }

    return (
        <>
            <h2>Are you sure you want to delete your post?</h2>
            {errors.error && (
                <p>{errors.error}</p>
            )}
            <button onClick={handleDelete}>Yes, delete review</button>
            <button onClick={handleNoDelete}>No, keep review</button>
        </>
    );
}

export default DeleteRevForm;
