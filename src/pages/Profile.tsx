import logo from "../assets/logo-blue.png";
import arrow from "../assets/arrow.svg";

// import { ReposCard } from "../components/reposCard";
import { useUser } from "../context/UserContext";
import { LoadingSpinner } from "../components/loadingSpinner";

import { useRef, useState } from "react";

export function Profile() {
    const { user } = useUser()
    const { repos } = useUser()

    const carousel = useRef<HTMLDivElement | null>(null)

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(false)
    const [modalCard, setModalCard] = useState(false);
    const [modalOpen, setModalOpen] = useState<number | null>(null)

    function leftClick() {
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth

            if (count - 3 >= 0) {
                setCount(count - 3)
            }
        }
    };

    function rightClick() {
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth

            if (count + 3 < repos.length) {
                setCount(count + 3)
            }
        }
    };

    async function openModal(id: number) {
        setStatus(true)
        setModalCard(true)
        setModalOpen(id)
    }

    const closeModal = () => {
        setModalOpen(null)
        setStatus(false)
    };

    return (
        <div className="grid grid-rows-[10vh_90vh]">
            <section className="bg-white flex justify-center items-center">
                <div className="flex items-center w-[92%]">
                    <img className="h-[3vh]" src={logo} alt="logo imagem" />
                </div>
            </section>
            <section className="bg-[#f5f5f5] flex items-center justify-center">
                <div className="bg-white w-[92%] xl:h-[94%] rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.15)] flex items-center justify-center
                lg:h-[96%]
                md:h-[96%]">
                    {status ? (
                        modalCard ? (
                            <div className="flex w-[90%] h-[90%]">
                                <div className="grid grid-rows-[15%_85%] w-[100%] h-[100%]">
                                    <div className="flex items-center">
                                        <h1 className="xl:text-[30px] font-[700]
                                        lg:text-[25px]
                                        md:text-[30px]">Especificações</h1>
                                    </div>
                                    <div className=" flex justify-center items-center">
                                        {repos.map((repos) => (
                                            <div key={repos.id}>
                                                {modalOpen === repos.id && (
                                                    <div className="bg-white min-w-[700px] xl:h-[500px] rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.20)] flex justify-center items-center
                                                    lg:h-[450px]
                                                    md:h-[500px]">
                                                        <div className="grid grid-rows-[14%_86%] w-[90%] h-[90%] max-w-[600px]">
                                                            <div className="flex items-center justify-between border-b-1 border-[#BDBDBD]">
                                                                <p className="pl-4 flex font-bold text-[#202E49] xl:text-[16px]
                                                                lg:md:text-[16px]
                                                                md:text-[22px]">{repos.name}</p>
                                                                <button onClick={closeModal} className="font-medium text-[#BDBDBD] cursor-pointer xl:text-[14px]
                                                                lg:text-[14px]
                                                                md:text-[20px]">X</button>
                                                            </div>
                                                            <div className="flex flex-col justify-center items-center gap-6">
                                                                <div className="bg-[#F7F7F7] w-[95%] h-fit min-h-[60px] rounded-[11px] flex flex-col justify-center" >
                                                                    <span className="font-normal text-[#6A6F73] pl-5 xl:text-[12px]
                                                                    lg:md:text-[12px]
                                                                    md:text-[16px]" >Link</span>
                                                                    <p className="font-medium text-[#202E49] underline pl-5 pr-5 xl:text-[14px]
                                                                    lg:md:text-[14px]
                                                                    md:text-[18px] truncate" >{repos.url}</p>
                                                                </div>
                                                                <div className="bg-[#F7F7F7] w-[95%] h-fit min-h-[60px] rounded-[11px] flex flex-col justify-center" >
                                                                    <span className="font-normal text-[#6A6F73] pl-5 xl:text-[12px]
                                                                    lg:md:text-[12px]
                                                                    md:text-[16px]" >Privacidade</span>
                                                                    <p className="font-medium text-[#202E49] pl-5 pr-5 first-letter:uppercase xl:text-[14px]
                                                                    lg:md:text-[14px]
                                                                    md:text-[18px]" >{repos.visibility}</p>
                                                                </div>
                                                                <div className="bg-[#F7F7F7] w-[95%] h-fit min-h-[60px] rounded-[11px] flex flex-col justify-center" >
                                                                    <span className="font-normal text-[#6A6F73] pl-5 xl:text-[12px]
                                                                    lg:md:text-[12px]
                                                                    md:text-[16px]" >Linguagem</span>
                                                                    <p className="font-medium text-[#202E49] pl-5 pr-5 first-letter:uppercase xl:text-[14px]
                                                                    lg:md:text-[14px]
                                                                    md:text-[18px]" >{repos.language}</p>
                                                                </div>
                                                                <div className="bg-[#F7F7F7] w-[95%] h-fit min-h-[60px] rounded-[11px] flex flex-col justify-center" >
                                                                    <span className="font-normal text-[#6A6F73] pl-5 xl:text-[12px]
                                                                    lg:md:text-[12px]
                                                                    md:text-[16px]" >Descrição</span>
                                                                    <p className="font-medium text-[#202E49] pl-5 pr-5 first-letter:uppercase xl:text-[14px]
                                                                    lg:md:text-[14px]
                                                                    md:text-[18px]" >{repos.description || "Repositório sem descrição"}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <LoadingSpinner />
                        )
                    ) : (
                        <div className="w-[92%] xl:h-[86%] flex flex-col justify-between
                        lg:h-[90%]
                        md:h-[90%]">
                            <div className="flex flex-col xl:gap-10
                            lg:gap-4
                            md:gap-10">
                                <h1 className="xl:text-[30px] font-bold text-[#303030]
                                lg:text-[20px]
                                md:text-[30px] md:ml-6">Informações do Perfil</h1>
                                <div className="flex flex-row max-w-fit min-w-[600px] max-h-fit border-1 border-[#E3E7EB] xl:p-[24px] rounded-[18px] gap-[40px]
                                lg:p-[18px]
                                md:p-[24px]">
                                    <img className="xl:w-[120px] xl:h-[120px] rounded-[11px] shrink-0
                                    lg:w-[100px] lg:h-[100px]
                                    md:w-[160px] md:h-[160px]" src={user[0]?.avatar} alt="imagem do perfil do usuário" />
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <span className="font-normal xl:text-[13px] text-[#6A6F73]
                                            lg:text-[13px]
                                            md:text-[18px]">Nome</span>
                                            <h3 className="font-bold xl:text-[15px] text-[#2D2D2D]
                                            lg:text-[15px]
                                            md:text-[20px]">{user[0].name}</h3>
                                        </div>
                                        <div>
                                            <span className="font-normal xl:text-[13px] text-[#6A6F73]
                                            lg:text-[13px]
                                            md:text-[18px]">Bio</span>
                                            <p className="font-normal xl:text-[15px] text-[#2D2D2D]
                                            lg:text-[15px]
                                            md:text-[20px]">{user[0]?.bio || "Sem Bibliografia"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 pb-2">
                                <h1 className="xl:text-[30px] font-bold xl:text-[#303030]
                                lg:text-[20px]
                                md:text-[30px] md:ml-6">Repositórios</h1>
                                <div className="flex flex-col xl:gap-3
                                lg:gap-1
                                md:gap-3">
                                    <div className="flex flex-row justify-end items-center gap-5">
                                        <p className="text-[#6A6F73] font-[500] xl:text-[13px]
                                        lg:text-[11px]">{count + 1} de {Math.min(count + 3, repos.length)}</p>
                                        <div className="flex flex-row xl:gap-1
                                        lg:gap-1
                                        md:gap-2">
                                            <div className="border-[1.5px] border-[#6A6F73] rounded-[5px] cursor-pointer"
                                                onClick={leftClick} >
                                                <img src={arrow} alt="seta" className="xl:w-[11px] xl:m-[6px] xl:mt-[7px] xl:mb-[7px] rotate-180
                                                lg:w-[9px] lg:m-[5px] lg:mt-[6px] lg:mb-[6px]
                                                md:w-[12px] md:m-[7px] md:mt-[8px] md:mb-[8px]" />
                                            </div>
                                            <div className="border-[1.5px] border-[#6A6F73] rounded-[5px] cursor-pointer"
                                                onClick={rightClick} >
                                                <img src={arrow} alt="seta" className="xl:w-[11px] xl:m-[6px] xl:mt-[7px] xl:mb-[7px]
                                                lg:w-[9px] lg:m-[5px] lg:mt-[6px] lg:mb-[6px]
                                                md:w-[12px] md:m-[7px] md:mt-[8px] md:mb-[8px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory xl:w-[85vw] p-[1vw]
                                    lg:w-[85vw]
                                    md:w-[85vw]" ref={carousel}>
                                        {repos.map((repos) => (
                                            <div key={repos.id}>
                                                <div className="flex">
                                                    <div className="snap-always snap-start xl:p-[0.5vw]
                                                    lg:p-[0.65vw]
                                                    md:p-[1vw]">
                                                        <div className="xl:w-[calc((82vw)/3)] xl:h-[280px] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.20)] grid grid-rows-[25%_75%] cursor-pointer 
                                                        lg:h-[240px] lg:w-[calc((81vw)/3)] 
                                                        md:h-[300px] md:w-[calc((79vw)/3)]"
                                                            onClick={() => openModal(repos.id)}>
                                                            <div className="flex items-center justify-center border-b-1 border-[#0070E0] md:w-[calc((79vw)/3)]" >
                                                                <div className="w-[80%]" >
                                                                    <h3 className="flex font-bold text-[#202E49] w-[100%] truncate xl:text-[15px]
                                                                    lg:text-[13px]" >{repos.name}</h3>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center justify-center w-[27vw]" >
                                                                <div className="w-[80%] flex flex-col xl:gap-5
                                                                lg:gap-4
                                                                md:gap-8" >
                                                                    <div className="bg-[#F7F7F7] w-[100%] h-[60px] rounded-[11px] flex flex-col justify-center" >
                                                                        <span className="font-normal xl:text-[12px] text-[#6A6F73] pl-5
                                                                        lg:text-[10px]" >Link</span>
                                                                        <p className="font-medium xl:text-[14px] text-[#202E49] underline pl-5 pr-5 truncate
                                                                        lg:text-[12px]" >{repos.url}</p>
                                                                    </div>
                                                                    <div className="bg-[#F7F7F7] w-[100%] h-[60px] rounded-[11px] flex flex-col justify-center" >
                                                                        <span className="font-normal xl:text-[12px] text-[#6A6F73] pl-5
                                                                        lg:text-[10px]" >Descrição</span>
                                                                        <p className="font-medium xl:text-[14px] text-[#202E49] pl-5 pr-5 truncate
                                                                        lg:text-[12px]" >{repos?.description || "Sem Descrição"}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section >
        </div >
    )
}