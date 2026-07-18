import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Hero } from "@/components/sections/Hero";
import { LazyImage as Image } from "@/components/ui/lazy-image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getAllPosts } from "@/lib/markdown";
import { ArrowRight, Leaf, Droplets, Users, BookOpen, Calendar, HelpCircle, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Green Puspa - Kampung Sehat Terpadu Green Puspa RW 06 Utan Kayu Selatan",
  description: "Mewujudkan lingkungan hijau, sehat, dan produktif melalui semangat gotong royong dan inovasi pertanian perkotaan.",
};

const timelineEvents = [
  {
    year: "2017",
    title: "Program Dimulai",
    description: "Inisiatif urban farming berbasis komunitas pertama kali dicanangkan untuk merespon permasalahan banjir dan lingkungan padat di RW 06.",
  },
  {
    year: "2018",
    title: "Perluasan Penghijauan",
    description: "Gerakan penghijauan gang mulai masif dilakukan. Warga bergotong royong menata pot tanaman dan membersihkan saluran air.",
  },
  {
    year: "2019",
    title: "Pengembangan Hidroponik",
    description: "Instalasi hidroponik mulai diperkenalkan dan dipasang di sepanjang gang, menjadikannya ikon baru RW 06 Utan Kayu Selatan.",
  },
  {
    year: "2020",
    title: "Ketahanan Pangan Warga",
    description: "Di masa pandemi, hasil panen dari hidroponik dan akuaponik memberikan manfaat langsung bagi ketahanan pangan warga setempat.",
  },
  {
    year: "2021",
    title: "Ekspansi Program",
    description: "Jumlah lubang tanam hidroponik terus bertambah seiring tingginya antusiasme warga untuk ikut mengelola.",
  },
  {
    year: "2022",
    title: "Penerapan Smart Farming",
    description: "Pengenalan teknologi pertanian pintar (smart farming) sederhana untuk membantu monitoring nutrisi dan kualitas air pada instalasi komunitas.",
  },
  {
    year: "2023",
    title: "Pusat Studi Banding",
    description: "Green Puspa menerima banyak kunjungan dari komunitas lain, institusi pemerintah, dan mahasiswa sebagai percontohan sukses urban farming.",
  },
  {
    year: "2024+",
    title: "Inovasi Berkelanjutan",
    description: "Terus mengembangkan inovasi keberlanjutan, ekonomi sirkular, dan memperkuat edukasi lingkungan bagi generasi muda.",
  },
];

const faqs = [
  {
    question: "Apa itu Green Puspa?",
    answer: "Green Puspa adalah komunitas urban farming yang berada di RW 06 Utan Kayu Selatan. Kami mengelola lahan sempit di gang-gang perkampungan menjadi area produktif melalui metode hidroponik, akuaponik, dan penghijauan vertikal."
  },
  {
    question: "Apakah Green Puspa terbuka untuk kunjungan umum?",
    answer: "Ya, kami sangat terbuka untuk kunjungan edukasi, studi banding, maupun penelitian. Namun, karena ini merupakan area permukiman warga, kami mohon agar pengunjung menghubungi kami terlebih dahulu untuk mengatur jadwal."
  },
  {
    question: "Bagaimana sistem pengelolaan hidroponik di Green Puspa?",
    answer: "Sistem hidroponik dikelola secara gotong royong oleh warga setempat (swadaya). Jadwal penyemaian, pemindahan bibit, hingga panen dikoordinasikan secara bersama-sama oleh para kader lingkungan RW 06."
  },
  {
    question: "Di mana hasil panen sayuran didistribusikan?",
    answer: "Hasil panen diprioritaskan untuk pemenuhan gizi warga RW 06. Sebagian lainnya dipasarkan ke lingkungan sekitar untuk memutar kas operasional pembelian nutrisi dan bibit selanjutnya."
  },
  {
    question: "Apakah saya bisa belajar bertani hidroponik di sini?",
    answer: "Tentu bisa! Kami secara rutin mengadakan lokakarya dan pelatihan bagi siapa saja yang tertarik. Anda bisa memantau halaman Berita atau menghubungi kami langsung untuk menanyakan jadwal pelatihan terdekat."
  }
];

