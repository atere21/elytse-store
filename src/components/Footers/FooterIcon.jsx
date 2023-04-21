import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default function FooterIcon(){
    return(
        <div>
            <ul className="flex justify-center ">
               <li className="px-[5px]"><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li className="px-[5px]"><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className="px-[5px]"><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li className="px-[5px]"><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>

        </div>
    )
}