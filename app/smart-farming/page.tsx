import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Activity, Sun, Bell } from "lucide-react";

export const metadata = {
  title: "Smart Urban Farming | Green Puspa",
  description: "Penerapan konsep smart farming di kampung sehat terpadu Green Puspa.",
};

export default function SmartFarmingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Smart Urban Farming</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Memadukan teknologi dengan semangat gotong royong untuk efisiensi pertanian perkotaan.
        </p>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Green Puspa dikenal sebagai salah satu kampung yang mengadaptasi konsep <em>Smart Farming</em> di Jakarta Timur. Konsep ini digunakan untuk membantu warga dalam memahami kondisi tanaman dan ekosistem secara lebih presisi, bukan untuk menggantikan peran manusia, melainkan untuk melengkapi ketelitian petani kota.
          </p>
        </div>
      </section>

      {/* Educational Illustrations */}
      <section className="py-20 bg-surface-green border-y border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Penerapan Teknologi Tepat Guna</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">Monitoring Kualitas Air</h3>
                <p className="text-muted-foreground">
                  Pemantauan tingkat keasaman (pH) dan kepekatan nutrisi secara teratur membantu warga memastikan tanaman hidroponik mendapatkan makanan yang sesuai dengan kebutuhannya.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Sun className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">Pengaturan Pencahayaan</h3>
                <p className="text-muted-foreground">
                  Di area yang kurang mendapatkan sinar matahari langsung, lampu tumbuh (<em>grow lights</em>) digunakan untuk memastikan proses fotosintesis tetap berjalan optimal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mb-6">
                  <Bell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">Sistem Notifikasi</h3>
                <p className="text-muted-foreground">
                  Edukasi pengenalan sistem peringatan dini ketika suhu terlalu panas atau air nutrisi mulai menipis, mempermudah koordinasi warga dalam melakukan penanganan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">Otomatisasi Sirkulasi</h3>
                <p className="text-muted-foreground">
                  Sistem pompa pada hidroponik dan akuaponik dikelola menggunakan timer untuk menjaga sirkulasi oksigen di dalam air tetap stabil tanpa memboroskan energi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="bg-muted p-6 rounded-xl border border-border">
            <h4 className="font-bold text-lg mb-2">Catatan Edukasi</h4>
            <p className="text-sm text-muted-foreground">
              Halaman ini bertujuan sebagai sarana informasi edukatif mengenai pengenalan teknologi pertanian perkotaan di Green Puspa. Website ini merupakan profil publik dan tidak terhubung langsung dengan sensor perangkat IoT komunitas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
