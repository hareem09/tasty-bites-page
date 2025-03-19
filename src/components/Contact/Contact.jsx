import React, { useEffect, useState } from 'react'


function Contact() {
   const [name,setName]=useState('')
   const [phonenumber,setPhoneNumber]=useState('')
   const [email,setEmail]=useState('')
   const [message,setMessage]=useState('')

   const win=window.sessionStorage;
   const handlesubmit=()=>{
    e.preventDefault()
    win.clear()
    setName('')
    setEmail('')
    setMessage('')
    setPhoneNumber('')
   }
   useEffect(()=>{
    if(win.getItem('name'))
      setName(win.getItem('name'))
    if(win.getItem('phonenumber'))
      setPhoneNumber(win.getItem('phonenumber'))
    if(win.getItem('email'))
      setEmail(win.getItem('email'))
    if(win.getItem('message'))
      setMessage(win.getItem('message'))
   },[])

   useEffect(()=>{
     win.setItem('name',name)
     win.setItem('phonenumber',phonenumber)
     win.setItem('email',email)
     win.setItem('message',message)
   },[name,email,message,phonenumber])
  return (
    <>
    <main className='w-full min-h-screen bg-amber-700  text-white'>
      <h1 className='capitalize text-center text-5xl font-bold p-10'>mailing address</h1>
      <div className="info flex justify-between p-20 border-2 border-black">
       <div className="location text-center">
       <h1>Our Location</h1>
       <p>Near Commerce College, North Circular Road, Dera Ismail Khan</p>
       </div>
       <div className="phone text-center">
        <h1>Phone No</h1>
        <p>03331234567</p>
       </div>
       <div className="email text-center">
        <h1>Email Us</h1>
        <p>info@tastybites.com</p>
       </div>
      </div>
      
        <h1>we value your feedback</h1>
        <h2>Please complete the following form and help us improve.</h2>
        <form className=' flex flex-col gap-2 w-3/4 items-center h-20 text-black' onSubmit={handlesubmit}>
        <input type="text" name="full name" placeholder='Full Name' onChange={(e)=>setName(e.target.value)} />
        <input type="number" name="phone " placeholder='Phone Number' onChange={(e)=>setPhoneNumber(e.target.value)} />
        <input type="email" name="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='message' onChange={(e)=>setMessage(e.target.value)} />
        <input type="button" value="submit" className='bg-pink-200 p-2' />
      </form>
    </main>
    </>
  )
}

export default Contact