"use client";

import { useState } from "react";
import { ButtonAuth } from "./button_auth";

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
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu email"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite sua senha"
            />
          </div>

          <ButtonAuth full isActive onClick={handleLogin}>
            Entrar
          </ButtonAuth>
        </form>
      ) : (
        <form className="flex flex-col space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu email"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Crie uma senha"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar senha
            </label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirme sua senha"
            />
          </div>

          <ButtonAuth full isActive onClick={handleCadastro}>
            Criar conta
          </ButtonAuth>
        </form>
      )}
    </div>
  );
}
