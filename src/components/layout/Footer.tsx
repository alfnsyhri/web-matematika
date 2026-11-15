import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 text-white border-t border-accent/20 relative overflow-hidden">
      {/* Subtle gold glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="UNIMED Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png";
                  }}
                />
              </div>
              <span className="text-3xl font-display font-bold whitespace-nowrap">
                Math <span className="text-accent">·</span> UNIMED
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-8 text-sm">
              Membangun masa depan melalui keunggulan riset, integritas akademik, dan penguasaan sains matematika, komputasi modern, serta analisis statistika.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -4, color: '#D4A322' }}
                  href="#" 
                  className="p-3 bg-primary/40 rounded-full border border-white/5 transition-colors hover:border-accent/40"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-accent">Profil</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><Link to="/profil/sambutan" className="hover:text-accent transition-colors">Sambutan Ketua Jurusan</Link></li>
              <li><Link to="/profil/sejarah" className="hover:text-accent transition-colors">Sejarah</Link></li>
              <li><Link to="/profil/visi-misi" className="hover:text-accent transition-colors">Visi & Misi</Link></li>
              <li><Link to="/faculty" className="hover:text-accent transition-colors">Staf Pengajar</Link></li>
              <li><Link to="/profil/alumni" className="hover:text-accent transition-colors">Alumni (IKAMATA)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-accent">Akademik</h4>
            <div className="space-y-4 text-white/70 text-sm">
              <div>
                <p className="text-[11px] font-mono font-bold uppercase text-accent/90 tracking-wider mb-2">Program Sarjana (S1)</p>
                <ul className="space-y-1.5 pl-2 border-l border-white/10">
                  <li><Link to="/programs/pendidikan-matematika" className="hover:text-accent transition-colors block">S1 Pendidikan Matematika</Link></li>
                  <li><Link to="/programs/matematika" className="hover:text-accent transition-colors block">S1 Matematika</Link></li>
                  <li><Link to="/programs/ilmu-komputer" className="hover:text-accent transition-colors block">S1 Ilmu Komputer</Link></li>
                  <li><Link to="/programs/statistika" className="hover:text-accent transition-colors block">S1 Statistika</Link></li>
                </ul>
              </div>
              <div className="pt-1">
                <p className="text-[11px] font-mono font-bold uppercase text-accent/90 tracking-wider mb-2">Program Magister (S2)</p>
                <ul className="space-y-1.5 pl-2 border-l border-white/10">
                  <li><Link to="/programs/s2-pendidikan-matematika" className="hover:text-accent transition-colors block">S2 Pendidikan Matematika</Link></li>
                </ul>
              </div>
              <div className="pt-1">
                <p className="text-[11px] font-mono font-bold uppercase text-accent/90 tracking-wider mb-2">Program Pascasarjana (S3)</p>
                <ul className="space-y-1.5 pl-2 border-l border-white/10">
                  <li><Link to="/programs/s3-pendidikan-matematika" className="hover:text-accent transition-colors block">S3 Pendidikan Matematika</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-accent">Kontak</h4>
            <ul className="space-y-4 text-white/70 text-sm mb-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Gedung FMIPA, Jl. Willem Iskandar Pasar V, Medan Estate, Sumatera Utara 20221</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>(061) 6613365</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>matematika@unimed.ac.id</span>
              </li>
            </ul>
            <div className="rounded-2xl overflow-hidden h-36 border border-white/10 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.93282216669!2d98.7128695758242!3d3.602058096372134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cbf499d63f%3A0x6b45493aa96eeb88!2sFMIPA%20Universitas%20Negeri%20Medan!5e0!3m2!1sid!2sid!4v1715533800000!5m2!1sid!2sid"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi FMIPA UNIMED"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} Jurusan Matematika FMIPA Universitas Negeri Medan. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-white/50">
            <a href="#" className="hover:text-accent transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-accent transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-accent transition-colors">Portal UNIMED</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
