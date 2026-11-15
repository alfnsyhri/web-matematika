import { ContentPage } from './PlaceholderPage';

export const Konferensi = () => (
  <ContentPage 
    title="Konferensi & Seminar"
    subtitle="Agenda pertemuan ilmiah skala nasional dan internasional yang diselenggarakan oleh Jurusan Matematika FMIPA UNIMED."
  >
    <div className="space-y-12">
      <div className="space-y-8">
        {[
          { 
            name: "Seminar Nasional Matematika & Terapan (SEMAMATIKA) 2026", 
            date: "24 Oktober 2026", 
            venue: "Auditorium Digital Library UNIMED", 
            status: "Call for Papers",
            theme: "Inovasi Matematika, Sains Data, dan Kecerdasan Buatan untuk Indonesia Emas"
          },
          { 
            name: "International Conference on Mathematics, Computing & Statistics (ICMCS)", 
            date: "18 Agustus 2026", 
            venue: "Grand City Hall Medan / Hybrid Conference", 
            status: "Early Bird Open",
            theme: "Advances in Computational Science, Statistical Modeling, and Mathematics Education"
          },
          { 
            name: "Kolokium Riset Pendidikan Matematika & Informatika", 
            date: "12 Juni 2026", 
            venue: "Ruang Seminar FMIPA UNIMED", 
            status: "Pendaftaran Dibuka",
            theme: "Transformasi Digital dan Pedagogi Kreatif dalam Pembelajaran Abad 21"
          }
        ].map((conf, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 p-10 bg-white rounded-[3rem] shadow-sm border border-primary/5 hover:border-accent/40 items-center transition-all group">
            <div className="bg-primary text-white p-6 rounded-3xl text-center min-w-[150px] shadow-md group-hover:scale-105 transition-transform">
               <span className="text-3xl font-display font-bold block text-accent">{conf.date.split(' ')[0]}</span>
               <span className="text-xs font-mono uppercase tracking-widest text-white/80">{conf.date.split(' ').slice(1).join(' ')}</span>
            </div>
            <div className="flex-1 space-y-2">
               <span className="text-xs font-bold text-accent uppercase tracking-widest font-mono py-1 px-3 bg-accent/10 rounded-full inline-block">
                 {conf.status}
               </span>
               <h4 className="text-2xl font-display font-bold text-primary italic leading-tight group-hover:text-secondary transition-colors">
                 {conf.name}
               </h4>
               <p className="text-primary/70 text-sm font-medium">{conf.theme}</p>
               <p className="text-primary/40 text-xs italic">{conf.venue}</p>
            </div>
            <button className="px-8 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all text-sm shrink-0">
              Info Detail & Panduan
            </button>
          </div>
        ))}
      </div>
    </div>
  </ContentPage>
);