export default function Home() {
  const latestNews = getAllPosts().slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Statistics Section */}
      <section className="py-16 bg-surface-green border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <AnimatedCounter value={2017} />
              <p className="mt-2 text-muted-foreground font-medium">Program Dimulai</p>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter value={1500} suffix="+" />
              <p className="mt-2 text-muted-foreground font-medium">Lubang Hidroponik</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading font-bold text-4xl md:text-5xl text-primary">RW 06</span>
              <p className="mt-2 text-muted-foreground font-medium">Lokasi Komunitas</p>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter value={100} suffix="%" />
              <p className="mt-2 text-muted-foreground font-medium">Gotong Royong Warga</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                alt="Warga Green Puspa"
                fill
                className="object-cover"
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Dari Warga, Untuk Warga, dan Oleh Warga</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Berawal di tahun 2017, warga RW 06 Utan Kayu Selatan berinisiatif mengubah lingkungan padat penduduk menjadi kawasan hijau yang produktif. Kini, Green Puspa menjadi contoh sukses bagaimana semangat gotong royong dapat menghadirkan ketahanan pangan dan lingkungan yang lebih sehat.
              </p>
              <Link href="/about" className={buttonVariants({ variant: "outline", className: "group" })}>
                Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed Programs Section */}
      <section id="programs" className="py-24 bg-muted/30 border-y border-border/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Program & Inovasi Kerja</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Inisiatif berkelanjutan kami untuk menghijaukan lingkungan padat kota dan memberdayakan masyarakat.
            </p>
          </ScrollReveal>

          <div className="space-y-24 max-w-6xl mx-auto">
            {/* Hydroponics */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <ScrollReveal direction="left" className="md:w-1/2">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <Leaf className="text-primary h-7 w-7" /> Hidroponik
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Program utama Green Puspa yang mengoptimalkan pemanfaatan ruang sempit di gang-gang pemukiman. Lebih dari 1500 lubang tanam hidroponik dipasang dan dipelihara warga secara swadaya.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-none bg-primary/5">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <span className="font-bold text-lg text-primary">Sayuran Segar</span>
                      <span className="text-xs text-muted-foreground mt-1">Selada, Pakcoy, Kangkung</span>
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-primary/5">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <span className="font-bold text-lg text-primary">Skala Kampung</span>
                      <span className="text-xs text-muted-foreground mt-1">Rak vertikal di gang pemukiman</span>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="md:w-1/2 w-full h-[320px] relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1200&auto=format&fit=crop"
                  alt="Hidroponik Green Puspa"
                  fill
                  className="object-cover"
                />
              </ScrollReveal>
            </div>

            {/* Aquaponics */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <ScrollReveal direction="right" className="md:w-1/2">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <Droplets className="text-secondary h-7 w-7" /> Akuaponik
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Sistem budidaya ikan terintegrasi dengan tanaman. Air kolam ikan yang kaya nutrisi dialirkan ke media tanam sayuran, menyaring air secara alami sebelum dialirkan kembali ke kolam dalam ekosistem sirkular tertutup.
                </p>
                <ul className="space-y-2.5 text-muted-foreground list-disc pl-5 text-sm">
                  <li>Efisiensi tinggi dalam penggunaan air tanah</li>
                  <li>Sumber gizi protein (ikan lele/nila) dan vitamin sayur terpadu</li>
                  <li>Murni organik tanpa tambahan pestisida kimia</li>
                </ul>
              </ScrollReveal>
              <ScrollReveal direction="left" className="md:w-1/2 w-full h-[320px] relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1200&auto=format&fit=crop"
                  alt="Akuaponik Green Puspa"
                  fill
                  className="object-cover"
                />
              </ScrollReveal>
            </div>

            {/* Environmental Greening */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <ScrollReveal direction="left" className="md:w-1/2">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <Heart className="text-primary h-7 w-7" /> Penghijauan Lingkungan
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Melalui vertical garden dan penghijauan gang, RW 06 berhasil menurunkan suhu mikro lingkungan sekitar dan membersihkan udara perkampungan padat, sekaligus mempererat hubungan sosial warga.
                </p>
                <div className="bg-primary/5 p-4 rounded-xl text-primary text-sm font-medium italic">
                  &quot;Mengubah gang sempit berbeton menjadi koridor hijau yang sejuk dan menenangkan.&quot;
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="md:w-1/2 w-full h-[320px] relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop"
                  alt="Penghijauan Green Puspa"
                  fill
                  className="object-cover"
                />
              </ScrollReveal>
            </div>

            {/* Education */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <ScrollReveal direction="right" className="md:w-1/2">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <BookOpen className="text-secondary h-7 w-7" /> Edukasi Lingkungan
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Kami aktif membagikan ilmu urban farming lewat lokakarya, kunjungan studi banding sekolah/universitas, dan program edukasi lingkungan bagi warga luar kawasan untuk mereplikasi kampung hijau.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=400&auto=format&fit=crop" alt="Edukasi 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=400&auto=format&fit=crop" alt="Edukasi 2" fill className="object-cover" />
                  </div>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop" alt="Edukasi 3" fill className="object-cover" />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" className="md:w-1/2 w-full h-[320px] relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1200&auto=format&fit=crop"
                  alt="Edukasi Lingkungan"
                  fill
                  className="object-cover"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-surface-green border-b border-border/50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Green Puspa Smart Urban Farming</h2>
            <p className="text-muted-foreground text-lg">
              Saksikan dokumentasi penerapan Smart Farming dan penghijauan di lingkungan Green Puspa RW 06.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/AweWYxlkVNg?si=dVocxB6Dh6GznKN3"
              title="Smart Farming Gang Hijau Green Puspa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Linimasa (Timeline) Section */}
      <section id="timeline" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Linimasa Perjalanan</h2>
            <p className="text-muted-foreground text-lg">
              Merekam langkah-langkah gotong royong warga RW 06 dalam membangun kemandirian pangan sejak 2017.
            </p>
          </ScrollReveal>

          <div className="relative mt-12">
            {/* Centered vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2" />

            {timelineEvents.map((event, index) => (
              <div key={event.year} className="mb-12 relative flex items-center md:justify-between w-full">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 bg-primary rounded-full w-12 h-12 flex items-center justify-center border-4 border-background shadow-sm z-10">
                  <Calendar className="h-5 w-5 text-white" />
                </div>

                {/* Content Card */}
                <div className={`pl-14 md:pl-0 w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                    <div className="bg-card border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-bold text-primary text-xl mb-2 block">{event.year}</span>
                      <h3 className="font-heading text-xl font-bold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita (News) Card Section */}
      <section id="news" className="py-24 bg-muted/30 border-t border-border/50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Berita & Kegiatan Terbaru</h2>
            <p className="text-muted-foreground text-lg">
              Ikuti kabar teranyar, inspirasi urban farming, dan agenda gotong royong komunitas kami.
            </p>
          </ScrollReveal>

          {/* Grid of news cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((post, index) => (
              <ScrollReveal key={post.slug} direction="up" delay={index * 0.15}>
                <Link href={`/news/${post.slug}`} className="group block">
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative h-56 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-[10px] text-muted-foreground mb-3 uppercase tracking-wider font-semibold">
                          <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full">{post.category}</span>
                          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                        </div>
                        <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.3} className="mt-12 text-center">
            <Link href="/news" className={buttonVariants({ variant: "outline" })}>
              Lihat Semua Berita <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 border-t border-border/50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal direction="up" className="flex justify-center mb-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <HelpCircle className="h-10 w-10 text-primary" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Pertanyaan Populer (FAQ)</h2>
            <p className="text-muted-foreground">
              Temukan jawaban cepat atas pertanyaan yang sering diajukan mengenai Green Puspa.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border px-6 rounded-xl shadow-sm">
                  <AccordionTrigger className="text-left font-heading text-base font-semibold hover:no-underline hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Mari Mengenal Green Puspa Lebih Dekat</h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Bergabunglah dalam gerakan menghijaukan kota dan menciptakan ketahanan pangan mulai dari pekarangan kita sendiri.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-white text-primary hover:bg-primary hover:text-white")}>
              Hubungi Kami
            </Link>
            <Link href="/gallery" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-white text-primary hover:bg-primary hover:text-white")}>
              Lihat Galeri
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
