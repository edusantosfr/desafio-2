import logo from "../assets/logo-name.png";

export function Login() {
    return (
        <div className="grid grid-cols-[60%_40%] h-screen">
            <section className="flex items-center justify-center bg-[#05478A]">
                <img src={logo} alt="logo imagem"/>
            </section>
            <section className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-[40px] font-bold text-[#303030]">Entrar</h1>
                <div className="flex flex-col">
                    <label htmlFor="userName" className="text-[#303030] text-[15px]">Usuário</label>
                    <input type="text" name="userName" placeholder="Digite aqui seu usuário do Github" className="w-[318px] p-2.5 pl-3.5 color-[#B5B5B5] text-[15px] border-[1px] border-[#B5B5B5] rounded-sm" />
                </div>
                <button className="w-[318px] h-[43px] bg-[#05478A] text-white text-[15px] font-bold rounded-sm">Entrar</button>
            </section>
        </div>
    )
}