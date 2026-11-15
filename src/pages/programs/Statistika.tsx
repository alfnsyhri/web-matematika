import { ContentPage } from '../../pages/PlaceholderPage';

export const Statistika = () => (
  <ContentPage 
    title="S1 Statistika"
    subtitle="Analisis data, pemodelan statistik, dan pengambilan keputusan berbasis data untuk mendorong inovasi di era big data."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl">
        <h3 className="text-3xl font-display font-bold mb-6 italic">Fokus Bidang</h3>
        <p className="text-white/70 leading-relaxed mb-10 text-lg">
          Program Studi Statistika mempersiapkan mahasiswa menjadi ahli analisis data yang kompeten dalam mengolah, menginterpretasi, dan menyajikan data secara bermakna. Mahasiswa dibekali keahlian statistika komputasional, pemodelan matematis, dan visualisasi data menggunakan perangkat lunak terkini seperti R, Python, dan SPSS.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Inferensi', icon: '📈' },
            { label: 'Regresi', icon: '📉' },
            { label: 'Big Data', icon: '🗄️' },
            { label: 'Visualisasi', icon: '📊' },
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
            Lulusan Statistika memiliki prospek karir yang tinggi: data analyst, statistisi di BPS, analis risiko di perbankan, biostatistician di lembaga kesehatan, market researcher di perusahaan konsultan, hingga data scientist dan ML engineer di perusahaan teknologi.
          </p>
        </div>
      </div>
    </div>
  </ContentPage>
);
