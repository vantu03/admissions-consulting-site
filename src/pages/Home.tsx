
import bg from '../static/bg-harvard.png'
import human from '../static/human.png'
import { FaRegStar } from "react-icons/fa6";
import { LuTrophy, LuUsers } from "react-icons/lu";


import { statistics, formatNumber } from '../types/Statistic.tsx'

function Home({navItems}:{navItems: { name: string; handleScroll: () => void }[]}) {


    return (
    <article
        className=""
        style={
            {
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        }
    >
        <div className="text-center  bg-[#21242c]/90 p-4 pt-20 ">
            <div className="m-1 max-w-7xl mx-auto lg:text-left lg:flex lg:justify-center">
                <div className="">
                    <div className="rounded-full font-semibold inline-flex items-center gap-2 p-2 bg-amber-100 text-sm">
                        <LuUsers />
                        <span>
                            Trusted by 200K+ Students &amp; Parents
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-white leading-tight mt-4">
                        <span className="block text-nowrap">Where Our Strategy</span>
                        <span className="block text-[#f4c63c] text-nowrap">Builds Your Legacy</span>
                    </h1>
                    <p className="mx-auto lg:mx-0 mt-6 mb-6 leading-relaxed text-white text-lg">
                        Amir Rakhimov, trusted by over 200,000 students and parents worldwide, founded the elite U.S. and U.K. college admissions consultancy Quasar & Co. to unite Former Admissions Officers, PhD Researchers, and Ivy League Graduates and Students in delivering high-quality admissions mentorship for the gifted children of visionary families.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                        {statistics.map((item) => (
                            <div key={item.name} className="text-center">
                                <div className="text-2xl font-bold text-[#f4c63c]">{formatNumber(item.value)}</div>
                                <div className="text-sm text-white/70">{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start m-6">

                        <button className="
                            inline-flex items-center justify-center gap-2 whitespace-nowrap
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                            disabled:pointer-events-none disabled:opacity-50
                            font-semibold text-white
                            bg-gradient-to-r from-[#7dd3fc] to-[#c084fc]
                            animate-pulse
                            h-14 rounded-2xl px-12 text-base group
                            transition-all duration-300
                        "
                        onClick={navItems[3].handleScroll}
                        >
                            <span>Apply For A Private Consultation</span>
                            <LuTrophy className="w-5 h-5" />
                        </button>

                        <button className="
                            inline-flex items-center justify-center gap-2 whitespace-nowrap
                            font-medium text-white
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                            disabled:pointer-events-none disabled:opacity-50
                            bg-[#0a0f1f]
                            border border-[#d4af37]/30
                            hover:border-[#d4af37]/60
                            h-14 rounded-2xl px-12 text-base group
                            transition-all duration-300
                        "
                            onClick={navItems[1].handleScroll}
                        >
                            <FaRegStar className="w-5 h-5" />
                            <span>View Success Stories</span>
                        </button>

                    </div>
                </div>
                <div className="relative  m-8">

                    <div className="w-[460px] h-[460px] mx-auto">
                        <img
                            src={human}
                            className="w-full h-full rounded-full object-cover border-[4px] border-[#ebc849] shadow-[0_0_80px_#4669d2]"
                        />
                    </div>
                    <div className="absolute -bottom-4 -right-4  rounded-full p-3 bg-[#f5efd9]">
                        <div className="inline-flex items-center rounded-full  px-2.5 py-0.5 transition-colors focus:ring-2 border-transparent bg-[#f5e7b7] text-xs font-semibold">Founder &amp; CEO</div>
                    </div>
                </div>  

            </div>
        </div>
    </article>
    )
}

export default Home