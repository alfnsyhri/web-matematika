import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../../assets/logo.png';

interface NavItem {
  name: string;
  href?: string;
  children?: NavItem[];
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { name: 'Beranda', href: '/' },
    {
      name: 'Profil',
      children: [
        { name: 'Sambutan Ketua Jurusan', href: '/profil/sambutan' },
        { name: 'Sejarah Jurusan', href: '/profil/sejarah' },
        { name: 'Visi & Misi', href: '/profil/visi-misi' },
        { name: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
        { name: 'Staf Pengajar', href: '/faculty' },
        { name: 'Alumni', href: '/profil/alumni' },
      ]
    },
    {
      name: 'Akademik',
      children: [
        {
          name: 'Program Sarjana',
          children: [
            { name: 'S1 Pendidikan Matematika', href: '/programs/pendidikan-matematika' },
            { name: 'S1 Matematika', href: '/programs/matematika' },
            { name: 'S1 Ilmu Komputer', href: '/programs/ilmu-komputer' },
            { name: 'S1 Statistika', href: '/programs/statistika' },
          ]
        },
        {
          name: 'Program Magister',
          children: [
            { name: 'S2 Pendidikan Matematika', href: '/programs/s2-pendidikan-matematika' },
          ]
        },
        {
          name: 'Program Doktor',
          children: [
            { name: 'S3 Pendidikan Matematika', href: '/programs/s3-pendidikan-matematika' },
          ]
        },
        { name: 'Pengaturan Akademik', href: '/akademik/pengaturan' },
      ]
    },
    {
      name: 'Riset & PkM',
      children: [
        { name: 'Penelitian & Riset', href: '/penelitian' },
        { name: 'Pengabdian Masyarakat', href: '/pengabdian' },
        { name: 'Publikasi & Jurnal', href: '/publikasi' },
        { name: 'Konferensi Ilmiah', href: '/konferensi' },
      ]
    },
    {
      name: 'Fasilitas',
      children: [
        { name: 'Lab Komputasi & AI', href: '/lab/a' },
        { name: 'Lab Statistika & Data', href: '/lab/b' },
        { name: 'Sarana & Prasarana', href: '/lab/sarana' },
      ]
    },
    {
      name: 'Kemahasiswaan',
      children: [
        { name: 'Kegiatan Mahasiswa', href: '/kemahasiswaan/kegiatan' },
        { name: 'HIMATIKA UNIMED', href: '/kemahasiswaan/himatika' },
      ]
    },
    {
      name: 'Informasi',
      children: [
        { name: 'Berita & Agenda', href: '/informasi/berita' },
        { name: 'Pusat Unduhan File', href: '/informasi/unduh' },
      ]
    },
  ];

