import { ContentPage } from '../PlaceholderPage';

export const Berita = () => (
  <ContentPage 
    title="Berita & Informasi Terkini"
    subtitle="Warta terkini mengenai prestasi mahasiswa, agenda riset, seminar, dan dinamika akademik di lingkungan Jurusan Matematika FMIPA UNIMED."
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: 'Mahasiswa Ilmu Komputer Sabet Juara 1 Nasional Hackathon AI Innovation 2026', 
            date: '14 Mei 2026', 
            category: 'Prestasi',
            img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800' 
          },
          { 
            title: 'Jurusan Matematika UNIMED Jalin Kerjasama Strategis dengan Lembaga Riset Data Nasional', 
            date: '10 Mei 2026', 
            category: 'Kerjasama',
            img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' 
          },
          { 
            title: 'Workshop Kurikulum Berbasis Outcome-Based Education (OBE) untuk 4 Program Studi', 
            date: '04 Mei 2026', 
            category: 'Akademik',
            img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800' 
          },
          { 
            title: 'Tim Dosen Matematika Lolos Pendanaan Hibah Riset Fundamental Kemendikbudristek', 
            date: '28 April 2026', 
            category: 'Penelitian',
            img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800' 
          },
          { 
            title: 'HIMATIKA Sukses Gelar Olimpiade Matematika dan Statistika Tingkat Pelajar Se-Sumatera', 
            date: '20 April 2026', 
            category: 'Kemahasiswaan',
            img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' 
          },
          { 
            title: 'Kuliah Umum Bersama Pakar AI: Masa Depan Matematika Terapan dalam Era Generative Intelligence', 
            date: '15 April 2026', 
            category: 'Kuliah Umum',
            img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' 
          },
        ].map((news, i) => (
          <div key={i} className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-primary/5 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="aspect-video overflow-hidden relative bg-dark">
                <img src={news.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85" alt={news.title} />
                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest bg-primary/90 text-accent px-3 py-1 rounded-full backdrop-blur-sm">
                  {news.category}
                </span>
              </div>
              <div className="p-8">
                <span className="text-accent text-xs font-mono font-bold uppercase tracking-widest">{news.date}</span>
                <h4 className="text-xl font-display font-bold text-primary mt-2 group-hover:text-secondary transition-colors leading-snug">
                  "{news.title}"
                </h4>
              </div>
            </div>
            <div className="px-8 pb-8 pt-0">
              <span className="text-xs font-mono font-bold text-primary group-hover:text-accent transition-colors">
                Baca Selengkapnya →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </ContentPage>
);
