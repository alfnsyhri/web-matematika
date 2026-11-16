import { ContentPage } from '../../pages/PlaceholderPage';

export const S3PendidikanMatematika = () => {
  const visiText = "Menjadi program studi doktoral yang unggul dan berstandar internasional dalam keilmuan dan inovasi bidang pendidikan matematika konstruktif berbasis budaya dan teknologi digital mutakhir.";

  const misiList = [
    "Menyelenggarakan penelitian doktor bidang pendidikan matematika berparadigma konstruktivisme, berbasis budaya, dan lintas disiplin dengan pemanfaatan teknologi digital mutakhir;",
    "Menyelenggarakan pendidikan yang berakar pada budaya dan memanfaatkan teknologi digital mutakhir dengan kurikulum OBE dan asesmen autentik berstandar internasional;",
    "Menyelenggarakan perkuliahan berbasis karakter dan integritas yang merefleksikan kebudayaan lokal;",
    "Menyelenggarakan pengabdian kepada masyarakat berbasis riset untuk menghadirkan solusi permasalahan pembelajaran matematika di sekolah, komunitas, dan instansi;",
    "Mengembangkan kemitraan strategis dalam dan luar negeri untuk inovasi pembelajaran dan hilirisasi hasil riset yang saling menguntungkan bagi para pemangku kepentingan; dan",
    "Mewujudkan tata kelola modern berbasis data, etika, dan integritas, serta suasana akademik yang inklusif dan produktif."
  ];

  const profilJobs = [
    'Guru Besar (Profesor) & Dosen Utama Perguruan Tinggi',
    'Peneliti Senior & Konsultan Riset Pendidikan Internasional',
    'Pengembang Teori Pembelajaran & Inovasi Digital',
    'Pengambil Kebijakan & Perumus Regulasi Pendidikan',
    'Pemimpin Perguruan Tinggi & Lembaga Riset',
    'Konsultan Kurikulum OBE & Asesmen Autentik'
  ];

  return (
    <ContentPage 
      title="S3 Pendidikan Matematika"
      subtitle="Program Studi Doktor Pendidikan Matematika — Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Medan"
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
            Lulusan Program Doktor (S3) Pendidikan Matematika FMIPA UNIMED disiapkan menjadi ilmuwan, pakar teori, peneliti senior, dan pemimpin akademis yang memiliki kontribusi orisinal serta keahlian tingkat lanjut dalam mengembangkan inovasi pendidikan matematika konstruktif berbasis kearifan budaya dan teknologi digital mutakhir di tingkat internasional.
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
