interface Props {
    id: number;
    name: string;
    description: string;
    url: string;
    visibility: string;
    language: string;
}

export function ReposCard() {
    return (
        <div className="w-[340px] h-[280px] rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.20)] grid grid-rows-[70px_210px]" >
            <div className="flex items-center justify-center border-b-1 border-[#0070E0]" >
                <div className="w-[80%]" >
                    <h3 className="flex font-bold text-[#202E49]" > Repositório </h3>
                </div>
            </div>
            < div className="flex items-center justify-center" >
                <div className="w-[80%] flex flex-col gap-5" >
                    <div className="bg-[#F7F7F7] w-[100%] h-[60px] rounded-[11px] flex flex-col justify-center" >
                        <span className="font-normal text-[12px] text-[#6A6F73] pl-5" > Link </span>
                        < p className="font-medium text-[14px] text-[#202E49] underline pl-5" > www.link.com.br </p>
                    </div>
                    < div className="bg-[#F7F7F7] w-[100%] h-[60px] rounded-[11px] flex flex-col justify-center" >
                        <span className="font-normal text-[12px] text-[#6A6F73] pl-5" > Link </span>
                        < p className="font-medium text-[14px] text-[#202E49] pl-5" > Lorem ipsum dolor...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}