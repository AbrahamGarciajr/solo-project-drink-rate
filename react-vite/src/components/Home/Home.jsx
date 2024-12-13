import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkAllDrinks } from "../../redux/drinks"



function Home(){
    let drinks = useSelector(state => state.drinks.drinks)
    let dispatch = useDispatch()
    let [isLoaded, setIsLoaded] = useState(false)
    // console.log(categories)
    let arrDrinks = Object.values(drinks)
    // console.log(arrDrinks)

    useEffect(() => {
        dispatch(thunkAllDrinks()).then(() => setIsLoaded(true))
    }, [dispatch])


    let drinkClick = (drink) => {
        console.log(drink)
    }


    return(
        <div >
            {drinks && isLoaded && (
                <div className="home_page_drinks_holder">
                    {arrDrinks.reverse().map(drink => {
                        return (
                            <div className="home_page_drinks" key={drink.id} onClick={() => drinkClick(drink)}>
                                {drink.name}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}


export default Home
