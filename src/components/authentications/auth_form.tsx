"use client";

import { useState } from "react";
import api from "@/services/api";
import { ButtonAuth } from "./button_auth";
import { InputField } from "./InputField";
import { useRouter } from "next/navigation";

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");
  const router = useRouter();

  function toggleForm(login: boolean) {
    setIsLogin(login);
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setNome("");
  }

  async function handleCadastro() {
    console.log("➡️ handleCadastro executou");

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      await api.post("/api/users", {
        name: nome,
        email,
        password: senha,
      });

      alert("Conta criada com sucesso");
      toggleForm(true);
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao cadastrar");
    }
  }

  async function handleLogin() {
    try {
      const response = await api.post("/api/users/login", {
        email,
        password: senha,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      const userResponse = await api.get("/api/users/me");

      const user = userResponse.data;

      if (user.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/home");
      }

    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao fazer login");
    }
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-md text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-2">
        Bem-vindo
      </h2>
      <p className="text-gray-500 mb-6">
        Faça login ou crie uma nova conta
      </p>
      <div className="flex justify-center mb-6">
        <ButtonAuth
          isActive={isLogin}
          onClick={() => toggleForm(true)}
          position="left"
        >
          Login
        </ButtonAuth>

        <ButtonAuth
          isActive={!isLogin}
          onClick={() => toggleForm(false)}
          position="right"
        >
          Cadastro
        </ButtonAuth>
      </div>
      {isLogin ? (
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <InputField
            label="Email"
            type="email"
            value={email}
            placeholder="Digite seu email"
            onChange={setEmail}
          />

          <InputField
            label="Senha"
            type="password"
            value={senha}
            placeholder="Digite sua senha"
            onChange={setSenha}
          />

          <ButtonAuth full isActive type="submit">
            Entrar
          </ButtonAuth>
        </form>
      ) : (
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleCadastro();
          }}
        >
          <InputField
            label="Nome"
            type="text"
            value={nome}
            placeholder="Digite seu nome"
            onChange={setNome}
          />

          <InputField
            label="Email"
            type="email"
            value={email}
            placeholder="Digite seu email"
            onChange={setEmail}
          />

          <InputField
            label="Senha"
            type="password"
            value={senha}
            placeholder="Crie uma senha"
            onChange={setSenha}
          />

          <InputField
            label="Confirmar senha"
            type="password"
            value={confirmarSenha}
            placeholder="Confirme sua senha"
            onChange={setConfirmarSenha}
          />

          <ButtonAuth full isActive type="submit">
            Criar conta
          </ButtonAuth>
        </form>
      )}
    </div>
  );
}
