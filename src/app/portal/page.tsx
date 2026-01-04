import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortalPage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Column - Brand & Image */}
            <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-zinc-900 text-white">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img_01.jpeg"
                        alt="Escritório AlenteSeguros"
                        fill
                        className="object-cover opacity-50 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content over image */}
                <div className="relative z-10">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/logo_full.svg"
                            alt="AlenteSeguros"
                            width={200}
                            height={60}
                            className="h-12 w-auto object-contain brightness-0 invert"
                            priority
                        />
                    </Link>
                </div>

                <div className="relative z-10 max-w-lg">
                    <blockquote className="space-y-2">
                        <p className="text-xl font-medium leading-relaxed">
                            "A sua segurança é a nossa prioridade. Aceda à sua área reservada para gerir as suas apólices com total comodidade."
                        </p>
                        <footer className="text-sm text-white/80">AlenteSeguros</footer>
                    </blockquote>
                </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="flex items-center justify-center p-8 lg:p-12 bg-background">
                <div className="w-full max-w-sm space-y-8">
                    {/* Mobile Logo (visible only on small screens) */}
                    <div className="lg:hidden flex justify-center mb-8">
                        <Image
                            src="/logo_full.svg"
                            alt="AlenteSeguros"
                            width={180}
                            height={50}
                            className="h-10 w-auto object-contain"
                        />
                    </div>

                    <div className="space-y-2 text-center lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tight">Bem-vindo de volta</h1>
                        <p className="text-muted-foreground">
                            Introduza os seus dados para aceder à sua conta
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="nome@exemplo.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                className="h-11"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Palavra-passe</Label>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    Esqueceu-se?
                                </a>
                            </div>
                            <Input id="password" type="password" className="h-11" />
                        </div>
                        <Button className="w-full h-11 text-base" size="lg">
                            Entrar com Email
                        </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground pt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center hover:text-primary transition-colors font-medium"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar ao site
                        </Link>
                    </div>

                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Ao clicar em continuar, concorda com os nossos{" "}
                        <Link href="/termos" className="underline underline-offset-4 hover:text-primary">
                            Termos de Serviço
                        </Link>{" "}
                        e{" "}
                        <Link href="/privacidade" className="underline underline-offset-4 hover:text-primary">
                            Política de Privacidade
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
