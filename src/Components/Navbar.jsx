import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='flex relative left-24 top-40 gap-2 text-gray-400'>
            <li className='hover:underline'><a href="#">About</a></li>
            <li className='hover:underline'><a href="#">Help</a></li>
            <li className='hover:underline'><a href="#">Press</a></li>
            <li className='hover:underline'><a href="#">API</a></li>
            <li className='hover:underline'><a href="#">Jobs</a></li>
            <li className='hover:underline'><a href="#">Privacy</a></li>
            <li className='hover:underline'><a href="#">Terms</a></li>
            <li className='hover:underline'><a href="#">Locations</a></li>
        </ul>
        <p className='relative left-24 top-40 text-gray-400 hover:underline'>Language</p>
        <p className='relative top-40 left-24 text-gray-400'>© 2022 INSTAGRAM FROM META</p>
    </div>
  )
}

export default Navbar