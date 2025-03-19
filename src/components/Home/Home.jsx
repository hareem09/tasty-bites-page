import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Home() {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("items");
        return savedItems ? JSON.parse(savedItems) : [];
    });
 
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    // Function to add selected deal to cart
    const addItems = (deal) => {
        setItems(prevItems => [...prevItems, deal]);
    };

    const deals = [
        { id: 1, name: "Deal 5", description: "2 Zinger Burger, Wings 12 pcs & 2 Reg Drink", price: 800 },
        { id: 2, name: "Deal 6", description: "1 Chicken Burger, Fries & 1 Drink", price: 500 },
        { id: 3, name: "Deal 7", description: "Grilled Chicken, Salad & Drink", price:  900 },
        { id: 4, name: "Deal 8", description: "Family Meal - 4 Burgers, Large Fries, 4 Drinks", price: 1500 }
    ];

    return (
        <>
            <div className="home w-full md:min-h-screen">
                <div className="pg1 w-full md:min-h-screen">
                    <img src="https://static.tossdown.com/images/dfd9f34d-0398-49e2-b5b5-554f80e1b8f9.webp" alt="" />
                </div>
                <div className="pg2 w-full min-h-screen bg-amber-900">
                    <h1 className='capitalize text-7xl text-center text-amber-500 p-16'>Deals</h1>
                    <div className="container flex justify-around text-white">
                        {deals.map((deal) => (
                            <div key={deal.id} className="card p-10 h-96 border-2 border-black w-1/5 bg-black text-white" name='item'>
                                <img src="https://static.tossdown.com/site/assets/media/footer-s.png" alt="" className='h-56' />
                                <h1 className='capitalize font-bold pt-5'>{deal.name}</h1>
                                <p className='text-xs pt-2 text-nowrap'>{deal.description}</p>
                                <h1 className='font-bold pt-2 text-amber-500'>Rs{deal.price}</h1>
                                <button className='bg-pink-400 p-4 mt-2' onClick={() => addItems(deal)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <div className="con-2 w-full mt-5 bg-black flex">
                        <img src="https://static.tossdown.com/images/5198258b-9f05-4ce1-b0cb-9571bf7237bc.webp" alt="" className='p-10 h-2/4 w-2/4' />
                        <div className="info flex flex-col items-center justify-center">
                            <h1 className='text-amber-500 font-bold text-3xl '>About Us</h1>
                            <p className='capitalize font-bold text-7xl text-wrap text-white'>Food is important for a balanced life</p>
                        </div>
                    </div>
                    <div className="con-3 w-full ">
                        <h1 className='text-amber-500 text-7xl font-bold text-center'>Our Menu</h1>
                        <div className="links">
                            <ul className='flex gap-10 justify-center m-2'>
                                <li className='text-2xl text-white cursor-pointer'><Link to={'/'}>Starter</Link></li>
                                <li className='text-2xl text-white cursor-pointer'><Link to={'/wrap'}>Wraps and Rolls</Link></li>
                                <li className='text-2xl text-white cursor-pointer'><Link to={'/club'}>Club Sandwiches</Link></li>
                                <li className='text-2xl text-white cursor-pointer'><Link to={'/rice'}>Rice and Chowmein</Link></li>
                            </ul>
                            <div className="menu-con">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
