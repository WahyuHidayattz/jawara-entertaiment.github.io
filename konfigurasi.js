const CONFIG = {
    'nomor_wa': '082249925346',
    'pesan_wa': 'Halo, saya ingin menyewa salah satu jasa di Jawara Entertaiment',
    'telegram_id': '@wahyu135',
    'instagram_id': '@wahyu135',
    'show_email': false,

    'contacts': [
        {
            'judul': 'Whatsapp',
            'deskripsi': 'Kirim pertanyaan atau pesan langsung jasa kami via Whatsapp.',
            'icon': 'whatsapp.svg',
            'link': 'https://wa.me/+6282249925346?text=Halo,%20Saya%20ingin%20membeli%20salah%20satu%20jasa%20di%20Jawara%20Entertaiment'
        },
        {
            'judul': 'Telegram',
            'deskripsi': 'Kirim pertanyaan atau pesan langsung jasa kami via Telegram.',
            'icon': 'telegram.svg',
            'link': 'https://t.me/wahyu135'
        },
        {
            'judul': 'Instagram',
            'deskripsi': 'Lihat hasil pekerjaan kami di Instagram atau DM langsung.',
            'icon': 'instagram.svg',
            'link': 'https://instagram.com/wagyu135'
        }
    ],

    'gallery_home': [
        'gambar-foto.jpg','gambar-lainnya.jpg','gambar-mc.jpg','gambar-sound.jpg','gambar-tenda.jpg','gambar-undangan.jpg','gambar-foto.jpg','gambar-lainnya.jpg',
    ],

    'jasa': [
        {
            'id': 'jasa-foto',
            'judul': 'Foto Pengantin',
            'deskripsi': 'Menjadi fotographer pengantin yang sedang menikah',
            'cover': 'gambar-foto.jpg',
            'harga': 1850000,
            'diskon_persen': 15,

            'fitur': ['Diskon 15%', '6 Jam standby', '50+ Jepretan Foto','Edit Foto', 'Post di IG'],

            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-tenda.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-lainnya.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg']
        },
        {
            'id': 'jasa-sound',
            'judul': 'Sewa Sound',
            'deskripsi': 'Menyewakan sound system untuk kebutuhan pernikahan, acara gathering, event dll',
            'cover': 'gambar-sound.jpg',
            'harga': 750000,
            'diskon_persen': 8,

            'fitur': ['Diskon 8%', 'Operator disediakan', '4 Sound besar', 'Bisa req lagu','Karouke'],

            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-tenda.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-lainnya.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg']
        },
        {
            'id': 'jasa-undangan',
            'judul': 'Cetak Undangan',
            'deskripsi': 'Membuat dan mencetak surat undangan pernikahan',
            'cover': 'gambar-undangan.jpg',
            'harga': 550000,
            'diskon_persen': 10,

            'fitur': ['Diskon 10%', 'Design moderen', 'Kualitas Kertas No.1', 'Peta / Alamat Pernikahan', 'Free ongkir'],

            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-tenda.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-lainnya.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg']
        },
        {
            'id': 'jasa-mc',
            'judul': 'Jadi MC',
            'deskripsi': 'Menjadi MC di acara formal atau non formal',
            'cover': 'gambar-mc.jpg',
            'harga': 2500000,
            'diskon_persen': 15,

            'fitur': ['Diskon 15%', 'Tema bebas', 'Speaker Profesional', 'Bisa duet dan nyanyi'],

            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-tenda.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-lainnya.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg']
        },
        {
            'id': 'jasa-tenda',
            'judul': 'Pasang Tenda',
            'deskripsi': 'Jasa pasang tenda pernikahan',
            'cover': 'gambar-tenda.jpg',
            'harga': 1650000,
            'diskon_persen': 20,

            'fitur': ['DIskon 20%', 'Tenda kokoh', 'Desian minimalist', 'Free bangku', 'Free meja'],

            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-tenda.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-lainnya.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg']
        },
        {
            'id': 'jasa-makeup',
            'judul': 'Makeup Pengantin',
            'deskripsi': 'Jasa makeup pengantin',
            'cover': 'gambar-lainnya.jpg',
            'harga': 850000,
            'diskon_persen': 12,

            'fitur': ['Diskon 12%', 'Makeup pria dan wanita', 'Bisa pilih nuansa tema', '3x ganti makeup', 'Post di IG'],

            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-tenda.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-lainnya.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-mc.jpg']
        },
    ],

    'review': [
        {
            'nama': 'Ayuni Syara',
            'pesan': 'Saya sangan puas dengan layanan yang diberikan oleh Jawara Entertaiment'
        },
        {
            'nama': 'Wahyu Hidayat',
            'pesan': 'Hasil yang memuaskan dari layanan Foto Pengantinya Jawara Entertaiment'
        },
        {
            'nama': 'Agung Zamjami',
            'pesan': 'Mantap sekali, saya sewa sound beserta tukang soundnya dan acaranya berjalan sesuai harapan saya'
        },
        {
            'nama': 'Reni Yuliawati',
            'pesan': 'Kualitas hasil percetakan undangan pernikahannya sangat memuaskan, desain keren dan ada peta-nya'
        },
        {
            'nama': 'Syahrul Gunawan',
            'pesan': 'Acara khitanan saya berjalan dengan meriah berkat MC mas Ucup kemarin.. Terimakasih.'
        },
        {
            'nama': 'Pemuda Pancasil',
            'pesan': 'Pertandingan meriah sekali gara gara MC nya mas Ucup. saya sampai-sampai jadi juaranya :D'
        }
    ]

}