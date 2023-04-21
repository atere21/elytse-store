import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default function FooterIcon(){
    return(
        <div>
            <ul className="flex ">
               <li className="w-[2.5rem] h-[2.5rem] pl-[5px] px-[3px] py-[3px] mr-[5px] rounded-full bg-[#FF0000]"><a href="#" className="text-white text-2xl"><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li className="w-[2.5rem] h-[2.5rem] pl-[8px] px-[3px] py-[3px] mr-[5px] rounded-full bg-[#1c4ce7]"><a href="#" className="text-white text-2xl"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className="w-[2.5rem] h-[2.5rem] pl-[8px] px-[3px] py-[3px] mr-[5px] rounded-full bg-[#1c4ce7]"><a href="#" className="text-white text-2xl"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li className="bg-gradient-to-b from-[#feda75] via-[#fa7e1e] to-[#962fbf] w-[2.5rem] h-[2.5rem pl-[5px] rounded-md"><a href="#" className="text-white text-3xl"><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>

        </div>
    )
}