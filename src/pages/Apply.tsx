import { useRef, useState } from "react";
import { LuCalendar, LuUsers, LuTrophy, LuClock, LuPhone, LuMapPin, } from "react-icons/lu";
import { TbSchool } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useToast } from "../ToastContainer.tsx";
import { STATUS } from "../components/Toast.tsx";
import { fetchApply, type ApiResponse } from "../services/ApiService.tsx";


function Apply() {

    const formRef = useRef<HTMLFormElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const surnameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const whatsappRef = useRef<HTMLInputElement | null>(null);
    const countryRef = useRef<HTMLInputElement | null>(null);
    const schoolNameRef = useRef<HTMLInputElement | null>(null);
    const graduationYearRef = useRef<HTMLInputElement | null>(null);

    const [role, setRole] = useState('');

    const toast = useToast();

    

    const handleSubmit= (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (role.length === 0) {
            toast({
                id: Date.now(),
                title: "Please fill in required fields",
                content: "All fields are required.",
                status: STATUS.ERROR,
                time: 3000,
            });
            return;
        }

        const formData = {
            role,
            name: nameRef.current?.value,
            surname: surnameRef.current?.value,
            email: emailRef.current?.value,
            whatsapp: whatsappRef.current?.value,
            country: countryRef.current?.value,
            schoolName: schoolNameRef.current?.value,
            graduationYear: graduationYearRef.current?.value,
        };
        fetchApply(formData).then((res:ApiResponse)=> {
            if (res.status == 'success') {
                toast({
                    id: Date.now(),
                    title: "Success",
                    content: res.data,
                    status: STATUS.SUCCESS,
                    time: 3000,
                });
            } else {
                toast({
                    id: Date.now(),
                    title: "Faild",
                    content: res.data,
                    status: STATUS.ERROR,
                    time: 3000,
                });
            }
        });

    };

    return (
    <article>
        <div className="bg-[#21242c]/95 p-4 pt-20 ">
            <div className="max-w-7xl mx-auto">

                
                <div className="flex flex-col justify-center items-center">
                    <div className="mx-auto bg-[#313642] border border-stone-400 hover:bg-[#cfd7ea] p-1 ps-2 pe-2 rounded-full inline-flex items-center justify-center gap-2">
                        <LuCalendar className="w-5 h-5 text-white" />
                        <span className="text-[12px] font-bold text-white">Limited Availability</span>
                    </div>
                    <h2 className="mt-4 font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                        Apply For A
                    </h2>
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-amber-300">
                        Parents Are Saying
                    </h2>
                    <p className="mt-4 text-white max-w-4xl text-center text-xl">
                        Apply for a personalized consultation with Our Founder Amir, where we will create and present you with a customized admissions mentorship program for your needs and goals. We will only reach out to you if we believe you are a fit with our services based on the information you provide below. Please note that not all people who filled out the below private consultation form will be contacted.
                    </p>
                </div>
                <div className="mt-12 flex justify-center gap-8 flex-wrap">
                    <div className="flex gap-3">
                        <LuUsers className="text-amber-300 w-6 h-6"/>
                        <span className="text-white">200K+ Students & Parents Trust Us</span>
                    </div>
                    <div className="flex gap-3">
                        <LuTrophy className="text-amber-300 w-6 h-6"/>
                        <span className="text-white">Ivy League Consultants</span>
                    </div>
                    <div className="flex gap-3">
                        <LuClock className="text-amber-300 w-6 h-6"/>
                        <span className="text-white">Response Only If You Are Qualified</span>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-10 pt-10">
                    <div className="bg-slate-100 rounded-2xl p-8 mb-20 flex-1">
                        <h2 className="text-center text-3xl font-bold">Private Consultation Application</h2>
                        <p className="text-center text-slate-500 text-lg mt-4">Please provide your details below. All fields are required.</p>
                        
                        <form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6">
                            <label>Are you a parent or student? *</label>
                            <div className="flex gap-6">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setRole('parent');
                                    }}
                                    className={("flex-1 rounded-xl bg-white p-3 font-bold text-center ") +( role === 'parent' ? "bg-gradient-to-r from-[#7dd3fc] to-[#c084fc] hover:scale-105 transition duration-300" : "hover:bg-[#7dd3fc] hover:text-white")}
                                >
                                    Parent
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setRole('student');
                                    }}
                                    className={("flex-1 rounded-xl bg-white p-3 font-bold text-center ") +( role === 'student' ? "bg-gradient-to-r from-[#7dd3fc] to-[#c084fc] hover:scale-105 transition duration-300" : "hover:bg-[#7dd3fc] hover:text-white")}
                                >
                                    Student
                                </button>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label htmlFor="fullName">Name *</label>
                                    <input ref={nameRef} type="text" placeholder="Enter your first name" id="fullName" name="fullName" required className="w-full mt-1 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#51defb]"/>
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="surname">Surname *</label>
                                    <input ref={surnameRef} type="text" placeholder="Enter your surname" id="surname" name="surname" required className="w-full mt-1 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#51defb]"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="flex items-center gap-2"><MdOutlineMail className="w-6 h-6"/> Email *</label>
                                <input ref={emailRef} type="email" placeholder="your.email@example.com" id="email" name="email" required className="w-full mt-1 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#51defb]"/>
                            </div>
                            <div>
                                <label htmlFor="whatsapp" className="flex items-center gap-2"><LuPhone className="w-6 h-6"/>WhatsApp Number *</label>
                                <input ref={whatsappRef} type="text" placeholder="+1 (555) 123-4567" id="whatsapp" name="whatsapp" required className="w-full mt-1 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#51defb]"/>
                            </div>
                            <div>
                                <label htmlFor="country" className="flex items-center gap-2"><LuMapPin className="w-6 h-6"/>Residential Area *</label>
                                <input ref={countryRef} type="text" placeholder="e.g., The Peak, Hong Kong" id="country" name="country" required className="w-full mt-1 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#51defb]"/>
                            </div>
                            <div>

                                <label htmlFor="schoolName" className="flex items-center gap-2"><TbSchool className="w-6 h-6"/>Student's School Name *</label>
                                <input ref={schoolNameRef} type="text" placeholder="Enter school name" id="schoolName" name="schoolName" required className="w-full mt-1 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#51defb]"/>
                            </div>

                            <div>

                                <label htmlFor="graduationYear" className="flex items-center gap-2"><LuCalendar className="w-6 h-6"/>Graduation Year *</label>
                                <input ref={graduationYearRef} type="text" placeholder="e.g., 2025, 2026" id="graduationYear" name="graduationYear" required className="w-full mt-1 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#51defb]"/>
                            </div>
                            <button type="submit" className="flex gap-6 justify-center w-full bg-gradient-to-r from-[#7dd3fc] to-[#c084fc] text-white font-bold p-6 rounded-xl hover:opacity-90 transition-opacity duration-300 animate-pulse">
                                <LuCalendar className="w-6 h-6"/>Submit Application
                            </button>
                            <p className="text-ld text-slate-500 text-center">
                                By submitting this form, you agree to our privacy policy and terms of service. We'll contact you only if we believe your profile is a fit with our services. Thank you for applying to work with Quasar & Co.
                            </p>
                        </form>
                    </div>

                    <div className="flex flex-col gap-10 flex-1">
                        <div className="mx-auto bg-[#313642] border border-stone-400 p-10 rounded-2xl  w-full">
                            <h3 className="inline-flex items-center gap-4 mb-5">
                                <LuTrophy className="w-6 h-6 text-amber-300" />
                                <span className="font-bold text-2xl text-white">What to Expect</span>
                            </h3>
                            <div>
                                <div className="flex gap-3 items-start mt-5">
                                    <GoDotFill className="w-6 h-6 text-amber-300 " />
                                    <div>
                                        <h4 className="font-bold text-white text-xl">Personalized Assessment</h4>
                                        <p className="text-white/70 text-lg">Comprehensive review of your academic profile, extracurriculars, and goals</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start mt-5">
                                    <GoDotFill className="w-6 h-6 text-amber-300 " />
                                    <div>
                                        <h4 className="font-bold text-white text-xl">Strategic Roadmap</h4>
                                        <p className="text-white/70 text-lg">Custom action plan to strengthen your application for target universities</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start mt-5">
                                    <GoDotFill className="w-6 h-6 text-amber-300 " />
                                    <div>
                                        <h4 className="font-bold text-white text-xl">Expert Mentorship</h4>
                                        <p className="text-white/70 text-lg">Access to Ivy League Admissions Consultants who've been through the process</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto bg-[#313642] border border-stone-400 p-10 rounded-2xl  w-full">
                            <h3 className="inline-flex items-center gap-4 mb-5">
                                <LuMapPin className="w-6 h-6 text-amber-300" />
                                <span className="font-bold text-2xl text-white">Get In Touch</span>
                            </h3>
                            <div>
                                <div className="flex gap-3 items-center mt-5">
                                    <MdOutlineMail className="w-8 h-8 text-amber-300 " />
                                    <div>
                                        <h4 className="font-bold text-white text-xl">Email</h4>
                                        <p className="text-white/70 text-lg">support@quasarandco.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center mt-5">
                                    <LuClock className="w-8 h-8 text-amber-300 " />
                                    <div>
                                        <h4 className="font-bold text-white text-xl">Response</h4>
                                        <p className="text-white/70 text-lg">Only If You Are Qualified</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center mt-5">
                                    <LuUsers className="w-6 h-6 text-amber-300 " />
                                    <div>
                                        <h4 className="font-bold text-white text-xl">Follow on Social</h4>
                                        <p className="text-white/70 text-lg">@rakhimoff_amir - 200K+ followers total across socials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </article>
    )
}

export default Apply