import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MapPin, Clock, Instagram, MessageCircle, Star, Menu, X,
  Sparkles, Smile, Wrench, Shield, Heart, GraduationCap,
  Award, Users, Cpu, HandHeart, CreditCard, Gem, MapPinned, Stethoscope,
  ChevronDown, Crown, Syringe, Baby, Brush, CalendarCheck, Sun,
} from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import draRaquel from "@/assets/dra-raquel.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicRoom from "@/assets/clinic-room.jpg";
import caseImplantes from "@/assets/case-implantes.jpg";
import caseClareamento from "@/assets/case-clareamento.jpg";
import caseProtese from "@/assets/case-protese.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/5561991812350?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20HS%20Odonto.";
const PHONE_DISPLAY = "(61) 99181-2350";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Diferenciais", "#diferenciais"],
    ["Sobre", "#sobre"],
    ["Doutora", "#doutora"],
    ["Tratamentos", "#tratamentos"],
    ["Resultados", "#resultados"],
    ["Contato", "#contato"],
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoIcon} alt="HS Odonto" className="h-10 w-10 object-contain" />
          <span className="text-white font-serif text-xl tracking-wide">HS <span className="text-gradient-gold">Odonto</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-white/80 hover:text-gold text-sm transition">{l}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-gradient-gold text-navy-deep font-medium px-5 py-2.5 rounded-full text-sm shadow-gold hover:scale-105 transition">Agendar</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-white/80 py-2">{l}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-gradient-gold text-navy-deep text-center font-medium px-5 py-3 rounded-full">Agendar</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pattern-navy relative overflow-hidden min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="reveal text-white">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}</div>
            <span className="text-sm text-white/80">Avaliação 5.0 no Google</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            O sorriso que você merece com a <span className="text-gradient-gold">excelência</span> que você procura.
          </h1>
          <p className="text-white/75 text-lg mb-8 max-w-xl">
            Reabilitação oral, lentes de contato dental e estética avançada com tecnologia de ponta e atendimento humanizado em Brasília.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-gradient-gold text-navy-deep font-semibold px-8 py-4 rounded-full shadow-gold hover:scale-105 transition inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Quero meu sorriso novo
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="text-white border border-white/20 hover:border-gold hover:text-gold px-6 py-4 rounded-full transition inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {[
              ["+10", "Anos de experiência"],
              ["+2 mil", "Pacientes satisfeitos"],
              ["100%", "Tecnologia de ponta"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl md:text-3xl font-serif text-gradient-gold">{n}</div>
                <div className="text-xs md:text-sm text-white/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative">
          <div className="absolute inset-0 bg-gradient-gold rounded-[3rem] blur-2xl opacity-30 animate-float" />
          <div className="relative rounded-[3rem] overflow-hidden border-4 border-gold/40 shadow-gold">
            <img src={draRaquel} alt="Dra. da HS Odonto" className="w-full h-[520px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-soft hidden md:flex items-center gap-3">
            <div className="bg-gradient-gold p-3 rounded-full"><Smile className="w-6 h-6 text-navy-deep" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Sorrisos transformados</div>
              <div className="font-semibold text-navy">+2.000 casos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    { icon: Gem, t: "Implantes", d: "Reabilitação completa com implantes de titânio premium." },
    { icon: Sparkles, t: "Lentes de Contato", d: "Sorriso harmônico com facetas ultrafinas." },
    { icon: Smile, t: "Ortodontia", d: "Aparelhos fixos, autoligados e alinhadores invisíveis." },
    { icon: Shield, t: "Prevenção", d: "Limpeza, profilaxia e acompanhamento periódico." },
    { icon: Wrench, t: "Próteses", d: "Próteses fixas, removíveis e protocolos sobre implante." },
    { icon: Heart, t: "Estética", d: "Clareamento, harmonização e design do sorriso." },
  ];
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4">Tudo o que você precisa em <span className="text-gradient-gold">um só lugar</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Uma estrutura completa para cuidar do seu sorriso do diagnóstico ao acabamento estético.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="reveal bg-card border border-border rounded-2xl p-8 shadow-soft hover:-translate-y-2 hover:shadow-gold transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-xl font-serif text-navy mb-2">{t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative h-[520px]">
          <img src={clinicInterior} alt="Recepção da clínica" className="absolute top-0 left-0 w-3/4 h-80 object-cover rounded-3xl shadow-soft" loading="lazy" />
          <img src={clinicRoom} alt="Consultório moderno" className="absolute bottom-0 right-0 w-3/4 h-80 object-cover rounded-3xl shadow-gold border-4 border-background" loading="lazy" />
        </div>
        <div className="reveal">
          <span className="text-gold uppercase tracking-widest text-sm font-medium">A Experiência HS</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mt-3 mb-6">Uma nova era em odontologia de <span className="text-gradient-gold">alto padrão</span> em Brasília</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Cada detalhe da HS Odonto foi desenhado para oferecer uma experiência de cuidado, conforto e resultado. Da recepção acolhedora aos consultórios equipados com tecnologia de última geração.</p>
          <p className="text-muted-foreground leading-relaxed mb-8">Nosso compromisso é entregar tratamentos previsíveis, naturais e duradouros — com a sofisticação que o seu sorriso merece.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full hover:bg-navy-deep transition">
            Conhecer a clínica <Sparkles className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doutora" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="reveal lg:col-span-2 relative">
          <div className="absolute inset-0 bg-gradient-gold rounded-3xl rotate-3 opacity-20" />
          <img src={draRaquel} alt="Dra. da HS Odonto" className="relative rounded-3xl shadow-gold w-full h-[560px] object-cover" loading="lazy" />
        </div>
        <div className="reveal lg:col-span-3">
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Autoridade</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mt-3 mb-6">Conheça a <span className="text-gradient-gold">Dra. responsável</span></h2>
          <p className="text-2xl font-serif text-navy mb-2">Dra. <span className="text-gradient-gold">Hodslayne Santos</span></p>
          <p className="text-muted-foreground leading-relaxed mb-4">À frente da HS Odonto, a Dra. Hodslayne Santos une formação técnica de excelência e uma paixão genuína por transformar sorrisos. Sua trajetória é marcada por especializações em reabilitação oral, estética avançada e implantodontia.</p>
          <p className="text-muted-foreground leading-relaxed mb-8">Mais do que tratar dentes, ela acolhe pessoas — entendendo cada história e construindo planos personalizados para cada sorriso.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: GraduationCap, t: "Especialista" },
              { icon: Award, t: "Pós-graduada" },
              { icon: Heart, t: "Humanizada" },
            ].map(({ icon: I, t }) => (
              <div key={t} className="bg-secondary/60 rounded-2xl p-5 flex items-center gap-3">
                <I className="w-6 h-6 text-gold" />
                <span className="font-medium text-navy text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  const cats = [
    {
      id: "estetica",
      label: "Estética",
      items: [
      [Sparkles, "Lentes de Contato Dental", "Facetas ultrafinas para um sorriso harmônico."],
      [Sun, "Clareamento Dental", "Dentes mais brancos com técnicas seguras."],
      [Smile, "Design do Sorriso", "Planejamento digital personalizado."],
      [Heart, "Harmonização Orofacial", "Equilíbrio entre sorriso e expressão."],
      ],
    },
    {
      id: "reabilitacao",
      label: "Reabilitação",
      items: [
      [Gem, "Implantes Dentários", "Substituição de dentes com implantes premium."],
      [Crown, "Próteses Fixas", "Coroas e pontes em zircônia e porcelana."],
      [Wrench, "Protocolo sobre Implantes", "Reabilitação completa em poucos dias."],
      [Syringe, "Endodontia", "Tratamento de canal com tecnologia avançada."],
      ],
    },
    {
      id: "prevencao",
      label: "Prevenção",
      items: [
      [Brush, "Limpeza Profissional", "Remoção de placa, tártaro e manchas."],
      [Shield, "Periodontia", "Saúde da gengiva e estruturas de suporte."],
      [Baby, "Odontopediatria", "Cuidado especial para os pequenos."],
      [CalendarCheck, "Check-up Periódico", "Acompanhamento para sorrisos saudáveis."],
      ],
    },
  ] as const;
  const [cat, setCat] = useState<(typeof cats)[number]["id"]>("estetica");
  const activeCategory = cats.find((category) => category.id === cat) ?? cats[0];
  return (
    <section id="tratamentos" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4">Tratamentos pensados para <span className="text-gradient-gold">cada necessidade</span></h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {cats.map(({ id, label }) => (
              <button type="button" key={id} onClick={() => setCat(id)} className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${cat === id ? "bg-gradient-gold text-navy-deep shadow-gold" : "bg-card text-navy border border-border hover:border-gold"}`}>{label}</button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {activeCategory.items.map(([Icon, t, d], i) => (
            <div key={`${activeCategory.id}-${t}`} className="animate-fade-in bg-card border border-border rounded-2xl p-6 flex gap-4 hover:border-gold transition" style={{ animationDelay: `${i * 60}ms` }}>
              <Icon className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-navy text-lg mb-1">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const cases = [
    { img: caseImplantes, t: "Protocolo sobre Implantes", d: "Reabilitação total superior e inferior." },
    { img: caseProtese, t: "Reabilitação Estética", d: "Recuperação da função e do sorriso." },
    { img: caseClareamento, t: "Clareamento Dental", d: "Brilho natural com técnica segura." },
  ];
  return (
    <section id="resultados" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4">Transformações que <span className="text-gradient-gold">falam por si só</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Casos reais de pacientes que recuperaram autoestima e qualidade de vida.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ img, t, d }, i) => (
            <div key={t} className="reveal group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-gold transition" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="aspect-square overflow-hidden">
                <img src={img} alt={t} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-gold">Antes & Depois</span>
                <h3 className="font-serif text-navy text-xl mt-2 mb-1">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Como funciona a primeira avaliação?", a: "Na primeira consulta realizamos uma anamnese detalhada, exame clínico e, quando necessário, exames de imagem. Em seguida apresentamos um plano de tratamento personalizado, com etapas, prazos e investimento." },
    { q: "Quais formas de pagamento vocês aceitam?", a: "Trabalhamos com Pix, dinheiro, cartões de crédito e débito, além de planos parcelados especiais para tratamentos estéticos e reabilitações completas." },
    { q: "Quanto tempo dura uma lente de contato dental?", a: "Com os cuidados adequados, as lentes de contato dental podem durar mais de 10 anos, mantendo a estética e a função." },
    { q: "O implante dentário dói?", a: "Não. O procedimento é feito com anestesia local e protocolos de conforto. A maioria dos pacientes relata pós-operatório tranquilo, com analgésicos comuns." },
    { q: "Atendem convênios odontológicos?", a: "Atualmente trabalhamos exclusivamente como clínica particular, garantindo atendimento personalizado, materiais premium e tempo dedicado a cada paciente." },
    { q: "Onde a clínica está localizada?", a: "Estamos no AR 9, Sala 102, Sobradinho II — Brasília-DF, com fácil acesso e estacionamento na região." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 pattern-navy">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Perguntas frequentes</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-3 mb-4">Tire suas <span className="text-gradient-gold">dúvidas</span></h2>
          <p className="text-white/70">Respostas para as perguntas que mais recebemos antes da primeira consulta.</p>
        </div>
        <div className="reveal space-y-4">
          {items.map((it, k) => {
            const isOpen = open === k;
            return (
              <div key={k} className={`bg-white/5 backdrop-blur border rounded-2xl overflow-hidden transition ${isOpen ? "border-gold" : "border-white/10"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : k)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 text-white hover:text-gold transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl">{it.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-gold" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-white/75 leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Checklist() {
  const items = [
    { i: HandHeart, t: "Atendimento Humanizado" },
    { i: Cpu, t: "Tecnologia de Ponta" },
    { i: MapPinned, t: "Localização Privilegiada" },
    { i: CreditCard, t: "Flexibilidade de Pagamento" },
    { i: Gem, t: "Materiais Premium" },
    { i: Users, t: "Profissionais Especializados" },
    { i: Shield, t: "Ambiente Seguro e Esterilizado" },
    { i: Award, t: "Resultados Comprovados" },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4">O que nos <span className="text-gradient-gold">faz diferentes</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ i: I, t }, k) => (
            <div key={t} className="reveal bg-card border border-border rounded-2xl p-6 text-center hover:-translate-y-1 hover:border-gold transition" style={{ transitionDelay: `${k * 50}ms` }}>
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                <I className="w-6 h-6 text-navy-deep" />
              </div>
              <h3 className="text-navy font-medium text-sm">{t}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 pattern-navy relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-6 text-center relative reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Sua avaliação na <span className="text-gradient-gold">HS Odonto</span> está esperando</h2>
        <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">Agende uma consulta e descubra um plano de tratamento exclusivo, pensado para o seu sorriso e seu estilo de vida.</p>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-gold text-navy-deep font-semibold px-10 py-5 rounded-full shadow-gold hover:scale-105 transition text-lg">
          <Sparkles className="w-5 h-5" /> Agendar minha avaliação
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div className="reveal">
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Contato</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mt-3 mb-8">Venha nos <span className="text-gradient-gold">visitar</span></h2>
          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-gold p-3 rounded-xl"><Phone className="w-5 h-5 text-navy-deep" /></div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider">Telefone / WhatsApp</div>
                <a href={WHATSAPP} className="text-navy font-medium hover:text-gold">{PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-gold p-3 rounded-xl"><MapPin className="w-5 h-5 text-navy-deep" /></div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider">Endereço</div>
                <div className="text-navy font-medium">AR 9 Sala 102 — Sobradinho II<br />Brasília-DF, 73062-001</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-gold p-3 rounded-xl"><Clock className="w-5 h-5 text-navy-deep" /></div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider">Horário</div>
                <div className="text-navy font-medium">Seg a Sex: 8h às 19h<br />Sáb: 8h às 13h</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-gold p-3 rounded-xl"><Instagram className="w-5 h-5 text-navy-deep" /></div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wider">Instagram</div>
                <a href="https://www.instagram.com/hsodonto_df/" target="_blank" rel="noopener" className="text-navy font-medium hover:text-gold">@hsodonto_df</a>
              </div>
            </div>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-gold text-navy-deep font-semibold px-8 py-4 rounded-full shadow-gold hover:scale-105 transition">
            <MessageCircle className="w-5 h-5" /> Agendar pelo WhatsApp
          </a>
        </div>
        <div className="reveal rounded-3xl overflow-hidden shadow-soft border border-border min-h-[400px]">
          <iframe
            title="HS Odonto no mapa"
            src="https://www.google.com/maps?q=AR+9+Sala+102+Sobradinho+II+Bras%C3%ADlia+DF&output=embed"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pattern-navy text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logoIcon} alt="HS Odonto" className="h-12 w-12" />
            <span className="text-white font-serif text-2xl">HS <span className="text-gradient-gold">Odonto</span></span>
          </div>
          <p className="text-sm max-w-sm">Odontologia de alto padrão em Brasília. Reabilitação oral, estética e cuidado humano em cada sorriso.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#diferenciais" className="hover:text-gold">Diferenciais</a></li>
            <li><a href="#sobre" className="hover:text-gold">Sobre</a></li>
            <li><a href="#tratamentos" className="hover:text-gold">Tratamentos</a></li>
            <li><a href="#contato" className="hover:text-gold">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li>{PHONE_DISPLAY}</li>
            <li>Sobradinho II — Brasília-DF</li>
            <li><a href="https://www.instagram.com/hsodonto_df/" target="_blank" rel="noopener" className="hover:text-gold">@hsodonto_df</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center text-xs">
        <div>© {new Date().getFullYear()} HS Odonto. Todos os direitos reservados.</div>
        <div>Feito por <a href="https://rssites.com.br/" target="_blank" rel="noopener" className="text-gradient-gold font-medium hover:underline">Rs Sites</a></div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 bg-gradient-gold text-navy-deep p-4 rounded-full shadow-gold hover:scale-110 transition animate-float">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Differentials />
      <About />
      <Doctor />
      <Treatments />
      <Results />
      <FAQ />
      <Checklist />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWhats />
    </div>
  );
}
