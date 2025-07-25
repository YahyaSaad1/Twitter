'use client'

import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faHouse, faMagnifyingGlass, faBell, faUser, faEnvelope, faUserGroup, faBolt, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { createRoot } from 'react-dom/client';

export default function Header(){


    const items = [
        {link: `/`, title:'Home', icon: faHouse},
        {link: `/`, title:'Explore', icon: faMagnifyingGlass},
        {link: `/`, title:'Notifications', icon: faBell},
        {link: `/`, title:'Messages', icon: faEnvelope},
        {link: `/`, title:'Grok', icon: faHouse},
        {link: `/`, title:'Communities', icon: faUserGroup},
        {link: `/`, title:'Premium', icon: faXTwitter},
        {link: `/`, title:'Verified Orgs', icon: faBolt},
        {link: `/`, title:'Profile', icon: faUser},
        {link: `/`, title:'More', icon: faEllipsis},
    ]

        const handlePostClick = () => {
            Swal.fire({
                title: '',
                html: `
                    <div class="text-white p-2">
                        <div class="flex items-center">
                            <a href='/drafts' class="px-3 py-1 rounded-full border-none hover:bg-[#10141c]">Draft</a>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div></div>
                        <div class=''>
                            <div class="flex items-center px-3 py-2 rounded-full bg-neutral-500 hover:bg-neutral-600">
                                <span>Post</span>
                            </div>
                        </div>
                    </div>
                `,
                background: 'black',
                showConfirmButton: false,
                customClass: {
                    popup: '',
                },
            });
        };

    return(
        <footer className="flex justify-end 2xl:justify-end">
            <div className="flex flex-col justify-start w-[260px] p-3">
                <div className="my-1 w-13.5 h-13.5 p-1 flex justify-center items-center">
                    <FontAwesomeIcon className="w-11.5 p-2 rounded-full hover:bg-[#1c1c1c] transition-all duration-300 cursor-pointer" icon={faXTwitter} />
                </div>

                {items.map((item, index)=>{
                    return(
                        <Link key={index} href={item.link} className="group my-1 flex justify-end 2xl:inline-block">
                            <div className="p-3 inline-flex items-center rounded-full transition-all duration-300 cursor-pointer group-hover:bg-[#1c1c1c]">
                                <FontAwesomeIcon className="text-[22.97px]" icon={item.icon} />
                                <span className="font-normal text-xl mr-4 ml-5 hidden 2xl:flex">{item.title}</span>
                            </div>
                        </Link>
                    )
                })}
                <div onClick={handlePostClick} className="text-center w-[90%] font-bold text-lg cursor-pointer p-3 rounded-full text-black bg-white hover:bg-neutral-400 transition-all duration-300">
                    <span>Post</span>
                </div>

                <div className="flex hover:bg-[#1c1c1c] transition-all duration-400 cursor-pointer rounded-full w-[95%] px-5 py-2 mt-8">
                    <img className="rounded-full" src="/app/" alt="" />
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <h1 className="font-bold">Yahya Saad</h1>
                            <p className="text-userName">@yahyasaad24</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className="w-6.5" icon={faEllipsis} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}