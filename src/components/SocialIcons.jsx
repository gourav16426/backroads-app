import React from 'react'
import { socialItems } from "../data";

const SocialIcon = ({icon, link})=>{
    return (
        <li>
        <a
        href={link}
        target="_blank"
        className="nav-icon"
        >
        <i className={icon}></i>
      </a>
    </li>
      )
}
const SocialIcons = () => {
  return (
    <ul className="nav-icons">
         {
            socialItems.map((item)=>(
                <SocialIcon {...item}/>
            ))
         }
        </ul>
  )
}

export default SocialIcons