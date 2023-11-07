export const Button = (props) => {
    const {buttonType = 'button', className, onClick, content} = props
    return (
        <button
            type={buttonType}
            className={`button ${className}`}
            onClick={onClick}
        >
            {content}
        </button>
    )
}