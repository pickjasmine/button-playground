export const Button = (props) => {
    const {
        buttonType = 'button',
        className,
        onClick,
        fancyContent,
        children,
        ...rest} = props

    // do any JS thing here

    return (
        <button
            type={buttonType}
            className={`button ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

// function printThis(string) { console.log(string) }
// const printThis = (string) => { console.log(string) }

/*
This is the same as above but written with the function keyword.

export function Button(props) {
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
 */

/*
`button ${className}`

this is called string templating.
Whole string is wrapped in backticks ``
any variable is wrapped in ${} within the backticks
 */