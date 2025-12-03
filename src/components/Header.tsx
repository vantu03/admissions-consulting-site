import logoHeader from '../static/logo.png'
import { useState } from 'react'

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

            <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 bg-opacity-[0.98] shadow-md">
                <div className="mx-auto max-w-7xl">
                    <nav className="flex p-2 items-center justify-between">
                        <div className="flex items-center">
                            <img className="m-2" src={logoHeader} alt="Logo" width="40px" height="40px" />
                            <div className="">
                                <h1 className="text-[18px] font-bold">Quasar & Co.</h1>
                                <p className="text-gray-600 text-[12px]">Elite Admissions Consultancy</p>
                            </div>
                        </div>


                        <button
                            className="lg:hidden hover:text-orange-400 transition-colors"
                            onClick={handleOpen}
                        >
                            {open ?  (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                        <ul className="hidden lg:flex items-center gap-6">
                            {navItems.map((item) => (
                                <li key={item.name}><button onClick={() => handleScrollToRef(item.handleScroll)} className="hover:text-orange-400">{item.name}</button></li>
                            ))}
                        </ul>
                        {/* <div className="rounded-full font-semibold inline-flex items-center gap-2 p-2 bg-amber-100 text-sm">
                            <LuUsers />
                            <span>
                                Trusted by 200K+ Students &amp; Parents
                            </span>
                        </div> */}
                    </nav>
                        

                    {open && (
                        <div className="bg-white p-4 lg:hidden">
                            <ul className="flex flex-col gap-4 mt-4 ">
                                {navItems.map((item) => (
                                    <li key={item.name}><button onClick={() => handleScrollToRef(item.handleScroll)} className="hover:text-orange-400 ">{item.name}</button></li>
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