import { ContentPage } from '../../pages/PlaceholderPage';

export const PendidikanMatematika = () => {
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

  return (
    <ContentPage 
      title="S1 Pendidikan Matematika"
      subtitle="Program Studi Sarjana Pendidikan Matematika — Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Medan"
    >
      <div className="space-y-16">

        {/* Visi Program Studi (Banner Hijau Tua dengan Aksen Kuning) */}
        <div className="bg-primary text-white p-10 md:p-14 rounded-[3rem] shadow-xl text-center border border-yellow-400/25 relative overflow-hidden">
          <div className="inline-block px-4 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 font-mono text-xs font-bold uppercase tracking-[0.25em] mb-6">
            VISI PROGRAM STUDI
          </div>
          <p className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed text-white max-w-4xl mx-auto">
            "{visiText}"
          </p>
        </div>

        {/* Misi Program Studi (Daftar Bergaya Editorial dengan Angka Kuning) */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-1 w-10 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">
              Misi Program Studi
            </h3>
          </div>

          <div className="space-y-6">
            {misiList.map((misi, i) => (
              <div 
                key={i} 
                className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-green-100/80 shadow-xs hover:border-yellow-400/60 transition-colors"
              >
                <span className="font-display font-bold text-yellow-600 text-xl pt-0.5 w-8 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-primary/85 leading-relaxed text-base pt-0.5">
                  {misi}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Profil Lulusan (3 Kolom Kartu Editorial Bernuansa Kuning-Hijau) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-200/70 pb-4">
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
            <span className="text-xs font-mono font-bold text-primary/70 bg-yellow-100/70 border border-yellow-300/60 px-3.5 py-1 rounded-full">
              Kurikulum OBE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {profilList.map((item) => (
              <div
                key={item.kode}
                className="bg-white rounded-[2.5rem] border border-green-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Garis Aksen Kuning di Bagian Atas Kartu */}
                <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

                <div className="p-7 space-y-5">
                  {/* Header Kartu */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-yellow-700 bg-yellow-50 border border-yellow-200 px-3 py-0.5 rounded-full">
                      {item.kode}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
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

                  {/* Deskripsi */}
                  <p className="text-xs md:text-sm text-primary/75 leading-relaxed">
                    {item.deskripsi}
                  </p>

                  {/* Kompetensi Inti */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
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

                {/* Prospek Karir di Bawah Kartu */}
                <div className="p-6 bg-neutral/80 border-t border-green-100/60 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-800 block">
                    Peluang Bidang Kerja:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.karir.map((kar, cIdx) => (
                      <span 
                        key={cIdx}
                        className="px-2.5 py-1 bg-white text-[11px] font-medium text-primary/80 rounded-md border border-green-200/60 shadow-2xs"
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
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-green-100/80 shadow-sm">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="h-1 w-8 bg-yellow-400 rounded-full" />
            <h3 className="text-xl font-display font-bold text-primary italic">
              Integrasi Kurikulum & Capaian Pembelajaran (CPL)
            </h3>
          </div>
          <p className="text-sm text-primary/75 leading-relaxed mb-6">
            Seluruh profil lulusan di atas disusun berdasarkan kurikulum <em>Outcome-Based Education</em> (OBE). Kurikulum ini memastikan bahwa sarjana lulusan S1 Pendidikan Matematika UNIMED menguasai empat kompetensi terpadu:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-neutral/70 border border-green-100/60">
              <span className="text-xs font-bold text-yellow-700 font-mono block mb-1">01 / PEDAGOGI TIK</span>
              <h5 className="font-bold text-sm text-primary mb-1">Desain TPACK & OBE</h5>
              <p className="text-xs text-primary/70">Kemampuan merancang instruksional matematika inovatif berbasis teknologi digital.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral/70 border border-green-100/60">
              <span className="text-xs font-bold text-yellow-700 font-mono block mb-1">02 / RISET TERAPAN</span>
              <h5 className="font-bold text-sm text-primary mb-1">Riset Berbasis Bukti</h5>
              <p className="text-xs text-primary/70">Keterampilan melakukan evaluasi instrumen, asesmen digital, dan publikasi ilmiah.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral/70 border border-green-100/60">
              <span className="text-xs font-bold text-yellow-700 font-mono block mb-1">03 / INOVASI PRODUK</span>
              <h5 className="font-bold text-sm text-primary mb-1">Edupreneur & EdTech</h5>
              <p className="text-xs text-primary/70">Kreativitas menciptakan modul, game edukasi, platform belajar, dan rintisan layanan.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral/70 border border-green-100/60">
              <span className="text-xs font-bold text-yellow-700 font-mono block mb-1">04 / KARAKTER</span>
              <h5 className="font-bold text-sm text-primary mb-1">Etika & Kepemimpinan</h5>
              <p className="text-xs text-primary/70">Integritas moral, dedikasi, serta komunikasi pedagogik berstandar global.</p>
            </div>
          </div>
        </div>

      </div>
    </ContentPage>
  );
};
