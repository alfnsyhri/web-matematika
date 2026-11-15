import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Calculator, Monitor, BarChart3, ClipboardCheck } from 'lucide-react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { Link } from 'react-router-dom';

type ProgramKey = 'pendidikan' | 'matematika' | 'ilkom' | 'statistika';

const programDetails: Record<ProgramKey, {
  name: string;
  icon: any;
  title: string;
  description: string;
  link: string;
  stages: { sem: string; subjects: string[] }[];
}> = {
  pendidikan: {
    name: 'Pendidikan Matematika',
    icon: GraduationCap,
    title: 'Mencetak Guru & Pendidik Matematika Unggul',
    description: 'Mengintegrasikan konten matematika yang kokoh dengan metodologi pengajaran inovatif, literasi numerasi, dan media pembelajaran digital interaktif.',
    link: '/programs/pendidikan-matematika',
    stages: [
      { sem: 'Semester 1-2', subjects: ['Kalkulus Diferensial', 'Aljabar Linier Dasar', 'Dasar-Dasar Pendidikan', 'Geometri Bidang'] },
      { sem: 'Semester 3-4', subjects: ['Strategi Belajar Mengajar', 'Kalkulus Integral', 'Teori Bilangan', 'Media Pembelajaran Digital'] },
      { sem: 'Semester 5-6', subjects: ['Evaluasi Pembelajaran Matematika', 'Microteaching', 'Metodologi Penelitian Pendidikan', 'Etnomatematika'] },
      { sem: 'Semester 7-8', subjects: ['Praktik Pengalaman Lapangan (PPL)', 'KKN', 'Skripsi Pendidikan Matematika'] },
    ]
  },
  matematika: {
    name: 'Matematika Murni & Terapan',
    icon: Calculator,
    title: 'Eksplorasi Teori & Pemodelan Matematis',
    description: 'Mempersiapkan peneliti, aktuaris, dan analis kuantitatif yang menguasai analisis riil, struktur aljabar modern, dan pemodelan matematis untuk industri.',
    link: '/programs/matematika',
    stages: [
      { sem: 'Semester 1-2', subjects: ['Kalkulus Elementer', 'Aljabar Linier Elementer', 'Fisika Matematika', 'Pemrograman Dasar'] },
      { sem: 'Semester 3-4', subjects: ['Analisis Riil I', 'Struktur Aljabar I', 'Persamaan Diferensial Biasa', 'Metode Numerik'] },
      { sem: 'Semester 5-6', subjects: ['Analisis Kompleks', 'Riset Operasi & Optimasi', 'Matematika Keuangan & Aktuaria', 'Teori Graf'] },
      { sem: 'Semester 7-8', subjects: ['Magang Industri', 'Tugas Akhir / Skripsi Riset'] },
    ]
  },
  ilkom: {
    name: 'Ilmu Komputer',
    icon: Monitor,
    title: 'Menguasai Algoritma, AI & Software Engineering',
    description: 'Mencetak software engineer, data scientist, dan arsitek sistem digital yang siap memimpin revolusi teknologi kecerdasan buatan.',
    link: '/programs/ilmu-komputer',
    stages: [
      { sem: 'Semester 1-2', subjects: ['Algoritma & Pemrograman', 'Matematika Diskrit', 'Struktur Data', 'Arsitektur Komputer'] },
      { sem: 'Semester 3-4', subjects: ['Basis Data', 'Pemrograman Berorientasi Objek', 'Jaringan Komputer', 'Desain Web & UI/UX'] },
      { sem: 'Semester 5-6', subjects: ['Kecerdasan Buatan & Machine Learning', 'Rekayasa Perangkat Lunak', 'Keamanan Siber', 'Cloud Computing'] },
      { sem: 'Semester 7-8', subjects: ['Magang Industri / MBKM Tech', 'Proyek Capstone & Skripsi'] },
    ]
  },
  statistika: {
    name: 'Statistika & Data Science',
    icon: BarChart3,
    title: 'Keputusan Cerdas Berbasis Big Data & Analisis',
    description: 'Menghasilkan ahli statistika, data analyst, dan peramal risiko yang piawai mengekstraksi nilai dari data kompleks menggunakan R, Python, dan inferensi modern.',
    link: '/programs/statistika',
    stages: [
      { sem: 'Semester 1-2', subjects: ['Statistika Deskriptif', 'Kalkulus Multivariabel', 'Teori Peluang', 'Pemrograman R Dasar'] },
      { sem: 'Semester 3-4', subjects: ['Statistika Matematika', 'Analisis Regresi Terapan', 'Metode Survei Sampel', 'Eksplorasi Data dengan Python'] },
      { sem: 'Semester 5-6', subjects: ['Analisis Deret Waktu (Time Series)', 'Statistika Nonparametrik', 'Machine Learning for Statistics', 'Analisis Multivariat'] },
      { sem: 'Semester 7-8', subjects: ['Magang BPS / Lembaga Riset / Perbankan', 'Skripsi Statistika'] },
    ]
  }
};

