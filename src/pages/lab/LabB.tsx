import { ContentPage } from '../PlaceholderPage';

export const LabB = () => (
  <ContentPage 
    title="Laboratorium Statistika"
    subtitle="Infrastruktur riset statistika dan analisis data untuk pemodelan, inferensi, dan visualisasi data."
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Analisis Data', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
          { label: 'Visualisasi Data', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
          { label: 'Machine Learning', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
        ].map((f, i) => (
          <div key={i} className="group relative h-64 overflow-hidden rounded-[2rem] bg-dark">
            <img src={f.img} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" alt={f.label} />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <h4 className="text-white font-display font-bold text-lg text-center">{f.label}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-12 rounded-[3.5rem] border border-primary/5 shadow-sm">
        <h3 className="text-2xl font-display font-bold text-primary mb-8 italic">Perangkat & Software</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
               <p className="font-bold text-primary">Software R & RStudio</p>
               <p className="text-sm text-primary/60">Analisis statistika lanjutan, pemodelan, dan visualisasi data interaktif.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
               <p className="font-bold text-primary">Python (Pandas, NumPy, Scikit-learn)</p>
               <p className="text-sm text-primary/60">Pemrosesan data, machine learning, dan deep learning terapan.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
               <p className="font-bold text-primary">SPSS & Minitab</p>
               <p className="text-sm text-primary/60">Analisis statistika deskriptif dan inferensial untuk riset akademik.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
            <div>
               <p className="font-bold text-primary">Tableau & Power BI</p>
               <p className="text-sm text-primary/60">Visualisasi data profesional untuk presentasi dan dashboard interaktif.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentPage>
);
