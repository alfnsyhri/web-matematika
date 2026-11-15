import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, User, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { lecturersData, Lecturer } from '@/src/data/lecturers';

type ProdiFilter = 'Semua' | 'Pendidikan Matematika' | 'Matematika' | 'Ilmu Komputer' | 'Statistika';
type LevelFilter = 'Semua' | 'Profesor' | 'Doktor' | 'Magister';

const ITEMS_PER_PAGE = 24;

export const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProdi, setSelectedProdi] = useState<ProdiFilter>('Semua');
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>('Semua');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedProdi, selectedLevel]);

  // Filtered lecturers
  const filteredFaculty = useMemo(() => {
    return lecturersData.filter(doc => {
      const q = searchTerm.toLowerCase().trim();
      const matchSearch = !q ||
        doc.name.toLowerCase().includes(q) ||
        doc.nip.replace(/\s+/g, '').includes(q.replace(/\s+/g, '')) ||
        (doc.originalProdi && doc.originalProdi.toLowerCase().includes(q));

      const matchProdi = selectedProdi === 'Semua' || doc.prodi === selectedProdi;
      const matchLevel = selectedLevel === 'Semua' || doc.level === selectedLevel;

      return matchSearch && matchProdi && matchLevel;
    });
  }, [searchTerm, selectedProdi, selectedLevel]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredFaculty.length / ITEMS_PER_PAGE);
  const paginatedFaculty = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFaculty.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredFaculty, currentPage]);

  const hasActiveFilter = searchTerm !== '' || selectedProdi !== 'Semua' || selectedLevel !== 'Semua';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedProdi('Semua');
    setSelectedLevel('Semua');
    setCurrentPage(1);
  };

  // Helper avatar generator
  const getAvatarUrl = (name: string) => {
    const clean = name
      .replace(/^(Prof\.|Dr\.|Drs\.|Dra\.|Ir\.|Dr\. Eng\.)\s*/gi, '')
      .split(',')[0]
      .trim();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(clean)}&background=12372A&color=D4A322&size=256&bold=true`;
  };

  return (
    <section className="py-32 bg-neutral min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Staf Pengajar"
          subtitle="Tenaga pengajar profesional yang berdedikasi dalam pengembangan matematika, ilmu komputer, dan statistika di Jurusan Matematika UNIMED."
        />

        {/* Unified Clean Search & Filter Bar (Desain Bersih & Alami) */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full border border-primary/10 shadow-sm flex flex-col md:flex-row items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 w-4 h-4 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Cari dosen berdasarkan nama atau NIP..."
                className="w-full pl-11 pr-8 py-2.5 bg-transparent text-sm text-primary placeholder:text-primary/40 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary transition-colors"
                  title="Hapus pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Divider Desktop */}
            <div className="hidden md:block w-px h-6 bg-primary/10" />

            {/* Dropdown Program Studi */}
            <div className="w-full md:w-auto relative">
              <select 
                value={selectedProdi}
                onChange={(e) => setSelectedProdi(e.target.value as ProdiFilter)}
                className="w-full md:w-auto py-2.5 px-4 pr-9 bg-neutral/60 hover:bg-neutral rounded-xl md:rounded-full text-xs font-semibold text-primary focus:outline-none cursor-pointer appearance-none border border-transparent focus:border-accent transition-colors"
              >
                <option value="Semua">Semua Program Studi</option>
                <option value="Pendidikan Matematika">Pendidikan Matematika</option>
                <option value="Matematika">Matematika</option>
                <option value="Ilmu Komputer">Ilmu Komputer</option>
                <option value="Statistika">Statistika</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-primary/40 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Dropdown Jenjang Akademik */}
            <div className="w-full md:w-auto relative">
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as LevelFilter)}
                className="w-full md:w-auto py-2.5 px-4 pr-9 bg-neutral/60 hover:bg-neutral rounded-xl md:rounded-full text-xs font-semibold text-primary focus:outline-none cursor-pointer appearance-none border border-transparent focus:border-accent transition-colors"
              >
                <option value="Semua">Semua Jenjang</option>
                <option value="Profesor">Profesor (Guru Besar)</option>
                <option value="Doktor">Doktor (S3)</option>
                <option value="Magister">Magister (S2)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-primary/40 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Simple status line */}
          <div className="flex justify-between items-center px-4 mt-3 text-xs text-primary/50 font-medium">
            <span>
              Menampilkan {filteredFaculty.length} dosen
              {totalPages > 1 && ` (Halaman ${currentPage} dari ${totalPages})`}
            </span>
            {hasActiveFilter && (
              <button
                onClick={resetFilters}
                className="text-primary hover:text-accent font-semibold transition-colors"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Faculty Grid - Sesuai Model Awal (Blob Signature) */}
        {filteredFaculty.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
              <AnimatePresence mode="popLayout">
                {paginatedFaculty.map((doc) => (
                  <motion.div
                    layout
                    key={doc.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-[2.5rem] border border-primary/5 text-center group hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Signature Blob Photo Container */}
                      <div className="relative mb-6 mx-auto w-36 h-36">
                        <div className="absolute inset-0 bg-accent blob transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                        <div className="absolute inset-2 overflow-hidden blob border-4 border-white z-10 shadow-inner bg-primary flex items-center justify-center">
                          <img
                            src={getAvatarUrl(doc.name)}
                            alt={doc.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <h4 className="text-xl font-display font-bold text-primary mb-1 min-h-[3.5rem] flex items-center justify-center line-clamp-2 leading-snug">
                        {doc.name}
                      </h4>

                      {/* Academic Level */}
                      <p className="text-accent text-xs font-mono mb-2 uppercase tracking-widest font-bold">
                        {doc.level}
                      </p>

                      {/* NIP */}
                      {doc.nip && doc.nip !== '-' && (
                        <p className="text-[11px] font-mono text-primary/45 mb-4">
                          NIP. {doc.nip}
                        </p>
                      )}
                    </div>

                    {/* Footer: Prodi & Details */}
                    <div className="pt-4 border-t border-light mt-2">
                      <p className="text-dark/70 text-sm font-semibold">{doc.prodi}</p>
                      {doc.originalProdi && doc.originalProdi !== doc.prodi && (
                        <p className="text-xs text-primary/50 italic mt-0.5">{doc.originalProdi}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="p-3 bg-white border border-primary/10 rounded-xl disabled:opacity-40 hover:bg-light transition-colors text-primary"
                  title="Halaman Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${currentPage === page
                        ? 'bg-primary text-white shadow-md border border-accent/40'
                        : 'bg-white text-primary/70 border border-primary/10 hover:bg-light'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="p-3 bg-white border border-primary/10 rounded-xl disabled:opacity-40 hover:bg-light transition-colors text-primary"
                  title="Halaman Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center">
            <User className="w-16 h-16 text-primary/10 mx-auto mb-4" />
            <p className="text-xl font-display text-primary/40 italic">Data dosen tidak ditemukan...</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-xs hover:bg-secondary transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
