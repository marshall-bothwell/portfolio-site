import useWindowSize from '../hooks/useWindowSize';
import className from 'classnames';

function Panel ({ children, big, medium, small, ...rest}) {
    const smallWindow = useWindowSize()

    const panelClass = className(
        "flex flex-row justify-items-center align-items-center",
        {"flex-col": smallWindow},
        {"h-[50vh]": big},
        {"h-[35vh]": medium},
        {"h-[20vh]": small},
        {"h-[100vh]": big && smallWindow},
        {"h-[70vh]": medium && smallWindow},
        {"h-[40vh]": small && smallWindow},
        rest.className
        )

    return (
        <div className={panelClass}>
            {children}
        </div>
    )
}

export default Panel;