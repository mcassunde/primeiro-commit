'use client';
import Image from 'next/image';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { useState } from 'react';

export default function Home() {
  const [lembrar, setLembrar] = useState(false);
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Coluna da Imagem (direita no desktop, topo no mobile) */}
      <div className="md:w-1/2 w-full h-64 md:h-auto relative order-1 md:order-2">
        <Image
          src="/imagem-login.png"
          alt="Imagem Cyberpunk Login"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
      {/* Coluna do Formulário (esquerda no desktop, abaixo no mobile) */}
      <div className="flex flex-1 items-center justify-center order-2 md:order-1 bg-gray-100">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-300">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Carteira Cripto</h1>
          <div className="flex gap-4 mb-4">
            <Button variant="outline" className="w-1/2 bg-white">G Google</Button>
            <Button variant="outline" className="w-1/2 bg-white">F Facebook</Button>
          </div>
          <div className="text-center text-gray-500 mb-4">Ou use seu e-mail</div>
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1" htmlFor="email">E-mail</label>
              <Input id="email" type="email" placeholder="Digite seu e-mail" required className="bg-white" />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="senha">Senha</label>
              <Input id="senha" type="password" placeholder="Digite sua senha" required className="bg-white" />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-blue-700 hover:underline text-sm">Lembrar de mim</a>
              <a href="#" className="text-blue-700 hover:underline text-sm">Esqueceu a senha?</a>
            </div>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold">Entrar</Button>
          </form>
          <div className="text-center text-gray-600 mt-4">
            Não tem uma conta? <a href="#" className="text-blue-700 hover:underline">Crie grátis agora</a>
          </div>
        </div>
      </div>
    </main>
  );
}

