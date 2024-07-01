import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


const Navbar = () => {
    return (
        <div>
            <nav className="mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    {/* <img className="mx-2 w-10" src='' alt='' /> */}
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <FaLinkedin onClick={()=> window.location.href = 'https://www.linkedin.com/in/siddharth-singh-00a3a6232?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4jJ%2BmeikSm%2BjpwmuLoouSg%3D%3D'}/>
                    <FaGithub onClick={()=> window.location.href = 'https://github.com/babuasingh'}/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
