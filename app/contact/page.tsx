import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Kontak | Green Puspa",
  description: "Hubungi komunitas Green Puspa RW 06 Utan Kayu Selatan.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Mari berdiskusi, berkolaborasi, atau sekadar menyapa kami.
        </p>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">Informasi Kontak</h2>
              <div className="space-y-6 text-muted-foreground mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Alamat</h3>
                    <p>Jalan Kramat Asem, RT 01 / RW 06<br />Kelurahan Utan Kayu Selatan<br />Kecamatan Matraman, Jakarta Timur 13120</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Jam Berkunjung</h3>
                    <p>Sabtu & Minggu: 08:00 - 15:00 WIB<br />(Mohon konfirmasi sebelumnya)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p>info@greenpuspa.org (Contoh)</p>
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold mb-4">Media Sosial</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.youtube.com/@greenpuspa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 px-4 py-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors font-medium text-sm"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.instagram.com/green.puspa06/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 px-4 py-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors font-medium text-sm"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.tiktok.com/@greenpuspa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 px-4 py-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors font-medium text-sm"
                >
                  TikTok
                </a>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="space-y-8">
              <div className="bg-card border shadow-sm p-8 rounded-2xl">
                <h2 className="font-heading text-2xl font-bold mb-6">Kirim Pesan</h2>
                <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nama</label>
                      <Input id="name" name="name" required placeholder="Nama Anda" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" name="email" type="email" required placeholder="email@contoh.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subjek</label>
                    <Input id="subject" name="subject" required placeholder="Subjek Pesan" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Pesan</label>
                    <Textarea id="message" name="message" required placeholder="Tulis pesan Anda di sini..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg">Kirim Pesan</Button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px] border">
            {/* Google Maps Embed Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.529849202796!2d106.866504!3d-6.20239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDguNiJTIDEwNsKwNTInMDAuMCJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
