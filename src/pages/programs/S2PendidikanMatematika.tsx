import { ContentPage } from '../../pages/PlaceholderPage';

export const S2PendidikanMatematika = () => (
  <ContentPage 
    title="S2 Pendidikan Matematika"
    subtitle="Program Magister Pendidikan Matematika — Menghasilkan pakar, pendidik unggul, dan peneliti inovatif di bidang pedagogi matematika modern."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <span className="text-accent text-xs font-mono font-bold uppercase tracking-[0.3em] block mb-3">Program Pascasarjana</span>
        <h3 className="text-3xl font-display font-bold mb-6 italic">Visi & Fokus Program Magister</h3>
        <p className="text-white/80 leading-relaxed mb-10 text-base md:text-lg max-w-3xl">
          Program Studi Magister (S2) Pendidikan Matematika FMIPA UNIMED didesain untuk memperdalam keilmuan matematika lanjut, teori belajar mutakhir, desain pembelajaran berbasis teknologi, serta metodologi penelitian kuantitatif dan kualitatif tingkat lanjut.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Desain Instruksional', icon: '📐' },
            { label: 'Etnomatematika', icon: '🏛️' },
            { label: 'Evaluasi Pembelajaran', icon: '📊' },
            { label: 'Teknologi Edukasi', icon: '💻' },
          ].map((field, i) => (
            <div key={i} className="text-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-accent/30 transition-colors">
              <div className="text-3xl mb-3">{field.icon}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/90">{field.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[3rem] border border-primary/5 shadow-sm space-y-4">
          <h4 className="text-2xl font-display font-bold text-primary italic">Profil Lulusan</h4>
          <p className="text-primary/70 text-sm leading-relaxed">
            Lulusan berpeluang besar sebagai dosen di perguruan tinggi negeri maupun swasta, konsultan kurikulum, peneliti di balai riset pendidikan, widyaprada / pengawas sekolah, serta kepala institusi pendidikan bereputasi nasional.
          </p>
          <ul className="text-sm text-primary/70 space-y-2 pt-2 border-t border-light">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Dosen & Peneliti Pendidikan Tinggi</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Pengembang Kurikulum & Modul Digital</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Konsultan Asesmen & Literasi Numerasi</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-primary/5 shadow-sm space-y-4">
          <h4 className="text-2xl font-display font-bold text-primary italic">Penerimaan Mahasiswa Baru</h4>
          <p className="text-primary/70 text-sm leading-relaxed">
            Pendaftaran dibuka setiap semester ganjil dan genap melalui jalur Seleksi Mandiri Masuk Program Pascasarjana (SM-PPs) Universitas Negeri Medan.
          </p>
          <div className="p-4 bg-light rounded-2xl border border-primary/5 text-xs text-primary/80 space-y-1.5">
            <p><strong>Syarat:</strong> Ijazah S1 bidang Pendidikan Matematika / Matematika / Sains serumpun dengan IPK minimal 3.00.</p>
            <p><strong>Masa Studi:</strong> 4 Semester (36 - 42 SKS).</p>
          </div>
        </div>
      </div>
    </div>
  </ContentPage>
);
