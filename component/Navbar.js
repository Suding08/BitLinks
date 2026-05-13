import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
  
      <nav className='h-16 bg-purple-800 flex justify-between items-center px-3 text-white'>
        <div className='logo text-lg font-bold'>
            <Link href="/">BitLinks</Link>
        </div>
        <ul className='flex justify-center items-center gap-5'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shortner</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>

            <li className='flex gap-4'>
                <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>GitHub</button></Link>
            </li>
        </ul>
      </nav>
  )
}

export default Navbar
