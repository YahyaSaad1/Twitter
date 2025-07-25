'use client'

import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Mid from "./Mid"

export default function Main(){
    const trends=[
        {title:'#غزه_تجوع', country:'Trending in Egypt', link:'/'},
        {title:'#انقذوا_غزه', country:'Trending in Egypt', link:'/'},
        {title:'الجانب المصري', country:'Trending in Egypt', link:'/'},
        {title:'الامم المتحده', country:'Trending in Egypt', link:'/'},
        {title:'تريزيجيه', country:'Trending in Egypt', link:'/'},
    ]

    return(
        <main className="grid xl:grid-cols-[5fr_3fr] gap-8">
            <Mid/>
            <div className="hidden flex-col gap-y-5 xl:flex">
                <div className="">
                    <input className="border-1 rounded-full border-white w-full p-3 font-bold text-white" type="search" placeholder="Search" name="search" id="search" />
                </div>
                <div className="border-1 rounded-2xl border-white p-5">
                    <h1 className="font-bold text-2xl">Subscribe to Premium</h1>
                    <p className="mt-5">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                    <button className="font-bold bg-blue-400 text-white py-2 px-4 mt-5 rounded-full hover:bg-blue-500 transition-all duration-300 cursor-pointer">Subscribe</button>
                </div>
                <div className="border-1 rounded-2xl border-white overflow-hidden">
                    <h1 className="font-bold text-2xl p-5">What’s happening</h1>
                    {trends.map((trend, index)=>{
                        return(
                            <Link key={index} href={trend.link} className="p-5 flex justify-between hover:bg-[#100c0c] cursor-pointer transition-all duration-300">
                                <div>
                                    <span className="text-[#71767B]">{trend.country}</span>
                                </div>
                                <div className="flex flex-col justify-end items-end">
                                    <div className="p-2 group w-9 h-9 flex justify-center items-center hover:bg-[#10141c] rounded-full transition-all duration-300">
                                        <FontAwesomeIcon className="w-4 text-gray-500 group-hover:text-blue-500" icon={faEllipsis} />
                                    </div>
                                    <span className="font-bold mr-2">{trend.title}</span>
                                </div>
                            </Link>
                        )
                    })}
                    <Link href={'/'} className="p-5 flex justify-between hover:bg-[#100c0c] cursor-pointer transition-all duration-300">
                        <span className="text-blue-500">Show more</span>
                    </Link>
                </div>
                <div className="border-1 rounded-2xl border-white p-5">4</div>
                <div className="border-1 rounded-2xl border-white p-5">5</div>
            </div>
        </main>
    )
}