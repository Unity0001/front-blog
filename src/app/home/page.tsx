import { FooterComponent } from "../../components/home/footer";
import { HeaderComponent } from "../../components/home/header";

export default function Home() {
    return <>
        <HeaderComponent>
            <a href="/home" className="m-4 text-2xl font-bold text-white flex items-center">
                <img src="/lirio.png" alt="lirio-img" className="w-15 h-15"/>
                Ket Blog
            </a>
            <div className="flex gap-8">
                <h1>Ket blog2</h1>
                <button>Clique</button>
            </div>
        </HeaderComponent>
        <FooterComponent />
    </>
}