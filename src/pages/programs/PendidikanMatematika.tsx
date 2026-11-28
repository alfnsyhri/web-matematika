import { useState } from 'react';
import { ContentPage } from '../../pages/PlaceholderPage';
import { ZoomIn, X, Calendar, MapPin, Award, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

import pkmRshImg from '../../assets/pendidikan-matematika/prestasi-pkm-rsh.webp';
import doktorBudiImg from '../../assets/pendidikan-matematika/doktor-budi-siregar.webp';
import amliImg from '../../assets/pendidikan-matematika/pertemuan-amli-2025.webp';
import kunjunganLabImg from '../../assets/pendidikan-matematika/kunjungan-lab-smp.webp';
import semnasImg from '../../assets/pendidikan-matematika/semnas-matematika-2025.webp';
import aistsseImg from '../../assets/pendidikan-matematika/aistsse-2025.webp';
import webinarHmjImg from '../../assets/pendidikan-matematika/webinar-hmj-2025.webp';

interface WartaItem {
  id: string;
  title: string;
  category: 'prestasi' | 'konferensi' | 'kolaborasi';
  categoryLabel: string;
  badgeTone: string;
  date: string;
  location: string;
  summary: string;
  detail: string[];
  image: string;
  featured?: boolean;
}

export const PendidikanMatematika = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'prestasi' | 'konferensi' | 'kolaborasi'>('all');
  const [selectedItem, setSelectedItem] = useState<WartaItem | null>(null);

  const visiText = "Menjadi pusat inovasi pembelajaran dan teknologi yang unggul dibidang pendidikan matematika berstandar internasional.";

  const misiList = [
    "Menyelenggarakan pendidikan matematika yang inovatif dan adaptif untuk menghasilkan lulusan yang jujur, bertanggung jawab dan kreatif serta berdaya saing global.",
    "Mengembangkan penelitian Pendidikan Matematika yang inovatif sebagai upaya menunjang pengembangan pendidikan matematika.",
    "Mengimplementasikan hasil penelitian untuk memecahkan masalah dan meningkatkan kesejahteraan masyarakat.",
    "Mengembangkan jejaring kemitraan baik ditingkat nasional maupun internasional yang mendukung proses pembelajaran, penelitian dan publikasi karya ilmiah serta pengabdian masyarakat.",
    "Menyelenggarakan tata kelola program studi berbasis teknologi yang akuntable, fleksibel dan transparan sehingga tercipta suasana akademik yang kondusif dan berkarakter."
  ];

  const profilList = [
    {
      kode: "PL 01",
      nama: "Pendidik Matematika",
      tagline: "Teknologi Pembelajaran & Pedagogi Digital",
      deskripsi: "Lulusan yang mampu merancang, melaksanakan, dan mengevaluasi pembelajaran matematika berbasis teknologi, termasuk pengembangan media interaktif, digital assessment, dan game edukasi.",
      kompetensi: [
        "Desain pembelajaran berbasis TIK (TPACK & OBE)",
        "Pengembangan konten interaktif (LMS & multimedia)",
        "Game-based learning matematika",
        "Perancangan asesmen digital & analitik belajar",
        "Komunikasi pedagogik & etika profesi pendidik"
      ],
      karir: [
        "Guru Matematika SMP/SMA",
        "Educational Technology Specialist",
        "Digital Assessment Specialist",
        "Educational Game Developer"
      ]
    },
    {
      kode: "PL 02",
      nama: "Asisten Peneliti",
      tagline: "Inovasi Riset & Asesmen Pendidikan",
      deskripsi: "Lulusan yang mampu mendukung penelitian dan inovasi pendidikan matematika melalui perancangan studi, pengumpulan serta analisis data, dan pengembangan solusi berbasis bukti.",
      kompetensi: [
        "Metodologi riset (kuantitatif, kualitatif, mixed-method)",
        "Pengembangan instrumen evaluasi asesmen",
        "Analisis data statistik & analitik pendidikan",
        "Kajian literatur & penulisan publikasi ilmiah",
        "Pengembangan inovasi pembelajaran berbasis riset"
      ],
      karir: [
        "Mathematics Education Innovator",
        "Assessment Researcher",
        "Educational Technology Researcher",
        "Analis Kurikulum & Bahan Ajar"
      ]
    },
    {
      kode: "PL 03",
      nama: "Entrepreneur",
      tagline: "Kewirausahaan Edukasi & Platform EdTech",
      deskripsi: "Lulusan yang mampu merancang, mengembangkan, dan mengelola produk/layanan kewirausahaan pendidikan matematika, termasuk konten edukasi digital, konsultasi, dan platform belajar.",
      kompetensi: [
        "Perancangan produk & modul ajar matematika",
        "Komunikasi sains populer & konten kreatif",
        "Konsep platform EdTech (LMS & materi digital)",
        "Manajemen layanan kursus & bimbel matematika"
      ],
      karir: [
        "EdTech Startup Founder",
        "Mathematics Content Creator",
        "Educational Consultant",
        "Pengembang Platform Pembelajaran"
      ]
    }
  ];

  const wartaList: WartaItem[] = [
    {
      id: "pkm-rsh-1st",
      title: "Tim Mahasiswa Pendidikan Matematika Raih Juara 1 Nasional Skema PKM-RSH",
      category: "prestasi",
      categoryLabel: "Prestasi Mahasiswa",
      badgeTone: "bg-yellow-50 text-yellow-900 border-yellow-300",
      date: "Tahun 2025",
      location: "Direktorat Pembelajaran & Kemahasiswaan Dikti",
      summary: "Selamat kepada tim mahasiswa Program Studi S1 Pendidikan Matematika FMIPA UNIMED yang sukses menorehkan prestasi gemilang sebagai Pemenang Pertama (1st Winner) pada skema Program Kreativitas Mahasiswa Riset Sosial Humaniora (PKM-RSH).",
      detail: [
        "Ketua Tim: Rini Meilani Saragih (Pendidikan Matematika FMIPA UNIMED)",
        "Dosen Pembimbing: Fevy Rahmawati, S.Pd., M.Pd.",
        "Skema: Program Kreativitas Mahasiswa Riset Sosial Humaniora (PKM-RSH)",
        "Fokus Inovasi: Eksplorasi solusi pembelajaran numerasi berbasis kajian sosial humaniora dan konteks pendidikan lokal."
      ],
      image: pkmRshImg,
      featured: true
    },
    {
      id: "doktor-budi-siregar",
      title: "Sidang Promosi Terbuka: Dr. Budi Halomoan Siregar Raih Gelar Doktor Pendidikan Matematika",
      category: "prestasi",
      categoryLabel: "Capaian Akademik Dosen",
      badgeTone: "bg-emerald-50 text-emerald-900 border-emerald-300",
      date: "Tahun 2025",
      location: "Gedung Pascasarjana Universitas Negeri Medan",
      summary: "Keluarga besar Program Studi Pendidikan Matematika FMIPA UNIMED mengucapkan selamat dan sukses kepada Dr. Budi Halomoan Siregar atas capaian gelar Doktor Pendidikan Matematika melalui disertasi temuan '6 Prinsip LIT'.",
      detail: [
        "Gelar Akademik: Doktor Pendidikan Matematika (S3)",
        "Fokus Disertasi: Pengembangan 6 Prinsip LIT mengintegrasikan pendekatan pembelajaran berbasis budaya Melayu Deli, pemanfaatan multimedia interaktif, dan scaffolding pedagogik.",
        "Dewan Penguji: Dipimpin oleh jajaran senat dan guru besar Program Pascasarjana UNIMED."
      ],
      image: doktorBudiImg
    },
    {
      id: "aistsse-2025",
      title: "The 12th AISTSSE 2025: Forum Internasional Tren Pembelajaran Sains & Matematika",
      category: "konferensi",
      categoryLabel: "Konferensi Internasional",
      badgeTone: "bg-sky-50 text-sky-900 border-sky-300",
      date: "21 Oktober 2025",
      location: "Hotel LePolonia Medan & Hybrid Virtual",
      summary: "FMIPA UNIMED menyelenggarakan Annual International Seminar on Trends in Science and Science Education ke-12 dengan tema 'Implementation of Outcome-Based Science Applications in Improving Learning Content on Science Education'.",
      detail: [
        "Opening Speech: Prof. Dr. Baharuddin, S.T., M.Pd. (Rektor UNIMED)",
        "Keynote Speakers Internasional: Prof. Arthur Belford Powell (Rutgers University, USA), Prof. Jun-ichiro Hayashi (Kyushu University, Jepang), Dr. Ivanhoe Leung (University of Melbourne, Australia), Prof. Ts. Dr. Mohd Farhan (UTHM, Malaysia), dan Prof. Dr. Syawal Gultom, M.Pd. (UNIMED).",
        "Publikasi Ilmiah: Prosiding Internasional terindeks bereputasi (AIP Conference Proceedings)."
      ],
      image: aistsseImg
    },
    {
      id: "semnas-matematika-2025",
      title: "Seminar Nasional Matematika 2025: Optimalisasi AI untuk Pembelajaran Berdampak",
      category: "konferensi",
      categoryLabel: "Seminar Nasional",
      badgeTone: "bg-amber-50 text-amber-900 border-amber-300",
      date: "26 November 2025",
      location: "Gedung FMIPA UNIMED (Hybrid Conference)",
      summary: "Seminar Nasional Jurusan Matematika FMIPA UNIMED mengangkat tema 'Transformasi Pendidikan Menuju Generasi Emas Berkarakter: Optimalisasi AI untuk Mewujudkan Pembelajaran yang Berdampak dan Berkelanjutan'.",
      detail: [
        "Keynote Speakers: Prof. Dr. Syawal Gultom, S.Si., M.Pd. (UNIMED), Prof. Dr. Wahyu Wibowo, S.Si., M.Si. (ITS Surabaya), Dr. Hermawan Syahputra, S.Si., M.Si. (UNIMED), dan Chindy Anggrayni, S.Pd., Gr. (Praktisi Pendidikan).",
        "Sambutan: Dr. Ani Sutiani, M.Si. (Dekan FMIPA UNIMED).",
        "Luaran Publikasi: e-Prosiding Nasional, Jurnal JMathcos (Sinta 3), Jurnal Zero (Sinta 2), dan Jurnal Fibonacci (Sinta 5)."
      ],
      image: semnasImg
    },
    {
      id: "amli-icose-2025",
      title: "Partisipasi Dosen Pendidikan Matematika pada Pertemuan Nasional AMLI 2025 & ICOSE",
      category: "kolaborasi",
      categoryLabel: "Forum Asosiasi MIPA LPTK",
      badgeTone: "bg-teal-50 text-teal-900 border-teal-300",
      date: "6–9 Agustus 2025",
      location: "Universitas Negeri Malang (Jawa Timur)",
      summary: "Program Studi Pendidikan Matematika UNIMED turut serta dalam Pertemuan Nasional Asosiasi MIPA LPTK Indonesia (AMLI) 2025 dan International Conference on Science Education (ICOSE) guna memperkuat mutu kurikulum kependidikan.",
      detail: [
        "Agenda Kerja: Musyawarah kurikulum nasional LPTK MIPA, penyelarasan kurikulum berbasis Outcome-Based Education (OBE), dan benchmarking kelembagaan.",
        "Penyelenggara: Asosiasi MIPA LPTK Indonesia (AMLI) bekerjasama dengan Universitas Negeri Malang."
      ],
      image: amliImg
    },
    {
      id: "kunjungan-lab-smp",
      title: "Kunjungan Belajar Santri SMP Qur'an Mutiara Ilmu Langkat di Laboratorium Matematika",
      category: "kolaborasi",
      categoryLabel: "Kemitraan Sekolah & Laboratorium",
      badgeTone: "bg-stone-100 text-stone-900 border-stone-300",
      date: "Tahun 2025",
      location: "Laboratorium Jurusan Matematika FMIPA UNIMED",
      summary: "Laboratorium Jurusan Matematika menyambut kunjungan studi edukatif dari para santri dan dewan guru SMP Qur'an Mutiara Ilmu (Yayasan Pondok Pesantren Al-Uswah Kuala, Langkat) dalam sesi praktikum interaktif.",
      detail: [
        "Peserta: Santri dan guru pendamping SMP Qur'an Mutiara Ilmu, Langkat.",
        "Materi Kegiatan: Praktikum perangkat lunak matematika di ruang komputer, eksplorasi alat peraga edukatif, serta literasi numerasi digital."
      ],
      image: kunjunganLabImg
    },
    {
      id: "webinar-hmj-2025",
      title: "Webinar Nasional HMJ Matematika: 'Smart Talk for Smart Students'",
      category: "kolaborasi",
      categoryLabel: "Kegiatan Mahasiswa (HMJ)",
      badgeTone: "bg-indigo-50 text-indigo-900 border-indigo-300",
      date: "18 Oktober 2025",
      location: "Virtual Conference (Zoom)",
      summary: "Himpunan Mahasiswa Jurusan (HMJ) Matematika FMIPA UNIMED menggelar webinar pengembangan diri bertajuk 'Smart Talk for Smart Students: Kunci Sukses Berkomunikasi di Dunia Kampus'.",
      detail: [
        "Narasumber: Rafiqah Yusna Siregar, S.I.Kom., M.I.Kom (Dosen Bahasa dan Sastra Indonesia).",
        "Sambutan: Dr. Ani Sutiani, M.Si. (Dekan FMIPA UNIMED) dan Dr. Hamidah Nasution, M.Si. (Ketua Jurusan Matematika).",
        "Ketua Umum HMJ: Aditya Ario Pangestu | Moderator: Sella Amalia."
      ],
      image: webinarHmjImg
    }
  ];

  const filteredWarta = activeFilter === 'all' 
    ? wartaList 
    : wartaList.filter(item => item.category === activeFilter);

  return (
    <ContentPage 
      title="S1 Pendidikan Matematika"
      subtitle="Program Studi Sarjana Pendidikan Matematika — Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Medan"
    >
      <div className="space-y-20">

        {/* Visi Program Studi (Banner Hijau Tua Elegan dengan Aksen Emas Lembut) */}
        <div className="bg-primary text-white p-10 md:p-14 rounded-[3rem] shadow-sm text-center border border-yellow-400/20 relative overflow-hidden">
          <div className="inline-block px-4 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 font-mono text-xs font-bold uppercase tracking-[0.25em] mb-6">
            VISI PROGRAM STUDI
          </div>
          <p className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed text-white max-w-4xl mx-auto">
            "{visiText}"
          </p>
        </div>

        {/* Misi Program Studi (Gaya Editorial Terstruktur dengan Nomor Bersih) */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-1 w-10 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">
              Misi Program Studi
            </h3>
          </div>

          <div className="space-y-4">
            {misiList.map((misi, i) => (
              <div 
                key={i} 
                className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs hover:border-yellow-400/50 transition-colors"
              >
                <span className="font-display font-bold text-yellow-600 text-lg pt-0.5 w-8 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-primary/85 leading-relaxed text-sm md:text-base pt-0.5">
                  {misi}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Profil Lulusan (3 Kolom Editorial Bernuansa Hijau & Aksen Kuning Emas) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/80 pb-4">
            <div className="flex items-center gap-4">
              <div className="h-1 w-10 bg-yellow-400 rounded-full" />
              <div>
                <h3 className="text-2xl font-display font-bold text-primary italic">
                  Profil Lulusan Utama
                </h3>
                <p className="text-xs md:text-sm text-primary/60 mt-0.5">
                  Tiga peran profesional lulusan berdasarkan kurikulum institusional
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-primary/70 bg-yellow-50 border border-yellow-200 px-3.5 py-1 rounded-full">
              Kurikulum OBE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {profilList.map((item) => (
              <div
                key={item.kode}
                className="bg-white rounded-[2.5rem] border border-stone-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

                <div className="p-7 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-yellow-800 bg-yellow-50 border border-yellow-200 px-3 py-0.5 rounded-full">
                      {item.kode}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      S1 Pend. Matematika
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-display font-bold text-primary group-hover:text-green-800 transition-colors">
                      {item.nama}
                    </h4>
                    <p className="text-xs font-mono text-primary/60 font-medium mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-primary/75 leading-relaxed">
                    {item.deskripsi}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary/60 block">
                      Kompetensi Kunci:
                    </span>
                    <ul className="space-y-1.5 text-xs text-primary/80">
                      {item.kompetensi.map((komp, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0" />
                          <span className="leading-snug">{komp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-stone-50/70 border-t border-stone-200/70 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-800 block">
                    Peluang Bidang Kerja:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.karir.map((kar, cIdx) => (
                      <span 
                        key={cIdx}
                        className="px-2.5 py-1 bg-white text-[11px] font-medium text-primary/80 rounded-md border border-stone-200 shadow-2xs"
                      >
                        {kar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kerangka Capaian Pembelajaran Lulusan (CPL) */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-200/80 shadow-2xs">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="h-1 w-8 bg-yellow-400 rounded-full" />
            <h3 className="text-xl font-display font-bold text-primary italic">
              Integrasi Kurikulum & Capaian Pembelajaran (CPL)
            </h3>
          </div>
          <p className="text-sm text-primary/75 leading-relaxed mb-6">
            Seluruh profil lulusan disusun berdasarkan kurikulum <em>Outcome-Based Education</em> (OBE) untuk memastikan sarjana lulusan S1 Pendidikan Matematika UNIMED menguasai empat kompetensi terpadu:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/70">
              <span className="text-xs font-bold text-yellow-700 font-mono block mb-1">01 / PEDAGOGI TIK</span>
              <h5 className="font-bold text-sm text-primary mb-1">Desain TPACK & OBE</h5>
              <p className="text-xs text-primary/70 leading-relaxed">Merancang instruksional matematika inovatif berbasis teknologi digital dan analitik belajar.</p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/70">
              <span className="text-xs font-bold text-yellow-700 font-mono block mb-1">02 / RISET TERAPAN</span>
              <h5 className="font-bold text-sm text-primary mb-1">Riset Berbasis Bukti</h5>
              <p className="text-xs text-primary/70 leading-relaxed">Keterampilan evaluasi instrumen, asesmen diagnostik, dan publikasi ilmiah bereputasi.</p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/70">
              <span className="text-xs font-bold text-yellow-700 font-mono block mb-1">03 / INOVASI PRODUK</span>
              <h5 className="font-bold text-sm text-primary mb-1">Edupreneur & EdTech</h5>
              <p className="text-xs text-primary/70 leading-relaxed">Kreativitas menciptakan modul, game edukasi matematika interaktif, dan rintisan layanan belajar.</p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/70">
              <span className="text-xs font-bold text-yellow-700 font-mono block mb-1">04 / KARAKTER</span>
              <h5 className="font-bold text-sm text-primary mb-1">Etika & Kepemimpinan</h5>
              <p className="text-xs text-primary/70 leading-relaxed">Integritas moral, dedikasi edukatif, serta komunikasi pedagogik berstandar nasional dan global.</p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BAGIAN BARU: WARTA, PRESTASI & DOKUMENTASI AKADEMIK PRODI     */}
        {/* Desain: Editorial bergaya jurnal/arsip kurasi, tenang & mewah */}
        {/* ============================================================== */}
        <div className="space-y-10 pt-4 border-t border-stone-200/80">
          
          {/* Header Bagian dengan Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-8 bg-yellow-400 rounded-full" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-yellow-700">
                  ARSIP & AKTIVITAS PROGRAM STUDI
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold text-primary italic">
                Warta Akademik, Prestasi & Kolaborasi
              </h3>
              <p className="text-sm text-primary/65 max-w-2xl mt-1.5 leading-relaxed">
                Dokumentasi kegiatan ilmiah, capaian prestasi mahasiswa dan dosen, seminar bertaraf nasional-internasional, serta kemitraan edukatif S1 Pendidikan Matematika FMIPA UNIMED.
              </p>
            </div>

            {/* Filter Kategori Minimalis */}
            <div className="inline-flex p-1.5 bg-stone-100 rounded-2xl border border-stone-200/80 self-start md:self-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-primary text-yellow-400 shadow-xs'
                    : 'text-primary/70 hover:text-primary hover:bg-stone-200/50'
                }`}
              >
                Semua ({wartaList.length})
              </button>
              <button
                onClick={() => setActiveFilter('prestasi')}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  activeFilter === 'prestasi'
                    ? 'bg-primary text-yellow-400 shadow-xs'
                    : 'text-primary/70 hover:text-primary hover:bg-stone-200/50'
                }`}
              >
                Prestasi
              </button>
              <button
                onClick={() => setActiveFilter('konferensi')}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  activeFilter === 'konferensi'
                    ? 'bg-primary text-yellow-400 shadow-xs'
                    : 'text-primary/70 hover:text-primary hover:bg-stone-200/50'
                }`}
              >
                Konferensi
              </button>
              <button
                onClick={() => setActiveFilter('kolaborasi')}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  activeFilter === 'kolaborasi'
                    ? 'bg-primary text-yellow-400 shadow-xs'
                    : 'text-primary/70 hover:text-primary hover:bg-stone-200/50'
                }`}
              >
                Kolaborasi
              </button>
            </div>
          </div>

          {/* Grid Warta & Kegiatan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWarta.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-[2.2rem] border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Media Image Container */}
                <div>
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer"
                    title="Klik untuk memperbesar dokumentasi"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay Elegan saat Hover */}
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/95 text-white text-xs font-semibold rounded-full backdrop-blur-xs shadow-md">
                        <ZoomIn className="w-3.5 h-3.5 text-yellow-400" />
                        <span>Buka Detail</span>
                      </span>
                    </div>

                    {/* Badge Kategori */}
                    <span className={`absolute top-4 left-4 text-[11px] font-mono font-bold tracking-wide uppercase px-3 py-1 rounded-full border shadow-2xs ${item.badgeTone}`}>
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Konten Teks */}
                  <div className="p-7 space-y-3.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary/60">
                      <Calendar className="w-3.5 h-3.5 text-yellow-600" />
                      <span>{item.date}</span>
                    </div>

                    <h4
                      onClick={() => setSelectedItem(item)}
                      className="text-lg font-display font-bold text-primary group-hover:text-green-900 transition-colors leading-snug cursor-pointer line-clamp-2"
                      title={item.title}
                    >
                      {item.title}
                    </h4>

                    <p className="text-xs md:text-sm text-primary/75 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Kartu dengan Tombol Baca */}
                <div className="p-7 pt-0">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="w-full pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-primary hover:text-green-800 transition-colors cursor-pointer group/btn"
                  >
                    <span>Lihat Dokumentasi Lengkap</span>
                    <ChevronRight className="w-4 h-4 text-yellow-600 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Catatan Kaki Sederhana */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary/70">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
              <span>Program Studi S1 Pendidikan Matematika FMIPA Universitas Negeri Medan</span>
            </div>
            <span className="font-mono text-primary/50 text-[11px]">
              Dokumentasi Akademik Terkurasi
            </span>
          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* LIGHTBOX MODAL: Tampilan Gambar Penuh & Informasi Detail        */}
      {/* ============================================================== */}
      {selectedItem && (
        <div 
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-white/20"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
              <div className="flex items-center gap-3">
                <span className={`text-[11px] font-mono font-bold tracking-wide uppercase px-3 py-1 rounded-full border ${selectedItem.badgeTone}`}>
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-xs font-mono text-primary/60">
                  {selectedItem.date}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                title="Tutup dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-6">
              
              {/* Image Preview Container */}
              <div className="rounded-2xl overflow-hidden bg-stone-950/5 border border-stone-200 flex items-center justify-center max-h-[500px]">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="max-h-[500px] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary leading-snug">
                  {selectedItem.title}
                </h3>
                
                <p className="text-sm md:text-base text-primary/80 leading-relaxed">
                  {selectedItem.summary}
                </p>

                {/* Detail Points */}
                {selectedItem.detail && selectedItem.detail.length > 0 && (
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-yellow-800 block">
                      Informasi & Catatan Dokumentasi:
                    </span>
                    <ul className="space-y-2 text-xs md:text-sm text-primary/80">
                      {selectedItem.detail.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 shrink-0" />
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-mono text-primary/60 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-600" />
                <span>{selectedItem.location}</span>
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-green-900 transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </ContentPage>
  );
};
