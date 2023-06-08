import { Link } from "react-router-dom";
import { menu } from "./data";
import './style.css';



const Headers = () => {

    return (
        <>
            <nav>
                <div className='div'>
                     <a href="#">The Cocktail DB</a>
                    {
                        menu.map(({path, name}) => (
                            <Link to={path}>{name}</Link>
                        ))
                    }
                </div>
            </nav>
        </>
    )    
}

export default Headers;


