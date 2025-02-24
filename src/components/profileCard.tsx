interface Props {
    // id: number;
    name: string;
    bio: string;
    avatar: string;
}

export function ProfileCard({ name, bio, avatar }: Props) {
    return (
        <div className="flex flex-row max-w-fit min-w-[600px] max-h-fit border-1 border-[#E3E7EB] p-[24px] rounded-[18px] gap-[40px]">
            <img className="w-[120px] h-[120px] rounded-[11px] shrink-0" src={avatar} alt="imagem do perfil do usuário" />
            <div className="flex flex-col gap-2">
                <div>
                    <span className="font-normal text-[13px] text-[#6A6F73]">Nome</span>
                    <h3 className="font-bold text-[15px] text-[#2D2D2D]">{name}</h3>
                </div>
                <div>
                    <span className="font-normal text-[13px] text-[#6A6F73]">Bio</span>
                    <p className="font-normal text-[15px] text-[#2D2D2D]">{bio}</p>
                </div>
            </div>
        </div>
    )
}