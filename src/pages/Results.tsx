
import {  LuUsers, LuMapPin, LuTrophy } from "react-icons/lu";

import { useEffect, useState } from "react";
import type { Story } from "../types/Story.tsx";
import { getSchools, getStories } from "../services/ApiService.tsx";
import type { School } from "../types/School.tsx";
function Results() {

    const [stories, setStories] = useState<Story[]>([]);

    const [schools, setSchools] = useState<School[]>([]);

    useEffect(()=>{
        getStories().then(setStories);
    },[]);
    useEffect(()=>{
        getSchools().then(setSchools);
    },[]);

    return (
    <article>
        <div className="text-center bg-[#21242c] p-4 pt-20 ">
            <div className="max-w-7xl mx-auto">
                <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-gray-300/80 mb-6 inline-flex items-center gap-2 bg-white/10 text-white border-white/20">
                    <LuTrophy />Social Media Success Stories
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    <span className="block">Our Social Media Content Helped Students Get Accepted to</span>
                    <span className="text-amber-300 text-transparent block">Top Universities Worldwide</span>
                </h2>
                <p className="text-lg text-white/90 leading-relaxed m-4">Our Founder Amir's Social Media Content helped students get accepted to Harvard, Stanford, Yale, Princeton, Columbia, UC Berkeley, Vanderbilt and Carnegie Mellon University in Qatar.</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-8">
                    {schools.map((school) => (
                        <div
                            key={school.name}
                            className="rounded-lg text-card-foreground shadow-sm group transition-all duration-300 border border-gray-200 bg-white hover:shadow-lg"
                        >
                            <div className="p-6 text-center">

                                <div className="mb-2">
                                    <img
                                        src={school.icon}
                                        alt={`${school.name} logo`}
                                        className="mx-auto object-contain group-hover:scale-110 transition-transform w-full h-28"
                                    />
                                </div>

                                <h3 className="font-semibold text-black mb-1">
                                    {school.name}
                                </h3>

                                <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                                    <LuMapPin />
                                    {school.address}
                                </div>

                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-black text-xs">
                                    {school.value}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">What Students Are Saying</h3>
                    <p className="text-white/80">Direct messages from students who credit Amir's content for their success</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-16 mt-8">

                    {stories.map((story) => (
                        <div
                            key={story.name}
                            className="rounded-lg border shadow-sm hover:border-orange-50-400 hover:shadow-[0_0_15px_#4669d2] transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white"
                        >
                            <div className="p-6">
                                <div className="flex items-start gap-4">

                                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                                        <img
                                            className="aspect-square h-full w-full"
                                            alt={story.name}
                                            src={story.avatar}
                                        />
                                    </span>

                                    <div className="flex-1">

                                        <div className="flex items-center gap-2 mb-2">
                                            <h4 className="font-semibold text-white">{story.name}</h4>
                                            <LuUsers className="w-5 h-5 text-amber-300" />
                                        </div>

                                        <p className="text-start text-sm font-medium text-amber-300">
                                            {story.universities}
                                        </p>

                                        <div className="text-start text-white/80 italic mt-6">
                                            {story.message}
                                        </div>

                                    </div>
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

export default Results