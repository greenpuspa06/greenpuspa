import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Target, Lightbulb, Users } from "lucide-react";
import opieImage from "@/public/Opie.jpg";

export const metadata = {
  title: "Tentang Kami | Green Puspa",
  description: "Sejarah, visi, dan misi komunitas Green Puspa RW 06 Utan Kayu Selatan.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply z-10" />
          <Image
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
            alt="Tentang Green Puspa"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Tentang Green Puspa</h1>
          <p className="text-lg md:text-xl font-light">Mengenal lebih dekat komunitas petani kota Utan Kayu Selatan.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Awal Mula Perjalanan</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Story */}
            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Program Green Puspa mulai berkembang sekitar tahun 2017. Awalnya, kawasan RW 06 sering terdampak banjir karena berada dekat aliran sungai dan memiliki kondisi lingkungan perkampungan yang padat penduduk. Warga kemudian melakukan berbagai upaya mandiri untuk memperbaiki kondisi tersebut.
              </p>
              <p>
                Melalui inisiatif tokoh penggerak kami, <strong>Bapak Zulfikar Kusdarmawan (Opie)</strong>, warga diajak untuk melakukan penghijauan lingkungan secara terpadu, menata sistem pembuangan air, hingga memanfaatkan lahan sempit di gang-gang untuk budidaya pertanian perkotaan (urban farming).
              </p>
              <p>
                Dari kegiatan gotong royong inilah lahirlah kelompok petani kota <strong>Green Puspa</strong>. Seiring berjalannya waktu, Green Puspa berkembang menjadi model kampung urban farming berbasis masyarakat yang mandiri, berdaya saing, dan menjadi rujukan nasional.
              </p>
            </ScrollReveal>

            {/* Profile Card */}
            <ScrollReveal direction="right" className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-md bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 w-full bg-muted">
                  <Image
                    src={opieImage}
                    alt="Bapak Zulfikar Kusdarmawan (Opie)"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    Bapak Zulfikar Kusdarmawan (Opie)
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-4">
                    Tokoh Penggerak & Inisiator Green Puspa
                  </p>
                  <div className="text-muted-foreground text-sm italic relative px-2">
                    &quot;Membangun kampung hijau bukan sekadar menanam, melainkan merawat kepedulian antar warga demi warisan masa depan.&quot;
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="visi" className="py-24 bg-surface-green border-y border-border/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left" className="h-full">
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Lightbulb className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Visi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi komunitas urban farming yang mandiri, produktif, hijau, sehat, dan berkelanjutan.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" className="h-full">
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Misi</h3>
                  <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                    <li>Mengembangkan pertanian perkotaan.</li>
                    <li>Meningkatkan ketahanan pangan masyarakat.</li>
                    <li>Mendorong penghijauan lingkungan.</li>
                    <li>Memanfaatkan teknologi tepat guna.</li>
                    <li>Memberdayakan warga melalui kegiatan produktif.</li>
                    <li>Menjadi pusat edukasi urban farming.</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 text-center overflow-hidden">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal direction="up">
            <Users className="h-16 w-16 text-primary mx-auto mb-8 opacity-80" />
            <blockquote className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              &quot;Dari Warga, Untuk Warga, dan Oleh Warga&quot;
            </blockquote>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Kami percaya bahwa keberhasilan suatu lingkungan bermula dari partisipasi aktif masyarakatnya. Segala bentuk inisiatif yang kami lakukan adalah hasil dari gotong royong dan kesadaran bersama untuk menciptakan kehidupan yang lebih baik.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
