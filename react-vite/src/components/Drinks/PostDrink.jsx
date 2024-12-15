import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkCategoryBrands } from "../../redux/categories"



function PostDrink() {
    let user = useSelector(state => state.session.user)
    let categories = useSelector(state => state.categories.categories)
    let brands = useSelector(state => state.categories.brands)
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


    // console.log(category)
    useEffect(() => {
        if (category > 0) {
            dispatch(thunkCategoryBrands(category))
        }
    }, [dispatch, category])

    let handleSub = () => {
        console.log('well well well')
    }

    let arrCats = Object.values(categories)
    let arrBrands = Object.values(brands)
    // console.log('this is the cats', arrCats)

    return (
        <div>
            <h1>Create a Post</h1>
            {errors.server && <p>{errors.server}</p>}
            <form onSubmit={handleSub}>
                <div>
                    <label>
                        Name
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Picture
                        <input
                            type='text'
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
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
                <div>
                    <label>
                        Alcohol Percentage
                        <input
                            type='number'
                            value={alc}
                            onChange={(e) => setAlc(e.target.value)}
                            required
                        />
                    </label>
                </div>
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
                        Calories
                        <input
                            type='number'
                            value={cal}
                            onChange={(e) => setCal(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
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
                <div>
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
                <div>
                    <label>
                        Description
                        <input
                            type='text'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Category
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="DEFAULT" disabled >Select the category</option>
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
                <div>
                    <label>
                        Brands
                        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                            <option value="DEFAULT" disabled >Select the brand</option>
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

                <button type='submit'>Create Post</button>
            </form>
        </div>
    )
}


export default PostDrink
