import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PortalPage() {
    return (
        <div className="min-h-screen bg-muted/50 flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center p-4 pt-20">
                <div className="w-full max-w-md space-y-8">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar ao Início
                    </Link>

                    <Card className="border-border/50 shadow-xl">
                        <CardHeader className="text-center space-y-4">
                            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Lock className="w-6 h-6 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <CardTitle className="text-2xl font-bold">Portal de Cliente</CardTitle>
                                <CardDescription>
                                    Aceda à sua área reservada para consultar apólices e sinistros.
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="nome@exemplo.com" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Palavra-passe</Label>
                                    <a href="#" className="text-xs text-primary hover:underline">
                                        Esqueceu-se?
                                    </a>
                                </div>
                                <Input id="password" type="password" />
                            </div>
                            <Button className="w-full" size="lg">
                                Entrar
                            </Button>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4 text-center text-sm text-muted-foreground bg-muted/20 border-t p-6 rounded-b-xl">
                            <p>
                                Ainda não tem acesso?{" "}
                                <Link href="/#contacto" className="text-primary font-medium hover:underline">
                                    Contacte-nos
                                </Link>
                            </p>
                        </CardFooter>
                    </Card>

                    <div className="text-center">
                        <Image
                            src="/logo.svg"
                            alt="AlenteSeguros"
                            width={32}
                            height={32}
                            className="w-8 h-8 opacity-50 mx-auto"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
