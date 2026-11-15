import { ContentPage } from '../PlaceholderPage';

export const Unduh = () => (
  <ContentPage 
    title="Pusat Unduhan & Dokumen"
    subtitle="Layanan unduhan dokumen resmi, formulir akademik, panduan skripsi, dan kurikulum Jurusan Matematika FMIPA UNIMED."
  >
    <div className="space-y-8">
      {[
        { 
          category: 'Administrasi Akademik', 
          items: [
            'Formulir Pengajuan Judul Skripsi & Tugas Akhir',
            'Surat Permohonan Izin Riset & Pengambilan Data',
            'SOP Ujian Seminar Proposal dan Sidang Meja Hijau',
            'Formulir Bebas Laboratorium & Perpustakaan',
            'Formulir Pengajuan Cuti Kuliah'
          ] 
        },
        { 
          category: 'Struktur Kurikulum (4 Program Studi)', 
          items: [
            'Kurikulum OBE S1 Pendidikan Matematika',
            'Kurikulum OBE S1 Matematika',
            'Kurikulum OBE S1 Ilmu Komputer',
            'Kurikulum OBE S1 Statistika',
            'Buku Panduan Magang Industri & MBKM'
          ] 
        },
        { 
          category: 'Panduan Laboratorium & Format Dokumen', 
          items: [
            'Tata Tertib Penggunaan Laboratorium Komputasi & Statistika',
            'Template Penulisan Laporan Praktikum Komputer',
            'Template LaTeX & Word untuk Penulisan Skripsi',
            'Panduan Peminjaman Fasilitas Ruang Sidang & Seminar',
            'Aset Logo Resmi Jurusan Matematika UNIMED (Vector & PNG)'
          ] 
        },
      ].map((cat, i) => (
        <div key={i} className="p-10 bg-white rounded-[3rem] border border-primary/5 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-accent rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">{cat.category}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cat.items.map((item, j) => (
              <div key={j} className="flex justify-between items-center p-4 bg-neutral rounded-2xl group cursor-pointer hover:bg-accent/15 border border-primary/5 hover:border-accent transition-all">
                <span className="text-primary/80 font-medium group-hover:text-primary text-sm pr-4">{item}</span>
                <span className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 text-primary shadow-sm group-hover:bg-accent group-hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </ContentPage>
);
