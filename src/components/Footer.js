import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import useWindowSize from '../hooks/useWindowSize'

function Footer() {
    const smallWindow = useWindowSize()

    return (
        <div className="w-full h-[5vh] bg-gradient-to-r from-slate-600 to-slate-700 flex flex-row justify-end">
            <IconContext.Provider value={{ size: "2em", className: "global-class-name" }}>
                <a href="https://www.linkedin.com/in/marshall-bothwell/" className={`p-1 ${smallWindow ? "mx-6" : "mx-12"}`}>
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/marshall-bothwell" className={`p-1 ${smallWindow ? "mx-6" : "mx-12"}`}>
                    <AiFillGithub />
                </a>
            </IconContext.Provider>
        </div>
    )
}

export default Footer;