import {  HiDotsVertical } from 'react-icons/hi'
import {RiLoader3Line} from 'react-icons/ri';
import './style.css';
import React from 'react'

export default function HomeCard(props) {
  return (
    <div className="card">
    <div className="card__left-section">
       <div className="card__left-section_img">
        <img src= {props.img} alt="card_image" style={{width:'1.5rem', height: "1.5rem"}}/>
       </div>
       <p >{props.text1}</p>
       <p>{props.text2}</p>
       <p>{props.text3}</p>
    </div>
    <div className="card__right-section">
            <div className="card__right-section-more"> 
                <HiDotsVertical style={{color:" #A7A7A7"}}/>
            </div>
        <RiLoader3Line className="card__right-section-icon"/>
    </div>
</div>
  )
}
