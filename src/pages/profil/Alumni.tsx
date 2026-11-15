import { ContentPage } from '../PlaceholderPage';

export const Alumni = () => (
  <ContentPage 
    title="Alumni"
    subtitle="Jejaring lulusan Jurusan Matematika UNIMED yang berkontribusi nyata di dunia teknologi, pendidikan, dan industri."
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Dr. Ahmad Fauzi, M.Sc.', role: 'Data Scientist Senior di GoTo', year: 'Lulus 2007' },
          { name: 'Siti Rahma, M.Pd.', role: 'Kepala Sekolah & Pengembang Kurikulum', year: 'Lulus 2010' },
          { name: 'Budi Pranata, S.Kom.', role: 'CTO Startup Fintech Nasional', year: 'Lulus 2013' },
        ].map((alumni, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-neutral rounded-2xl mb-6 flex items-center justify-center text-primary/20">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <h4 className="text-xl font-display font-bold text-primary mb-1">{alumni.name}</h4>
            <p className="text-accent text-sm font-bold mb-2">{alumni.role}</p>
            <p className="text-primary/40 text-xs font-mono uppercase">{alumni.year}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary p-12 rounded-[3rem] text-white">
        <h3 className="text-3xl font-display font-bold mb-8 italic">Ikatan Alumni Matematika (IKAMATA)</h3>
        <p className="text-white/70 leading-relaxed mb-8">
          IKAMATA merupakan wadah silaturahmi dan kolaborasi bagi seluruh lulusan Jurusan Matematika UNIMED. Kami mengundang seluruh alumni untuk mengisi database alumni guna memperkuat jaringan dan memberikan motivasi bagi adik-adik mahasiswa yang sedang menempuh studi.
        </p>
        <button className="px-8 py-4 bg-accent text-primary font-bold rounded-full hover:scale-105 transition-transform">
          Isi Tracer Study
        </button>
      </div>
    </div>
  </ContentPage>
);
