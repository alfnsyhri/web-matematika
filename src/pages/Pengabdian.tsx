import { ContentPage } from './PlaceholderPage';

export const Pengabdian = () => (
  <ContentPage 
    title="Pengabdian Kepada Masyarakat"
    subtitle="Implementasi ilmu matematika, teknologi komputasi, dan analisis data untuk memberdayakan masyarakat, sekolah, dan UMKM."
  >
    <div className="space-y-12">
      <div className="prose prose-primary max-w-none text-primary/80 leading-relaxed mb-10 text-base">
        <p>
          Pengabdian kepada Masyarakat (PkM) merupakan salah satu pilar Tri Dharma Perguruan Tinggi di Jurusan Matematika FMIPA UNIMED. Kami berkomitmen untuk mentransfer keilmuan matematika terapan, komputasi, dan literasi data secara langsung ke sekolah, lembaga pemerintah, dan komunitas lokal demi peningkatan kualitas pendidikan dan daya saing ekonomi digital masyarakat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: 'Literasi Numerasi Sekolah', 
            desc: 'Pelatihan asesmen numerasi dan strategi pembelajaran matematika kontekstual bagi guru SD, SMP, dan SMA di Sumatera Utara.' 
          },
          { 
            title: 'Digitalisasi & Analisis Data UMKM', 
            desc: 'Pendampingan pencatatan keuangan digital dan analisis tren penjualan berbasis teknologi cloud bagi pelaku UMKM di Deli Serdang.' 
          },
          { 
            title: 'Coding & Algoritma for Kids', 
            desc: 'Workshop pengenalan dasar logika berpikir algoritmik dan pemrograman visual bagi siswa tingkat sekolah menengah.' 
          },
          { 
            title: 'Klinik Statistika Desa', 
            desc: 'Pendampingan perangkat desa dalam tata kelola basis data kependudukan dan pemetaan profil desa berbasis data presisi.' 
          },
          { 
            title: 'Pembinaan Olimpiade Matematika', 
            desc: 'Program bimbingan intensif bagi siswa berprestasi dalam persiapan kompetisi Olimpiade Sains Nasional (OSN).' 
          },
          { 
            title: 'Workshop STEM & AI Terapan', 
            desc: 'Pemberdayaan guru-guru sains dalam pemanfaatan alat bantu AI generatif dan simulator matematika untuk pembelajaran interaktif.' 
          },
        ].map((p, i) => (
          <div key={i} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-primary/5 hover:border-accent/40 hover:-translate-y-1.5 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-light flex items-center justify-center text-primary font-bold mb-5 group-hover:bg-accent group-hover:text-primary transition-colors">
              {i + 1}
            </div>
            <h4 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{p.title}</h4>
            <p className="text-sm text-primary/60 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </ContentPage>
);
