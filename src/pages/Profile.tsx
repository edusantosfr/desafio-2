import logo from "../assets/logo-blue.png";

export function Profile() {
    return (
        <div className="grid grid-rows-[88px_90.7vh] h-screen">
            <section className="bg-white flex justify-center">
                <div className="flex h-[88px] items-center w-[92%]">
                    <img src={logo} alt="logo imagem" />
                </div>
            </section>
            <section className="bg-[#f5f5f5] flex items-center justify-center">
                <div className="bg-white w-[92%] h-[94%] rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.10)] flex items-center justify-center">
                    <div className="w-[92%] h-[86%] flex flex-col justify-between">
                        <div className="flex flex-col gap-10">
                            <h1 className="text-[30px] font-bold text-[#303030]">Informações do Perfil</h1>
                            <div className="flex flex-row max-w-fit min-w-[600px] max-h-fit border-1 border-[#E3E7EB] p-[24px] rounded-[18px] gap-[40px]">
                                <div className="bg-blue-400 w-[120px] h-[120px] rounded-[11px] shrink-0"></div>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <span className="font-normal text-[13px] text-[#6A6F73]">Nome</span>
                                        <h3 className="font-bold text-[15px] text-[#2D2D2D]">Eduardo</h3>
                                    </div>
                                    <div>
                                        <span className="font-normal text-[13px] text-[#6A6F73]">Bio</span>
                                        <p className="font-normal text-[15px] text-[#2D2D2D]">Bibliografia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 pb-2">
                            <h1 className="text-[30px] font-bold text-[#303030]">Repositórios</h1>
                            <div>
                                <div className="w-[365px] h-[280px] rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.10)] grid grid-rows-[70px_210px]">
                                    <div className="flex items-center justify-center border-b-1 border-[#0070E0]">
                                        <div className="w-[80%]">
                                            <h3 className="flex font-bold text-[#202E49]">Repositório</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="w-[80%] flex flex-col gap-5">
                                            <div className="bg-[#F7F7F7] w-[100%] h-[60px] rounded-[11px] flex flex-col justify-center">
                                                <span className="font-normal text-[12px] text-[#6A6F73] pl-5">Link</span>
                                                <p className="font-medium text-[14px] text-[#202E49] underline pl-5">www.link.com.br</p>
                                            </div>
                                            <div className="bg-[#F7F7F7] w-[100%] h-[60px] rounded-[11px] flex flex-col justify-center">
                                                <span className="font-normal text-[12px] text-[#6A6F73] pl-5">Link</span>
                                                <p className="font-medium text-[14px] text-[#202E49] pl-5">Lorem ipsum dolor...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}