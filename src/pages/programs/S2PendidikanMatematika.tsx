import { ContentPage } from '../../pages/PlaceholderPage';

export const S2PendidikanMatematika = () => {
  const visiText = "Unggul dalam bidang pembelajaran, pengkajian dan pengembangan matematika berlandaskan budaya dan penerapan IPTEK pada tingkat nasional dan diakui secara internasional pada tahun 2030.";

  const misiList = [
    "Menyelenggarakan kegiatan pendidikan dan pembelajaran matematika untuk menumbuhkembangkan kemampuan, keterampilan, keahlian dan sikap matematis secara teoritis dan praktis.",
    "Mengembangkan kegiatan penelitian yang berorientasi pada permasalahan kondisi objektif yang bermanfaat secara praktis dan ekonomis untuk meningkatkan pembelajaran matematika berdasarkan budaya dan perkembangan IPTEK.",
    "Menghasilkan tenaga pendidik yang terampil mengkomunikasikan hasil penelitian maupun konsepsi pemikiran secara lisan maupun tulisan melalui pengabdian kepada masyarakat dan mengembangkan budaya kewirausahaan dalam pembelajaran.",
    "Menciptakan atmosfer akademik yang kondusif di lingkungan Program Studi Pendidikan Matematika.",
    "Menyelenggarakan kerjasama melalui pelatihan dan pengabdian kepada masyarakat dengan lembaga pendidikan, dunia usaha, dan industri."
  ];

  const profilJobs = [
    'Dosen & Peneliti Pendidikan Matematika',
    'Pengembang Kurikulum & Modul Pembelajaran Digital',
    'Konsultan Evaluasi & Asesmen Pendidikan',
    'Widyaprada / Pengawas & Pembina Sekolah',
    'Kepala Institusi Pendidikan / Pengelola Lembaga',
    'Edupreneur & Konsultan Pembelajaran Berbasis Budaya & IPTEK'
  ];

  return (
    <ContentPage 
      title="S2 Pendidikan Matematika"
      subtitle="Program Studi Pascasarjana Pendidikan Matematika — Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Medan"
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

        {/* Profil Lulusan (Nuansa Hijau Tua & Aksen Titik Kuning) */}
        <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-green-100/80 shadow-sm">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="h-1 w-8 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">
              Profil Lulusan
            </h3>
          </div>
          <p className="text-primary/75 leading-relaxed mb-6">
            Lulusan Program Studi Magister (S2) Pendidikan Matematika FMIPA UNIMED diarahkan untuk menjadi pakar, pendidik unggul di tingkat perguruan tinggi, serta peneliti yang mampu memecahkan masalah pembelajaran matematika berbasis kearifan budaya dan perkembangan IPTEK modern.
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

      </div>
    </ContentPage>
  );
};
