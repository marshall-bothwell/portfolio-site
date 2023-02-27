import className from 'classnames'

function PanelItem ({ children, ...rest}) {

    const panelItemClass = className(
        "flex flex-col justify-center items-center overflow-hidden basis-[50%]",
        rest.className
    )

    return (
        <div className={panelItemClass}>
            {children}
        </div>
    )
}

export default PanelItem