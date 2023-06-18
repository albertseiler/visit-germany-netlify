import { useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)



    const linkStyles = {
        height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
    }

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    };


    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <span className="logo">visit <strong>GERMANY</strong></span>
                    <button type="button" className='nav-toggle' onClick={toggleLinks}><GiHamburgerMenu /></button>
                </div>
                <div className="links-container" ref={linksContainerRef} style={linkStyles}>
                    <ul className='links' ref={linksRef}>
                        <li>
                            <a href="#">About Us</a>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar