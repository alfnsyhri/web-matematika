import { ContentPage } from '../../pages/PlaceholderPage';

export const Matematika = () => (
  <ContentPage 
    title="S1 Matematika"
    subtitle="Mengeksplorasi keindahan dan kedalaman ilmu matematika murni dan terapan untuk riset, industri, dan akademik."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl">
        <h3 className="text-3xl font-display font-bold mb-6 italic">Fokus Riset</h3>
        <p className="text-white/70 leading-relaxed mb-10 text-lg">
          Program Studi Matematika menitikberatkan pada penguasaan mendalam teori matematika, kemampuan pembuktian formal, dan aplikasi matematika di berbagai bidang. Mahasiswa dilatih menjadi pemikir analitis yang mampu memecahkan persoalan kompleks dengan kerangka matematis yang kuat.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Aljabar', icon: '∑' },
            { label: 'Analisis', icon: '∫' },
            { label: 'Geometri', icon: '△' },
            { label: 'Optimasi', icon: '◎' },
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
            Lulusan Matematika memiliki prospek karir di berbagai sektor: peneliti di lembaga riset nasional (BRIN, LIPI), analis kuantitatif di perbankan dan keuangan, aktuaris di perusahaan asuransi, data scientist di perusahaan teknologi, serta akademisi dan dosen di perguruan tinggi.
          </p>
        </div>
      </div>
    </div>
  </ContentPage>
);
