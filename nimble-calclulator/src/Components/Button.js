


const Button = (props) => {
    return(
        <button className="btn" id={props.id} onClick={props.clickFunction}>{props.btnText}</button>
    )
}

export default Button