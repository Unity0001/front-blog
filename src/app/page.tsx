import { AuthForm } from "@/components/authentications/auth-form";
import { AuthBackground } from "@/components/authentications/authBackground";

export default function Home() {
  return (
    <AuthBackground>
      <div className="w-full text-center">
        <h1 className="text-green-400 font-bold text-3xl sm:text-4xl mb-6 sm:mb-8 drop-shadow-md">
          Sistema de Autenticação
        </h1>
        <div className="flex justify-center">
          <AuthForm />
        </div>
      </div>
    </AuthBackground>
  );
}
