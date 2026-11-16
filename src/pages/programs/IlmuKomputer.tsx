import { ContentPage } from '../../pages/PlaceholderPage';

export const IlmuKomputer = () => {
  const visiText = "Menjadi Program Studi yang unggul pada bidang artificial intelegensi dan sains komputasi secara nasional dan internasional.";

  const misiList = [
    "Menyelenggarakan pendidikan dan pembelajaran ilmu komputer berfokus pada bidang artificial intelegence dan sains komputasi yang bermutu dan bernuansa link and match dengan kebutuhan stakeholder.",
    "Menyelenggarakan penelitian di bidang ilmu komputer berfokus pada bidang artificial intelegensi dan sains komputasi yang inovatif dan aplikatif serta mengembangkan rekayasa industri dan teknologi yang kreatif.",
    "Menyelenggarakan pengabdian kepada masyarakat melalui pemetaan kebutuhan dan permasalahan teknologi komputer di masyarakat.",
    "Mengembangkan budaya ilmiah dan budaya etnik, kewirausahaan, membina suasana akademik yang sehat.",
    "Menjalin kerja sama secara berkelanjutan dengan berbagai instansi di tingkat lokal, nasional, regional, dan internasional."
  ];

  const profilJobs = [
    'AI & Machine Learning Engineer',
    'Computational Scientist (Sains Komputasi)',
    'Software Engineer & Full Stack Developer',
    'Data Scientist & Big Data Specialist',
    'Intelligent System & Cloud Architect',
    'Technopreneur & Konsultan Teknologi Informasi'
  ];

  return (
    <ContentPage 
      title="S1 Ilmu Komputer"
      subtitle="Program Studi Sarjana Ilmu Komputer — Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Medan"
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
            Lulusan Program Studi S1 Ilmu Komputer FMIPA UNIMED diarahkan untuk memiliki keahlian unggul dalam bidang artificial intelligence (kecerdasan buatan), sains komputasi, rekayasa perangkat lunak, dan pengembangan teknologi informasi yang selaras dengan kebutuhan industri digital modern (link and match).
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
