import logo from "../assets/logo-name.png";
import errorCard from "../assets/errorCard.png"

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

import { LoadingSpinner } from "../components/loadingSpinner";
import { getUsers } from "../services/user.service";
import { getUsersRepos } from "../services/repos.service";

export function Login() {
    const navigate = useNavigate();
    const { setUser, setRepository } = useUser();

    const [status, setStatus] = useState(false);
    const [verify, setVerify] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");

    const handleClick = () => {
        setVerify(false)
    };

    async function loadingLogin() {
        try {
            setStatus(true)

            const responseUser = await getUsers(inputValue)
            const userData = responseUser
            const selectedUser = {
                name: userData.login,
                bio: userData.bio,
                avatar: userData.avatar_url
            };
            setUser([selectedUser])

            const responseUserRepos = await getUsersRepos(inputValue)
            const reposData = responseUserRepos
            const selectedRepos = reposData.map((repos: any) => ({
                id: repos.id,
                name: repos.name,
                description: repos.description,
                visibility: repos.visibility,
                url: repos.html_url,
                language: repos.language
            }));
            setRepository(selectedRepos)

            navigate("./Profile")
        } catch (error) {
            setVerify(true)
        } finally {
            setStatus(false)
        }
    };

    return (
        <div className="grid xl:grid-cols-[60%_40%] xl:grid-rows-[100%] h-screen bg-white
        lg:grid-cols-[60%_40%] lg:grid-rows-[100%]
        md:grid-rows-[30%_70%]">
            <section className="flex items-center justify-center bg-[#05478A]">
                <img src={logo} alt="logo imagem" />
            </section>
            {status ? (
                <LoadingSpinner />
            ) : (
                <section className="flex flex-col items-center justify-center gap-10 xl:mb-0
                lg:mb-0
                md:mb-20">
                    {verify ? (
                        <div className="flex justify-end items-center">
                            <p className="absolute mb-3.5 mr-[17px] text-white cursor-pointer text-[13px]"
                                onClick={() => handleClick()}>X</p>
                            <img src={errorCard} className="object-cover w-[347px]" alt="card de erro" />
                        </div>
                    ) : (
                        <h1 className="text-[40px] font-bold text-[#303030]">Entrar</h1>
                    )}
                    <div className="flex flex-col">
                        <label htmlFor="userName" className="text-[#303030] xl:text-[15px]
                        lg:text-[15px]
                        md:text-[20px]">Usuário</label>
                        <input id="userName" type="text" required placeholder="Digite aqui seu usuário do Github" className="xl:text-[15px] xl:w-[318px] p-2.5 pl-3.5 color-[#B5B5B5] border-[1px] border-[#B5B5B5] rounded-sm
                        lg:text-[15px] lg:w-[318px]
                        md:text-[18px] md:w-[400px]"
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    <button className="xl:w-[318px] h-[43px] bg-[#05478A] text-white xl:text-[15px] font-bold rounded-sm cursor-pointer hover:bg-[#0e63b9]
                    lg:text-[15px] lg:w-[318px]
                    md:text-[18px] md:w-[400px]"
                        onClick={loadingLogin}
                        type="submit"
                    >Entrar</button>
                </section>
            )}
        </div>
    )
}