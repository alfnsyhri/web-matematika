import { ContentPage } from '../../pages/PlaceholderPage';

export const Matematika = () => {
  const visiText = "Menjadi program studi yang unggul dalam pengembangan teori dan terapan matematika industri di tingkat nasional dan mendapat pengakuan internasional.";

  const misiList = [
    "Menyelenggarakan pendidikan berkualitas yang relevan dengan perkembangan IPTEK serta mendorong penelitian inovatif untuk pengembangan teori serta penerapan matematika di berbagai bidang industri.",
    "Mengembangkan Prodi Matematika menjadi prodi yang unggul dan berkarakter di masa depan yang bermanfaat bagi pengembangan IPTEK dan kemasyarakatan.",
    "Menyelenggarakan pengabdian kepada masyarakat berbasis hasil penelitian dalam bidang teknologi, dunia industri yang bermanfaat bagi Masyarakat.",
    "Menjalin kerjasama secara berkelanjutan dengan lembaga Pendidikan tinggi, dunia usaha dan dunia Industri (DUDI) dalam bidang tridharma perguruan tinggi baik ditingkat lokal, nasional maupun internasional.",
    "Menciptakan iklim akademik yang terintegrasi pada keseluruhan proses pembelajaran, penelitian, serta mengembangkan strategi pembelajaran matematika berbasis case method dan team based project untuk menghasilkan karya mahasiswa yang terukur.",
    "Menyebarluaskan hasil penelitian ilmu matematika yang orisinal dan inovatif melalui pertemuan ilmiah dan jurnal berkala nasional dan internasional."
  ];

  const profilJobs = [
    'Matematikawan Industri & Pemodelan',
    'Peneliti & Akademisi Matematika',
    'Analis Data & Sains Data (Data Scientist)',
    'Konsultan Optimasi & Riset Operasi',
    'Aktuaris & Analis Risiko Keuangan',
    'Pengembang Perangkat Lunak & Algoritma'
  ];

  return (
    <ContentPage 
      title="S1 Matematika"
      subtitle="Mengeksplorasi keindahan dan kedalaman ilmu matematika murni dan terapan untuk riset, industri, dan akademik."
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
            Lulusan Program Studi S1 Matematika diarahkan untuk menguasai fondasi teori matematika murni serta penerapannya dalam matematika industri, pemodelan sistem, sains data, dan komputasi. Selain itu, lulusan juga dibekali kemampuan analitis dan berpikir logis yang kuat untuk memecahkan persoalan riil di dunia kerja, industri manufaktur, lembaga penelitian, perbankan dan aktuaria, maupun melanjutkan studi ke jenjang pascasarjana.
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
