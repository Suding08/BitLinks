import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    
    <footer className='bg-purple-600 text-black flex justify-center items-center px-4 h-15'>
        <p className='text-center'>Copyright &copy; {currentYear} BitLinks - All rights reserved</p>
    </footer>
  )
}

export default Footer
