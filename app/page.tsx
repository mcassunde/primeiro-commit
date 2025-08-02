import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    // Container principal: divide em duas colunas
    <div className="min-h-screen flex">
      {/* Coluna da esquerda: branca, com o card de login */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full max-w-md mt-12">
          <Card className="w-full bg-transparent shadow-none">
            <CardHeader>
              {/* Centraliza os textos */}
              <CardTitle className="text-center text-3xl font-extrabold text-[#0353A4] drop-shadow-md">
                CONTROLE DE CARTEIRAS
              </CardTitle>
              <div className="text-center text-lg font-semibold text-[#023E7D] mt-2">
                Faça seu login
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1 border-[#023E7D] text-[#023E7D]">
                  <span className="mr-2">G</span> Google
                </Button>
                <Button variant="outline" className="flex-1 border-[#023E7D] text-[#023E7D]">
                  <span className="mr-2">F</span> Facebook
                </Button>
              </div>
              <div className="text-center text-sm text-[#5C677D]">
                Ou use seu e-mail
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="Digite seu e-mail" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="Digite sua senha" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Lembrar de mim</Label>
                </div>
                <a href="#" className="text-sm text-[#0353A4] hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <Button className="w-full bg-[#0353A4] text-white hover:bg-[#023E7D]">
                Entrar
              </Button>
              <div className="text-center text-sm">
                Não tem uma conta? <a href="#" className="text-[#33415C] hover:underline">Crie uma</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Coluna da direita: imagem ocupa toda a altura e largura da metade direita */}
      <div className="hidden md:flex w-1/2 h-screen items-center justify-center bg-[#212529]">
        <Image
          src="/imagem-login.png"
          alt="Ilustração Login"
          width={700}
          height={700}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
}
