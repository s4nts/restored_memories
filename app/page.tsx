"use client";

import { useState } from "react";
import {
  Heart,
  Sparkles,
  Clock,
  Shield,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";
import ImageCompare from "@/components/ImageCompare";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IcBaselineWhatsapp } from "@/components/IcBaselineWhatsapp";

const WHATSAPP_LINK =
  "https://wa.me/5547988369875?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20restaura%C3%A7%C3%A3o%20de%20fotos%20antigas.%20Pode%20me%20ajudar%3F";

const examples = [
  {
    before: "/images/restoration-examples/b1.jpg",
    after: "/images/restoration-examples/a1.png",
  },
  {
    before: "/images/restoration-examples/b2.png",
    after: "/images/restoration-examples/a2.png",
  },
  {
    before: "/images/restoration-examples/b3.jpg",
    after: "/images/restoration-examples/a3.png",
  },
  {
    before: "/images/restoration-examples/b4.jpg",
    after: "/images/restoration-examples/a4.jpg",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Restauração Profissional",
    description:
      "Tecnologia avançada combinada com expertise humana para resultados perfeitos",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Suas memórias restauradas em até 48 horas",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description:
      "Suas fotos são tratadas com total confidencialidade e segurança",
  },
  {
    icon: Heart,
    title: "Satisfação Garantida",
    description: "Se não ficar satisfeito, devolvemos 100% do seu investimento",
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "Emocionante ver as fotos dos meus avós como nunca vi antes. Trabalho impecável!",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Recuperei memórias que achei que estavam perdidas para sempre. Valeu cada centavo!",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    text: "A qualidade da restauração superou todas as minhas expectativas. Recomendo!",
    rating: 5,
  },
];

const pricing = [
  {
    name: "Básico",
    price: "R$ 49",
    features: [
      "Restauração de 1 foto",
      "Remoção de manchas e arranhões",
      "Ajuste de cores",
      "Entrega em 48h",
      "Arquivo digital em alta resolução",
    ],
  },
  {
    name: "Premium",
    price: "R$ 129",
    features: [
      "Restauração de 3 fotos",
      "Tudo do plano Básico",
      "Colorização de fotos P&B",
      "Restauração avançada de danos",
      "Entrega em 24h",
      "Até 5 revisões",
    ],
    popular: true,
  },
  {
    name: "Família",
    price: "R$ 299",
    features: [
      "Restauração de 10 fotos",
      "Tudo do plano Premium",
      "Restauração de álbuns completos",
      "Montagem de painéis",
      "Entrega prioritária",
      "Suporte dedicado",
    ],
  },
];

export default function Home() {
  const [activeExample, setActiveExample] = useState(0);

  const handlePrevious = () => {
    setActiveExample((prev) => (prev === 0 ? examples.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveExample((prev) => (prev === examples.length - 1 ? 0 : prev + 1));
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-amber-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Memórias Restauradas"
                className="h-10 w-auto"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold text-gray-900 hidden sm:inline">
                Memórias Restauradas
              </span>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2"
            >
              <IcBaselineWhatsapp className="w-5 h-5" />
              <span className="hidden sm:inline">Restaurar Agora</span>
              <span className="sm:hidden">Contato</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section com Logo */}
        <section className="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-b from-amber-50 via-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <img
                  src="/images/logo.png"
                  alt="Memórias Restauradas"
                  className="h-32 sm:h-40 md:h-48 w-auto drop-shadow-lg animate-fade-in"
                  width={200}
                  height={200}
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Reviva Suas
                <span className="block text-amber-600 mt-2">
                  Memórias Preciosas
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transformamos fotos antigas, danificadas ou desbotadas em
                memórias vibrantes e eternas. Preserve sua história familiar
                para as próximas gerações.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 flex items-center justify-center gap-2"
                >
                  <IcBaselineWhatsapp className="w-5 h-5" />
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 text-lg px-8 py-6"
                  onClick={() => {
                    document
                      .getElementById("examples")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Ver Exemplos
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Veja a Magia Acontecer
              </h2>
              <p className="text-xl text-gray-600">
                Compare o antes e depois lado a lado
              </p>
            </div>

            <div className="max-w-6xl mx-auto mb-8">
              <ImageCompare
                beforeImage={examples[activeExample].before}
                afterImage={examples[activeExample].after}
                onPrevious={handlePrevious}
                onNext={handleNext}
                showNavigation={true}
              />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExample(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeExample === index
                      ? "bg-amber-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-2"
                  }`}
                  aria-label={`Ver exemplo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Por Que Nos Escolher?
              </h2>
              <p className="text-xl text-gray-600">
                Expertise e dedicação em cada detalhe
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Planos e Preços
              </h2>
              <p className="text-xl text-gray-600">
                Escolha o plano ideal para suas necessidades
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? "border-4 border-amber-500 shadow-2xl scale-105"
                      : "border-2 border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Mais Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={handleWhatsAppClick}
                      className={`w-full flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "bg-amber-600 hover:bg-amber-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      } text-white`}
                    >
                      <IcBaselineWhatsapp className="w-5 h-5" />
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                O Que Dizem Nossos Clientes
              </h2>
              <p className="text-xl text-gray-600">
                Histórias reais de pessoas satisfeitas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-amber-100">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-amber-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pronto Para Restaurar Suas Memórias?
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Comece agora e veja suas fotos antigas ganharem vida novamente
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-white text-amber-600 hover:bg-amber-50 text-lg px-8 py-6 flex items-center gap-2"
            >
              <IcBaselineWhatsapp className="w-5 h-5" />
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img
                src="/images/logo.png"
                alt="Memórias Restauradas"
                className="h-8 w-auto brightness-0 invert"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">Memórias Restauradas</span>
            </div>
            <p className="text-gray-400">
              © 2025 Memórias Restauradas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
