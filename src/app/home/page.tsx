import { H1Bold } from "@/components/bold_h1/h1_bold";
import { FooterComponent } from "../../components/home/footer";
import { HeaderComponent } from "../../components/home/header";

export default function Home() {
    return <>
        <HeaderComponent>
            <a href="https://ketily-homenagem.vercel.app/" className="m-4 text-2xl font-bold text-white flex items-center">
                <img src="/lirio.png" alt="lirio-img" className="w-15 h-15" />
                Ket Blog
            </a>
            <div className="flex gap-8 flex items-center">
                <H1Bold href="/home">Sobre mim</H1Bold>
                <H1Bold href="/posts">Posts</H1Bold>
            </div>
        </HeaderComponent>
        <FooterComponent />
    </>
}