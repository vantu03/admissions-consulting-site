
import bg from '../static/bg-harvard.png'
import human from '../static/human.png'
import users from '../static/users.svg'
import type { Statistic } from '../types/Statistic'
import trophy from '../static/trophy.svg'
import star from '../static/star.svg'


function Home({statistics}:{statistics: Statistic[]}) {


    return (
    <article
        className=" "
        style={
            {
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        }
    >
        <div className="text-center lg:text-left lg:flex lg:justify-center bg-[#181829]/80 p-4 pt-20 ">
            <div className="m-1 max-w-lg mx-auto">
                <div className="rounded-full font-semibold inline-flex items-center gap-2 p-2 bg-amber-100 text-sm">
                    <img src={users} alt="Users Icon" width="20px" height="20px" />
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
                            <div className="text-2xl font-bold text-[#f4c63c]">{item.value}</div>
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
                    ">
                        <span>Apply For A Private Consultation</span>
                        <img src={trophy} alt="Trophy Icon" className="w-5 h-5" />
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
                    ">
                        <img src={star} className="w-5 h-5" />
                        <span>View Success Stories</span>
                    </button>

                </div>


            </div>
            <div className="relative m-8">

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
    </article>
    )
}

export default Home