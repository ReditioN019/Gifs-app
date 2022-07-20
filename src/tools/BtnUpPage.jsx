import { useState, useEffect } from "react"
import { BsFillArrowUpCircleFill } from 'react-icons/Bs';


export const BtnUpPage = () => {
    
    const [goToTopBtn, setGoToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 150) {
                setGoToTopBtn(true)
            }
            else{
                setGoToTopBtn(false)
            }
        })
    }, []);
        
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (    
        <div 
            className="flex justify-end fixed top-[85%] right-0"
        >
            {
                goToTopBtn &&
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-3 px-5"
                    onClick={scrollUp}
                >
                    <BsFillArrowUpCircleFill
                        size="2rem"
                    />
                </button>
            }
        </div>
    )
}