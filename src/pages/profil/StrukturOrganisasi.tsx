import { useState } from 'react';
import { ContentPage } from '../PlaceholderPage';
import { ZoomIn, X, Users, Award, ShieldCheck, Microscope, ChevronRight } from 'lucide-react';
import strukturImg from '../../assets/profil/struktur-organisasi.jpg';

export const StrukturOrganisasi = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const kaprodiList = [
    {
      prodi: "S1 Pendidikan Matematika",
      nama: "Nurhasanah Siregar, S.Pd., M.Pd.",
      jabatan: "Ketua Program Studi",
      jenjang: "Sarjana (S1)"
    },
    {
      prodi: "S1 Matematika",
      nama: "Didi Febrian, S.Si., M.Sc.",
      jabatan: "Ketua Program Studi",
      jenjang: "Sarjana (S1)"
    },
    {
      prodi: "S1 Ilmu Komputer",
      nama: "Dedy Kiswanto, S.Kom., M.Kom.",
      jabatan: "Ketua Program Studi",
      jenjang: "Sarjana (S1)"
    },
    {
      prodi: "S1 Statistika",
      nama: "Sudianto Manullang, S.Si., M.Sc.",
      jabatan: "Ketua Program Studi",
      jenjang: "Sarjana (S1)"
    },
    {
      prodi: "S2 Pendidikan Matematika",
      nama: "Dr. Mulyono, M.Si.",
      jabatan: "Ketua Program Studi",
      jenjang: "Magister (S2)"
    },
    {
      prodi: "S3 Pendidikan Matematika",
      nama: "Dr. Elmanani Simamora, M.Si.",
      jabatan: "Ketua Program Studi",
      jenjang: "Doktor (S3)"
    }
  ];

  return (
    <ContentPage 
      title="Struktur Organisasi"
      subtitle="Bagan Kepemimpinan dan Tata Kelola Organisasi Jurusan Matematika FMIPA Universitas Negeri Medan"
    >
      <div className="space-y-16">

        {/* Bagan Struktur Organisasi (Gambar Resmi dengan Fitur Zoom) */}
        <div className="bg-white p-6 md:p-10 rounded-[3rem] border border-green-100/90 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <div className="h-1 w-8 bg-yellow-400 rounded-full" />
                <h3 className="text-2xl font-display font-bold text-primary italic">
                  Bagan Struktur Organisasi
                </h3>
              </div>
              <p className="text-xs md:text-sm text-primary/60">
                Jurusan Matematika Fakultas Matematika dan Ilmu Pengetahuan Alam UNIMED
              </p>
            </div>
            
            <button
              onClick={() => setIsZoomed(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-green-800 text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer self-start md:self-auto"
            >
              <ZoomIn className="w-4 h-4 text-yellow-400" />
              <span>Perbesar Bagan</span>
            </button>
          </div>

          <div 
            onClick={() => setIsZoomed(true)}
            className="relative rounded-2xl overflow-hidden border border-gray-200/80 bg-neutral/50 cursor-pointer group flex items-center justify-center p-3 md:p-6"
            title="Klik untuk memperbesar bagan"
          >
            <img 
              src={strukturImg} 
              alt="Bagan Struktur Organisasi Jurusan Matematika FMIPA UNIMED"
              className="w-full h-auto max-h-[650px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/95 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-yellow-400" />
                Klik untuk Melihat Gambar Penuh
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-primary/60 pt-2 gap-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-gray-700 inline-block" />
                <span>Garis Komando</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 border-t border-dashed border-gray-700 inline-block" />
                <span>Garis Koordinasi</span>
              </span>
            </div>
            <span className="font-mono text-[11px] text-gray-400">
              Jurusan Matematika FMIPA UNIMED
            </span>
          </div>
        </div>

        {/* Pimpinan Utama Jurusan */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-1 w-10 bg-yellow-400 rounded-full" />
            <h3 className="text-2xl font-display font-bold text-primary italic">
              Pimpinan Jurusan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ketua Jurusan */}
            <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-md border border-yellow-400/20 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest block mb-3">
                  Pimpinan Tertinggi
                </span>
                <h4 className="text-2xl font-display font-bold text-white mb-2">
                  Dr. Hamidah Nasution, M.Si.
                </h4>
                <p className="text-white/80 text-sm font-medium">
                  Ketua Jurusan Matematika
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>FMIPA Universitas Negeri Medan</span>
                <Award className="w-4 h-4 text-yellow-400" />
              </div>
            </div>

            {/* Sekretaris Jurusan */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-green-100/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-yellow-700 bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-full inline-block mb-3">
                  Sekretariat & Administrasi
                </span>
                <h4 className="text-2xl font-display font-bold text-primary mb-2">
                  Erlinawaty Simanjuntak, S.Pd., M.Si.
                </h4>
                <p className="text-primary/70 text-sm font-medium">
                  Sekretaris Jurusan Matematika
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-primary/50">
                <span>FMIPA Universitas Negeri Medan</span>
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Tim Penjaminan Mutu & Laboratorium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TPMJ & Task Force */}
          <div className="bg-white p-7 md:p-8 rounded-[2.5rem] border border-green-100/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-primary flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-primary">
                  Penjaminan Mutu & Pengembangan
                </h4>
                <span className="text-xs text-gray-500 font-mono">Unsur Pelaksana Mutu</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-primary/75 leading-relaxed">
              Memonitor dan menjamin terlaksananya standar akademik, evaluasi perkuliahan berkala, serta perumusan program strategis jurusan:
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-neutral/80 rounded-xl border border-green-100/60 text-center">
                <span className="font-bold text-sm text-primary block">TPMJ</span>
                <span className="text-[11px] text-gray-500">Tim Penjaminan Mutu Jurusan</span>
              </div>
              <div className="p-3.5 bg-neutral/80 rounded-xl border border-green-100/60 text-center">
                <span className="font-bold text-sm text-primary block">Task Force</span>
                <span className="text-[11px] text-gray-500">Tim Khusus Pengembangan</span>
              </div>
            </div>
          </div>

          {/* Laboratorium Matematika */}
          <div className="bg-white p-7 md:p-8 rounded-[2.5rem] border border-green-100/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-primary flex items-center justify-center font-bold">
                <Microscope className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-primary">
                  Laboratorium Matematika
                </h4>
                <span className="text-xs text-gray-500 font-mono">Unit Riset & Praktikum</span>
              </div>
            </div>
            <div className="space-y-1.5 pt-1">
              <span className="text-xs text-gray-500 block font-mono">Kepala Laboratorium:</span>
              <p className="font-display font-bold text-base text-primary">
                Arnah Ritonga, S.Si., M.Si.
              </p>
            </div>
            <p className="text-xs md:text-sm text-primary/75 leading-relaxed">
              Didukung oleh tenaga Pranata Laboratorium Pendidikan (<strong>Laboran</strong>) untuk menunjang kegiatan praktikum komputasi, statistika, dan pengembangan media pembelajaran.
            </p>
          </div>
        </div>

        {/* Pimpinan Program Studi (Kaprodi) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-200/70 pb-4">
            <div className="flex items-center gap-4">
              <div className="h-1 w-10 bg-yellow-400 rounded-full" />
              <div>
                <h3 className="text-2xl font-display font-bold text-primary italic">
                  Ketua Program Studi
                </h3>
                <p className="text-xs md:text-sm text-primary/60 mt-0.5">
                  Koordinator akademik program sarjana dan pascasarjana
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-primary/70 bg-green-50 border border-green-200 px-3.5 py-1 rounded-full">
              6 Program Studi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kaprodiList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-[2.2rem] border border-green-100/90 shadow-xs hover:border-yellow-400/60 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-yellow-800 bg-yellow-50 border border-yellow-200/80 px-2.5 py-0.5 rounded-full">
                      {item.jenjang}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h5 className="font-bold text-sm text-primary font-mono leading-tight">
                    {item.prodi}
                  </h5>

                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-[11px] text-gray-500 block mb-0.5">Kaprodi:</span>
                    <h4 className="font-display font-bold text-base text-primary leading-snug">
                      {item.nama}
                    </h4>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 text-xs text-primary/60 flex items-center justify-between">
                  <span>{item.jabatan}</span>
                  <ChevronRight className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Civitas Akademika & Tenaga Kependidikan */}
        <div className="bg-neutral/80 p-8 md:p-10 rounded-[2.5rem] border border-green-100/80">
          <div className="flex items-center gap-3.5 mb-4">
            <Users className="w-6 h-6 text-emerald-800" />
            <h4 className="text-xl font-display font-bold text-primary italic">
              Pelaksana Akademik & Administrasi
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-white rounded-2xl border border-green-100/60">
              <span className="font-bold text-sm text-primary block mb-1">Dosen KDBK</span>
              <p className="text-xs text-primary/70">
                Kelompok Dosen Bidang Keahlian yang mengampu rumpun ilmu matematika murni, terapan, komputasi, dan pendidikan.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-green-100/60">
              <span className="font-bold text-sm text-primary block mb-1">Staf Administrasi</span>
              <p className="text-xs text-primary/70">
                Tenaga kependidikan yang melayani tata usaha, persuratan akademik, dan pelayanan kemahasiswaan jurusan.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-green-100/60">
              <span className="font-bold text-sm text-primary block mb-1">Mahasiswa</span>
              <p className="text-xs text-primary/70">
                Peserta didik aktif pada seluruh jenjang program sarjana dan pascasarjana di Jurusan Matematika.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Zoom Gambar Penuh */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:px-6 border-b border-gray-100 bg-neutral">
              <h4 className="font-display font-bold text-primary text-sm md:text-base line-clamp-1">
                Struktur Organisasi Jurusan Matematika FMIPA UNIMED
              </h4>
              <button
                onClick={() => setIsZoomed(false)}
                className="w-8 h-8 rounded-full bg-gray-200/80 hover:bg-gray-300 text-gray-700 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-gray-900/5">
              <img
                src={strukturImg}
                alt="Bagan Struktur Organisasi Jurusan Matematika"
                className="max-h-[78vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </ContentPage>
  );
};
