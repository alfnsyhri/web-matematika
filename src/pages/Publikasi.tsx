import { ContentPage } from './PlaceholderPage';

export const Publikasi = () => (
  <ContentPage 
    title="Publikasi & Jurnal Ilmiah"
    subtitle="Arsip karya ilmiah, jurnal akademik terakreditasi, dan kontribusi riset civitas akademika Jurusan Matematika FMIPA UNIMED."
  >
    <div className="space-y-12">
      <div className="bg-neutral p-10 rounded-[3rem] border border-primary/5">
        <h3 className="text-2xl font-display font-bold text-primary mb-6 italic">Jurnal Ilmiah Terbitan Jurusan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-primary/5 hover:border-accent/40 transition-colors">
             <div className="flex justify-between items-start mb-2">
               <h4 className="text-xl font-bold text-primary">INSPECT: Journal of Mathematics & Computation</h4>
               <span className="text-xs font-mono font-bold bg-accent/15 text-accent px-2.5 py-1 rounded-full uppercase">SINTA 2</span>
             </div>
             <p className="text-sm text-primary/60 mb-6">Memuat hasil riset matematika murni, komputasi numerik, algoritma cerdas, dan sains data terkini.</p>
             <button className="text-xs font-mono font-bold uppercase text-primary hover:text-accent underline transition-colors">Kunjungi Portal OJS →</button>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-primary/5 hover:border-accent/40 transition-colors">
             <div className="flex justify-between items-start mb-2">
               <h4 className="text-xl font-bold text-primary">Jurnal Inspirasi Pendidikan Matematika</h4>
               <span className="text-xs font-mono font-bold bg-accent/15 text-accent px-2.5 py-1 rounded-full uppercase">SINTA 3</span>
             </div>
             <p className="text-sm text-primary/60 mb-6">Fokus pada inovasi pedagogik, etnomatematika, pengembangan instrumen asesmen, dan teknologi edukasi matematika.</p>
             <button className="text-xs font-mono font-bold uppercase text-primary hover:text-accent underline transition-colors">Kunjungi Portal OJS →</button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-display font-bold text-primary italic">Publikasi Internasional Unggulan</h3>
        <div className="space-y-4">
          {[
            { title: "A Novel Deep Reinforcement Learning Framework for Multivariate Time Series Forecasting", journal: "IEEE Transactions on Neural Networks and Learning Systems (Q1)", year: "2026" },
            { title: "On the Metric Dimension and Edge-Metric Dimension of Selected Corona Product Graphs", journal: "Discrete Applied Mathematics (Q1)", year: "2025" },
            { title: "Bayesian Spatial Survival Model with Application to Epidemiology Health Data", journal: "Computational Statistics & Data Analysis (Q2)", year: "2025" },
            { title: "Enhancing Mathematical Computational Thinking via Gamified Adaptive Learning Platforms", journal: "Educational Technology & Society (Q1)", year: "2026" },
          ].map((pub, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-primary/5 shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-4 hover:border-accent/30 transition-colors">
               <div>
                 <p className="text-primary font-semibold text-base mb-1">{pub.title}</p>
                 <p className="text-xs text-primary/50 italic">{pub.journal}</p>
               </div>
               <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto">{pub.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ContentPage>
);
