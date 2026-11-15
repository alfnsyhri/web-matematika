import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock } from 'lucide-react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Umum', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: 'Umum', message: '' });
    }, 1200);
  };

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading 
              title="Hubungi Kami" 
              subtitle="Pintu kami selalu terbuka untuk diskusi ilmiah, kerjasama riset, konsultasi komputasi dan analisis data, maupun informasi seputar pendaftaran mahasiswa baru." 
            />
            
            <div className="space-y-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex gap-6 items-start group"
              >
                <div className="p-4 bg-light rounded-2xl text-primary group-hover:bg-accent group-hover:text-primary transition-colors border border-primary/5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1 text-primary">Alamat Sekretariat</h5>
                  <p className="text-primary/70 leading-relaxed text-sm">
                    Gedung Jurusan Matematika FMIPA UNIMED<br />
                    Jl. Willem Iskandar Pasar V, Medan Estate, Sumatera Utara 20221
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="p-4 bg-light rounded-2xl text-primary group-hover:bg-accent group-hover:text-primary transition-colors border border-primary/5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1 text-primary">Telepon / Fax</h5>
                  <p className="text-primary/70 text-sm">(061) 6613365 ext. 214</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="flex gap-6 items-start group"
              >
                <div className="p-4 bg-light rounded-2xl text-primary group-hover:bg-accent group-hover:text-primary transition-colors border border-primary/5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1 text-primary">Jam Layanan Akademik</h5>
                  <p className="text-primary/70 text-sm">Senin – Jumat: 08.00 – 16.00 WIB</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 items-start group"
              >
                <div className="p-4 bg-light rounded-2xl text-primary group-hover:bg-accent group-hover:text-primary transition-colors border border-primary/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-xl mb-1 text-primary">Email Resmi</h5>
                  <p className="text-primary/70 text-sm">
                    matematika@unimed.ac.id<br />
                    fmipa.math@unimed.ac.id
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-neutral p-10 md:p-12 rounded-[3rem] border border-primary/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <CheckCircle className="text-primary w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-primary mb-4">Pesan Terkirim!</h4>
                  <p className="text-primary/70 mb-8 max-w-sm mx-auto text-sm">
                    Terima kasih telah menghubungi Jurusan Matematika UNIMED. Tim kami akan segera merespons melalui email Anda.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="font-bold text-accent hover:underline text-sm uppercase tracking-wider"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h4 className="text-2xl font-display font-bold text-primary mb-2">Formulir Pesan</h4>
                  <p className="text-xs text-primary/60 mb-6">Silakan lengkapi formulir di bawah ini untuk pertanyaan atau kerja sama.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-primary/70 uppercase tracking-widest pl-1 font-bold">Nama Lengkap</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Contoh: Budi Santoso"
                        className="w-full bg-white border border-primary/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-accent shadow-sm transition-all text-sm"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-primary/70 uppercase tracking-widest pl-1 font-bold">Alamat Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="nama@email.com"
                        className="w-full bg-white border border-primary/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-accent shadow-sm transition-all text-sm"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-primary/70 uppercase tracking-widest pl-1 font-bold">Tujuan / Subjek</label>
                    <select 
                      className="w-full bg-white border border-primary/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-accent shadow-sm transition-all text-sm"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    >
                      <option>Informasi Umum</option>
                      <option>Pendidikan Matematika</option>
                      <option>Matematika Murni</option>
                      <option>Ilmu Komputer</option>
                      <option>Statistika</option>
                      <option>Kerjasama Riset & Industri</option>
                      <option>Layanan Legalisir & Administrasi</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-primary/70 uppercase tracking-widest pl-1 font-bold">Pesan Anda</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tuliskan pertanyaan atau keperluan Anda di sini..."
                      className="w-full bg-white border border-primary/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-accent shadow-sm transition-all text-sm resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-md group"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    {!isSubmitting && <Send className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 rounded-[3.5rem] overflow-hidden shadow-2xl h-[450px] border border-primary/10"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.93282216669!2d98.7128695758242!3d3.602058096372134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cbf499d63f%3A0x6b45493aa96eeb88!2sFMIPA%20Universitas%20Negeri%20Medan!5e0!3m2!1sid!2sid!4v1715533800000!5m2!1sid!2sid"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta FMIPA UNIMED"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
