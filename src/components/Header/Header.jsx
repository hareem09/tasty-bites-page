import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
function Header({name}) {
  const [items, setItems] = useState([{name}]);
  
      useEffect(() => {
          const savedItems = localStorage.getItem("items");
          if (savedItems) {
              setItems(JSON.parse(savedItems));
          }
      }, []);
  return (
    <>
      <nav className='w-full h-20 border-2 border-black flex justify-around bg-amber-700 '>
        <div className="logo">
            <img src="https://static.tossdown.com/site/assets/media/footer-s.png" alt="" />
        </div>
        <div className="links">
            <ul className='flex gap-14 p-5 text-lg font-bold text-white'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/About'}>About us</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/contactus'}>Contact us</NavLink></li>
                <li><NavLink to={'/Cart'}>Cart({items.length})</NavLink></li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Header