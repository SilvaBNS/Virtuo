import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo1.png"
import { navItems } from "../constants"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] =  useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="" style={{ height: '25px', width: '25px', marginRight: '5px' }} />
                    <div className="span text-xl tracking-tight bg-gradient-to-r  from-cyan-600 to-pink-700 text-transparent bg-clip-text font-bold">Virtuo</div>
                </div>

                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                        <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                    <a href="#" className="bg-gradient-to-r from-pink-700 to-cyan-600 py-2 px-3 rounded-md">Create an account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen? <X/> : <Menu/> }
                    </button> 
                </div>  
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) =>(
                            <li key={index} className="py-4">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col">
                        <a href="#" className="py-2 px-3 border rounded-md mb-4">Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-pink-700 to-cyan-600 py-2 px-3 rounded-md">Create an account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar