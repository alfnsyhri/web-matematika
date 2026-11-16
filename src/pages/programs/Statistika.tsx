import { ContentPage } from '../../pages/PlaceholderPage';

export const Statistika = () => {
  const visiText = "Menjadi program studi yang unggul di tingkat nasional dan menghasilkan lulusan yang kompeten dalam pengembangan teori Statistika di dunia usaha, industri dan pendidikan berbasis pada komputasi.";

  const misiList = [
    "Menyelenggarakan proses pembelajaran Program Studi Statistika yang berkualitas dan didukung sarana perkuliahan yang memadai.",
    "Menyelenggarakan penelitian Statistika berbasis komputasi untuk memenuhi kebutuhan dunia usaha, industri dan pendidikan.",
    "Berkolaborasi dengan dunia usaha dan industri, lembaga negara dan lembaga pendidikan melalui penelitian dan pengabdian pada masyarakat.",
    "Menyelenggarakan tata kelola program studi yang transparan, terpercaya, fleksibel, dalam mendukung terciptanya suasana akademik yang kondusif dan berkarakter."
  ];

  const profilJobs = [
    'Statitisi Ahli di Instansi Pemerintah (BPS, Bappeda)',
    'Data Analyst & Business Intelligence Specialist',
    'Data Scientist & Pemodel Komputasi Data',
    'Analis Risiko Finansial, Perbankan & Asuransi',
    'Market Research Analyst & Konsultan Survei',
    'Peneliti & Akademisi Bidang Statistika Terapan'
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

      </div>
    </ContentPage>
  );
};
