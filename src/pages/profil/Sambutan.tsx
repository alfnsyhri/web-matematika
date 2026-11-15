import { ContentPage } from '../PlaceholderPage';
import kajurPhoto from '../../assets/ketua-jurusan.jpg';

export const Sambutan = () => (
  <ContentPage
    title="Sambutan Ketua Jurusan"
    subtitle="Selamat datang di laman resmi Jurusan Matematika, Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Medan."
  >
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-64 aspect-[3/4] rounded-3xl overflow-hidden bg-primary shadow-xl shrink-0">
          <img
            src={kajurPhoto}
            alt="Ketua Jurusan"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-display font-bold text-primary">Dr. Hamidah Nasution, M.Si.</h3>
          <p className="text-primary/40 font-mono text-sm tracking-widest uppercase">Ketua Jurusan Matematika</p>
          <div className="h-1 w-20 bg-accent" />
          <div className="space-y-4 text-primary/70 leading-relaxed italic font-serif-alt text-xl">
            <p>"Assalamu'alaikum Warahmatullahi Wabarakatuh,"</p>
            <p>Puji syukur kita panjatkan ke hadirat Allah SWT atas segala rahmat dan karunia-Nya. Selamat datang di portal informasi Jurusan Matematika UNIMED. Kami berkomitmen menyelenggarakan pendidikan tinggi yang bermutu, inovatif, dan berkarakter dalam bidang matematika, ilmu komputer, dan statistika.</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 text-primary/80 leading-relaxed">
        <p>
          Jurusan Matematika FMIPA UNIMED terus berupaya menjawab tantangan era digital dengan mengintegrasikan teknologi komputasi dan data science dalam proses pembelajaran dan riset. Fokus kami tidak hanya pada penguasaan teori, tetapi juga pada pengembangan kemampuan berpikir logis, analitis, dan kreatif.
        </p>
        <p>
          Melalui website ini, kami berharap dapat memberikan gambaran komprehensif mengenai profil, program pendidikan, penelitian, serta berbagai pencapaian yang telah kami raih. Kami mengundang seluruh elemen masyarakat, calon mahasiswa, dan stakeholders untuk berkolaborasi bersama kami dalam membangun ekosistem matematika dan komputasi yang unggul di Sumatera Utara.
        </p>
        <p>
          Semoga keberadaan website ini bermanfaat bagi kemajuan ilmu pengetahuan dan layanan pendidikan di Indonesia.
        </p>
        <p className="pt-8">Wassalamu'alaikum Warahmatullahi Wabarakatuh.</p>
      </div>
    </div>
  </ContentPage>
);
