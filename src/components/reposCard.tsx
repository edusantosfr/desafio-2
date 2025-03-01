import arrow from "../assets/arrow.svg"

import { useRef, useState } from "react";

import { useUser } from "../contexts/UserContext";

export function ReposCard() {
    const { repos } = useUser();
    const carousel = useRef<HTMLDivElement | null>(null);
    const [count, setCount] = useState(0);

    function handleLeftClick() {
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;

            if (count - 3 >= 0) {
                setCount(count - 3);
            }
        }
    };

    function handleRightClick() {
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;

            if (count + 3 < repos.length) {
                setCount(count + 3);
            }
        }
    };

    return (
        <div className="flex flex-col gap-0.6">
            <div className="flex flex-row justify-end items-center gap-5">
                <p className="text-[#6A6F73] font-[500] text-[13px]">{count + 1} de {Math.min(count + 3, repos.length)}</p>
                <div className="flex flex-row gap-1">
                    <div className="border-[1.5px] border-[#6A6F73] rounded-[5px] cursor-pointer"
                        onClick={handleLeftClick} >
                        <img src={arrow} alt="seta" className="w-[11px] m-[6px] mt-[7px] mb-[7px] rotate-180" />
                    </div>
                    <div className="border-[1.5px] border-[#6A6F73] rounded-[5px] cursor-pointer"
                        onClick={handleRightClick} >
                        <img src={arrow} alt="seta" className="w-[11px] m-[6px] mt-[7px] mb-[7px]" />
                    </div>
                </div>
            </div>
            <div className="flex gap-[1.5vw] overflow-x-auto scroll-smooth snap-x snap-mandatory w-[85vw] p-3" ref={carousel}>
                {repos.map((repos) => (
                    <div key={repos.id}>
                        <div className="min-w-[calc((85vw-(2*2.2vw))/3)] snap-always snap-center h-[280px] rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.20)] grid grid-rows-[70px_210px]">
                            <div className="flex items-center justify-center border-b-1 border-[#0070E0]" >
                                <div className="w-[80%]" >
                                    <h3 className="flex font-bold text-[#202E49] truncate w-[270px]" >{repos.name}</h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-[340px]" >
                                <div className="w-[80%] flex flex-col gap-5" >
                                    <div className="bg-[#F7F7F7] w-[275px] h-[60px] rounded-[11px] flex flex-col justify-center" >
                                        <span className="font-normal text-[12px] text-[#6A6F73] pl-5" >Link</span>
                                        <p className="font-medium text-[14px] text-[#202E49] underline pl-5 pr-5 truncate" >{repos.url}</p>
                                    </div>
                                    <div className="bg-[#F7F7F7] w-[275px] h-[60px] rounded-[11px] flex flex-col justify-center" >
                                        <span className="font-normal text-[12px] text-[#6A6F73] pl-5" >Descrição</span>
                                        <p className="font-medium text-[14px] text-[#202E49] pl-5 pr-5 truncate" >{repos?.description || "Sem Descrição"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}