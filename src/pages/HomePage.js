import Panel from '../components/Panel'
import PanelItem from '../components/PanelItem'
import Picture from '../assets/picture.jpg'
import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
    const smallWindow = useWindowSize()

    return (
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
            <Panel big className={`${smallWindow ? "h-[90vh]" : ""}`}>
                <PanelItem>
                    <img className="border-2 rounded-full drop-shadow-md h-[128px]" src={Picture} />
                    <div className={`font-bold text-2xl mt-8 ${smallWindow ? "mx-4" : "mx-48"}`} >
                        Software engineer with experience in front-end and embedded systems development
                    </div>
                </PanelItem>
                <PanelItem>
                    <div className={`font-bold text-xl ${smallWindow ? "mb-4" : "mt-16 mb-4"}`}>
                        I'm Marshall Bothwell.
                    </div>
                    <div  className={`text-justify ${smallWindow ? "mx-4" : "mx-48"}`}>
                        I graduated from the University of North Texas with a Bachelor's in Computer Engineering.
                        I strive to create software using the most efficient and modern tools and practices.
                        If you'd like to reach out about any job opportunities, send me an email through the contact page!
                    </div>
                </PanelItem>
            </Panel>
            <Panel className="bg-gradient-to-r from-black to-slate-800 h-[10vh] border-t border-b border-slate-400">
                <PanelItem className="basis-full font-bold text-4xl">
                    About Me
                </PanelItem>
            </Panel>
            <Panel medium className={`${smallWindow ? "h-[90vh]" : ""}`}>
                <PanelItem className={`basis-full ${smallWindow ? "mx-4" : "mx-48"}`}>
                    <div className="text-justify">
                        I first learned to write code while taking an elective course on Ruby in high school.
                        After two years of attending college as a Business major, I discovered my passion was creating software.
                        I changed majors to Computer Engineering and graduated in May of 2022.<br /><br />
                        In my time at the University of North Texas, I gained extensive experience writing software in C, C++, and Python.
                        My Senior Design team created a Smart Door which utilized a depth-perceptive camera.
                        We won Best Project in Computer Engineering out of a field of approximately 20 other teams.
                        Since graduating, I have taught myself front-end development with React.<br /><br />
                        I'm open to any entry-level job opportunities in software engineering! 
                        Please reach out to me using the contact page or by emailing mbothwell.jobs@gmail.com.
                    </div>
                </PanelItem>
            </Panel>
        </div>
    )
}

export default HomePage;