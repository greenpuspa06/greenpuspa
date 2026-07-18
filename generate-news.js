const fs = require('fs');
const path = require('path');

const posts = [
  {
    slug: 'panen-perdana-selada-2024',
    title: 'Panen Perdana Selada Hidroponik di Awal Tahun 2024',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1605296830714-7c02e15dcaf6?q=80&w=800&auto=format&fit=crop',
    category: 'Panen',
    content: `
Keluarga besar Green Puspa mengawali tahun 2024 dengan panen raya selada hidroponik. Kegiatan yang dilaksanakan pada hari Minggu pagi ini dihadiri oleh puluhan warga RW 06 Utan Kayu Selatan. 

Hasil panen dibagikan kepada warga sekitar untuk meningkatkan gizi dan ketahanan pangan. Selain itu, sebagian selada juga dipasarkan ke pasar lokal untuk menambah kas operasional kelompok tani.
`
  },
  {
    slug: 'kunjungan-studi-banding-mahasiswa',
    title: 'Kunjungan Studi Banding Mahasiswa Pertanian',
    date: '2024-02-10',
    image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=800&auto=format&fit=crop',
    category: 'Kunjungan',
    content: `
Green Puspa kembali menerima kunjungan dari mahasiswa Fakultas Pertanian salah satu universitas negeri di Jakarta. Kunjungan ini bertujuan untuk mempelajari sistem akuaponik dan hidroponik skala komunitas.

Bapak Zulfikar Kusdarmawan memandu langsung para mahasiswa mengelilingi gang-gang hijau di RW 06 dan menjelaskan bagaimana warga secara swadaya mengelola instalasi tersebut.
`
  },
  {
    slug: 'pelatihan-pembuatan-nutrisi',
    title: 'Pelatihan Pembuatan Nutrisi AB Mix Mandiri',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop',
    category: 'Edukasi',
    content: `
Untuk menekan biaya operasional hidroponik, Green Puspa menyelenggarakan pelatihan meracik nutrisi AB Mix secara mandiri. Pelatihan ini diikuti oleh perwakilan RT se-RW 06.

Dengan kemampuan meracik nutrisi sendiri, diharapkan setiap instalasi hidroponik di pekarangan warga dapat dikelola dengan lebih ekonomis dan berkelanjutan.
`
  },
  {
    slug: 'kerja-bakti-penghijauan',
    title: 'Kerja Bakti Rutin dan Penghijauan Gang',
    date: '2024-04-21',
    image: 'https://images.unsplash.com/photo-1592424005826-69168da40125?q=80&w=800&auto=format&fit=crop',
    category: 'Kegiatan Komunitas',
    content: `
Memperingati Hari Bumi, warga RW 06 melakukan kerja bakti membersihkan lingkungan dan menambah area vertikal garden di sepanjang gang. 

Kegiatan gotong royong ini tidak hanya membuat lingkungan lebih asri, namun juga mempererat tali silaturahmi antarwarga. Ibu-ibu PKK juga turut serta menyumbangkan bibit tanaman hias.
`
  },
  {
    slug: 'inovasi-sistem-akuaponik',
    title: 'Inovasi Sistem Akuaponik Hemat Energi',
    date: '2024-05-12',
    image: 'https://images.unsplash.com/photo-1533038590840-1cbea6e60b29?q=80&w=800&auto=format&fit=crop',
    category: 'Inovasi',
    content: `
Tim inovasi Green Puspa berhasil menguji coba sistem pompa bertenaga surya skala kecil untuk instalasi akuaponik. Sistem ini menggunakan panel surya mini untuk menggerakkan pompa sirkulasi air.

Inisiatif ini merupakan langkah awal penerapan energi terbarukan dalam mendukung konsep *Smart Urban Farming* di kampung kita.
`
  }
];

const dir = path.join(__dirname, 'content/news');

posts.forEach(post => {
  const fileContent = "---\n" +
"title: \"" + post.title + "\"\n" +
"date: \"" + post.date + "\"\n" +
"image: \"" + post.image + "\"\n" +
"category: \"" + post.category + "\"\n" +
"---\n" + post.content.trim() + "\n";
  fs.writeFileSync(path.join(dir, post.slug + '.md'), fileContent);
});

console.log('Sample news posts generated successfully.');
