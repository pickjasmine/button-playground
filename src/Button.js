export const Button = (props) => {
    const {buttonType = 'button', className, onClick, text} = props
    return (
        <button
            type={buttonType}
            className={`button ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}