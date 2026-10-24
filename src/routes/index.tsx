import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  Menu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  X,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const features = [
  {
    icon: Wallet,
    title: "Tudo em um só lugar",
    description:
      "Acompanhe contas, entradas, saídas e saldo sem precisar espalhar informações por várias planilhas.",
  },
  {
    icon: TrendingUp,
    title: "Entenda seus números",
    description:
      "Visualize o movimento do seu dinheiro e tenha mais clareza para planejar os próximos passos.",
  },
  {
    icon: ShieldCheck,
    title: "Seus dados, com cuidado",
    description:
      "Acesso à sua conta e informações financeiras em uma experiência pensada para manter seus dados separados.",
  },
];

const steps = [
  {
    number: "01",
    title: "Organize sua rotina",
    description: "Reúna suas movimentações financeiras em uma visão simples.",
  },
  {
    number: "02",
    title: "Acompanhe o fluxo",
    description: "Veja o que entrou, o que saiu e como está seu saldo.",
  },
  {
    number: "03",
    title: "Decida com clareza",
    description: "Use as informações para se planejar com mais confiança.",
  },
];

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute -inset-5 rounded-[2rem] bg-emerald-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c110e] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-300 text-[#07110b]">
              <span className="text-sm font-black tracking-tight">N</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Visão geral</p>
              <p className="text-[11px] text-white/40">Prévia ilustrativa</p>
            </div>
          </div>
          <div className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1 text-[10px] font-medium text-emerald-200">
            Visão financeira
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
            <div className="mb-3 flex items-center justify-between text-white/45">
              <span className="text-[11px]">Saldo atual</span>
              <Wallet size={14} />
            </div>
            <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">R$ 12.480</p>
            <p className="mt-2 text-[10px] text-white/35">Exemplo de visualização</p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
            <div className="mb-3 flex items-center justify-between text-white/45">
              <span className="text-[11px]">Entradas</span>
              <ArrowDownRight className="rotate-180 text-emerald-300" size={14} />
            </div>
            <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">R$ 8.250</p>
            <p className="mt-2 text-[10px] text-emerald-200/70">Valores ilustrativos</p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
            <div className="mb-3 flex items-center justify-between text-white/45">
              <span className="text-[11px]">Saídas</span>
              <ArrowUpRight className="text-orange-200" size={14} />
            </div>
            <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">R$ 3.170</p>
            <p className="mt-2 text-[10px] text-white/35">Valores ilustrativos</p>
          </div>
        </div>

        <div className="px-4 pb-5 sm:px-5">
          <div className="rounded-xl border border-white/[0.07] bg-[#080c09] p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Fluxo financeiro</p>
                <p className="mt-1 text-[11px] text-white/40">Exemplo de entradas e saídas</p>
              </div>
              <span className="rounded-lg border border-white/10 px-2.5 py-1 text-[10px] text-white/50">
                Este mês
              </span>
            </div>
            <div className="flex h-32 items-end gap-2 sm:h-40 sm:gap-3">
              {[42, 61, 48, 75, 55, 86, 65, 94, 72, 82, 58, 100].map((height, index) => (
                <div key={index} className="flex h-full flex-1 items-end gap-1">
                  <div
                    className="w-1/2 rounded-t-sm bg-emerald-300/80"
                    style={{ height: `${height}%` }}
                  />
                  <div
                    className="w-1/2 rounded-t-sm bg-white/10"
                    style={{ height: `${Math.max(18, height * 0.48)}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-white/45">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-emerald-300" />
                Entradas
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-white/20" />
                Saídas
              </span>
              <span className="ml-auto">Dados fictícios para demonstração</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#111813] px-4 py-3 shadow-xl sm:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-300/10 text-emerald-200">
          <CircleDollarSign size={18} />
        </div>
        <div>
          <p className="text-xs font-medium text-white">Mais clareza no dia a dia</p>
          <p className="mt-0.5 text-[10px] text-white/40">
            Finanças organizadas, decisões melhores
          </p>
        </div>
        <Sparkles className="ml-2 text-emerald-200/70" size={16} />
      </div>
    </div>
  );
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050806] text-white selection:bg-emerald-300 selection:text-[#07110b]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.13]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_8%,rgba(52,211,153,0.2),transparent_30%),radial-gradient(circle_at_10%_45%,rgba(16,185,129,0.08),transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <header className="relative z-20 border-b border-white/[0.07]">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="flex items-center gap-3" aria-label="NIVORA — início">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300 text-[#061009] shadow-[0_0_28px_rgba(110,231,183,0.15)]">
              <span className="text-lg font-black tracking-tighter">N</span>
            </div>
            <span className="text-lg font-semibold tracking-[0.22em]">NIVORA</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <a href="#recursos" className="text-sm text-white/60 transition hover:text-white">
              Recursos
            </a>
            <a href="#como-funciona" className="text-sm text-white/60 transition hover:text-white">
              Como funciona
            </a>
            <a href="#seguranca" className="text-sm text-white/60 transition hover:text-white">
              Segurança
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://nivora-cyan.vercel.app/"
              className="rounded-full px-4 py-2.5 text-sm font-medium text-white/75 transition hover:text-white"
            >
              Entrar
            </a>
            <a
              href="https://nivora-cyan.vercel.app/"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-[#061009] transition hover:bg-emerald-200"
            >
              Conhecer a NIVORA{" "}
              <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="border-t border-white/[0.07] bg-[#080d0a] px-5 py-4 md:hidden"
            aria-label="Navegação móvel"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              <a
                onClick={() => setMenuOpen(false)}
                href="#recursos"
                className="rounded-lg px-3 py-3 text-sm text-white/75 hover:bg-white/5"
              >
                Recursos
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#como-funciona"
                className="rounded-lg px-3 py-3 text-sm text-white/75 hover:bg-white/5"
              >
                Como funciona
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#seguranca"
                className="rounded-lg px-3 py-3 text-sm text-white/75 hover:bg-white/5"
              >
                Segurança
              </a>
              <a
                href="https://nivora-cyan.vercel.app/"
                className="mt-2 rounded-full bg-emerald-300 px-4 py-3 text-center text-sm font-semibold text-[#061009]"
              >
                Acessar NIVORA
              </a>
            </div>
          </nav>
        )}
      </header>

      <section
        id="inicio"
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-12 lg:pb-32 lg:pt-28"
      >
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-200/[0.06] px-3.5 py-2 text-xs font-medium text-emerald-100/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
            Clareza para cuidar do seu dinheiro
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[4.35rem]">
            Seu financeiro,
            <span className="mt-1 block bg-gradient-to-r from-emerald-200 via-emerald-300 to-green-500 bg-clip-text text-transparent">
              em uma nova
            </span>
            perspectiva.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Organize entradas, saídas e saldo em uma experiência simples e moderna. Menos tempo
            tentando entender os números. Mais clareza para decidir seus próximos passos.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://nivora-cyan.vercel.app/"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-[#061009] transition hover:-translate-y-0.5 hover:bg-emerald-200"
            >
              Acessar a NIVORA{" "}
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#recursos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              Explorar recursos <ChevronDown size={16} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/45">
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-300" /> Visão financeira organizada
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-300" /> Acesso online
            </span>
          </div>
        </div>
        <div className="relative py-2 lg:pl-4">
          <DashboardPreview />
        </div>
      </section>

      <section
        id="recursos"
        className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
              Feito para simplificar
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Mais visão do seu dinheiro.
              <br />
              <span className="text-white/45">Menos complicação.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              Uma rotina financeira mais clara começa com informações organizadas e fáceis de
              acompanhar.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/[0.08] bg-[#0b100d]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200/25 hover:bg-[#0e1510] sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200/15 bg-emerald-200/[0.07] text-emerald-200 transition group-hover:bg-emerald-200/[0.12]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
              Sem complicar sua rotina
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              Organização que acompanha o seu ritmo.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
              A NIVORA foi pensada para tornar o acompanhamento financeiro mais acessível no dia a
              dia — com uma interface objetiva e informações no lugar certo.
            </p>
            <a
              href="https://nivora-cyan.vercel.app/"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
            >
              Conhecer a plataforma <ArrowRight size={16} />
            </a>
          </div>
          <div className="divide-y divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 sm:px-7">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 py-6 sm:gap-7 sm:py-7">
                <span className="pt-0.5 font-mono text-sm text-emerald-200/75">{step.number}</span>
                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="seguranca" className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-emerald-200/15 bg-[radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.13),transparent_35%),linear-gradient(135deg,#0d1510,#080c09_70%)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-emerald-200">
                <ShieldCheck size={17} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Organização com responsabilidade
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Tenha seus números mais perto. E suas decisões mais claras.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Comece a construir uma rotina financeira mais organizada com a NIVORA.
              </p>
            </div>
            <a
              href="https://nivora-cyan.vercel.app/"
              className="group inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-[#061009] transition hover:bg-emerald-200 md:self-center"
            >
              Entrar na plataforma{" "}
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="NIVORA — voltar ao início"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-300 text-[#061009]">
              <span className="text-sm font-black">N</span>
            </div>
            <span className="text-sm font-semibold tracking-[0.2em]">NIVORA</span>
          </a>
          <p className="text-xs text-white/35">Organização financeira com mais clareza.</p>
          <div className="flex flex-wrap gap-5 text-xs text-white/45">
            <a href="#recursos" className="transition hover:text-white">
              Recursos
            </a>
            <a href="#como-funciona" className="transition hover:text-white">
              Como funciona
            </a>
            <a href="https://nivora-cyan.vercel.app/" className="transition hover:text-white">
              Acessar plataforma
            </a>
          </div>
        </div>
        <div className="border-t border-white/[0.05] px-5 py-4 text-center text-[11px] text-white/30">
          © {new Date().getFullYear()} NIVORA. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
