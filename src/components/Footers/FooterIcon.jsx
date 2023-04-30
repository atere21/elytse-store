import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { HiOutlineMail } from 'react-icons/hi';

export default function FooterIcon(){
    return(
        <div>
            <ul className="flex justify-center ">
               <li className="px-[5px]"><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li className="px-[5px]"><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className="px-[5px]"><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li className="px-[5px]">
                    <a href="https://instagram.com/elytse" 
                    className="text-gray-400">
                        <FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li className="px-[5px]"><a href="#" className="text-gray-400"><FontAwesomeIcon icon={HiOutlineMail}/></a></li>
            </ul>

        </div>
    )
}