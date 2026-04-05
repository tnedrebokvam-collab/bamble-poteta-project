import { useState, useEffect } from 'react';
import { MapPin, Phone, Star, Clock, Utensils, Menu, X, Info, Navigation, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] font-sans selection:bg-orange-500/30">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 pt-6`}>
        <div className={`max-w-7xl mx-auto rounded-full transition-all duration-500 flex justify-between items-center px-6 md:px-8 py-4 ${isScrolled ? 'glass-panel bg-[#050505]/80' : 'bg-transparent'}`}>
          <div className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
            <Utensils className="w-6 h-6 text-orange-500" />
            Bamblepoteta
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
            {['info', 'meny', 'galleri', 'praktisk'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="hover:text-white transition-colors uppercase tracking-wider text-xs">
                {item}
              </button>
            ))}
            <a href="tel:+4792179946" className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-colors flex items-center gap-2 font-semibold">
              <Phone className="w-4 h-4" />
              92 17 99 46
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 glass-panel bg-[#050505]/95 rounded-3xl p-6 flex flex-col gap-4"
          >
            {['info', 'meny', 'galleri', 'praktisk'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-left font-medium p-2 text-slate-300 uppercase tracking-wider text-sm hover:text-white">
                {item}
              </button>
            ))}
            <a href="tel:+4792179946" className="bg-orange-500 text-white px-5 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 mt-4">
              <Phone className="w-5 h-5" />
              Ring 92 17 99 46
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src="https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_1200_1200_s_f/0000/teav/2025/2/19/14/Bamblepoteta%2B%252817%2529.jpg?chk=373D1A" 
            alt="Bamblepoteta matvogn" 
            className="w-full h-full object-cover opacity-60 mix-blend-lighten"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-slate-300 uppercase">Takeaway-restaurant</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center justify-center text-5xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-display font-black tracking-tighter mb-6 leading-none w-full"
          >
            <span className="bg-gradient-to-b from-amber-200 via-orange-400 to-orange-600 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              BAMBLE
            </span>
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mx-2 md:mx-3 my-2 md:my-0 text-orange-500 flex items-center justify-center origin-left"
            >
              <motion.svg 
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" 
                className="w-12 md:w-20 lg:w-24 h-auto drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
              >
                <path d="M5 15 Q 22.5 0 40 15 T 75 15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.div>
            <span className="bg-gradient-to-b from-orange-400 via-red-500 to-rose-600 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(244,63,94,0.3)]">
              POTETA
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            En hyggelig takeaway-matvogn lokalisert ved Europris Grasmyr i Stathelle. Ekte matglede, servert varmt.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="tel:+4792179946" className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
              <span className="relative z-10 group-hover:text-white transition-colors">Bestill nå</span>
            </a>
            <button onClick={() => scrollTo('praktisk')} className="group px-8 py-4 glass-panel rounded-full font-medium text-lg text-white flex items-center gap-3 transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Finn oss</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="info" className="relative z-20 -mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Star, title: "Kundeanmeldelser", value: "5,0", sub: "av 5 (22 vurderinger)", link: "https://www.google.com/maps/place/Bamblepoteta/@59.0301373,9.7042569,15z/data=!4m17!1m8!3m7!1s0x4646e177d3bc6e59:0x39376e437739a26f!2sBamblepoteta!8m2!3d59.0301333!4d9.7045658!10e9!16s%2Fg%2F11pf5pbd78!3m7!1s0x4646e177d3bc6e59:0x39376e437739a26f!8m2!3d59.0301333!4d9.7045658!9m1!1b1!16s%2Fg%2F11pf5pbd78?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" },
            { icon: Utensils, title: "Prisnivå", value: "100–200 kr", sub: "Per person" },
            { icon: Info, title: "Konsept", value: "Matvogn", sub: "Takeaway-restaurant" }
          ].map((stat, i) => {
            const CardWrapper = stat.link ? motion.a : motion.div;
            return (
              <CardWrapper 
                key={i}
                href={stat.link}
                target={stat.link ? "_blank" : undefined}
                rel={stat.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`glass-panel p-8 rounded-3xl flex flex-col items-start relative overflow-hidden group ${stat.link ? 'hover:scale-105 hover:bg-white/[0.04] transition-all cursor-pointer' : ''}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-500"></div>
                <stat.icon className="w-8 h-8 text-orange-500 mb-6" />
                <h3 className="text-slate-400 font-medium mb-2 flex items-center gap-2">
                  {stat.title}
                  {stat.link && <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500" />}
                </h3>
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <p className="text-sm text-slate-500">{stat.sub}</p>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galleri" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Autentisk <span className="text-gradient-accent">Smak</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-xl font-light">
            Ta en titt på matvognen vår og de deilige rettene vi serverer. Ekte håndverk, laget med lidenskap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative group"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="overflow-hidden rounded-3xl relative z-10 border border-white/5">
              <img 
                src="https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_1200_1200_s_f/0000/teav/2025/2/19/14/Bamblepoteta%2B%252817%2529.jpg?chk=373D1A" 
                alt="Bamblepoteta matvogn" 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative group md:mt-32"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="overflow-hidden rounded-3xl relative z-10 border border-white/5">
              <img 
                src="https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_1200_1200_s_f/0000/teav/2025/2/19/13/Bamblepoteta%2B(4)_3.jpg?chk=A6AC65" 
                alt="Bamblepoteta mat" 
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="meny" className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Vår <span className="text-gradient-accent">Meny</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Nystekte, rykende varme poteter med rause porsjoner av deilig tilbehør. Ekte matglede!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {/* Menu Category 1 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-2xl font-display font-bold text-white">Signaturpoteter</h3>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>
            
            {[
              { name: "Bamble-Spesial", desc: "Vår bestselger! Langtidstekt pulled pork, hjemmelaget coleslaw, BBQ-saus, syltet rødløk og et dryss med fersk persille.", price: "179,-" },
              { name: "Skagen-drøm", desc: "Klassisk og frisk. Fylt med rikelig av vår egen skagenrøre, toppet med fersk dill, sitronbåt og kvernet pepper.", price: "169,-" },
              { name: "Taco-Fiesta", desc: "Krydret tacokjøtt, rømme, chunky salsa, revet ost, mais, jalapeños og knuste nachochips.", price: "159,-" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-panel p-6 md:p-8 rounded-3xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex justify-between items-baseline mb-3 gap-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{item.name}</h4>
                  <div className="border-b border-dashed border-white/20 flex-1 mx-2 relative top-[-6px]"></div>
                  <span className="text-xl font-display font-bold text-orange-500 shrink-0">{item.price}</span>
                </div>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Menu Category 2 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-2xl font-display font-bold text-white">Klassikere & Annet</h3>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>
            
            {[
              { name: "Den Klassiske", desc: "Det enkle er ofte det beste. Rikelig med kryddersmør, seterrømme, revet ost, sprøstekt bacon og mais.", price: "149,-" },
              { name: "Vegetar-poteta", desc: "Kryddersmør, rømme, ost, mais, sorte bønner, fersk paprika og en dæsj mild salsa.", price: "139,-" },
              { name: "Barnepotet", desc: "En litt mindre potet tilpasset barnemagen. Serveres med smør, mild ost, skinke og mais.", price: "99,-" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-panel p-6 md:p-8 rounded-3xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex justify-between items-baseline mb-3 gap-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{item.name}</h4>
                  <div className="border-b border-dashed border-white/20 flex-1 mx-2 relative top-[-6px]"></div>
                  <span className="text-xl font-display font-bold text-orange-500 shrink-0">{item.price}</span>
                </div>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            {/* Drinks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-2 glass-panel p-6 md:p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/20"
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-orange-500" />
                Drikke & Tilbehør
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between text-slate-300">
                  <span>Mineralvann (0,5L)</span>
                  <span className="font-medium text-white">39,-</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Kildevann</span>
                  <span className="font-medium text-white">35,-</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Ekstra tilbehør (rømme, bacon, ost etc.)</span>
                  <span className="font-medium text-white">fra 15,-</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practical Info Section */}
      <section id="praktisk" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Praktisk <span className="text-gradient-accent">Info</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-panel rounded-3xl overflow-hidden relative h-[400px] lg:h-auto min-h-[400px] group"
          >
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl z-10"></div>
            <iframe 
              src="https://maps.google.com/maps?q=T%C3%B8nderveien%201,%203961%20Stathelle&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              className="absolute inset-0 dark-map transition-all duration-700 group-hover:filter-none"
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kart til Bamblepoteta"
            ></iframe>
            <div className="absolute bottom-6 left-6 z-20 glass-panel px-6 py-4 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Europris Grasmyr</p>
                <p className="text-slate-400 text-sm">Tønderveien 1, Stathelle</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {/* Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-8 rounded-3xl flex-1"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">Åpningstider</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-slate-400">Man – Tor</span>
                  <span className="text-white font-medium">14:00 – 20:00</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-slate-400">Fredag</span>
                  <span className="text-white font-medium">15:00 – 20:00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-400">Lør – Søn</span>
                  <span className="text-white font-medium">14:00 – 20:00</span>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/20"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Kontakt oss</h3>
              <p className="text-slate-400 mb-6 text-sm">Ring oss gjerne for bestilling eller andre spørsmål.</p>
              <a href="tel:+4792179946" className="group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl transition-colors">
                <span className="text-xl font-bold text-white tracking-wide">92 17 99 46</span>
                <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-3xl font-display font-black tracking-tighter text-white mb-6 flex items-center gap-3">
            <Utensils className="w-8 h-8 text-orange-500" />
            BAMBLEPOTETA
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bamblepoteta. Alle rettigheter reservert.
          </p>
        </div>
      </footer>
    </div>
  );
}
