import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    // Centraliza verticalmente e horizontalmente, com padding menor no topo
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#979DAC] p-2">
      {/* Título principal REMOVIDO para evitar duplicidade */}
      {/* Card de login centralizado */}
      <Card className="w-full max-w-md bg-white shadow-lg mt-8">
        <CardHeader>
          {/* Título do card agora é o único título visível */}
          <CardTitle className="text-center text-3xl font-extrabold text-[#0353A4] drop-shadow-md">
            Carteira Cripto
          </CardTitle>
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
          <div className="text-center text-sm text-[#5C677D]">
            Or use email address
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="#" className="text-sm text-[#0353A4] hover:underline">
              Forgot password?
            </a>
          </div>
          <Button className="w-full bg-[#0353A4] text-white hover:bg-[#023E7D]">
            Login now
          </Button>
          <div className="text-center text-sm">
            Don&apos;t have an account? <a href="#" className="text-[#33415C] hover:underline">Join free today</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
