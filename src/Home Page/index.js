import { useEffect, useState } from "react";
import './style.css';



const List = () => {
    const [drink, setDrink] = useState ([]);
    const [value, setValue] = useState ('');
    const gettingData = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    
        const data = await response.json();
        setDrink (data.drinks);
      }
      const filter = drink.filter (drink => {
        return drink.strDrink.toLowerCase ().includes (value.toLowerCase());
      })
    
      useEffect(()=>{
        gettingData()
      }, [])


      return (
        <>
        <form className="form">
            <div className="search">
                <label htmlFor = 'name' className= 'label '> Search Your Favorite Cocktail</label> <br />
                <input type = 'text' name="name" id="name" onChange={(event) => setValue(event.target.value)}></input>
            </div>
        </form>
        <h1>Cocktails</h1>

        <main>
            {
                filter.map ((coctail) => {
                    return (
                        
                        <>
                            <div className="cocteils">
                                <div className="drinks">
                                    <img src = {coctail.strDrinkThumb} className="images"/>
                                    <h3>{coctail.strDrink}</h3>
                                    <h4>{coctail.strGlass}</h4>
                                    <p>{coctail.strGlass}</p>
                                    <a href="#">Details</a>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </main>

        </>
    )
}

export default List;