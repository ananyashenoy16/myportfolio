
import '../css/Card.css'
 function Card({Skills}){
    return(  
    <>
    <div className="card">
        <h1>{Skills.h}</h1>
        <p>{Skills.p}</p>
    </div>
    </>

    );
}
export default Card;