  const isHomePage = location.pathname === '/';

  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileSubmenus(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const DesktopDropdown = ({ item, isSubmenu = false, isScrolled, isHomePage }: { item: NavItem, isSubmenu?: boolean, isScrolled: boolean, isHomePage: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 120);
    };

    return (
      <div
        className="relative group/nav"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={cn(
            "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors py-2",
            isScrolled || isHomePage ? "text-white/85 hover:text-accent" : "text-primary/80 hover:text-primary",
            isSubmenu && "w-full justify-between px-4 py-3 hover:bg-light hover:text-primary text-primary/80!"
          )}
        >
          {item.name}
          {item.children && (isSubmenu ? <ChevronRight className="w-4 h-4 opacity-50" /> : <ChevronDown className="w-4 h-4 opacity-50 group-hover/nav:rotate-180 transition-transform duration-200" />)}
        </button>

        <AnimatePresence>
          {isOpen && item.children && (
            <motion.div
              initial={{ opacity: 0, y: isSubmenu ? 0 : 8, x: isSubmenu ? 8 : 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: isSubmenu ? 0 : 5, x: isSubmenu ? 5 : 0 }}
              transition={{ duration: 0.18 }}
              className={cn(
                "absolute bg-white rounded-2xl shadow-2xl py-2 min-w-[230px] border border-primary/10 z-[60]",
                isSubmenu ? "left-full top-0 ml-1.5" : "top-full left-0 mt-2"
              )}
            >
              {item.children.map((child) => (
                <div key={child.name}>
                  {child.children ? (
                    <DesktopDropdown item={child} isSubmenu isScrolled={isScrolled} isHomePage={isHomePage} />
                  ) : (
                    <Link
                      to={child.href!}
                      className="block px-4 py-2.5 text-sm text-primary/80 hover:text-primary hover:bg-light/80 hover:border-l-2 hover:border-accent transition-all"
                    >
                      {child.name}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? 'py-3.5 backdrop-blur-md bg-primary/95 shadow-xl border-b border-accent/20'
          : 'py-6 bg-transparent'
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0"
            >
              <img
                src={logo}
                alt="UNIMED Logo"
                className="w-full h-full object-contain drop-shadow-md"
                onError={(e) => {
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png";
                }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={cn(
                "text-2xl font-display font-bold tracking-tight transition-colors",
                isScrolled || isHomePage ? "text-white" : "text-primary"
              )}>
                Math <span className="text-accent">·</span> UNIMED
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.25em] font-mono -mt-1 font-semibold",
                isScrolled || isHomePage ? "text-accent/90" : "text-secondary"
              )}>
                Jurusan Matematika FMIPA
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <DesktopDropdown item={link} isScrolled={isScrolled} isHomePage={isHomePage} />
                ) : (
                  <Link
                    to={link.href!}
                    className={cn(
                      "relative text-sm font-medium tracking-wide transition-colors group py-2",
                      location.pathname === link.href
                        ? "text-accent font-semibold"
                        : (isScrolled || isHomePage ? "text-white/85 hover:text-white" : "text-primary/70 hover:text-primary")
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                      location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className={cn(
                "px-6 py-2.5 font-bold rounded-full text-xs shadow-lg transition-all hover:scale-105 active:scale-95 ml-3 border",
                isScrolled || isHomePage
                  ? "bg-accent text-primary border-accent-light/40 shadow-accent/20 hover:bg-accent-light"
                  : "bg-primary text-white border-primary shadow-primary/20 hover:bg-secondary"
              )}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors",
              isScrolled || isHomePage ? "text-white" : "text-primary"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Buka menu navigasi"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 280 }}
            className="fixed inset-0 z-[101] bg-primary flex flex-col p-8 overflow-y-auto w-screen h-screen border-l border-accent/20"
          >
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Logo UNIMED"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png"; }}
                  />
                </div>
                <div>
                  <span className="text-xl font-display font-bold text-white tracking-tight block">Math · UNIMED</span>
                  <span className="text-[10px] uppercase font-mono text-accent tracking-widest">Jurusan Matematika</span>
                </div>
              </div>
              <button
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Tutup menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(link.name)}
                        className="flex items-center justify-between text-xl font-display font-bold text-white py-2"
                      >
                        {link.name}
                        <ChevronDown className={cn("w-5 h-5 text-accent transition-transform", openMobileSubmenus.includes(link.name) && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {openMobileSubmenus.includes(link.name) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-2.5 pl-4 pt-2 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <div key={child.name}>
                                {child.children ? (
                                  <>
                                    <button
                                      onClick={() => toggleMobileSubmenu(child.name)}
                                      className="flex items-center justify-between text-base font-medium text-white/80 py-1 w-full"
                                    >
                                      {child.name}
                                      <ChevronDown className={cn("w-4 h-4 text-accent transition-transform", openMobileSubmenus.includes(child.name) && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                      {openMobileSubmenus.includes(child.name) && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="flex flex-col gap-2 pl-4 pt-1 overflow-hidden"
                                        >
                                          {child.children.map((grandChild) => (
                                            <Link
                                              key={grandChild.name}
                                              to={grandChild.href!}
                                              className="text-white/60 hover:text-accent py-1 text-sm transition-colors"
                                              onClick={() => setMobileMenuOpen(false)}
                                            >
                                              {grandChild.name}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    to={child.href!}
                                    className="text-base font-medium text-white/80 hover:text-accent py-1 inline-block transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href!}
                      className={cn(
                        "text-xl font-display font-bold py-2 transition-colors",
                        location.pathname === link.href ? "text-accent" : "text-white"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 py-4 bg-accent text-primary font-bold rounded-2xl text-center text-base block shadow-xl hover:bg-accent-light transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
