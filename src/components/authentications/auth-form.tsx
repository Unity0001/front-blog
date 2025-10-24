"use client";

import { useState } from "react";

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const toggleForm = (login: boolean) => {
    setIsLogin(login);
    setEmail("");
    setSenha("");
    setNome("");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-2">Bem-vindo</h2>
      <p className="text-gray-500 mb-6">Faça login ou crie uma nova conta</p>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => toggleForm(true)}
          className={`px-4 border-none py-2 w-[100px] rounded-l-lg border border-green-600 font-semibold transition-colors ${
            isLogin
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 hover:bg-green-50"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => toggleForm(false)}
          className={`px-4 py-2 border-none w-[100px] rounded-r-lg border border-green-600 font-semibold transition-colors ${
            !isLogin
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 hover:bg-green-50"
          }`}
        >
          Cadastro
        </button>
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

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
          >
            Entrar
          </button>
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

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
          >
            Criar conta
          </button>
        </form>
      )}
    </div>
  );
}
