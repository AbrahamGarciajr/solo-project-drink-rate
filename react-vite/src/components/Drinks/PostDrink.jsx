import { useState } from "react"
import { useSelector } from "react-redux"



function PostDrink() {
    let user = useSelector(state => state.session.user)
    let [brand, setBrand] = useState(0)
    let [category, setCategory] = useState(0)
    let [name, setName] = useState('')
    let [img, setImg] = useState('')
    let [oz, setOz] = useState(0)
    let [alc, setAlc] = useState(0)
    let [rating, setRating] = useState(0)
    let [cal, setCal] = useState(0)
    let [carbs, setCarbs] = useState(0)
    let [sodium, setSodium] = useState(0)
    let [desc, setDesc] = useState('')
    let [errors, setErrors] = useState({});



    return (
        <div>
            hello
        </div>
    )
}


export default PostDrink
