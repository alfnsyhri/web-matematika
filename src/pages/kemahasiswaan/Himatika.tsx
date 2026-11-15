import { ContentPage } from '../PlaceholderPage';

export const Himatika = () => (
  <ContentPage 
    title="HIMATIKA UNIMED"
    subtitle="Himpunan Mahasiswa Jurusan Matematika — Media aspirasi, kreativitas, dan pengembangan potensi mahasiswa FMIPA UNIMED."
  >
    <div className="space-y-12">
      <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <span className="text-accent text-xs font-mono font-bold tracking-[0.3em] uppercase block mb-3">Organisasi Mahasiswa</span>
        <h3 className="text-3xl font-display font-bold mb-6 italic">Tentang HIMATIKA UNIMED</h3>
        <p className="text-white/80 leading-relaxed mb-8 max-w-3xl text-sm md:text-base">
          Himpunan Mahasiswa Jurusan Matematika (HIMATIKA) FMIPA UNIMED menaungi seluruh mahasiswa dari 4 program studi: S1 Pendidikan Matematika, S1 Matematika, S1 Ilmu Komputer, dan S1 Statistika. HIMATIKA berkomitmen membangun sinergi intelektual, kepemimpinan, dan keakraban sosial antar civitas mahasiswa.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
          {[
            { label: 'Instagram', handle: '@himatika.unimed' },
            { label: 'YouTube', handle: 'Himatika UNIMED Official' },
            { label: 'TikTok', handle: '@himatika_unimed' },
            { label: 'Podcast', handle: 'Math & Tech Podcast' },
          ].map((soc, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/40 transition-colors">
              <span className="text-accent text-xs font-mono font-bold uppercase block mb-1">{soc.label}</span>
              <span className="text-white/80 text-xs font-medium truncate block">{soc.handle}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Divisi Penalaran & Riset',
            desc: 'Memfasilitasi kelompok belajar olimpiade matematika (ONMIPA/KNMIPA), kompetisi coding, data science challenge, dan bimbingan karya tulis ilmiah.'
          },
          {
            title: 'Divisi Media & Komunikasi',
            desc: 'Mengelola publikasi digital, buletin matematika, dokumentasi video kreatif, serta pemeliharaan media sosial resmi jurusan.'
          },
          {
            title: 'Divisi Minat, Bakat & Pengmas',
            desc: 'Menyelenggarakan kegiatan olahraga, pentas seni, Mathematics Festival, serta program pengabdian edukasi ke panti asuhan dan desa binaan.'
          }
        ].map((divisi, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-primary/5 shadow-sm hover:border-accent/30 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-light text-primary font-bold flex items-center justify-center mb-5">
              {i + 1}
            </div>
            <h4 className="text-xl font-display font-bold text-primary mb-3">{divisi.title}</h4>
            <p className="text-sm text-primary/60 leading-relaxed">{divisi.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </ContentPage>
);
