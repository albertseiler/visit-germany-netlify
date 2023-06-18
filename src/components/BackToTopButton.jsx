import { useEffect, useState } from "react";
import { FiArrowUpCircle } from 'react-icons/fi'

const BackToTopButton = () => {
    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 800) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div>
            {backToTop && (
                <button onClick={scrollUp} className="to-top-button"><FiArrowUpCircle /></button>
            )}
        </div>
    )
}
export default BackToTopButton