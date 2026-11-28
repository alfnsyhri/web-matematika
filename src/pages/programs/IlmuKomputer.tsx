import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export const IlmuKomputer = () => {
  useEffect(() => {
    window.location.replace('https://csunimed.com/');
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 text-center">
      <div className="max-w-md bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-200 shadow-sm space-y-5">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <ExternalLink className="w-7 h-7 text-yellow-600" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-primary font-display mb-2">
            Mengalihkan ke Portal Resmi
          </h2>
          <p className="text-xs md:text-sm text-primary/70 leading-relaxed">
            Anda sedang dialihkan ke website resmi Program Studi S1 Ilmu Komputer FMIPA UNIMED di{' '}
            <span className="font-mono text-primary font-bold">csunimed.com</span>.
          </p>
        </div>
        <a 
          href="https://csunimed.com/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold rounded-xl hover:bg-green-900 transition-colors shadow-sm"
        >
          <span>Buka csunimed.com Sekarang</span>
          <ExternalLink className="w-4 h-4 text-yellow-400" />
        </a>
      </div>
    </div>
  );
};
