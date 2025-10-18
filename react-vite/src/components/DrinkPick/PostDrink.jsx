import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkCategoryBrands } from "../../redux/categories"
import { thunkAllDrinks, thunkCreateDrink } from "../../redux/drinks"
import { useNavigate } from "react-router-dom"


function PostDrink() {
    let user = useSelector(state => state.session.user)
    let categories = useSelector(state => state.categories.categories)
    let brands = useSelector(state => state.categories.brands)
    let drinks = useSelector(state => state.drinks.drinks)
    let [brand, setBrand] = useState(0)
    let [category, setCategory] = useState(0)
    let [name, setName] = useState('')
    let [img, setImg] = useState()
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
        if (category > 0) {
            dispatch(thunkCategoryBrands(category))
        }
    }, [dispatch, category])

    let handleSub = async (e) => {
        e.preventDefault()
        setErrors({})

        if (desc.length < 5) {
            let descError = { 'error': 'You need to say something more than that' }
            setErrors(descError)
        }
        let checkImg = img.name.split('.')
        if (okImg.includes(checkImg[checkImg.length - 1].toLowerCase())) {
            if (brand > 0 && category > 0) {
                if (rating > 5 || rating < 0 || String(rating).length > 1) {
                    let ratingError = { 'error': 'The rating must be a whole number between 0-5', 'error0': 'If your rating leads with 0, please delete it' }
                    setErrors(ratingError)

                } else {
                    if (errors.error || errors.server) {
                        return
                    } else {
                        const formData = new FormData();
                        formData.append("user_id", user.id);
                        formData.append("brand", brand);
                        formData.append("category", category);
                        formData.append("name", name);
                        formData.append("img", img);
                        formData.append("oz", oz);
                        formData.append("alc", alc);
                        formData.append("rating", rating);
                        formData.append("cal", cal);
                        formData.append("carbs", carbs);
                        formData.append("sodium", sodium);
                        formData.append("desc", desc);
                        // console.log(formData['alc'], 'the form dataaaa')

                        let serverResponse = await dispatch(thunkCreateDrink(formData))
                        if (serverResponse.error) {
                            setErrors(serverResponse);
                        } else {
                            await dispatch(thunkAllDrinks())
                                .then(() => {
                                    let arrDrinks = Object.values(drinks)
                                    // console.log(arrDrinks)
                                    return arrDrinks
                                })
                                .then((arrDrinks) => {
                                    // alert('Post has been created :)')
                                    // console.log(serverResponse, 'from post')
                                    navigate(`/drink/${arrDrinks[arrDrinks.length - 1].id}`, { state: { 'message': serverResponse.message } })
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
    // console.log('this is the cats', arrCats)

    return (
        <div className="post-a-drink-form-holder">
            <h1 className="header-post-drink">Create a Post</h1>
            {errors.server && <p>{errors.server}</p>}
            <form className="text-in-post-drink"
                onSubmit={handleSub}
                encType="multipart/form-data">
                <div className="post-drink-form-detail">
                    <label>
                        Name:
                        <input
                            type='text'
                            placeholder="Please use the whole name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        Picture:
                        <input
                            type='file'
                            // placeholder="A jpg, png, jpeg of drink"
                            accept=".jpg, .png, .jpeg"
                            onChange={(e) => setImg(e.target.files[0])}
                            required
                        />
                    </label>
                </div>
                <div className="post-drink-form-detail">
                    <label>
                        OZ:
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
                        Alcohol %:
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
                        Rating:
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
                        Calories:
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
                        Carbs:
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
                        Sodium:
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
                        Description:
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
                        Category:
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option >Select the category</option>
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
                        Brands:
                        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                            <option >Select the brand</option>
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

                <button className="options-for-post-drink" type='submit'>Create Post</button>
            </form>
        </div>
    )
}


export default PostDrink
