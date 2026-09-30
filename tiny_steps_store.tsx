import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronDown,
  ChevronUp,
  Share,
  Copy,
  Check,
  Facebook,
  Twitter,
  Baby,
  Heart,
  ShoppingBag,
  Store,
  Clock,
  Star,
  Quote,
  Send,
  Info,
  HelpCircle
} from 'lucide-react';

const pageData = {
  name: "Tiny Steps",
  phone: "6289529605601", // Ganti dengan nomor asli
  address: "Jl. Tjilik Riwut Km. 2, Palangka Raya, Kalteng",
  title: "Pusat Perlengkapan Bayi & Anak Terpercaya",
  description: "Temukan segala kebutuhan si kecil dengan kualitas premium, aman, dan nyaman. Menemani setiap langkah kecil tumbuh kembang buah hati Anda.",
  profileImg: "./profile.png", 
  heroImg: "./hero.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Palangka+Raya+City,+Central+Kalimantan/", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  about: {
    history: "Berdiri sejak 2020, Tiny Steps bermula dari dedikasi seorang ibu yang ingin menghadirkan perlengkapan bayi berkualitas tinggi dan terjamin amannya. Kini, kami bangga telah menjadi bagian dari perjalanan ribuan keluarga di seluruh Indonesia, memastikan setiap langkah kecil anak Anda didukung oleh produk terbaik.",
    values: ["100% Aman & SNI", "Material Organik", "Harga Terjangkau"]
  },
  catalog: [
    {
      name: "Stroller Compact Premium",
      price: "Rp 1.450.000",
      image: "./catalog-stroller.webp",
      category: "Travel"
    },
    {
      name: "Set Pakaian Bayi Organik",
      price: "Rp 185.000",
      image: "./catalog-clothes.webp",
      category: "Pakaian"
    },
    {
      name: "Mainan Edukasi Kayu Montess",
      price: "Rp 120.000",
      image: "./catalog-toys.webp",
      category: "Mainan"
    },
    {
      name: "Pompa ASI Elektrik Smart",
      price: "Rp 850.000",
      image: "./catalog-breastpump.webp",
      category: "Keperluan Ibu"
    }
  ],
  faqs: [
    {
      q: "Apakah produk pakaian aman untuk kulit bayi sensitif?",
      a: "Tentu! Semua lini pakaian kami terbuat dari 100% katun organik tersertifikasi yang bebas dari bahan kimia berbahaya, sehingga sangat aman untuk kulit bayi yang sensitif."
    },
    {
      q: "Bisa tukar barang jika ukuran tidak pas?",
      a: "Bisa. Kami memberikan garansi penukaran ukuran maksimal 3 hari setelah barang diterima, dengan syarat tag belum dilepas dan barang belum dicuci."
    },
    {
      q: "Apakah ada layanan bungkus kado?",
      a: "Ya, kami menyediakan layanan 'Gift Wrapping' gratis lengkap dengan kartu ucapan untuk setiap pembelanjaan minimal Rp 300.000."
    }
  ],
  testimonials: [
    { name: "Bunda Rania", rating: 5, text: "Bahannya super lembut! Anakku yang biasanya rewel pakai baju baru, malah nyaman banget pakai setelan dari Tiny Steps." },
    { name: "Mama Kenzo", rating: 5, text: "Strollernya kokoh tapi ringan banget buat dibawa traveling. Adminnya juga ramah banget jelasin cara pakainya. Recommended!" },
    { name: "Ibu Dita", rating: 4, text: "Pilihan mainan edukasinya lengkap dan bahannya aman (food grade). Pengiriman ke luar kota juga cepat dan aman." }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const interest = formData.get('interest');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20tertarik%20untuk%20bertanya/memesan%20${interest}.%20Catatan:%20${notes}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
        
        body {
          background-color: #F6FAF8; /* Soft mint white */
          background-image: linear-gradient(rgba(246, 250, 248, 0.85), rgba(246, 250, 248, 0.90)), url('./background.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #334155;
          margin: 0;
          font-family: 'Quicksand', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full pt-8 pb-10 px-5 flex flex-col items-center text-center rounded-b-[3rem] shadow-md overflow-hidden">
          
          {/* Hero Background Image - Vivid & Clear */}
          <img 
            src={pageData.heroImg} 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle overlay so image shines through while maintaining contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-[#F6FAF8]/95"></div>

          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-5 right-5 z-20 p-2.5 bg-white/80 hover:bg-white backdrop-blur-md rounded-full border border-white/60 text-slate-700 transition-all shadow-md"
          >
            <Share size={18} />
          </button>

          {/* Profile Card Container with Glassmorphism */}
          <div className="relative z-10 w-full mt-24 bg-white/92 backdrop-blur-xl border border-white/70 rounded-[2.5rem] px-5 pt-0 pb-7 shadow-xl flex flex-col items-center">
            
            {/* Logo Avatar overlapping top of card */}
            <div className="w-24 h-24 rounded-full p-1.5 bg-white shadow-xl border-2 border-[#9BD7B5]/50 -mt-12 mb-3 relative flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Tiny Steps Logo" 
                className="w-full h-full rounded-full object-contain p-1"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#F0F6FB] text-[#7AAED6] p-1.5 rounded-full border-2 border-white shadow-sm">
                <Baby size={14} />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-slate-800 mb-1 tracking-tight">
              {pageData.name}
            </h1>
            <p className="text-[#65AD86] font-semibold text-xs mb-3">
              {pageData.title}
            </p>
            <p className="text-slate-600 font-medium text-xs leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            {/* Link Navigation / Buttons */}
            <div className="flex flex-col gap-2.5 w-full mb-6">
              <div className="grid grid-cols-2 gap-2.5 w-full">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-[#9BD7B5]/40 hover:border-[#9BD7B5] transition-all text-slate-700 shadow-sm text-xs font-semibold"
                >
                  <Instagram size={16} className="text-[#9BD7B5]" /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-[#94C3E9]/40 hover:border-[#94C3E9] transition-all text-slate-700 shadow-sm text-xs font-semibold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#94C3E9]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all text-slate-700 shadow-sm text-xs font-semibold"
              >
                <MapPin size={16} className="text-orange-400" /> Lokasi Toko
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-2 w-full py-3.5 bg-[#9BD7B5] text-white rounded-2xl font-bold text-xs tracking-wide hover:bg-[#86CA9F] transition-all shadow-md shadow-[#9BD7B5]/40"
            >
              Tanya / Pesan Produk
              <Send size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* TENTANG KAMI & HISTORY */}
        <section className="pt-12 pb-6 px-6">
          <div className="bg-[#F0F6FB] border border-[#94C3E9]/30 rounded-3xl p-6 relative overflow-hidden">
            <Heart size={120} className="absolute -bottom-10 -right-10 text-[#94C3E9] opacity-20 rotate-12" />
            
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Info className="text-[#7AAED6]" size={22} />
              <h2 className="text-xl font-bold text-slate-800">Tentang Kami</h2>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-5 relative z-10 text-justify">
              {pageData.about.history}
            </p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {pageData.about.values.map((val, idx) => (
                <span key={idx} className="bg-white text-[#7AAED6] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-[#94C3E9]/30 flex items-center gap-1">
                  <Check size={12} /> {val}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* KATALOG & HARGA */}
        <section className="py-8 bg-white border-t border-slate-100">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-[#9BD7B5]" size={22} />
              <h2 className="text-xl font-bold text-slate-800">Katalog Pilihan</h2>
            </div>
            <p className="text-slate-500 text-xs ml-8">Produk terlaris kami dengan harga terbaik.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[205px] flex flex-col rounded-3xl overflow-hidden border border-slate-100 shadow-md bg-white group hover:shadow-lg transition-all"
              >
                <div className="h-[210px] w-full overflow-hidden relative bg-slate-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#76BE96] text-[10px] font-bold px-2 py-1 rounded-lg">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2">{item.name}</h3>
                  <p className="text-[#65AD86] font-bold text-[15px] mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOKASI */}
        <section className="py-8 px-6 bg-slate-50 border-t border-slate-100">
          <div className="mb-6 flex items-center gap-2">
            <Store className="text-orange-400" size={22} />
            <h2 className="text-xl font-bold text-slate-800">Lokasi Toko</h2>
          </div>

          <a 
            href={pageData.links.maps}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="bg-orange-50 p-3 rounded-2xl text-orange-500 group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-slate-800 text-sm">Kunjungi Toko Fisik Kami</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{pageData.address}</p>
              <span className="text-orange-400 text-[11px] font-bold mt-1 flex items-center gap-1">
                Buka di Google Maps <ChevronDown size={12} className="-rotate-90" />
              </span>
            </div>
          </a>
        </section>

        {/* FAQ (Pertanyaan Sering Diajukan) */}
        <section className="py-10 px-6 bg-white border-t border-slate-100">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-[#7AAED6]" size={22} />
              <h2 className="text-xl font-bold text-slate-800">Tanya Jawab (FAQ)</h2>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-slate-700 text-sm pr-4 leading-tight">{faq.q}</span>
                  {activeFaq === index ? (
                    <ChevronUp size={18} className="text-[#9BD7B5] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === index ? 'max-h-40 py-4 border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 text-xs leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI PELANGGAN */}
        <section className="py-10 px-6 bg-[#F6FAF8] border-t border-slate-100">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#9BD7B5]" size={22} />
              <h2 className="text-xl font-bold text-slate-800">Kata Bunda & Ayah</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-5 rounded-3xl border border-[#9BD7B5]/30 shadow-sm flex flex-col gap-3 relative">
                <Quote size={40} className="absolute top-4 right-4 text-[#E9F5EF] opacity-80" />
                <div className="flex items-center gap-1 z-10">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FDE29F] text-[#FDE29F]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed z-10">"{testi.text}"</p>
                <div className="mt-auto pt-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#E9F5EF] flex items-center justify-center text-[#65AD86] font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-slate-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FORM PEMESANAN */}
        <section id="order-form" className="py-12 px-6 bg-white border-t border-slate-100">
          <div className="bg-gradient-to-br from-[#E9F5EF] to-[#F0F6FB] border border-slate-100 rounded-[2.5rem] p-7 shadow-lg relative overflow-hidden">
            
            <div className="relative z-10 mb-6 text-center">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Tertarik dengan Produk Kami?</h2>
              <p className="text-slate-500 text-xs leading-relaxed">Isi form di bawah ini untuk konsultasi atau pemesanan langsung melalui WhatsApp Admin kami.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-600 ml-1">Nama Ayah / Bunda</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama lengkap..."
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#9BD7B5] focus:ring-1 focus:ring-[#9BD7B5] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-600 ml-1">Produk yang Dicari</label>
                <input 
                  type="text" 
                  name="interest" 
                  required
                  placeholder="Cth: Stroller premium, Baju newborn..."
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#9BD7B5] focus:ring-1 focus:ring-[#9BD7B5] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-600 ml-1">Catatan Tambahan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows={3}
                  placeholder="Cth: Ada warna biru? Bisa dikirim hari ini?"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#9BD7B5] focus:ring-1 focus:ring-[#9BD7B5] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-3 bg-[#25D366] text-white font-bold text-sm tracking-wide py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-colors shadow-md"
              >
                <MessageCircle size={18} />
                Hubungi via WhatsApp
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-100 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-[#9BD7B5]/30 flex items-center justify-center mb-4 p-1 overflow-hidden relative">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain p-1 rounded-full" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-bold text-slate-800 text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-[#7AAED6] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-xl border border-[#9BD7B5]/50 rounded-2xl text-slate-800 shadow-[0_10px_40px_rgba(155,215,181,0.25)] hover:bg-[#E9F5EF] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-[#65AD86]">Butuh Bantuan? Tanya Admin</span>
            <div className="bg-[#9BD7B5] text-white p-2 rounded-xl shadow-sm">
              <MessageCircle size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-[2.5rem] p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-800 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1.5 text-slate-400 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#F6FAF8] border border-[#9BD7B5]/30 rounded-[24px] p-6 flex flex-col items-center justify-center mb-6 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[64px] h-[64px] rounded-full border-2 border-white shadow-sm mb-3 object-contain bg-white p-1" />
              <h4 className="text-slate-800 font-bold text-base text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-slate-500 text-xs mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex justify-around gap-2 mb-6">
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={22} className="text-green-600" /> : <Copy size={22} />}
                </button>
                <span className="text-[11px] font-bold text-slate-500 text-center">
                  {copied ? 'Tersalin' : 'Salin'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={22} />
                </button>
                <span className="text-[11px] font-bold text-slate-500 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={22} className="fill-current" />
                </button>
                <span className="text-[11px] font-bold text-slate-500 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank')}
                  className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={22} className="fill-current" />
                </button>
                <span className="text-[11px] font-bold text-slate-500 text-center">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}