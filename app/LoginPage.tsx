'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Coluna da esquerda: formulário */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-extrabold text-[#0353A4]">Faça seu login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="flex-1 border-[#023E7D] text-[#023E7D]">
                <span className="mr-2">G</span> Google
              </Button>
              <Button variant="outline" className="flex-1 border-[#023E7D] text-[#023E7D]">
                <span className="mr-2">F</span> Facebook
              </Button>
            </div>
            <div className="text-center text-sm text-[#5C677D]">Ou use seu e-mail</div>
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
              <a href="#" className="text-sm text-[#0353A4] hover:underline">Esqueceu a senha?</a>
            </div>
            <Button className="w-full bg-[#0353A4] text-white hover:bg-[#023E7D]">Entrar</Button>
            <div className="text-center text-sm">
              Não tem uma conta? <a href="#" className="text-[#33415C] hover:underline">Crie uma</a>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Coluna da direita: imagem cyberpunk */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/imagem-login.png"
          alt="Imagem cyberpunk login"
          fill
          style={{ objectFit: "cover" }}
          className=""
          priority
        />
      </div>
    </div>
  );
}