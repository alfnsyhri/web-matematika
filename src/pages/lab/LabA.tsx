import { ContentPage } from '../PlaceholderPage';

export const LabA = () => (
  <ContentPage 
    title="Laboratorium Komputasi"
    subtitle="Pusat praktikum pemrograman, algoritma, dan pengembangan perangkat lunak mahasiswa Jurusan Matematika."
  >
    <div className="space-y-12">
      <div className="aspect-video w-full rounded-[3rem] overflow-hidden bg-primary shadow-2xl relative">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-80" alt="Lab Komputasi" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-12">
          <p className="text-white text-xl font-serif-alt italic">"Presisi dalam Setiap Baris Kode"</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-display font-bold text-primary italic">Fasilitas Utama</h3>
          <ul className="space-y-4 text-primary/70">
            <li>• 60 Unit Komputer Berprosesor Intel Core i7</li>
            <li>• Server Lokal untuk Praktikum Jaringan</li>
            <li>• Software: Python, R, MATLAB, Visual Studio Code</li>
            <li>• Koneksi Internet Fiber Optik Dedicated</li>
          </ul>
        </div>
        <div className="bg-neutral p-10 rounded-[3rem] space-y-4">
          <h3 className="text-2xl font-display font-bold text-primary italic">Kepala Laboratorium</h3>
          <p className="text-primary/80 font-medium">Dr. Syahril Sitompul, M.Kom.</p>
          <div className="h-px w-full bg-primary/10" />
          <p className="text-sm text-primary/40 leading-relaxed italic">
            "Lab Komputasi fokus pada praktikum pemrograman, pengembangan algoritma, dan riset kecerdasan buatan bagi mahasiswa Ilmu Komputer dan Matematika."
          </p>
        </div>
      </div>
    </div>
  </ContentPage>
);
