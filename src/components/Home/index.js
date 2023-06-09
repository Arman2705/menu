import { useEffect, useState } from "react";
import './style.css';
import Headers from "../Header";



const Home = () => {
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
        <Headers />
        <form className="form">
            <div className="search">
                <label htmlFor = 'name' className= 'label '> Search Your Favorite Cocktail</label> <br />
                <input type = 'text' name="name" id="name" onChange={(event) => setValue(event.target.value)}></input>
            </div>
        </form>
        <h1>Cocktails</h1>

        <section className="sec">
            {
                filter.map (({strDrinkThumb, strDrink, strGlass}) => (   
                        <article>
                            <div className="cocteils">
                                <div className="drinks">
                                 <div className="img">  <img src = {strDrinkThumb} className="images"/> </div> 
                                    <h3>{strDrink}</h3>
                                    <h4>{strGlass}</h4>
                                    <p>{strGlass}</p>
                                    <a href="#">Details</a>
                                    <a href="#">No Intereted</a>
                                </div>
                            </div>
                        </article>
                    )
                )
            }
        </section>
        </>
    )
}

export default Home;