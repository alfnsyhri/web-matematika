import { ContentPage } from '../PlaceholderPage';

export const VisiMisi = () => {
  const visiText = "Menjadi pusat inovasi dan pengembangan Pendidikan Matematika, Matematika Terapan, dan Teknologi Komputasi.";

  const misiList = [
    "Menyelenggarakan pendidikan dan pembelajaran matematika yang bermutu dan bernuansa link and match dengan kebutuhan Pendidikan dan dunia Industri.",
    "Menyelenggarakan penelitian di bidang Pendidikan Matematika, Matematika dan Aplikasinya, yang inovatif dan aplikatif.",
    "Menyelenggarakan pengabdian kepada masyarakat melalui pemetaan kebutuhan pada Bidang Pendidikan maupun dunia Industri.",
    "Menciptakan atmosfer akademik yang kondusif di lingkungan Jurusan Matematika.",
    "Menjalin kerjasama secara berkelanjutan dengan berbagai instansi di tingkat lokal, nasional, regional, dan internasional."
  ];

  const prodiList = [
    'S1 Pendidikan Matematika',
    'S1 Matematika',
    'S1 Ilmu Komputer',
    'S1 Statistika',
    'S2 Pendidikan Matematika (Program Magister)',
    'S3 Pendidikan Matematika (Program Doktor)'
  ];

  return (
    <ContentPage 
      title="Visi & Misi"
      subtitle="Arah dan tujuan strategis Jurusan Matematika — Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Medan"
    >
      <div className="space-y-16">

        {/* Visi Jurusan Matematika (Nuansa Hijau & Kuning) */}
        <div className="bg-primary text-white p-10 md:p-14 rounded-[3.5rem] shadow-xl text-center border border-yellow-400/20">
          <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-yellow-400 mb-6 font-semibold">
            VISI JURUSAN MATEMATIKA
          </h3>
          <p className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed text-white max-w-4xl mx-auto">
            "{visiText}"
          </p>
        </div>

        {/* Misi Jurusan Matematika (Aksen Garis Kuning & Teks Hijau) */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-1 w-10 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">
              Misi Jurusan Matematika
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

        {/* Program Studi di Lingkungan Jurusan (Nuansa Hijau Tua & Aksen Titik Kuning) */}
        <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-green-100/80 shadow-sm">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="h-1 w-8 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">
              Program Studi di Bawah Naungan Jurusan
            </h3>
          </div>
          <p className="text-primary/75 leading-relaxed mb-6">
            Untuk mewujudkan visi dan misi tersebut, Jurusan Matematika FMIPA Universitas Negeri Medan mengelola program studi pada jenjang sarjana, magister, hingga doktor yang berorientasi pada keunggulan pendidikan, riset murni, dan terapan industri:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prodiList.map((prodi, i) => (
              <div key={i} className="flex items-center gap-3 text-primary/85">
                <div className="w-2 h-2 bg-yellow-400 rounded-full shrink-0" />
                <span>{prodi}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </ContentPage>
  );
};
