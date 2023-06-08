import Headers from "../Header";
import './style.css'


const Newsletter  =() => {
    return (
        <>

            <Headers />
            <div className="idg">
                    <h1>Our Newsletter</h1>
                <div className="id">
                    <p>Name</p>
                    <input type="text"></input>
                    <p>Last Name</p>
                    <input type="text"></input>
                    <p>Email</p>
                    <input type="text"></input>
                </div>
            </div>
            
            
        </>
    )
}


export default Newsletter;