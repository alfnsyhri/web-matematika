import { useState } from 'react';
import { ContentPage } from '../../pages/PlaceholderPage';
import { ZoomIn, X, Calendar, Award, Sparkles, CheckCircle2 } from 'lucide-react';

import akreditasiImg from '../../assets/statistika/akreditasi-statistika.jpg';
import prestasiPimnasImg from '../../assets/statistika/prestasi-pimnas-39.webp';
import kerjasamaBpsImg from '../../assets/statistika/kerjasama-bps.jpg';
import prestasiDosenImg from '../../assets/statistika/prestasi-dosen-brida.webp';
import prestasiMahasiswaImg from '../../assets/statistika/prestasi-mahasiswa-expo.jpg';

export const Statistika = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);

  const visiText = "Menjadi program studi yang unggul di tingkat nasional dan menghasilkan lulusan yang kompeten dalam pengembangan teori Statistika di dunia usaha, industri dan pendidikan berbasis pada komputasi.";

  const misiList = [
    "Menyelenggarakan proses pembelajaran program studi Statistika yang berkualitas dan didukung sarana perkuliahan yang memadai.",
    "Menyelenggarakan penelitian Statistika berbasis komputasi untuk memenuhi kebutuhan dunia usaha, industri dan pendidikan.",
    "Berkolaborasi dengan dunia usaha dan industri, lembaga negara dan lembaga pendidikan melalui penelitian dan pengabdian masyarakat.",
    "Menyelenggarakan tata kelola program studi yang transparan, terpercaya, fleksibel, dalam mendukung terciptanya suasana akademik yang kondusif dan berkarakter."
  ];

  const tujuanList = [
    "Menghasilkan lulusan yang kompeten dan berkarakter.",
    "Menghasilkan lulusan yang mampu melakukan dan menghasilkan penelitian melalui publikasi ilmiah di bidang Statistika dan terapannya di tingkat nasional dan internasional.",
    "Menghasilkan lulusan yang mampu menerapkan Statistika dalam menyelesaikan permasalahan pada dunia usaha, industri dan pendidikan.",
    "Terciptanya tata kelola program studi dengan suasana akademik yang kondusif dan berkarakter."
  ];

  const sasaranList = [
    "Meningkatnya kualitas lulusan",
    "Meningkatnya kualitas pembelajaran",
    "Meningkatnya penelitian",
    "Meningkatnya pengabdian kepada masyarakat",
    "Meningkatnya kerja sama",
    "Meningkatnya tata kelola"
  ];

  const profilJobs = [
    'Statitisi Ahli di Instansi Pemerintah (BPS, Bappeda)',
    'Data Analyst & Business Intelligence Specialist',
    'Data Scientist & Pemodel Komputasi Data',
    'Analis Risiko Finansial, Perbankan & Asuransi',
    'Market Research Analyst & Konsultan Survei',
    'Peneliti & Akademisi Bidang Statistika Terapan'
  ];

  const akreditasiItem = {
    title: "Sertifikat Akreditasi Resmi Program Studi Sarjana Statistika FMIPA UNIMED",
    category: "Akreditasi LAMSAMA",
    badgeColor: "bg-emerald-700 text-white",
    date: "18 Juni 2025 – 17 Juni 2030",
    desc: "Program Studi S1 Statistika Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Negeri Medan resmi memperoleh sertifikat akreditasi dari Lembaga Akreditasi Mandiri Sains Alam dan Ilmu Formal (LAMSAMA) berdasarkan Surat Keputusan No. 150/SK/LAMSAMA/Akred/S/VI/2025 dengan masa berlaku hingga tahun 2030.",
    image: akreditasiImg,
    alt: "Sertifikat Akreditasi Program Studi Statistika FMIPA UNIMED"
  };

  const beritaStatistika = [
    {
      id: 1,
      title: "Hebat! Mahasiswa Statistika UNIMED Lolos PIMNAS 39 dengan Inovasi ARCHANGEL",
      category: "Prestasi Nasional (PIMNAS)",
      badgeColor: "bg-yellow-500 text-primary font-bold",
      date: "PIMNAS 39 · 2026",
      desc: "Selamat dan sukses kepada Finny Aprilia Yulanda dan Putri Leoni Simpa (Statistika 2024) yang berhasil lolos ke ajang bergengsi Pekan Ilmiah Mahasiswa Nasional (PIMNAS) 39 tahun 2026 dengan karya 'ARCHANGEL: Rekonstruksi Arsitektur Desain Sistem Digital Twin Ketahanan Pangan Nasional Menuju Indonesia Emas 2045'.",
      image: prestasiPimnasImg,
      alt: "Mahasiswa Statistika UNIMED Lolos PIMNAS 39"
    },
    {
      id: 2,
      title: "Prodi Statistika Resmi Jalin Kerjasama (IoA) dengan BPS Kota Medan",
      category: "Kemitraan & Dosen Praktisi",
      badgeColor: "bg-blue-700 text-white",
      date: "November 2025",
      desc: "Program Studi S1 Statistika UNIMED resmi menandatangani Implementation of Arrangement (IoA) bersama Badan Pusat Statistik (BPS) Kota Medan sebagai mitra strategis dalam program Dosen Praktisi Mengajar guna memperkuat wawasan praktis dunia kerja bagi mahasiswa.",
      image: kerjasamaBpsImg,
      alt: "Penandatanganan Kerjasama IoA Statistika UNIMED dengan BPS Kota Medan"
    },
    {
      id: 3,
      title: "Dosen Statistika Raih Juara 3 Lomba Karya Tulis Ilmiah BRIDA Kota Medan",
      category: "Prestasi Dosen",
      badgeColor: "bg-emerald-800 text-yellow-300 font-semibold",
      date: "November 2025",
      desc: "Selamat atas raihan Juara 3 Kategori ASN pada ajang Gebyar Inovasi Riset & Teknologi Kota Medan melalui karya ilmiah inovatif berjudul 'SmartRoad Medan: AI Multimodal untuk Pelaporan dan Prioritisasi Kondisi Jalan Perkotaan'.",
      image: prestasiDosenImg,
      alt: "Prestasi Dosen Statistika Juara 3 BRIDA Kota Medan"
    },
    {
      id: 4,
      title: "Mahasiswa Statistika Sabet Juara 3 Ajang FMIPA EXPO 2025",
      category: "Prestasi Mahasiswa",
      badgeColor: "bg-amber-600 text-white",
      date: "Tahun 2025",
      desc: "Mahasiswa Program Studi Statistika UNIMED sukses menorehkan prestasi membanggakan dengan meraih Juara 3 Kategori Proyek Mahasiswa pada ajang kompetisi ilmiah dan inovasi FMIPA EXPO 2025.",
      image: prestasiMahasiswaImg,
      alt: "Mahasiswa Statistika Juara 3 FMIPA EXPO 2025"
    }
  ];

  return (
    <ContentPage 
      title="S1 Statistika"
      subtitle="Program Studi Sarjana Statistika — Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Medan"
    >
      <div className="space-y-16">

        {/* Visi Program Studi (Nuansa Hijau & Kuning) */}
        <div className="bg-primary text-white p-10 md:p-14 rounded-[3.5rem] shadow-xl text-center border border-yellow-400/20">
          <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-yellow-400 mb-6 font-semibold">
            VISI PROGRAM STUDI
          </h3>
          <p className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed text-white max-w-4xl mx-auto">
            "{visiText}"
          </p>
        </div>

        {/* Misi Program Studi (Aksen Garis Kuning & Teks Hijau) */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-1 w-10 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">
              Misi Program Studi
            </h3>
          </div>

          <div className="space-y-6 pl-1">
            {misiList.map((misi, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="font-bold text-primary text-base pt-0.5 w-4 shrink-0 font-sans">
                  {i + 1}
                </span>
                <p className="text-primary/80 leading-relaxed text-base">
                  {misi}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tujuan & Sasaran Program Studi (2-Column Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kartu Tujuan */}
          <div className="bg-white p-8 md:p-10 rounded-[2.8rem] border border-green-100/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="h-1 w-8 bg-yellow-400 rounded-full" />
                <h3 className="text-2xl font-display font-bold text-primary italic">
                  Tujuan Program Studi
                </h3>
              </div>
              <div className="space-y-4">
                {tujuanList.map((tujuan, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-bold text-primary text-base pt-0.5 w-4 shrink-0 font-sans">
                      {i + 1}
                    </span>
                    <p className="text-primary/80 leading-relaxed text-sm md:text-base">
                      {tujuan}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-yellow-500" />
              <span>Target Capaian Pembelajaran & Mutu Akademik</span>
            </div>
          </div>

          {/* Kartu Sasaran */}
          <div className="bg-white p-8 md:p-10 rounded-[2.8rem] border border-green-100/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="h-1 w-8 bg-yellow-400 rounded-full" />
                <h3 className="text-2xl font-display font-bold text-primary italic">
                  Sasaran Strategis
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {sasaranList.map((sasaran, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral/80 border border-green-100/60 hover:border-yellow-400/50 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary text-yellow-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-primary/85 text-xs md:text-sm font-medium leading-snug">
                      {sasaran}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-yellow-500" />
              <span>Pengembangan Berkelanjutan Menuju Akreditasi Unggul</span>
            </div>
          </div>

        </div>

        {/* Profil Lulusan (Nuansa Hijau Tua & Aksen Titik Kuning) */}
        <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-green-100/80 shadow-sm">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="h-1 w-8 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">
              Profil Lulusan
            </h3>
          </div>
          <p className="text-primary/75 leading-relaxed mb-6">
            Lulusan Program Studi S1 Statistika FMIPA UNIMED disiapkan menjadi ahli analisis data dan statistisi yang kompeten dalam merancang survei dan eksperimen, mengolah dan memodelkan data berbasis komputasi, serta memberikan wawasan analitis strategis bagi dunia usaha, industri, perbankan, instansi pemerintah, dan lembaga riset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profilJobs.map((job, i) => (
              <div key={i} className="flex items-center gap-3 text-primary/85">
                <div className="w-2 h-2 bg-yellow-400 rounded-full shrink-0" />
                <span>{job}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warta, Prestasi & Akreditasi Program Studi */}
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="h-1 w-10 bg-yellow-400 rounded-full" />
              <h3 className="text-2xl font-display font-bold text-primary italic">
                Kabar, Prestasi & Akreditasi
              </h3>
            </div>
            <span className="text-xs font-mono text-primary/70 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200/80 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
              Warta Program Studi S1 Statistika
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Sorotan Utama: Sertifikat Akreditasi (Featured Full Width) */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] overflow-hidden border-2 border-emerald-500/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row group">
              <div
                onClick={() => setSelectedImg({ src: akreditasiItem.image, title: akreditasiItem.title })}
                className="relative lg:w-1/2 aspect-[16/10] bg-primary/5 overflow-hidden cursor-pointer"
                title="Klik untuk memperbesar sertifikat"
              >
                <img
                  src={akreditasiItem.image}
                  alt={akreditasiItem.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm shadow-md">
                    <ZoomIn className="w-4 h-4 text-yellow-400" />
                    Perbesar Sertifikat
                  </span>
                </div>
                <span className={`absolute top-4 left-4 text-[11px] font-mono font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-md ${akreditasiItem.badgeColor}`}>
                  {akreditasiItem.category}
                </span>
              </div>

              <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-primary/60">
                    <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                    <span>Masa Berlaku: {akreditasiItem.date}</span>
                  </div>

                  <h4
                    onClick={() => setSelectedImg({ src: akreditasiItem.image, title: akreditasiItem.title })}
                    className="text-xl md:text-2xl font-display font-bold text-primary group-hover:text-emerald-800 transition-colors leading-snug cursor-pointer"
                  >
                    {akreditasiItem.title}
                  </h4>

                  <p className="text-sm text-primary/75 leading-relaxed pt-1">
                    {akreditasiItem.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedImg({ src: akreditasiItem.image, title: akreditasiItem.title })}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span>Lihat Sertifikat Lengkap</span>
                  </button>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold uppercase bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    LAMSAMA Resmi
                  </span>
                </div>
              </div>
            </div>

            {/* Berita & Prestasi Lainnya (Grid 2x2) */}
            {beritaStatistika.map((berita) => (
              <div
                key={berita.id}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-green-100/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    onClick={() => setSelectedImg({ src: berita.image, title: berita.title })}
                    className="relative aspect-[4/3] bg-primary/5 overflow-hidden cursor-pointer"
                    title="Klik untuk memperbesar gambar"
                  >
                    <img
                      src={berita.image}
                      alt={berita.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm shadow-md">
                        <ZoomIn className="w-4 h-4 text-yellow-400" />
                        Perbesar Foto
                      </span>
                    </div>

                    <span className={`absolute top-4 left-4 text-[11px] font-mono font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-md ${berita.badgeColor}`}>
                      {berita.category}
                    </span>
                  </div>

                  <div className="p-7 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary/60">
                      <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                      <span>{berita.date}</span>
                    </div>

                    <h4
                      onClick={() => setSelectedImg({ src: berita.image, title: berita.title })}
                      className="text-lg md:text-xl font-display font-bold text-primary group-hover:text-green-800 transition-colors leading-snug cursor-pointer"
                    >
                      {berita.title}
                    </h4>

                    <p className="text-sm text-primary/70 leading-relaxed pt-1">
                      {berita.desc}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 border-t border-gray-100/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedImg({ src: berita.image, title: berita.title })}
                    className="text-xs font-bold text-primary hover:text-green-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span>Lihat Dokumentasi</span>
                  </button>
                  <span className="text-[11px] font-mono text-gray-400 uppercase">
                    Statistika UNIMED
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal untuk melihat foto secara penuh */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:px-6 border-b border-gray-100 bg-neutral">
              <h4 className="font-display font-bold text-primary text-sm md:text-base pr-4 line-clamp-1">
                {selectedImg.title}
              </h4>
              <button
                onClick={() => setSelectedImg(null)}
                className="w-8 h-8 rounded-full bg-gray-200/80 hover:bg-gray-300 text-gray-700 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-gray-900/5">
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </ContentPage>
  );
};