export const Programs = () => {
  const [activeTab, setActiveTab] = useState<ProgramKey>('pendidikan');
  const activeProg = programDetails[activeTab];

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Program Pendidikan"
          subtitle="4 Program Studi Unggulan di bawah naungan Jurusan Matematika FMIPA Universitas Negeri Medan."
        />

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-20 p-2.5 bg-light rounded-[2.5rem] max-w-4xl mx-auto shadow-inner border border-primary/5">
          {(Object.keys(programDetails) as ProgramKey[]).map((key) => {
            const item = programDetails[key];
            const Icon = item.icon;
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-4 px-4 rounded-full font-bold transition-all text-xs md:text-sm flex items-center justify-center gap-2 ${isActive
                    ? 'bg-primary text-white shadow-lg border border-accent/30'
                    : 'text-primary/70 hover:text-primary hover:bg-white/50'
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-primary/60'}`} />
                <span className="truncate">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            key={activeTab + 'info'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="inline-block px-4 py-2 bg-accent/15 border border-accent/30 rounded-full text-accent font-mono text-xs uppercase tracking-widest font-bold">
              Profil & Kompetensi Lulusan
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              {activeProg.title}
            </h3>
            <p className="text-lg text-dark/75 leading-relaxed font-serif-alt italic">
              {activeProg.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Calculator, label: 'Kurikulum Terstandar OBE' },
                { icon: ClipboardCheck, label: 'Sertifikasi Keahlian Terapan' },
                { icon: BookOpen, label: 'Akses Laboratorium Modern' },
                { icon: GraduationCap, label: 'Jejaring Industri & Alumni Luas' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-neutral rounded-2xl border border-primary/5 hover:border-accent/40 transition-colors">
                  <div className="p-3 bg-white rounded-xl text-accent shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-primary text-xs md:text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to={activeProg.link}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-all shadow-md text-sm"
              >
                Kunjungi Halaman Detail Prodi
                <span className="text-accent">→</span>
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute top-0 left-6 h-full w-1 bg-light z-0 hidden lg:block" />
            <div className="space-y-10 relative z-10">
              {activeProg.stages.map((stage, i) => (
                <motion.div
                  key={activeTab + i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-[-1.1rem] top-2 w-10 h-10 bg-white rounded-full border-4 border-light flex items-center justify-center shadow-md z-20">
                    <div className="w-3.5 h-3.5 bg-accent rounded-full" />
                  </div>
                  <div className="bg-neutral p-7 rounded-[2rem] border border-primary/5 hover:border-accent/40 transition-colors">
                    <h5 className="font-mono text-accent text-xs uppercase tracking-widest mb-1.5 font-bold">{stage.sem}</h5>
                    <h4 className="text-xl font-display font-bold text-primary mb-4">Mata Kuliah Utama</h4>
                    <div className="flex flex-wrap gap-2">
                      {stage.subjects.map((s, j) => (
                        <span key={j} className="px-3.5 py-1.5 bg-white rounded-full text-xs font-semibold text-primary/80 shadow-sm border border-primary/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
