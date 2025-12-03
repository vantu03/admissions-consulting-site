import { useEffect, useRef, useState } from 'react'
import Modal from './Modal.tsx'

import logoHeader from '../static/logo.png'

import {LuUsers} from "react-icons/lu";
import {LuClock, LuMapPin} from "react-icons/lu";
import {MdOutlineMail} from "react-icons/md";
import {formatNumber} from '../types/Statistic';
import type { ModalRef } from './Modal.tsx'
import { getStatistics, getPolicies } from '../services/ApiService.tsx';
import type{ Statistic } from '../types/Statistic.tsx'
import { IconMap } from '../services/IconMap.tsx';
import type {Policie} from '../types/Policie.tsx'

function Footer(
    {navItems}:{navItems: { name: string; handleScroll: () => void }[]}
) {

    const [statistics, setStatistics] = useState<Statistic[]>([]);
    const [policies, setPolicies] = useState<Policie[]>([])
    
    const modalPolicie = useRef<ModalRef>(null);

    useEffect(()=> {
        getStatistics().then(setStatistics);
    }, []);

    useEffect(() => {
        getPolicies().then(setPolicies);
    }, []);

    return (
        <footer className="bg-[#1d2027] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col xl:flex-row p-10 gap-10">

                    <div className=" flex flex-col gap-4 flex-1">

                        <div 
                                    
                            className="flex items-center gap-4"
                        >
                            <img src={logoHeader} className="w14 h-14" />
                            <div className="">
                                <h1 className="text-[18px] font-bold  text-xl">Quasar & Co.</h1>
                                <p className="text-amber-300 text-lg">Elite Admissions Consultancy</p>
                            </div>
                        </div>

                        <p className="text-lg py-6">Founded by Amir Rakhimov, trusted by over 200,000 students and parents worldwide. Authentic guidance for elite college admissions.</p>

                        <div className="flex w-fit items-center gap-2 text-amber-300 border border-amber-300 bg-amber-300/20 px-4 rounded-3xl">
                            <LuUsers className="w-5 h-5 text-md" /> 
                            200K+ Trusted Followers
                        </div>

                        <div className="flex gap-4 items-center text-amber-300">
                            <LuClock className="w-6 h-6" />
                            <p className="text-white">Response Only If You Are Qualified</p>
                        </div>

                        <div className="flex gap-4 items-center text-amber-300">
                            <MdOutlineMail className="w-6 h-6" />
                            <p className="text-white">support@quasarandco.com</p>
                        </div>

                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-amber-300">Quick Links</h3>

                            <div className="py-4">
                                <ul className="flex flex-col gap-4 mt-4">
                                    {navItems.map((item) => (
                                        <li key={item.name}><button onClick={item.handleScroll} className="hover:text-amber-300 ">{item.name}</button></li>
                                    ))}
                                </ul>
                            </div>
                            <button 
                                onClick={navItems[3].handleScroll}
                                className="py-4 bg-gradient-to-r from-amber-300 to-amber-200 text-black font-semibold rounded-2xl w-full mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap"
                            >
                                Schedule a Private Consultation
                            </button>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-amber-300">Follow Amir</h3>

                        <div className="py-4">
                            <div className="gap-4 mt-4">
                                {statistics.map((item) => {
                                    const Icon = IconMap[item.icon];

                                    return (
                                        <a key={item.name} href={item.href} target="_blank"
                                        className={"flex items-center gap-4 py-2 hover:text-[" + item.color + "] cursor-pointer"}>
                                            
                                            <div className="rounded-xl p-2 bg-[#29293f]">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            
                                            <div className="flex flex-col">
                                                <span className="text-lg">{item.name}</span>
                                                <span className="text-stone-400 text-sm">
                                                    {formatNumber(item.value)} followers
                                                </span>
                                            </div>
                                        </a>
                                    );
                                })}

                            </div>
                        </div>
                        <div className="bg-[#29293f] p-4 rounded-xl border border-amber-300/30">
                            <p>"Follow Amir's journey and get daily insights into college admissions, student success stories, and exclusive tips from someone trusted by 200K+ followers."</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center border-t border-amber-300/20 p-8 text-stone-400 justify-between">
                    <p className="text-lg">© 2025 Quasar & Co. All rights reserved. | Elite Admissions Consultancy</p>
                    <div className="flex gap-4">
                        {policies.map((policy) => (
                            <button key={policy.id} onClick={() => {
                                modalPolicie.current?.setTitle(policy.title);
                                modalPolicie.current?.setContent(<div dangerouslySetInnerHTML={{ __html: policy.content }} />)
                                modalPolicie.current?.open();
                            }}>{policy.title}</button>
                        ))}
                        <div className="flex items-center gap-1">
                            <LuMapPin /> <span className="text-lg">Uzbekistan</span>
                        </div>
                    </div>
                </div>
                
                <Modal ref={modalPolicie} title="">
                    <></>
                </Modal>
            </div>
        </footer>
    )
}

export default Footer