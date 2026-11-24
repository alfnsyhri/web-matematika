import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Faculty } from './pages/Faculty';
import { Contact } from './pages/Contact';

// Profil
import { Sambutan } from './pages/profil/Sambutan';
import { Sejarah } from './pages/profil/Sejarah';
import { VisiMisi } from './pages/profil/VisiMisi';
import { StrukturOrganisasi } from './pages/profil/StrukturOrganisasi';
import { Alumni } from './pages/profil/Alumni';

// Akademik - Program Studi
import { PendidikanMatematika } from './pages/programs/PendidikanMatematika';
import { Matematika } from './pages/programs/Matematika';
import { IlmuKomputer } from './pages/programs/IlmuKomputer';
import { Statistika } from './pages/programs/Statistika';
import { S2PendidikanMatematika } from './pages/programs/S2PendidikanMatematika';
import { S3PendidikanMatematika } from './pages/programs/S3PendidikanMatematika';
import { Pengaturan } from './pages/akademik/Pengaturan';

// Penelitian & Pengabdian
import { Penelitian } from './pages/Penelitian';
import { Pengabdian } from './pages/Pengabdian';
import { Publikasi } from './pages/Publikasi';
import { Konferensi } from './pages/Konferensi';

// Lab & Fasilitas
import { LabA } from './pages/lab/LabA';
import { LabB } from './pages/lab/LabB';
import { Sarana } from './pages/lab/Sarana';

// Kemahasiswaan
import { Kegiatan } from './pages/kemahasiswaan/Kegiatan';
import { Himatika } from './pages/kemahasiswaan/Himatika';

// Informasi
import { Berita } from './pages/informasi/Berita';
import { Unduh } from './pages/informasi/Unduh';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Profil */}
          <Route path="/profil/sambutan" element={<Sambutan />} />
          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route path="/profil/visi-misi" element={<VisiMisi />} />
          <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/profil/alumni" element={<Alumni />} />

          {/* Akademik - Program Sarjana & Pascasarjana */}
          <Route path="/programs" element={<PendidikanMatematika />} />
          <Route path="/programs/pendidikan-matematika" element={<PendidikanMatematika />} />
          <Route path="/programs/matematika" element={<Matematika />} />
          <Route path="/programs/ilmu-komputer" element={<IlmuKomputer />} />
          <Route path="/programs/statistika" element={<Statistika />} />
          <Route path="/programs/s2-pendidikan-matematika" element={<S2PendidikanMatematika />} />
          <Route path="/programs/s2-pendidikan" element={<S2PendidikanMatematika />} />
          <Route path="/programs/s3-pendidikan-matematika" element={<S3PendidikanMatematika />} />
          <Route path="/akademik/pengaturan" element={<Pengaturan />} />

          {/* Penelitian & Pengabdian */}
          <Route path="/penelitian" element={<Penelitian />} />
          <Route path="/pengabdian" element={<Pengabdian />} />
          <Route path="/publikasi" element={<Publikasi />} />
          <Route path="/konferensi" element={<Konferensi />} />

          {/* Fasilitas */}
          <Route path="/lab/a" element={<LabA />} />
          <Route path="/lab/b" element={<LabB />} />
          <Route path="/lab/sarana" element={<Sarana />} />

          {/* Kemahasiswaan */}
          <Route path="/kemahasiswaan/kegiatan" element={<Kegiatan />} />
          <Route path="/kemahasiswaan/himatika" element={<Himatika />} />
          <Route path="/kemahasiswaan/biokominfo" element={<Himatika />} />

          {/* Informasi */}
          <Route path="/informasi/berita" element={<Berita />} />
          <Route path="/informasi/unduh" element={<Unduh />} />
        </Routes>
      </Layout>
    </Router>
  );
}
