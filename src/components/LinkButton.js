import { Link } from 'react-router-dom'
import className from 'classnames'

function LinkButton ({ to, children, ...rest}) {
    const linkClass = className(rest.className)

    return (
        <Link className={linkClass} to={to} {...rest}>
            {children}
        </Link>
    )
}

export default LinkButton;