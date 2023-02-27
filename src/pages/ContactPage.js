import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import useWindowSize from '../hooks/useWindowSize'
import Modal from '../components/Modal'

function ContactPage() {
    const emailForm = useRef()
    const smallWindow = useWindowSize()

    const [subject, setSubject] = useState('');
    const [your_name, setName] = useState('');
    const [reply_address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        emailjs.init("gvxq-GA8GvcowUJ21")
    }, [])

    const handleClose = () => {
        setDisplayModal(false);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs.sendForm('service_la6wro9', 'template_d7jivur', emailForm.current).then(
            (result) => {
            console.log(result.text);
            setDisplayModal(true)
        }, (error) => {
            console.log(error.text);
        });
        setSubject('')
        setName('')
        setAddress('')
        setMessage('')
    }

    const actionBar = (
        <div>
            <button onClick={handleClose} className="border border-white rounded-full py-2 px-8 bg-slate-600">
                Close
            </button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Email sent!</p>
        </Modal>
    );

    return (
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">
            {displayModal && modal}
            <form ref={emailForm} onSubmit={sendEmail}>
                <div className="w-full flex flex-col justify-center align-center text-center">
                    <label className={`text-center font-bold text-2xl ${smallWindow ? "mt-12" : "mt-[14vh]"}`}>Name</label>
                    <textarea className={`text-black resize-none ${smallWindow ? "w-[80vw] mx-[10vw]" : "w-[40vw] mx-[30vw]"}`} name="your_name" value={your_name} onChange={handleNameChange} />

                    <label className="text-center font-bold mt-12 text-2xl">Subject</label>
                    <textarea className={`text-black resize-none ${smallWindow ? "w-[80vw] mx-[10vw]" : "w-[40vw] mx-[30vw]"}`} name="subject" value={subject} onChange={handleSubjectChange} />

                    <label className="text-center font-bold mt-12 text-2xl">Reply Email Address</label>
                    <textarea className={`text-black resize-none ${smallWindow ? "w-[80vw] mx-[10vw]" : "w-[40vw] mx-[30vw]"}`} name="reply_address" value={reply_address} onChange={handleAddressChange} />

                    <label className="text-center font-bold mt-12 text-2xl">Message</label>
                    <textarea className={`text-black resize-none ${smallWindow ? "w-[80vw] mx-[10vw] h-[20vh]" : "w-[60vw] mx-[20vw] h-[26vh]"}`} name="message" value={message} onChange={handleMessageChange} />

                    <input className={`cursor-pointer font-bold text-xl my-12 border-[1px] border-white rounded ${smallWindow ? "w-[20vw] mx-[40vw]" : "w-[10vw] mx-[45vw]"}`} type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
}

export default ContactPage;