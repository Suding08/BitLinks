import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#254f1a] text-white flex justify-center items-center px-4 h-15 bottom-0 left-0 w-full sticky'>
        <p className='text-center'>Copyright &copy; {currentYear} BitLinks - All rights reserved</p>
    </footer>
  )
}

export default Footer
