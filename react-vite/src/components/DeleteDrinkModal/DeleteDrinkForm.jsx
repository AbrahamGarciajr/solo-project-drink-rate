import { useState } from "react";
import { thunkDeleteDrink } from "../../redux/drinks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import "./LoginForm.css";

function DeleteDrinkForm({ drink, setShowMenu, setDelDrink }) {
    const dispatch = useDispatch();
    let navigate = useNavigate()
    const [errors, setErrors] = useState({});

    let handleDelete = async (e) => {
        // console.log(drink)
        e.preventDefault()
        setShowMenu(false)
        setDelDrink(false)
        let res = await dispatch(thunkDeleteDrink(drink.id))
        if (res.message) {
            // alert(res.message)
            setDelDrink(true)
            navigate('/', { state: { 'message': res.message } })
        } else if (res.error) {
            setErrors(res)
            alert(errors)
        }
    }
    let handleNoDelete = () => {
        setShowMenu(false)
        setDelDrink(false)
    }

    return (
        <>
            <h2>Are you sure you want to delete your post?</h2>
            <p>This is a serious decision, please select one:</p>
            <div className="holder-for-del-update-drink-buttons">
                <button className="options-for-delete" onClick={handleDelete}>Yes, delete drink</button>
                <button className="options-for-update" onClick={handleNoDelete}>No, keep drink</button>
            </div>

        </>
    );
}

export default DeleteDrinkForm;
