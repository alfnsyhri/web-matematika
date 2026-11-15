import { ContentPage } from '../PlaceholderPage';

export const Sarana = () => (
  <ContentPage 
    title="Sarana & Fasilitas Akademik"
    subtitle="Infrastruktur komputasi, ruang perkuliahan interaktif, dan lingkungan akademik modern yang mendukung iklim belajar Jurusan Matematika FMIPA UNIMED."
  >
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-1 bg-accent rounded-full" />
            <span className="font-mono text-accent text-xs uppercase tracking-widest font-bold">Fasilitas Unggulan</span>
          </div>
          <h3 className="text-3xl font-display font-bold text-primary italic leading-tight">Smart Classroom & Ruang Kuliah Multimedia</h3>
          <p className="text-primary/70 leading-relaxed text-sm">
            Seluruh ruang kuliah di Jurusan Matematika telah terintegrasi dengan layar interaktif cerdas, LCD proyektor resolusi tinggi, audio sistem jernih, koneksi internet nirkabel pita lebar (High-Speed Wi-Fi Eduroam), serta pendingin ruangan (AC) untuk kenyamanan studi yang optimal.
          </p>
        </div>
        <div className="rounded-[3rem] overflow-hidden shadow-xl aspect-video border border-primary/10">
           <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Ruang Kuliah Smart" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: 'Lab Komputasi & AI', 
            desc: 'Dilengkapi 60 unit PC berperforma tinggi, server riset GPU, dan lisensi perangkat lunak analisis seperti MATLAB, Python, R, dan compiler modern.' 
          },
          { 
            title: 'Lab Statistika & Big Data', 
            desc: 'Pusat riset dan praktikum analisis data, inferensi terapan, komputasi visual, serta pengolahan survei dengan SPSS, R, Stata, dan Tableau.' 
          },
          { 
            title: 'Pojok Diskusi & Ruang Baca', 
            desc: 'Koleksi ribuan buku referensi matematika, jurnal internasional terindeks Scopus, serta ruang kolaborasi riset dosen dan mahasiswa.' 
          },
          { 
            title: 'Ruang Microteaching', 
            desc: 'Fasilitas simulasi praktik mengajar bagi mahasiswa Pendidikan Matematika dengan rekaman video digital untuk evaluasi pengajaran.' 
          },
          { 
            title: 'Auditorium Seminar FMIPA', 
            desc: 'Ruang pertemuan berkapasitas 250 orang dengan fasilitas audio visual profesional untuk penyelenggaraan konferensi dan kuliah umum.' 
          },
          { 
            title: 'Sekretariat HIMATIKA', 
            desc: 'Ruang kerja organisasi kemahasiswaan untuk menampung ide, diskusi kepanitiaan, dan pengembangan kreativitas mahasiswa matematika.' 
          },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-neutral rounded-[2.5rem] border border-primary/5 hover:border-accent/40 hover:bg-white transition-all shadow-sm group">
             <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-primary transition-colors">
               {i + 1}
             </div>
             <h4 className="text-xl font-bold text-primary mb-3 italic">{item.title}</h4>
             <p className="text-sm text-primary/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary p-12 md:p-16 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <span className="text-accent text-xs font-mono font-bold tracking-[0.3em] uppercase block mb-3">Ekosistem Kampus</span>
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 italic">Akses Jaringan Riset Digital Library UNIMED</h3>
        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Didukung oleh infrastruktur Digital Library modern Universitas Negeri Medan yang memberikan akses tanpa batas ke jutaan e-book, jurnal internasional bereputasi (Springer, Elsevier, IEEE, JSTOR), dan repositori skripsi terlengkap.
        </p>
      </div>
    </div>
  </ContentPage>
);
