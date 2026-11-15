import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Calculator, Binary, ArrowRight, Award, Monitor, 
  ChevronDown, BarChart3, Calendar, GraduationCap,
  Sparkles, CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { Counter } from '@/src/components/ui/Counter';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const stats = [
    { label: 'Tahun Berdiri', value: 1965 },
    { label: 'Mahasiswa Aktif', value: 1500, suffix: '+' },
    { label: 'Dosen & Pakar', value: 90 },
    { label: 'Program Studi', value: 4 },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-primary">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000" 
            alt="Mathematics and Computation UNIMED" 
            className="w-full h-full object-cover opacity-25"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/75 to-dark" />
        </motion.div>

        {/* Ambient Floating Elements */}
        <motion.div 
          animate={{ y: [0, -25, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-12 z-10 opacity-20 pointer-events-none"
        >
          <Calculator className="w-32 h-32 text-accent" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 35, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-8 z-10 opacity-15 pointer-events-none"
        >
          <Binary className="w-44 h-44 text-secondary" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-0.5 w-12 bg-accent" />
              <span className="font-mono text-accent tracking-[0.35em] text-xs uppercase font-bold">
                Fakultas MIPA · Universitas Negeri Medan
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Jurusan <span className="italic font-normal text-accent underline decoration-accent/30 underline-offset-8">Matematika</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-white/85 font-serif-alt italic mb-12 max-w-2xl leading-relaxed"
            >
              Membangun fondasi logika, sains komputasi terdepan, dan keunggulan analisis data untuk melahirkan generasi pemikir masa depan bangsa.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <Link 
                to="/contact" 
                className="px-9 py-4 bg-accent text-primary font-bold rounded-full hover:bg-accent-light transition-all flex items-center gap-3 group shadow-xl hover:scale-105 active:scale-95 text-sm"
              >
                Kenali Kami
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/programs" 
                className="px-9 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all hover:scale-105 active:scale-95 text-sm backdrop-blur-sm"
              >
                Program Studi
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
          onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/60 text-[10px] font-mono tracking-[0.25em] uppercase font-bold">Eksplorasi</span>
          <ChevronDown className="text-accent w-5 h-5" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section id="stats" className="bg-primary py-12 relative z-30 border-y border-accent/20 shadow-md">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4">
                <span className="text-4xl md:text-5xl font-display font-bold text-accent mb-1.5">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-white/70 font-mono text-xs uppercase tracking-widest font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informasi Jurusan Section */}
      <section className="py-24 bg-neutral overflow-hidden relative">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Tentang Jurusan Matematika" 
            subtitle="Pusat keunggulan pendidikan, riset matematika murni & terapan, kecerdasan buatan, dan sains data di Universitas Negeri Medan."
          />
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <div className="flex-1 space-y-8">
              <h3 className="text-3xl md:text-5xl font-display font-bold text-primary italic leading-tight">
                Mengapa Memilih <span className="text-accent underline decoration-accent/40">FMIPA UNIMED?</span>
              </h3>
              
              <div className="space-y-6 text-primary/80 leading-relaxed text-base md:text-lg font-serif-alt">
                <p>
                  Jurusan Matematika FMIPA UNIMED memadukan tradisi ketelitian berpikir analitis sejak 1965 dengan kemajuan pesat era kecerdasan artifisial dan big data. Kami membina mahasiswa untuk tidak hanya menguasai rumus, tetapi menjadi pemecah masalah tangguh di level nasional maupun global.
                </p>
                <p>
                  Dengan bimbingan profesor dan dosen bergelar doktor lulusan perguruan tinggi terkemuka dalam dan luar negeri, kurikulum kami berorientasi pada standar Outcome-Based Education (OBE) dan kebutuhan industri teknologi terkini.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
                <div className="p-5 bg-white rounded-2xl border border-primary/5 shadow-sm">
                  <div className="flex items-center gap-2 mb-1.5 text-accent">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="font-bold text-primary text-sm">Pendidikan Berbasis Logika</h4>
                  </div>
                  <p className="text-xs text-primary/70 leading-relaxed">Menumbuhkan daya kritis, penalaran matematis, dan pemikiran komputasional tingkat tinggi.</p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-primary/5 shadow-sm">
                  <div className="flex items-center gap-2 mb-1.5 text-accent">
                    <CheckCircle2 className="w-4 h-4" />
                    <h4 className="font-bold text-primary text-sm">Riset Terapan Berdampak</h4>
                  </div>
                  <p className="text-xs text-primary/70 leading-relaxed">Fokus pada penerapan pemodelan matematika, komputasi awan, dan data science untuk solusi nyata.</p>
                </div>
              </div>

              <Link 
                to="/profil/sejarah" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-all group shadow-md text-sm"
              >
                Pelajari Sejarah Kami
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-primary/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1000" 
                  alt="Mathematics Lecture and Research" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="font-mono text-accent text-xs uppercase tracking-widest mb-1 block font-bold">Akreditasi Unggul</span>
                  <p className="font-display font-bold text-xl italic">Lingkungan Belajar Riset & Kolaborasi Terpadu</p>
                </div>
              </motion.div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-accent/10 blob" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Program Studi Section */}
      <section className="py-24 bg-light relative overflow-hidden border-y border-primary/5">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="4 Program Studi Pilihan" 
            subtitle="Temukan jalur akademik yang selaras dengan aspirasi karir Anda di Jurusan Matematika FMIPA UNIMED." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Pendidikan Matematika', 
                badge: 'Jenjang S1',
                desc: 'Mencetak guru matematika profesional, inovator kurikulum, dan pengembang teknologi pembelajaran berwawasan global.', 
                link: '/programs/pendidikan-matematika', 
                icon: GraduationCap,
              },
              { 
                title: 'Matematika', 
                badge: 'Jenjang S1',
                desc: 'Mengeksplorasi keindahan struktur analitis, aljabar, kalkulus lanjut, dan pemodelan matematis untuk riset dan industri.', 
                link: '/programs/matematika', 
                icon: Calculator,
              },
              { 
                title: 'Ilmu Komputer', 
                badge: 'Jenjang S1',
                desc: 'Kuasai rekayasa perangkat lunak, arsitektur sistem, algoritma cerdas, dan kecerdasan buatan (Artificial Intelligence).', 
                link: '/programs/ilmu-komputer', 
                icon: Monitor,
              },
              { 
                title: 'Statistika', 
                badge: 'Jenjang S1',
                desc: 'Keahlian komputasi data, peramalan tren deret waktu, inferensi statistik, dan analitika big data untuk era digital.', 
                link: '/programs/statistika', 
                icon: BarChart3,
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-primary/10 shadow-sm hover:shadow-2xl hover:border-accent/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-light flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase bg-accent/15 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-primary/70 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <Link 
                  to={item.link} 
                  className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors pt-4 border-t border-light"
                >
                  Pelajari Kurikulum
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-primary p-10 md:p-12 rounded-[3.5rem] text-white flex flex-col justify-between relative overflow-hidden group shadow-xl">
               <div className="relative z-10">
                 <span className="text-accent text-xs font-mono font-bold uppercase tracking-[0.3em] mb-4 block">
                   Kurikulum Terpadu
                 </span>
                 <h3 className="text-2xl md:text-4xl font-display font-bold italic mb-6 leading-tight">
                   Raih Masa Depan Gemilang di 4 Program Studi Unggulan.
                 </h3>
                 <Link 
                   to="/programs" 
                   className="inline-flex items-center gap-3 text-white border-b-2 border-accent pb-1 font-bold text-sm hover:text-accent transition-colors"
                 >
                   Bandingkan 4 Program Studi
                   <ArrowRight className="w-4 h-4 text-accent" />
                 </Link>
               </div>
               <div className="absolute right-0 bottom-0 w-60 h-60 opacity-10 group-hover:scale-110 transition-transform">
                 <GraduationCap className="w-full h-full text-accent" />
               </div>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-primary/10 shadow-sm flex flex-col justify-between group">
               <div>
                 <span className="text-accent text-xs font-mono font-bold uppercase tracking-[0.3em] mb-4 block">
                   Publikasi & Karya
                 </span>
                 <h3 className="text-2xl md:text-4xl font-display font-bold text-primary italic mb-6 leading-tight">
                   Jelajahi Riset Terkini, Jurnal Terindeks, & Prestasi Ilmiah.
                 </h3>
                 <Link 
                   to="/publikasi" 
                   className="inline-flex items-center gap-3 text-primary font-bold hover:text-accent transition-colors text-sm"
                 >
                   Telusuri Jurnal & Publikasi
                   <ArrowRight className="w-4 h-4 text-accent" />
                 </Link>
               </div>
               <div className="flex gap-3 mt-8">
                  <div className="h-2 w-12 bg-accent rounded-full" />
                  <div className="h-2 w-4 bg-primary/20 rounded-full" />
                  <div className="h-2 w-4 bg-primary/20 rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature: Bidang Fokus */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Bidang Fokus Keilmuan" 
            subtitle="Konsentrasi keilmuan yang dapat didalami mahasiswa untuk memperkuat kompetensi di dunia riset maupun industri." 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {[
                { 
                  title: 'Aljabar & Analisis Matematis', 
                  desc: 'Mempelajari struktur aljabar modern, teori bilangan, analisis riil, dan teori fungsional untuk riset mendalam.', 
                  icon: Calculator 
                },
                { 
                  title: 'Komputasi & Kecerdasan Buatan', 
                  desc: 'Pengembangan algoritma komputasi, machine learning, computer vision, dan rekayasa kecerdasan artifisial.', 
                  icon: Binary 
                },
                { 
                  title: 'Statistika Terapan & Data Science', 
                  desc: 'Pemodelan probabilistik, inferensi Bayesian, analisis multivariat, dan pengolahan big data industri.', 
                  icon: BarChart3 
                },
                { 
                  title: 'Pendidikan Matematika Inovatif', 
                  desc: 'Metodologi pedagogi digital, Realistic Mathematics Education, dan asesmen numerasi modern abad 21.', 
                  icon: GraduationCap 
                },
              ].map((focus, i) => (
                <motion.div 
                  key={i}
                  onMouseEnter={() => setActiveTab(i)}
                  className={cn(
                    "p-7 rounded-[2rem] border-2 transition-all cursor-pointer flex items-center gap-6",
                    activeTab === i 
                      ? "bg-light border-accent shadow-lg shadow-accent/10" 
                      : "bg-white border-transparent hover:border-light hover:bg-neutral/40"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl transition-colors shrink-0", 
                    activeTab === i ? "bg-accent text-primary shadow-md" : "bg-neutral text-primary/50"
                  )}>
                    <focus.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-primary mb-1">{focus.title}</h4>
                    <p className="text-primary/70 text-xs md:text-sm leading-relaxed">{focus.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl relative border border-primary/10"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1635070041078-e363dbe005cb',
                      '1518770660439-4636190af475',
                      '1551288049-bebda4e38f71',
                      '1509228468518-180dd4864904'
                    ][activeTab]}?auto=format&fit=crop&q=80&w=1000`} 
                    className="w-full h-full object-cover"
                    alt="Bidang Fokus"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent flex items-end p-10">
                    <div>
                      <span className="font-mono text-accent text-xs uppercase tracking-widest mb-1.5 block font-bold">
                        Pusat Unggulan Riset
                      </span>
                      <h5 className="text-2xl font-display font-bold text-white">
                        Laboratorium & Fasilitas Riset Berstandar Tinggi
                      </h5>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute -z-10 -top-8 -right-8 w-full h-full bg-light blob" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-24 bg-neutral border-y border-primary/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <SectionHeading 
              title="Laboratorium & Fasilitas" 
              subtitle="Sarana pembelajaran, komputasi berkecepatan tinggi, dan ruang riset kolaboratif antara dosen dan mahasiswa." 
            />
            <Link 
              to="/lab/sarana" 
              className="group flex items-center gap-2 text-primary font-bold text-sm shrink-0 hover:text-accent transition-colors"
            >
              Lihat Fasilitas Lengkap
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-accent" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Lab Komputasi & AI', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800' },
              { name: 'Lab Statistika & Data', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
              { name: 'Smart Classroom', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },
              { name: 'Ruang Baca Digital', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800' },
            ].map((fac, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="group relative h-96 overflow-hidden rounded-[2.5rem] bg-dark shadow-md"
              >
                <img 
                  src={fac.img} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                  alt={fac.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{fac.name}</h3>
                  <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News/Activities Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading 
            title="Kegiatan & Berita Terkini" 
            subtitle="Ikuti dinamika kehidupan akademik, kompetisi, dan prestasi di lingkungan Jurusan Matematika UNIMED." 
            light 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                tag: 'Prestasi', 
                title: 'Tim Mahasiswa Juara 1 Olimpiade Matematika dan Informatika Nasional 2026', 
                date: '12 Mei 2026', 
                img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800' 
              },
              { 
                tag: 'Seminar', 
                title: 'Seminar Internasional: Peran Data Science dan AI dalam Transformasi Digital Bangsa', 
                date: '08 Mei 2026', 
                img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800' 
              },
              { 
                tag: 'Hackathon', 
                title: 'Mahasiswa Ilmu Komputer Raih Best Prototype pada Hackathon Sumatera Digital', 
                date: '02 Mei 2026', 
                img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' 
              },
            ].map((news, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 hover:border-accent/30 transition-all group shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={news.img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                    alt={news.title} 
                  />
                </div>
                <div className="p-8">
                  <span className="text-accent text-xs font-mono font-bold tracking-widest mb-3 block uppercase">
                    {news.tag}
                  </span>
                  <h4 className="text-xl font-display font-bold mb-6 italic leading-snug group-hover:text-accent transition-colors">
                    "{news.title}"
                  </h4>
                  <div className="flex justify-between items-center text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{news.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Prestisius & Anggun */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-dark text-white relative overflow-hidden border-t border-accent/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <span className="text-accent text-xs font-mono font-bold uppercase tracking-[0.35em] block">
              Penerimaan Mahasiswa Baru
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold italic leading-tight text-white">
              Siap Mengukir Prestasi Bersama <span className="text-accent underline decoration-accent/40">Jurusan Matematika?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-serif-alt italic max-w-2xl mx-auto leading-relaxed">
              Bergabunglah bersama kami di FMIPA Universitas Negeri Medan dan wujudkan potensi Anda dalam sains, komputasi, dan analisis data modern.
            </p>
            <div className="flex flex-wrap justify-center gap-5 pt-4">
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-accent text-primary font-bold rounded-full hover:bg-accent-light transition-all shadow-2xl hover:scale-105 active:scale-95 text-sm"
              >
                Hubungi Kami Sekarang
              </Link>
              <Link 
                to="/programs" 
                className="px-10 py-5 border-2 border-accent/60 text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all hover:scale-105 active:scale-95 text-sm backdrop-blur-sm"
              >
                Lihat 4 Program Studi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
