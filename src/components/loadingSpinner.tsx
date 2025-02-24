import loadingCenter from "../assets/loading-center.png";
import loadingAround from "../assets/loading-around.png";

export function LoadingSpinner() {
    return (
        <section className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center justify-center">
                <img src={loadingCenter} alt="" className="absolute animate-spin" />
                <img src={loadingAround} alt="" className="object-cover animate-spin" />
            </div>
            <div className="flex flex-row">
                <h1 className="font-bold text-[30px] text-[#303030]">Carregando...</h1>
            </div>
        </section>
    )
}