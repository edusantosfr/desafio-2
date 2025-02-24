import logo from "../assets/logo-name.png";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

import { LoadingSpinner } from "../components/loadingSpinner";
import { getUsers } from "../services/user.service";
import { getUsersRepos } from "../services/repos.service";

export function Login() {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const [status, setStatus] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");

    async function loadingLogin() {
        try {
            setStatus(true);
            
            const responseUser = await getUsers(inputValue)
            const data = responseUser
            const selectedUser = {
                name: data.login,
                bio: data.bio,
                avatar: data.avatar_url
            };
            setUser([selectedUser])

            const responseUserRepos = await getUsersRepos(inputValue)

            navigate("./Profile")
        } catch (error) {
            console.error("Erro ao fazer login", error)
        } finally {
            setStatus(false)
        }
    };

    return (
        <div className="grid grid-cols-[60%_40%] h-screen bg-white">
            <section className="flex items-center justify-center bg-[#05478A]">
                <img src={logo} alt="logo imagem" />
            </section>
            {status ? (
                <LoadingSpinner />
            ) : (
                <section className="flex flex-col items-center justify-center gap-10">
                    <h1 className="text-[40px] font-bold text-[#303030]">Entrar</h1>
                    <div className="flex flex-col">
                        <label htmlFor="userName" className="text-[#303030] text-[15px]">Usuário</label>
                        <input id="userName" type="text" required placeholder="Digite aqui seu usuário do Github" className="w-[318px] p-2.5 pl-3.5 color-[#B5B5B5] text-[15px] border-[1px] border-[#B5B5B5] rounded-sm"
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