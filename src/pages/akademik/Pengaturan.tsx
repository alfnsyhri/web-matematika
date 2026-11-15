import { ContentPage } from '../PlaceholderPage';

export const Pengaturan = () => (
  <ContentPage 
    title="Pengaturan Akademik"
    subtitle="Informasi regulasi, kalender akademik, dan pedoman perkuliahan di lingkungan Jurusan Matematika UNIMED."
  >
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Kalender Akademik', desc: 'Jadwal perkuliahan, UTS, UAS, dan masa pengisian KRS semester aktif.', link: '#' },
          { title: 'Buku Pedoman Akademik', desc: 'SOP administrasi, persuratan, dan aturan kemahasiswaan Jurusan Matematika.', link: '#' },
          { title: 'SOP Skripsi & Tugas Akhir', desc: 'Tahapan pendaftaran judul hingga pelaksanaan yudisium dan sidang skripsi.', link: '#' },
          { title: 'Layanan Surat Online', desc: 'Request surat keterangan mahasiswa aktif dan dokumen akademik secara digital.', link: '#' },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-primary/5 hover:border-accent/30 transition-colors group">
            <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
            <p className="text-sm text-primary/60 mb-6">{item.desc}</p>
            <a href={item.link} className="text-xs font-mono font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors">Unduh Dokumen →</a>
          </div>
        ))}
      </div>
    </div>
  </ContentPage>
);
