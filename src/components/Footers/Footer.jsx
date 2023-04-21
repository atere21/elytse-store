import React from "react"
import ItemContainer from "./ItemContainer"
import FooterIcon from "./FooterIcon"

export default function Footer() {
    return(
        <footer className="text-gray-400"
        >
        <ItemContainer />
        <div
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2 text-center  text-gray-400 text-sm pb-2"
      >
        <span>© ELYTSE 2023. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <FooterIcon />
      </div>
        </footer>
    )
}