import logo from "../assets/logo-blue.png";

import { ReposCard } from "../components/reposCard";
import { useUser } from "../contexts/UserContext";

export function Profile() {
    const { user } = useUser();

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
                                <img className="w-[120px] h-[120px] rounded-[11px] shrink-0" src={user[0]?.avatar} alt="imagem do perfil do usuário" />
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <span className="font-normal text-[13px] text-[#6A6F73]">Nome</span>
                                        <h3 className="font-bold text-[15px] text-[#2D2D2D]">{user[0]?.name}</h3>
                                    </div>
                                    <div>
                                        <span className="font-normal text-[13px] text-[#6A6F73]">Bio</span>
                                        <p className="font-normal text-[15px] text-[#2D2D2D]">{user[0]?.bio || "Sem Bibliografia"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 pb-2">
                            <h1 className="text-[30px] font-bold text-[#303030]">Repositórios</h1>
                            <ReposCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}