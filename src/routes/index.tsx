import { useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  Menu,
  Monitor,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wallet,
  X,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

type DashboardTab = "resumo" | "entradas" | "saidas";
type PreviewMode = "desktop" | "mobile";

const dashboardData: Record<
  DashboardTab,
  { label: string; helper: string; total: number; bars: number[]; color: string }
> = {
  resumo: {
    label: "Movimento do dinheiro",
    helper: "Entradas e saídas ao longo dos últimos meses",
    total: 5080,
    bars: [38, 52, 44, 66, 58, 72, 64, 88],
    color: "mint",
  },
  entradas: {
    label: "Dinheiro que entrou",
    helper: "Exemplo de entradas mensais",
    total: 8250,
    bars: [28, 46, 38, 70, 54, 82, 63, 100],
    color: "mint",
  },
  saidas: {
    label: "Dinheiro que saiu",
    helper: "Exemplo de despesas mensais",
    total: 3170,
    bars: [24, 41, 34, 55, 46, 62, 52, 74],
    color: "amber",
  },
};

const features = [
  {
    number: "01",
    icon: Wallet,
    title: "Veja tudo com clareza",
    description: "Entradas, despesas e saldo reunidos em uma visão simples.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Entenda o seu fluxo",
    description: "Perceba para onde o dinheiro está indo e o que está mudando.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Tenha mais controle",
    description: "Uma rotina financeira mais organizada, sem depender de várias planilhas.",
  },
];

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function money(value: number) {
  return currency.format(Number.isFinite(value) ? value : 0);
}

function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("resumo");
  const [previewMode, setPreviewMode] = useState<PreviewMode>("desktop");
  const selected = dashboardData[activeTab];

  return (
    <div className="relative mx-auto w-full">
      <div className="nivora-orbit nivora-orbit-one" aria-hidden="true" />
      <div className="nivora-orbit nivora-orbit-two" aria-hidden="true" />
      <div className="relative z-10">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span className="nivora-status-dot" />
            <span>Demonstração interativa</span>
          </div>
          <div className="inline-flex rounded-full border border-white/10 bg-[#0b100d]/90 p-1" aria-label="Tamanho da prévia">
            <button
              type="button"
              aria-label="Ver painel em desktop"
              aria-pressed={previewMode === "desktop"}
              onClick={() => setPreviewMode("desktop")}
              className={`nivora-mode-button ${previewMode === "desktop" ? "is-active" : ""}`}
            >
              <Monitor size={14} />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              aria-label="Ver painel em celular"
              aria-pressed={previewMode === "mobile"}
              onClick={() => setPreviewMode("mobile")}
              className={`nivora-mode-button ${previewMode === "mobile" ? "is-active" : ""}`}
            >
              <Smartphone size={14} />
              <span>Celular</span>
            </button>
          </div>
        </div>

        <div className={`nivora-device-wrap ${previewMode === "mobile" ? "is-mobile" : ""}`}>
          <div className="nivora-dashboard">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-4 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b5f4c8] text-[#07110b] shadow-[0_0_26px_rgba(181,244,200,0.18)]">
                  <span className="text-base font-black">N</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Visão financeira</p>
                  <p className="mt-0.5 text-[11px] text-white/40">Um exemplo, só para explorar</p>
                </div>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-emerald-200/15 bg-emerald-100/[0.05] px-3 py-1.5 text-[10px] text-emerald-100/80 sm:flex">
                <Sparkles size={12} />
                Feito para simplificar
              </div>
              <span className="h-2 w-2 rounded-full bg-[#b5f4c8] shadow-[0_0_10px_rgba(181,244,200,0.6)] sm:hidden" />
            </div>

            <div className="flex gap-1 overflow-x-auto px-4 pt-4 sm:px-5" role="tablist" aria-label="Ver indicadores de exemplo">
              {([
                ["resumo", "Visão geral"],
                ["entradas", "Entradas"],
                ["saidas", "Saídas"],
              ] as const).map(([tab, label]) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`nivora-dashboard-tab ${activeTab === tab ? "is-active" : ""}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid gap-3 px-4 pt-4 sm:grid-cols-3 sm:px-5">
              <MetricCard
                label="Saldo demonstrativo"
                value={money(5080)}
                icon={<Wallet size={15} />}
                tone="neutral"
                active={activeTab === "resumo"}
                onClick={() => setActiveTab("resumo")}
              />
              <MetricCard
                label="Entradas"
                value={money(8250)}
                icon={<ArrowDownRight size={15} />}
                tone="green"
                active={activeTab === "entradas"}
                onClick={() => setActiveTab("entradas")}
              />
              <MetricCard
                label="Saídas"
                value={money(3170)}
                icon={<ArrowUpRight size={15} />}
                tone="amber"
                active={activeTab === "saidas"}
                onClick={() => setActiveTab("saidas")}
              />
            </div>

            <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
              <div className="rounded-2xl border border-white/[0.07] bg-[#080c09]/90 p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{selected.label}</p>
                    <p className="mt-1 text-[11px] text-white/40">{selected.helper}</p>
                  </div>
                  <p className={`font-mono text-sm font-semibold ${selected.color === "amber" ? "text-amber-200" : "text-[#b5f4c8]"}`}>
                    {money(selected.total)}
                  </p>
                </div>
                <div className="nivora-chart mt-5 flex h-28 items-end gap-2 sm:h-36 sm:gap-3" aria-label="Gráfico fictício de movimentação financeira" role="img">
                  {selected.bars.map((height, index) => (
                    <div className="flex h-full min-w-0 flex-1 items-end gap-1" key={index}>
                      <span
                        className={`nivora-chart-bar ${selected.color === "amber" ? "is-amber" : ""}`}
                        style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }}
                      />
                      {activeTab === "resumo" && (
                        <span
                          className="nivora-chart-bar is-secondary"
                          style={{ height: `${Math.max(15, height * 0.48)}%`, animationDelay: `${index * 45 + 20}ms` }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-white/40">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-sm bg-[#b5f4c8]" />
                    {activeTab === "saidas" ? "Despesas" : "Entradas"}
                  </span>
                  {activeTab === "resumo" && (
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-sm bg-white/20" />
                      Saídas
                    </span>
                  )}
                  <span className="ml-auto">Valores fictícios</span>
                </div>
              </div>
              <p className="mt-3 flex items-center justify-center gap-2 text-center text-[10px] text-white/30">
                <ShieldCheck size={12} />
                Seus cliques aqui não alteram sua conta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon,
  tone,
  active,
  onClick,
}: {
  label: string;
  value: string;
  icon: ReactNode;
  tone: "neutral" | "green" | "amber";
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`nivora-metric-card text-left ${active ? "is-active" : ""}`}
    >
      <span className={`nivora-metric-icon ${tone}`}>{icon}</span>
      <span className="mt-3 block text-[11px] text-white/45">{label}</span>
      <span className="mt-1 block text-lg font-semibold tracking-tight text-white sm:text-xl">{value}</span>
      <span className="mt-2 flex items-center gap-1 text-[10px] text-white/30">
        Explorar indicador <ArrowRight size={11} />
      </span>
    </button>
  );
}

function BalanceSimulator() {
  const [income, setIncome] = useState("8250");
  const [expenses, setExpenses] = useState("3170");
  const balance = Math.max(0, Number(income) || 0) - Math.max(0, Number(expenses) || 0);
  const formattedBalance = money(balance);

  function resetValues() {
    setIncome("8250");
    setExpenses("3170");
  }

  return (
    <div className="nivora-simulator">
      <div className="nivora-simulator-glow" aria-hidden="true" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-xs font-medium text-[#b5f4c8]">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b5f4c8]/10">
            <CircleDollarSign size={16} />
          </span>
          Experimente com valores fictícios
        </div>
        <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
          E se você mudasse os números?
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
          Ajuste as entradas e despesas e veja o saldo estimado mudar na hora. Nada é salvo ou enviado.
        </p>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs text-white/60">Quanto entrou (R$)</span>
              <div className="nivora-input-wrap">
                <span aria-hidden="true">R$</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="999999999"
                  value={income}
                  onChange={(event) => setIncome(event.target.value)}
                  className="nivora-number-input"
                  aria-label="Valor de entradas fictícias em reais"
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs text-white/60">Quanto saiu (R$)</span>
              <div className="nivora-input-wrap">
                <span aria-hidden="true">R$</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="999999999"
                  value={expenses}
                  onChange={(event) => setExpenses(event.target.value)}
                  className="nivora-number-input"
                  aria-label="Valor de despesas fictícias em reais"
                />
              </div>
            </label>
            <div className="sm:col-span-2">
              <p className="text-[11px] text-white/35">Prefere testar com um exemplo pronto?</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button type="button" onClick={() => { setIncome("5000"); setExpenses("2800"); }} className="nivora-preset-button">
                  Mês tranquilo
                </button>
                <button type="button" onClick={() => { setIncome("12000"); setExpenses("7900"); }} className="nivora-preset-button">
                  Mês movimentado
                </button>
                <button type="button" onClick={resetValues} className="nivora-preset-button">
                  <RotateCcw size={12} /> Reiniciar
                </button>
              </div>
            </div>
          </div>

          <div className="nivora-balance-result" aria-live="polite">
            <span className="text-xs text-white/45">Saldo estimado no exemplo</span>
            <strong className={`mt-2 block text-3xl font-semibold tracking-[-0.05em] sm:text-4xl ${balance < 0 ? "text-amber-200" : "text-[#b5f4c8]"}`}>
              {formattedBalance}
            </strong>
            <span className="mt-3 flex items-center gap-2 text-xs text-white/45">
              <span className="nivora-status-dot" />
              Atualizado automaticamente
            </span>
            <div className="nivora-balance-line" aria-hidden="true">
              <span style={{ width: `${Math.min(100, Math.max(0, ((Number(income) || 0) > 0 ? (balance / (Number(income) || 1)) * 100 : 0)))}%` }} />
            </div>
            <p className="mt-3 text-[10px] leading-5 text-white/30">
              Simulação educativa simples: entradas menos despesas. Não representa dados da sua conta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="nivora-site min-h-screen overflow-hidden bg-[#080b09] text-white selection:bg-[#b5f4c8] selection:text-[#07110b]">
      <div className="nivora-background" aria-hidden="true">
        <div className="nivora-background-grid" />
        <div className="nivora-background-beam" />
      </div>

      <header className="nivora-header sticky top-0 z-50">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="NIVORA — início">
            <span className="nivora-logo-mark">N</span>
            <span className="text-lg font-semibold tracking-[0.2em] text-white">NIVORA</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            <a href="#experimente" className="nivora-nav-link">Experimentar</a>
            <a href="#beneficios" className="nivora-nav-link">Por que NIVORA</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="https://nivora-cyan.vercel.app/" className="nivora-login-link">Entrar</a>
            <a href="#experimente" className="nivora-button nivora-button-primary">
              Explorar agora <ArrowRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="nivora-menu-button md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="nivora-mobile-menu md:hidden" aria-label="Navegação móvel">
            <a href="#experimente" onClick={() => setMenuOpen(false)}>Experimentar</a>
            <a href="#beneficios" onClick={() => setMenuOpen(false)}>Por que NIVORA</a>
            <a href="https://nivora-cyan.vercel.app/" onClick={() => setMenuOpen(false)} className="nivora-button nivora-button-primary">
              Entrar na plataforma <ArrowRight size={15} />
            </a>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:grid-cols-[0.84fr_1.16fr] lg:gap-10 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="nivora-hero-copy relative z-10 max-w-xl">
          <div className="nivora-eyebrow">
            <Sparkles size={13} />
            Mais clareza no seu dia a dia
          </div>
          <h1 className="nivora-hero-title mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.065em] sm:text-5xl lg:text-[4.4rem]">
            Suas finanças
            <span className="nivora-title-gradient block">sem complicação.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Organize entradas, despesas e saldo do seu negócio em um só lugar. Entenda seus números e decida com mais clareza.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#experimente" className="nivora-button nivora-button-primary nivora-button-large">
              Experimentar a demonstração <ArrowRight size={17} />
            </a>
            <a href="https://nivora-cyan.vercel.app/" className="nivora-button nivora-button-secondary nivora-button-large">
              Entrar na NIVORA
            </a>
          </div>
          <div className="mt-7 flex items-center gap-3 text-xs text-white/40">
            <span className="flex -space-x-1.5">
              <span className="nivora-trust-dot">✓</span>
              <span className="nivora-trust-dot"><Wallet size={11} /></span>
            </span>
            <span>Uma visão simples para cuidar melhor do dinheiro.</span>
          </div>
        </div>

        <div className="nivora-hero-visual relative min-w-0 lg:pl-3">
          <DashboardPreview />
        </div>
      </section>

      <div className="relative z-10 border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 py-2">
            <span className="nivora-proof-icon"><Wallet size={16} /></span>
            <div>
              <p className="text-sm font-medium text-white">Entradas e despesas</p>
              <p className="mt-0.5 text-xs text-white/40">Tudo organizado em um só lugar</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-2 sm:justify-center">
            <span className="nivora-proof-icon"><TrendingUp size={16} /></span>
            <div>
              <p className="text-sm font-medium text-white">Visão do seu saldo</p>
              <p className="mt-0.5 text-xs text-white/40">Entenda o que mudou</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-2 sm:justify-end">
            <span className="nivora-proof-icon"><ShieldCheck size={16} /></span>
            <div>
              <p className="text-sm font-medium text-white">Rotina mais simples</p>
              <p className="mt-0.5 text-xs text-white/40">Menos planilhas espalhadas</p>
            </div>
          </div>
        </div>
      </div>

      <section id="experimente" className="relative z-10 mx-auto max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="nivora-section-kicker">Mexa. Teste. Entenda.</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl">
              Você no controle. <span className="text-white/45">Até na demonstração.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-white/50 lg:justify-self-end">
            Navegue pelo painel, alterne a visualização e teste números diferentes. É uma forma rápida de conhecer a proposta da NIVORA.
          </p>
        </div>
        <BalanceSimulator />
      </section>

      <section id="beneficios" className="relative z-10 border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div className="max-w-md">
              <p className="nivora-section-kicker">Menos ruído. Mais visão.</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                Financeiro organizado sem complicar sua rotina.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Uma visão mais clara ajuda você a entender a situação do negócio e pensar no próximo passo.
              </p>
              <a href="https://nivora-cyan.vercel.app/" className="nivora-text-link mt-6">
                Conhecer a plataforma <ArrowRight size={15} />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.number} className="nivora-feature-card">
                    <span className="nivora-feature-number">{feature.number}</span>
                    <span className="nivora-feature-icon"><Icon size={20} strokeWidth={1.7} /></span>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/45">{feature.description}</p>
                    <span className="nivora-feature-line" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="nivora-final-cta mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <span className="nivora-eyebrow"><Sparkles size={13} /> Dê o próximo passo</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl">
                Mais clareza começa com uma visão melhor.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
                Conheça a NIVORA e descubra uma maneira mais simples de acompanhar suas finanças.
              </p>
            </div>
            <a href="https://nivora-cyan.vercel.app/" className="nivora-button nivora-button-primary nivora-button-large">
              Acessar a NIVORA <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="#inicio" className="flex items-center gap-3" aria-label="NIVORA — voltar ao início">
            <span className="nivora-logo-mark is-small">N</span>
            <span className="text-sm font-semibold tracking-[0.2em] text-white">NIVORA</span>
          </a>
          <p className="text-xs text-white/35">Organização financeira com mais clareza.</p>
          <div className="flex flex-wrap gap-5 text-xs text-white/45">
            <a href="#experimente" className="nivora-footer-link">Experimentar</a>
            <a href="#beneficios" className="nivora-footer-link">Benefícios</a>
            <a href="https://nivora-cyan.vercel.app/" className="nivora-footer-link">Acessar plataforma</a>
          </div>
        </div>
        <div className="border-t border-white/[0.05] px-5 py-4 text-center text-[11px] text-white/25">
          © {new Date().getFullYear()} NIVORA. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
