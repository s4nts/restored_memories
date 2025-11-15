"use client";

import ImageCompare from "@/components/ImageCompare";
import { Button } from "@/components/ui/button";
import { IcBaselineWhatsapp } from "@/components/IcBaselineWhatsapp";
import Image from "next/image";
import {
  Star,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles,
  Heart,
} from "lucide-react";

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

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Emocionante ver as fotos dos meus avós como nunca vi antes. O trabalho foi impecável e superou todas as minhas expectativas!",
    date: "Há 2 semanas",
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Recuperei memórias que achei que estavam perdidas para sempre. A qualidade da restauração é profissional e o atendimento excelente!",
    date: "Há 1 mês",
  },
  {
    name: "Ana Oliveira",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "A qualidade da restauração superou todas as minhas expectativas. Minha família ficou emocionada ao ver as fotos restauradas!",
    date: "Há 3 semanas",
  },
  {
    name: "Carlos Mendes",
    location: "Curitiba, PR",
    rating: 5,
    text: "Valeu cada centavo! As fotos ficaram perfeitas e consegui preservar momentos únicos da minha família. Recomendo de olhos fechados!",
    date: "Há 1 semana",
  },
  {
    name: "Patrícia Costa",
    location: "Porto Alegre, RS",
    rating: 5,
    text: "Serviço rápido, profissional e com resultado incrível. Minhas fotos antigas ganharam vida novamente. Estou muito satisfeita!",
    date: "Há 2 meses",
  },
  {
    name: "Roberto Alves",
    location: "Brasília, DF",
    rating: 5,
    text: "Trabalho excepcional! Conseguiram restaurar fotos que estavam quase ilegíveis. Minha mãe chorou de emoção ao ver o resultado!",
    date: "Há 3 semanas",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Tecnologia de Ponta",
    description:
      "Utilizamos inteligência artificial e técnicas profissionais para resultados perfeitos",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description:
      "Suas memórias restauradas em até 48 horas, sem comprometer a qualidade",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description:
      "Suas fotos são tratadas com total confidencialidade e segurança garantida",
  },
  {
    icon: Heart,
    title: "Satisfação Garantida",
    description:
      "Se não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas!",
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-end">
            <Button
              onClick={() => {
                if (typeof window !== "undefined") {
                  const newWindow = window.open(
                    WHATSAPP_LINK,
                    "_blank",
                    "noopener,noreferrer"
                  );
                  if (newWindow) {
                    newWindow.opener = null;
                  }
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
              aria-label="Abrir WhatsApp para contato"
            >
              <IcBaselineWhatsapp className="w-5 h-5" />
              <span className="hidden sm:inline">Restaurar Agora</span>
              <span className="sm:hidden">Contato</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-orange-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto à esquerda */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-semibold">4.9/5</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">+500 fotos restauradas</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Reviva Suas
                  <span
                    className="block text-orange-500 mt-2"
                    aria-label="Memórias Preciosas"
                  >
                    Memórias Preciosas
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Transformamos fotos antigas, danificadas ou desbotadas em
                  <strong className="text-orange-500">
                    {" "}
                    memórias vibrantes e eternas
                  </strong>
                  . Preserve sua história familiar para as próximas gerações com
                  qualidade profissional.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Entrega em 48h</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Garantia 100%</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium">
                      +500 clientes satisfeitos
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        const newWindow = window.open(
                          WHATSAPP_LINK,
                          "_blank",
                          "noopener,noreferrer"
                        );
                        if (newWindow) {
                          newWindow.opener = null;
                        }
                      }
                    }}
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 flex items-center justify-center gap-2"
                    aria-label="Solicitar orçamento via WhatsApp"
                  >
                    <IcBaselineWhatsapp className="w-5 h-5" />
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>

              {/* Logo à direita */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Memórias Restauradas"
                    width={400}
                    height={400}
                    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Por Que Escolher a Memórias Restauradas?
              </h2>
              <p className="text-xl text-gray-600">
                Tudo que você precisa para preservar suas memórias mais
                preciosas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-orange-100"
                >
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Comparação de Imagens */}
        <section className="py-20 bg-white" aria-labelledby="examples-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="examples-heading"
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Veja a Transformação
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Compare o antes e depois das nossas restaurações profissionais
              </p>
              <p className="text-lg text-gray-500">
                Cada foto é tratada com cuidado e atenção aos detalhes
              </p>
            </div>

            <div className="space-y-16">
              {examples.map((example, index) => (
                <div key={`example-${index}`} className="max-w-6xl mx-auto">
                  <ImageCompare
                    beforeImage={example.before}
                    afterImage={example.after}
                    beforeLabel="Antes"
                    afterLabel="Depois"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Preços */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
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
                <div
                  key={index}
                  className={`relative bg-white rounded-lg shadow-lg border-2 ${
                    plan.popular
                      ? "border-orange-500 shadow-2xl scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Mais Popular
                    </div>
                  )}
                  <div className="p-8">
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
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          const newWindow = window.open(
                            WHATSAPP_LINK,
                            "_blank",
                            "noopener,noreferrer"
                          );
                          if (newWindow) {
                            newWindow.opener = null;
                          }
                        }
                      }}
                      className={`w-full flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-gray-900 hover:bg-gray-800"
                      } text-white`}
                      aria-label={`Solicitar orçamento para o plano ${plan.name}`}
                    >
                      <IcBaselineWhatsapp className="w-5 h-5" />
                      Solicitar Orçamento
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Depoimentos */}
        <section className="py-20 bg-gradient-to-b from-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Mais de 500 famílias já confiaram em nós para preservar suas
                memórias
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-600">de 5 estrelas</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border border-orange-100"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Garantia */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Shield className="w-16 h-16 mx-auto mb-4 text-orange-100" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Garantia de Satisfação 100%
              </h2>
              <p className="text-xl text-orange-50 mb-6">
                Se você não ficar completamente satisfeito com o resultado,
                devolvemos 100% do seu investimento. Sem perguntas, sem
                complicações.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-orange-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Sem riscos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Reembolso garantido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Processo simples</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Chamada para Ação */}
        <section className="py-20 bg-gradient-to-b from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pronto Para Restaurar Suas Memórias?
            </h2>
            <p className="text-xl mb-4 text-orange-50">
              Não deixe suas memórias se perderem com o tempo
            </p>
            <p className="text-lg mb-8 text-orange-100">
              Entre em contato agora e receba um orçamento personalizado em
              minutos
            </p>
            <Button
              onClick={() => {
                if (typeof window !== "undefined") {
                  const newWindow = window.open(
                    WHATSAPP_LINK,
                    "_blank",
                    "noopener,noreferrer"
                  );
                  if (newWindow) {
                    newWindow.opener = null;
                  }
                }
              }}
              size="lg"
              className="bg-white text-orange-500 hover:bg-orange-50 text-lg px-10 py-7 flex items-center gap-2 mx-auto shadow-xl transform hover:scale-105 transition-transform"
              aria-label="Solicitar orçamento via WhatsApp"
            >
              <IcBaselineWhatsapp className="w-6 h-6" />
              <span className="font-bold">Solicitar Orçamento Grátis</span>
            </Button>
            <p className="text-sm text-orange-100 mt-4">
              ✓ Resposta em até 1 hora • ✓ Sem compromisso • ✓ Orçamento
              gratuito
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image
                src="/images/logo.png"
                alt="Memórias Restauradas"
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert"
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
