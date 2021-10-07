
import { Link } from "react-router-dom"

const Cards = ({ data, title }) => {
   
    return (

        <div>
            <h1 style={{ margin: "1rem", color: "white" }} >{title}</h1>
            <div className="cards cards-crd">
                {
                    data.map(element => (
                        <Link to={`/Resources/${element.id}`}>
                            <div className="card card-crd" >
                                <img src={element.src} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.title}</h5>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        );
}

export default Cards;