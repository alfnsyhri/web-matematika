import { ContentPage } from '../PlaceholderPage';

export const Sejarah = () => (
  <ContentPage 
    title="Sejarah Jurusan"
    subtitle="Perjalanan panjang pengembangan ilmu matematika di Universitas Negeri Medan sejak tahun 1965."
  >
    <div className="space-y-12">
      <div className="prose prose-primary max-w-none text-primary/80 leading-relaxed">
        <p>
          Jurusan Matematika di Universitas Negeri Medan (dahulu bernama IKIP Medan) memiliki sejarah yang kaya dan dinamis. Berdiri sejak tahun 1965, jurusan ini awalnya difokuskan sebagai pencetak tenaga kependidikan matematika yang handal untuk tingkat sekolah menengah.
        </p>
        <p>
          Seiring dengan transformasi IKIP Medan menjadi Universitas Negeri Medan (UNIMED) pada tahun 1999, Jurusan Matematika pun memperluas cakrawala keilmuannya. Dimulailah era di mana matematika tidak hanya diajarkan sebagai metodologi pendidikan, tetapi juga sebagai ilmu murni yang berorientasi pada riset fundamental, komputasi, dan terapan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5">
          <h4 className="text-xl font-display font-bold text-primary mb-4">Milestone Penting</h4>
          <ul className="space-y-4">
            {[
              { year: '1965', event: 'Pembukaan Departemen Matematika IKIP Medan.' },
              { year: '1999', event: 'Transformasi menjadi Jurusan Matematika UNIMED.' },
              { year: '2005', event: 'Pendirian Program Sarjana (S1) Matematika Murni.' },
              { year: '2010', event: 'Pembukaan Program Studi Ilmu Komputer dan Statistika.' },
              { year: '2023', event: 'Akreditasi UNGGUL untuk seluruh program studi.' },
            ].map((m, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="font-mono text-accent font-bold">{m.year}</span>
                <span className="text-sm text-primary/70">{m.event}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary p-8 rounded-3xl shadow-xl text-white">
          <h4 className="text-xl font-display font-bold mb-4">Evolusi Fasilitas</h4>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Dimulai dari satu ruang komputer manual, kini Jurusan Matematika memiliki 6 laboratorium komputasi dan statistika modern yang mendukung riset dan pembelajaran berbasis data.
          </p>
          <div className="h-40 overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-80" alt="History" />
          </div>
        </div>
      </div>

      <div className="space-y-6 text-primary/80 leading-relaxed">
        <p>
          Kini, Jurusan Matematika UNIMED telah menjadi salah satu barometer pendidikan matematika dan sains komputer di Indonesia, khususnya di wilayah Sumatera Utara, dengan ribuan alumni yang tersebar di berbagai instansi pemerintah, pendidikan, industri teknologi, dan lembaga riset nasional maupun internasional.
        </p>
      </div>
    </div>
  </ContentPage>
);
