import logo from "../assets/logo-name.png";

import loadingCenter from "../assets/loading-center.png"
import loadingAround from "../assets/loading-around.png"

import { useState } from "react";

import { API } from "../services/api";

export function Login() {

    const [status, setStatus] = useState(false);
    const [inputValue, setInputValue] = useState("");

    async function loadingLogin() {
        setStatus(true);

        try {
            const response = await API.get(`/${inputValue}`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Erro ao fazer login", error);
        } finally {
            setStatus(false);
        }
    };

    return (
        <div className="grid grid-cols-[60%_40%] h-screen bg-white">
            <section className="flex items-center justify-center bg-[#05478A]">
                <img src={logo} alt="logo imagem" />
            </section>
            {status ? (
                <section className="flex flex-col items-center justify-center gap-10">
                    <div className="flex items-center justify-center">
                        <img src={loadingCenter} alt="" className="absolute animate-spin" />
                        <img src={loadingAround} alt="" className="object-cover animate-spin" />
                    </div>
                    <div className="flex flex-row">
                        <h1 className="font-bold text-[30px] text-[#303030]">Carregando...</h1>
                    </div>
                </section>
            ) : (
                <section className="flex flex-col items-center justify-center gap-10">
                    <h1 className="text-[40px] font-bold text-[#303030]">Entrar</h1>
                    <div className="flex flex-col">
                        <label htmlFor="userName" className="text-[#303030] text-[15px]">Usuário</label>
                        <input type="text" name="userName" required placeholder="Digite aqui seu usuário do Github" className="w-[318px] p-2.5 pl-3.5 color-[#B5B5B5] text-[15px] border-[1px] border-[#B5B5B5] rounded-sm"
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    <button className="w-[318px] h-[43px] bg-[#05478A] text-white text-[15px] font-bold rounded-sm cursor-pointer hover:bg-[#0e63b9]"
                        onClick={loadingLogin}
                        type="submit"
                    >Entrar</button>
                </section>
            )}
        </div>
    )
}