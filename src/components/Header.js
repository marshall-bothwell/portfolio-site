import { useLocation } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize';
import className from 'classnames';
import LinkButton from '../components/LinkButton';
import Dropdown from '../components/Dropdown';

function Header () {
    const smallWindow = useWindowSize();
    const location = useLocation();

    const headerClass = className(
        "fixed top-0",
        {"inset-x-[40%] mt-4": !smallWindow},
        "flex flex-row justify-center align-center text-center border-[1px] rounded-full border-white p-4 bg-black text-white z-50",
        {"right-0 w-[50px] h-[50px] p-2 m-2 ": smallWindow}
        )
    
    const options = [
        { label: "Home", linkTo: "/" },
        { label: "Contact", linkTo: "/contact" },
        { label: "Projects", linkTo: "/projects" }
    ]

    const renderedOptions = options.map((option) => {
        const linkButtonClass = `text-center font-bold ${location.pathname === option.linkTo ? "text-sky-600" : "hover:text-sky-400"}`
        return (
            <div className="container mx-auto" key={option.label}>
                <LinkButton className={linkButtonClass} to={option.linkTo}>{option.label}</LinkButton>
            </div>
        )
    })

    return (
        <div className={headerClass}>
            {smallWindow ? <Dropdown options={options} /> : renderedOptions}
        </div>
    )
}

export default Header;