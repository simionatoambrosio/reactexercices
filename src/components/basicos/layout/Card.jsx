import react from "react";
import "./Card.css"

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || 'rebeccapurple',
        borderColor: props.color || 'rebeccapurple',
        boxShadow: props.color || 'cyan'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">
                <h3>{props.titulo}</h3>
            </div>

            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}