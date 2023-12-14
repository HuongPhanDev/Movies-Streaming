
import React from 'react'
import '../styles/Btn.css'
import { NavLink } from 'react-router-dom'

interface BtnProps {
    title: string;
    url: string;
  }
  
function Btn({ title, url }: BtnProps) {
  return (
      <button type="button" className="buttonCommon">
            <NavLink to={url}>{title}</NavLink>
      </button>

  )
}

export default Btn
