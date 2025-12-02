
import {  testimonials } from '../types/Testimonial.tsx'
import type { Testimonial } from '../types/Testimonial.tsx'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaArrowLeft, FaArrowRightLong, FaStar } from "react-icons/fa6";
import { LuQuote, LuAward, LuUsers, LuStar, LuTrophy } from "react-icons/lu";

import { features } from '../types/Feature.tsx';

function Testimonials() {

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
        "(max-width: 70px)": {
        slides: { perView: 1, spacing: 10 },
        },
        "(min-width: 771px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
        },
        "(min-width: 1025px)": {
        slides: { perView: 3, spacing: 20 },
        },
    },
    slides: { perView: 1 },
  })

    return (
    <article>
        <div className="bg-white p-4 pt-20 ">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col justify-center items-center">
                    <div className="mx-auto bg-amber-100 p-1 ps-2 pe-2 rounded-full inline-flex flex items-center justify-center gap-2">
                        <LuStar className="w-5 h-5" />
                        <span className="text-[12px] font-bold">Client Testimonials</span>
                    </div>
                    <h2 className="mt-4 font-bold text-3xl sm:text-4xl lg:text-5xl">
                        What Our Students &
                    </h2>
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#7dd3fc] to-[#c084fc] bg-clip-text text-transparent">
                        Parents Are Saying
                    </h2>
                    <p className="mt-4 text-[#898787] max-w-2xl text-center text-xl">
                        Real feedback from students and parents who have experienced our premium consulting services with our Ivy League Admissions Consultants.
                    </p>
                </div>
                <div className="mt-10 p-5">
                    <div className="p-8 flex flex-col sm:flex-row border-[1px]  border-amber-100 hover:border-amber-200 hover:shadow-2xl hover:shadow- rounded-lg">
                        <div className="mb-6 me-5">
                            <span className="text-nowrap text-[12px] font-bold p-1 ps-2 pe-2 rounded-full bg-[#ffecd5]">Parent Testimonial</span>
                            <div className="text-nowrap">
                                {
                                    [1,2,3,4,5].map((star) => (
                                        <FaStar key={star} className="inline w-5 h-5 text-amber-300 me-1" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mb-6">
                            <LuQuote className="text-amber-300 w-6 h-6 mt-4" />
                            <p className="text-[#898787] italic text-lg leading-relaxed mb-4">
                                "This was the first of its kind of session I've taken, since my college does not have a counsellor. Sam was actually very nice, he answered all of my questions, and shared resources as well and that too on the spot. Like one of the things I liked was how he opened his essay in front of me, so he showed me some key points then and there instead of just sharing the essay for later. We talked about the SAT, my scores, my EC, and a lot of other stuff. All positives from my side, 5 stars. Thank you SO much for this free session, I honestly am so thankful."
                            </p>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <p className="font-bold mt-4">Parent from Sell Wear Love</p>
                                    <p className="text-[#ffd24d]">Instagram Business Account </p>
                                    <p className="text-sm text-[#898787]">Consultation with Quasar & Co. Harvard Admissions Consultant</p>
                                </div>
                                <div>
                                    <div className="text-nowrap pe-2 p-[2px] ps-2 text-xs font-bold border-[1px] rounded-xl inline-block">Real-time essay demonstration</div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                

                <div className="p-14">
                    <div className="relative w-full">

                        <button
                            onClick={() => slider.current?.prev()}
                            className="absolute left-0 top-[50%] -translate-y-1/2 z-10
                                    bg-white shadow p-3 rounded-full hover:bg-[#4dafff] hover:text-white transition-colors duration-500"
                        >
                            <FaArrowLeft className="" />
                        </button>
                        <button
                            onClick={() => slider.current?.next()}
                            className="absolute right-0 top-[50%] -translate-y-1/2 z-10
                                    bg-white shadow p-3 rounded-full hover:bg-[#4dafff] hover:text-white transition-colors duration-500"
                        >
                            <FaArrowRightLong className="" />
                        </button>
                        <div ref={sliderRef} className="keen-slider flex items-stretch">
                            {testimonials.map((review: Testimonial) => (
                                <div key={review.id} className="keen-slider__slide flex hover:shadow-2xl hover:shadow-slate-300 ">
                                    <div className="rounded-lg border shadow-sm p-6 bg-white flex justify-between flex-col ">
                                        <div>

                                            <div className="mt-2 flex justify-between items-center">
                                                <div>
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <FaStar key={i} className="inline w-5 h-5 text-amber-300 me-1" />
                                                    ))}
                                                </div>
                                                <div>
                                                    <span className="text-nowrap pe-2 p-[2px] ps-2 text-xs font-bold border-[1px] rounded-xl inline-block">10/10</span>
                                                </div>
                                            </div>
                                            <LuQuote className="text-amber-300 w-6 h-6 mt-4" />

                                            <p className="text-lg text-gray-500 mt-3 italic">
                                                "{review.quote}"
                                            </p>
                                        </div>
                                        <div className="">
                                            <div className="flex items-center gap-3 mt-4 border-t pt-3 m-2">
                                                <LuUsers className="w-6 h-6 rounded-full" />
                                                <div>
                                                    <h4 className="font-semibold">{review.name}</h4>
                                                </div>
                                            </div>
                                            
                                            <p className="text-md text-gray-500 m-2">{review.badge}</p>

                                            <span className="text-xs font-bold p-1 px-2 rounded-full bg-amber-100 m-2 inline-flex">
                                                <LuAward className="w-4 me-2" />
                                                <span>{review.badge}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto flex flex-col justify-center items-center mt-10 max-w-7xl">
                <div className="mx-auto bg-amber-100 p-1 ps-2 pe-2 rounded-full inline-flex items-center justify-center gap-2">
                    <LuTrophy className="w-5 h-5" />
                    <span className="text-[12px] font-bold">Our Services</span>
                </div>
                <div className="mb-20">
                    <h2 className="mt-4 font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
                        Elite Admissions
                    </h2>
                    <h2 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#7dd3fc] to-[#c084fc] bg-clip-text text-transparent">
                        Consulting Services
                    </h2>
                    <p className="mt-4 text-[#898787] max-w-2xl text-center text-xl">
                        Comprehensive support from Former Admissions Officers, PhD Researchers, and Ivy League Graduates and Students to guide your child to acceptance.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id}  className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-2xl hover:shadow-slate-300 transition-all duration-300 group ">
                            <div className="p-6">
                                <div className="mb-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#c084fc] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-amber-300 transition-colors">{feature.title}</h3>
                                    <p className="text-lg text-gray-500 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    </article>
    )
}

export default Testimonials