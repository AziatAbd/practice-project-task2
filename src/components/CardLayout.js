import Cards from "./Cards"
import './CardLayout.css'

function CardLayout(props) {
    return (
        <div className="main-container">
            {props.users.map((item) => {
                return <Cards {... item} key={item.id} />
            })}
        </div>
    )
}

export default CardLayout