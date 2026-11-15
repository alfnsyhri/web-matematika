import { ContentPage } from '../../pages/PlaceholderPage';

export const PendidikanMatematika = () => (
  <ContentPage 
    title="S1 Pendidikan Matematika"
    subtitle="Mencetak pendidik matematika profesional yang inovatif, kreatif, dan mampu menginspirasi generasi penerus bangsa."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl">
        <h3 className="text-3xl font-display font-bold mb-6 italic">Fokus Program</h3>
        <p className="text-white/70 leading-relaxed mb-10 text-lg">
          Program Studi Pendidikan Matematika menitikberatkan pada penguasaan ilmu matematika yang kuat sekaligus kemampuan pedagogis yang tinggi. Mahasiswa disiapkan menjadi guru dan pendidik yang mampu mengintegrasikan teknologi dalam proses pembelajaran matematika yang menyenangkan dan efektif.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Pedagogik', icon: '📚' },
            { label: 'Kurikulum', icon: '📋' },
            { label: 'Evaluasi', icon: '📊' },
            { label: 'Teknologi', icon: '💻' },
          ].map((field, i) => (
            <div key={i} className="text-center p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="text-3xl mb-3">{field.icon}</div>
              <div className="text-sm font-bold uppercase tracking-widest">{field.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-display font-bold text-primary italic">Peluang Karir</h3>
        <div className="prose prose-primary max-w-none text-primary/70">
          <p>
            Lulusan Pendidikan Matematika memiliki prospek karir yang luas: guru matematika SMP/SMA, dosen perguruan tinggi, pengembang kurikulum di Kemendikbud, trainer pendidikan, konsultan pendidikan, maupun wirausahawan di bidang edukasi dan teknologi pembelajaran.
          </p>
        </div>
      </div>
    </div>
  </ContentPage>
);
