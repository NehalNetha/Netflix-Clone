
import { useState, useEffect } from "react"
import "./nav.css"

export default function Nav() {
    
    const [show, handleShow] = useState(false)

    const tranistionBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", tranistionBar)
    
      return () => {
        window.removeEventListener("scroll", tranistionBar)
      }
    }, [])
    
    



    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_content'>
                <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt='' className='nav_logo'></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' className='nav_avatar'></img>

            </div>

        </div>
    )
}
