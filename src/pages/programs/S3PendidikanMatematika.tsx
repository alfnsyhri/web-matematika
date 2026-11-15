import { ContentPage } from '../../pages/PlaceholderPage';

export const S3PendidikanMatematika = () => (
  <ContentPage 
    title="S3 Pendidikan Matematika"
    subtitle="Program Doktor Pendidikan Matematika — Jenjang doktoral tertinggi untuk melahirkan ilmuwan, pakar teori, dan pemimpin riset pendidikan matematika internasional."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <span className="text-accent text-xs font-mono font-bold uppercase tracking-[0.3em] block mb-3">Program Pascasarjana Doktoral</span>
        <h3 className="text-3xl font-display font-bold mb-6 italic">Keunggulan Riset Program Doktor</h3>
        <p className="text-white/80 leading-relaxed mb-10 text-base md:text-lg max-w-3xl">
          Program Doktor (S3) Pendidikan Matematika FMIPA UNIMED berfokus pada penemuan teori baru (novelty), publikasi internasional terindeks bereputasi tinggi (Scopus Q1/Q2), filsafat ilmu matematika, dan pemecahan isu fundamental pendidikan matematika dunia.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Filsafat Pendidikan', icon: '📜' },
            { label: 'Teori Konstruktivisme', icon: '🧠' },
            { label: 'Publikasi Scopus', icon: '🌐' },
            { label: 'Riset Disertasi', icon: '🎓' },
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
          <h4 className="text-2xl font-display font-bold text-primary italic">Promotor & Pembimbing Disertasi</h4>
          <p className="text-primary/70 text-sm leading-relaxed">
            Mahasiswa doktoral dibimbing langsung oleh jajaran Guru Besar (Profesor) dan Doktor bereputasi internasional di lingkungan Jurusan Matematika FMIPA UNIMED yang aktif dalam asosiasi riset matematika dunia.
          </p>
          <ul className="text-sm text-primary/70 space-y-2 pt-2 border-t border-light">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Bimbingan intensif penyusunan Disertasi & Publikasi Internasional</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Keterlibatan dalam Kolokium Riset Internasional</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-primary/5 shadow-sm space-y-4">
          <h4 className="text-2xl font-display font-bold text-primary italic">Informasi Pendaftaran S3</h4>
          <p className="text-primary/70 text-sm leading-relaxed">
            Jalur masuk dibuka melalui Program Pascasarjana UNIMED dengan seleksi proposal disertasi, kemampuan bahasa Inggris (TOEFL/IELTS), dan wawancara akademik.
          </p>
          <div className="p-4 bg-light rounded-2xl border border-primary/5 text-xs text-primary/80 space-y-1.5">
            <p><strong>Syarat:</strong> Lulusan Magister (S2) bidang Pendidikan Matematika / Matematika dengan IPK minimal 3.25.</p>
            <p><strong>Masa Studi:</strong> 6 Semester (46 - 52 SKS).</p>
          </div>
        </div>
      </div>
    </div>
  </ContentPage>
);
