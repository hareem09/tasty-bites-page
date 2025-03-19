import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <footer className='w-full min-h-64 bg-amber-800  border-2 border-black flex text-white justify-between'>
     <aside className='m-10'>
      <img src="https://static.tossdown.com/images/1cbe5501-0c84-4cdc-b6a0-c8d49672818b.webp" alt="" />
      <h1>let the chicken come to you</h1>
     </aside>
     <ul className='m-10'>
      <h1 className='text-xl font-bold'>Site Links</h1>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link>Menu</Link></li>
      <li><Link>Location</Link></li>
     </ul>
     <ul className='m-10'>
      <h1 className='text-xl font-bold'>Site Links</h1>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link>Menu</Link></li>
      <li><Link>Location</Link></li>
     </ul>
     <div className="info m-10">
      <h1 className='text-xl font-bold capitalize'>opening hour</h1>
      <p>Open everyday 11:00 AM - Midnight</p>
      <h1 className='text-xl font-bold'>Follow us</h1>
       <Link>Facebook</Link>
       <Link>instagram</Link>
     </div>
    </footer>
    </>
  )
}

export default Footer