import { ReactNode, useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

// Loading bar polos & bersih dari kiri ke kanan (seperti YouTube / GitHub)
// Warna mengikuti nuansa hijau - kuning emas tema Jurusan Matematika
const TopLoadingBar = () => {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Jalankan garis loading dari kiri ke kanan saat load atau pindah halaman
    setVisible(true);
    setProgress(25);

    const step1 = setTimeout(() => setProgress(70), 120);
    const step2 = setTimeout(() => setProgress(100), 300);
    const step3 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 550);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, [pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-secondary via-accent to-accent-light shadow-[0_0_8px_rgba(212,163,34,0.6)]"
        style={{ 
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 
            ? 'width 0.2s ease-out, opacity 0.25s ease 0.1s' 
            : 'width 0.2s ease-out'
        }}
      />
    </div>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen">
      <TopLoadingBar />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
