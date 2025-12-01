import logoHeader from '../static/logo.png'
import { useState } from 'react'

import { IoMdClose, IoMdMenu } from "react-icons/io";


import type { NavItem } from '../types/Nav.tsx'

function Header({navItems}:{navItems:NavItem[]}) {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    function handleScrollToRef(handleScroll: () => void) {
        setOpen(false)
        handleScroll();
    }


    return (
        <>

            <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white bg-opacity-[0.98]">
                <div className="max-w-7xl mx-auto">
                    <nav className="flex p-2 items-center justify-between">
                        <div 
                        
                            className="flex items-center cursor-pointer"
                            onClick={navItems[0].handleScroll}
                        >
                            <img className="m-2" src={logoHeader} alt="Logo" width="40px" height="40px" />
                            <div className="">
                                <h1 className="text-[18px] font-bold">Quasar & Co.</h1>
                                <p className="text-gray-600 text-[12px]">Elite Admissions Consultancy</p>
                            </div>
                        </div>


                        <button
                            className="md:hidden hover:text-amber-300 transition-colors"
                            onClick={handleOpen}
                        >
                            {open ?  (
                                <IoMdClose className="w-8 h-8" />
                            ) : (
                                <IoMdMenu className="w-8 h-8" />
                            )}
                        </button>
                        {!open && (
                            <ul className="hidden md:flex items-center gap-6">
                                {navItems.map((item) => (
                                    <li key={item.name}><button onClick={() => handleScrollToRef(item.handleScroll)} className="hover:text-amber-300">{item.name}</button></li>
                                ))}
                            </ul>
                        )}
                    </nav>
                        

                        {open && (
                            <div className="bg-white p-4">
                                <ul className="flex flex-col gap-4 mt-4 md:hidden">
                                    {navItems.map((item) => (
                                        <li key={item.name}><button onClick={() => handleScrollToRef(item.handleScroll)} className="hover:text-amber-300 ">{item.name}</button></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        </div>
            </header>

        </>
    )
}

export default Header