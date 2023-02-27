import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize'

function Modal({ onClose, children, actionBar }) {
    const smallWindow = useWindowSize()

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-gray-300 opacity-80"
            ></div>
            <div className={`fixed p-10 bg-black border border-white rounded ${smallWindow ? "inset-x-10 inset-y-[35vh]" : "inset-80"}`}>
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-center">{actionBar}</div>
                </div>
            </div>
        </div>
    );
}

export default Modal;