"use client";
import React, { useState } from 'react'
import { Button, Navbar as Nav } from 'flowbite-react'

const Navbar = () => {
  const [isActive, setIsActive] = useState()

  return (
    <Nav fluid rounded className='bg-dark-grey-1'>
      <Nav.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="animalsmd" /> */}
        <span className="font-display self-center whitespace-nowrap text-xl font-semibold dark:text-white">AnimalsMD</span>
      </Nav.Brand>
      <div className="flex md:order-2">
        {/**Get started on Pet assessment */}
        <Button className=''>Get started</Button>
        <Nav.Toggle />
      </div>
      <Nav.Collapse>
        <Nav.Link href="#" className='text-light-grey' >Home</Nav.Link>
        <Nav.Link href="#" className='text-light-grey'>Products</Nav.Link>
        <Nav.Link href="#" className='text-light-grey'>Signup</Nav.Link>
        <Nav.Link href="#" className='text-light-grey'>Login</Nav.Link>
      </Nav.Collapse>
    </Nav>
  )
}

export default Navbar
