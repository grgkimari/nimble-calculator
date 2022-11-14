

const Display = (props) => {
    return (
        <div className="display" >
            <p id={props.id}>{props.displayContent}</p>
        </div>
    )
}

export default Display