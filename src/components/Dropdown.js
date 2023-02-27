import { useState, useEffect, useRef } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { useLocation } from 'react-router-dom'
import LinkButton from './LinkButton'

function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    const location = useLocation();
    

    useEffect(() => {
        const handleClosure = (event) => {
            if (!ref.current) {
                return;
            }
            else if (!ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClosure, true);

        return () => {
            document.removeEventListener('click', handleClosure);
        }
    }, [])

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const renderedOptions = options.map((option) => {
        const dropdownButtonClass = `p-2 text-center ${location.pathname === option.linkTo ? "text-sky-600 font-bold" : "hover:text-sky-600"}`;
        return (
            <LinkButton className={dropdownButtonClass} to={option.linkTo} key={option.label}>{option.label}</LinkButton>
        )
    })

    return (
        <div ref={ref} className="flex flex-row justify-center align-center">
            <div className=" hover:cursor-pointer" onClick={handleClick}>
                <GoThreeBars />
            </div>
            {isOpen && <div className="flex place-content-center flex-col absolute top-full px-4 bg-black divide-y text-white border-[1px] border-white rounded mr-16" onClick={handleClick}>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;