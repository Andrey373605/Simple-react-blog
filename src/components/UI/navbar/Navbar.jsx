import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({pages}) {
  return (
    <div className="navbar">
        <div className="navbar__links">
            {pages.map((p)=>
                <Link to={p.link} className='navbar__link'>{p.name}</Link>
            )}
        </div>
    </div>
  )
}
