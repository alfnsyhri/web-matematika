import { ContentPage } from './PlaceholderPage';

export const Penelitian = () => (
  <ContentPage 
    title="Penelitian & Riset Unggulan"
    subtitle="Mendorong penemuan baru, pemodelan matematis, dan inovasi teknologi informasi melalui riset kolaboratif civitas akademika Jurusan Matematika UNIMED."
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-primary p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <h3 className="text-2xl font-display font-bold mb-6 text-accent italic">Grup Riset (Research Clusters)</h3>
          <ul className="space-y-4 text-white/80 text-sm">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span><strong>Analisis, Aljabar & Teori Graf:</strong> Struktur aljabar murni dan riset kombinatorika.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span><strong>Kecerdasan Buatan & Komputasi:</strong> Machine learning, deep learning, NLP, dan computer vision.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span><strong>Statistika Terapan & Sains Data:</strong> Analisis deret waktu, inferensi Bayesian, dan big data analytics.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span><strong>Inovasi Pendidikan Matematika:</strong> Etnomatematika, media pembelajaran digital interaktif, dan Realistic Mathematics Education (RME).</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-primary/5 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4 italic">Dana Hibah & Kerjasama Riset</h3>
            <p className="text-primary/70 text-sm leading-relaxed mb-6">
              Dosen dan mahasiswa Jurusan Matematika aktif meraih berbagai skema hibah nasional bergengsi seperti Hibah DRTPM Kemendikbudristek, Hibah Riset Unggulan UNIMED, LPDP, serta program kolaborasi riset industri teknologi dan lembaga perbankan.
            </p>
          </div>
          <div className="p-4 bg-light rounded-2xl border border-primary/5">
            <p className="text-xs text-primary/60 font-mono mb-2 uppercase tracking-wider">Statistik Publikasi 2025/2026</p>
            <div className="flex justify-between items-center text-primary font-bold">
              <span>Scopus Q1/Q2: <strong>38 Paper</strong></span>
              <span>SINTA 1-2: <strong>64 Artikel</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-display font-bold text-primary italic text-center">Topik Penelitian Terkini</h3>
        <div className="space-y-4">
          {[
            { tag: 'AI & Data', title: 'Penerapan Deep Learning untuk Prediksi Cuaca Ekstrem dan Manajemen Bencana di Wilayah Sumatera Bagian Utara.' },
            { tag: 'Statistika', title: 'Pemodelan Spatio-Temporal untuk Analisis Distribusi Ketahanan Pangan Nasional.' },
            { tag: 'Aljabar', title: 'Kajian Nilai Karakteristik dan Spektrum Graf Terhubung pada Jaringan Topologi Kompleks.' },
            { tag: 'Edukasi', title: 'Pengembangan Laboratorium Virtual Berbasis Web untuk Pembelajaran Geometri Ruang Tingkat Sekolah Menengah.' },
          ].map((res, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-white rounded-2xl items-start sm:items-center border border-primary/5 shadow-sm hover:border-accent/40 transition-colors">
              <span className="font-mono text-accent text-xs font-bold uppercase py-1.5 px-4 bg-accent/10 rounded-full shrink-0">{res.tag}</span>
              <h4 className="text-primary font-medium text-sm sm:text-base">{res.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ContentPage>
);
