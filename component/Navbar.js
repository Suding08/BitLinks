import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
  
      <nav className='md:h-16 h-24 w-full bg-purple-800 flex justify-between items-center px-4 text-white md:flex-row flex-col'>
        <div className='logo text-lg font-bold'>
            <Link href="/">BitLinks</Link>
        </div>
        <div className='md:gap-3 gap-2 flex flex-row  md:px-0 px-4 md:py-0 py-2'>
        <ul className='flex justify-center items-center gap-5'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            

            <li className='flex gap-4'>
                <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1  cursor-pointer'>Try Now</button></Link>
                
            </li>
        </ul>
        </div>
      </nav>
  )
}

export default Navbar

