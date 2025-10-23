import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkCategoryBrands } from "../../redux/categories"
import { thunkAllDrinks, thunkOneDrink, thunkUpdateDrink } from "../../redux/drinks"
import { useNavigate, useParams } from "react-router-dom"


function UpdateDrink() {
    let user = useSelector(state => state.session.user)
    let { drinkId } = useParams()
    let drinks = useSelector(state => state.drinks.drinks)
    let categories = useSelector(state => state.categories.categories)
    let brands = useSelector(state => state.categories.brands)
    let drink = useSelector(state => state.drinks.selected)
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
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let okImg = ['jpg', 'png', 'jpeg']

    useEffect(() => {
        if (Number(drinkId) > 0) {
            dispatch(thunkOneDrink(Number(drinkId)))
        }
    }, [dispatch, drinkId])



    useEffect(() => {
        setName(drink.name)
        setImg(drink.img)
        setOz(Number(drink.oz).toFixed(2))
        setAlc(Number(drink.alc).toFixed(2))
        setRating(drink.rating)
        setCal(Number(drink.cal).toFixed(2))
        setCarbs(Number(drink.carbs).toFixed(2))
        setSodium(Number(drink.sodium).toFixed(2))
        setDesc(drink.desc)
        setCategory(drink.category_id)
        setBrand(drink.brand_id)
    }, [drink])

    useEffect(() => {
        if (category > 0) {
            dispatch(thunkCategoryBrands(category))
        }
    }, [dispatch, drinkId, category])

    let handleSub = async (e) => {
        e.preventDefault()
        setErrors({})
        let checkImg = img.split('.')
        if (okImg.includes(checkImg[checkImg.length - 1].toLowerCase())) {
            if (brand > 0 && category > 0) {
                if (rating > 5 || rating < 1 || rating.toString().length > 1) {
                    let ratingError = { 'error': 'The rating must be a whole number between 1-5', 'error0': 'If your rating leads with 0, please delete it' }
                    setErrors(ratingError)
                } else {
                    if (errors.error || errors.server) {
                        return
                    } else {
                        let newPost = {
                            id: Number(drinkId),
                            user_id: Number(user.id),
                            brand: Number(brand),
                            category: Number(category),
                            name: name,
                            img: img,
                            oz: Number(oz),
                            alc: Number(alc),
                            rating: Number(rating),
                            cal: Number(cal),
                            carbs: Number(carbs),
                            sodium: Number(sodium),
                            desc: desc
                        }
                        let serverResponse = await dispatch(thunkUpdateDrink(newPost))

                        if (!serverResponse.message) {
                            setErrors(serverResponse);
                        } else {
                            await dispatch(thunkAllDrinks())
                                .then(() => {
                                    let arrDrinks = Object.values(drinks)

                                    return arrDrinks
                                })
                                .then(() => {
                                    navigate(`/drink/${drinkId}`, { state: { data: serverResponse.message } })
                                })
                        }
                    }
                }
            } else {
                let pickError = { 'error': 'You must select a brand and category' }
                setErrors(pickError)
            }
        } else {
            let imgError = { 'error': 'Picture must be a jpg, png, or jpeg' }
            setErrors(imgError)
        }
    }


    let arrCats = Object.values(categories)
    let arrBrands = Object.values(brands)

    return (
        <div className="post-a-drink-form-holder">
            <h1 className="header-post-drink">Update Your Post</h1>
            {errors.server && <p>{errors.server}</p>}
            <form className="text-in-post-drink"
                onSubmit={handleSub}
                // encType="multipart/form-data"
                >
                <div className="post-drink-form-detail">
                    <label>
                        Name
                        <input
                            type='text'
                            placeholder="Please use the whole name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                {/* <div className="post-drink-form-detail">
                    <label>
                        Picture
                        <input
                            type='file'
                            accept=".jpg, .png, .jpeg"
                            value={img}
                            onChange={(e) => setImg(e.target.files[0])}
                            required
                        />
                    </label>
                </div> */}
                <div className="post-drink-form-detail">
                    <label>
                        OZ
                        <input
                            type='number'
                            value={oz}
                            onChange={(e) => setOz(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Alcohol %
                        <input
                            type='number'
                            value={alc}
                            onChange={(e) => setAlc(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Rating
                        <input
                            type='number'
                            placeholder="Rating 1-5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Calories
                        <input
                            type='number'
                            value={cal}
                            onChange={(e) => setCal(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Carbs
                        <input
                            type='number'
                            value={carbs}
                            onChange={(e) => setCarbs(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Sodium
                        <input
                            type='number'
                            value={sodium}
                            onChange={(e) => setSodium(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Description
                        <textarea
                            className="description-text-area"
                            type='text'
                            placeholder="Please describe your experience, minimum 15 characters"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Category
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option key='0' value="DEFAULT" disabled >Select the category</option>
                            {categories && (
                                arrCats.map(cat => {
                                    return (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    )
                                })
                            )}
                        </select>

                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Brands
                        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                            <option key='0' disabled>Select the brand</option>
                            {categories && (
                                arrBrands.map(brand => {
                                    return (
                                        <option key={brand.id} value={brand.id}>
                                            {brand.name}
                                        </option>
                                    )
                                })
                            )}
                        </select>
                    </label>
                </div>
                {errors.error && (
                    <p style={{ color: "red" }}>{errors.error}</p>
                )}
                {errors.error0 && (
                    <p style={{ color: "orange" }}>{errors.error0}</p>
                )}
                <button className="options-for-post" type='submit'>Update Post</button>
            </form>
        </div>
    )
}


export default UpdateDrink
