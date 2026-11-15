import { ContentPage } from '../../pages/PlaceholderPage';

export const IlmuKomputer = () => (
  <ContentPage 
    title="S1 Ilmu Komputer"
    subtitle="Kuasai pemrograman, algoritma, kecerdasan buatan, dan pengembangan sistem digital untuk menjadi talenta teknologi masa depan."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl">
        <h3 className="text-3xl font-display font-bold mb-6 italic">Fokus Bidang</h3>
        <p className="text-white/70 leading-relaxed mb-10 text-lg">
          Program Studi Ilmu Komputer mempersiapkan mahasiswa untuk menguasai fondasi teoritis dan praktis ilmu komputer, mulai dari algoritma dan struktur data, pengembangan perangkat lunak, hingga kecerdasan buatan dan komputasi berbasis cloud. Kurikulum dirancang selaras dengan kebutuhan industri teknologi global.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Algoritma', icon: '⚙️' },
            { label: 'AI & ML', icon: '🤖' },
            { label: 'Web & Mobile', icon: '📱' },
            { label: 'Keamanan', icon: '🔐' },
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
            Lulusan Ilmu Komputer memiliki prospek karir yang sangat luas: software engineer, data scientist, AI researcher, cybersecurity analyst, cloud architect, mobile developer, product manager teknologi, hingga startup founder di ekosistem teknologi nasional dan internasional.
          </p>
        </div>
      </div>
    </div>
  </ContentPage>
);
