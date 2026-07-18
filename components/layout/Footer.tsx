import Link from "next/link";
import { Leaf, MapPin, TreePine } from "lucide-react";

const footerLinks = {
  pages: [
    { href: "/about", label: "Tentang Kami" },
    { href: "/gallery", label: "Galeri" },
    { href: "/news", label: "Berita" },
    { href: "/contact", label: "Kontak" },
  ],
  info: [
    { href: "/smart-farming", label: "Smart Farming" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Green <span className="text-green-400">Puspa</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Kampung Sehat Terpadu Green Puspa RW 06 Utan Kayu Selatan. Mewujudkan lingkungan hijau dan produktif melalui gotong royong.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@greenpuspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/30 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/green.puspa06/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/30 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@greenpuspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/30 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.62 4.2 1.07 1.21 2.58 2.01 4.17 2.23v3.87c-1.39-.07-2.76-.51-3.93-1.28-.71-.47-1.33-1.07-1.81-1.78v7.56c.01 1.93-.5 3.86-1.5 5.48-1.42 2.29-3.91 3.82-6.63 3.98-2.61.15-5.26-.74-7.09-2.64-1.92-2-2.76-4.9-2.19-7.61.54-2.58 2.37-4.83 4.88-5.69 1.47-.51 3.08-.5 4.54.02v3.91c-.81-.33-1.72-.41-2.55-.17-1.12.31-2.07 1.15-2.47 2.24-.46 1.25-.19 2.7.69 3.69.95 1.07 2.45 1.57 3.84 1.25 1.17-.27 2.16-1.19 2.47-2.35.13-.5.17-1.02.16-1.54V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Halaman</h4>
            <ul className="space-y-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Informasi</h4>
            <ul className="space-y-2.5">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Lokasi</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">RW 06 Utan Kayu Selatan<br />Matraman, Jakarta Timur<br />DKI Jakarta 13120</span>
              </li>
              <li className="flex items-center gap-2.5">
                <TreePine className="w-4 h-4 text-green-400 shrink-0" />
                <span className="text-sm text-gray-400">Sejak 2017</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Green Puspa. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <span className="text-green-400">♥</span> oleh Komunitas RW 06
          </p>
        </div>
      </div>
    </footer>
  );
}
