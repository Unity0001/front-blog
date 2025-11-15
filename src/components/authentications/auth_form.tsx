"use client";

import { useState } from "react";
import { ButtonAuth } from "./button_auth";
import { InputField } from "./InputField";

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");

  const toggleForm = (login: boolean) => {
    setIsLogin(login);
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setNome("");
  };

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Conta criada:", { nome, email, senha });
  };

  const handleLogin = () => {
    console.log("Login:", { email, senha });
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-md text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-2">Bem-vindo</h2>
      <p className="text-gray-500 mb-6">Faça login ou crie uma nova conta</p>

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
        <form className="flex flex-col space-y-4">
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

          <ButtonAuth full isActive onClick={handleLogin}>
            Entrar
          </ButtonAuth>
        </form>
      ) : (
        <form className="flex flex-col space-y-4">
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

          <ButtonAuth full isActive onClick={handleCadastro}>
            Criar conta
          </ButtonAuth>
        </form>
      )}
    </div>
  );
}
