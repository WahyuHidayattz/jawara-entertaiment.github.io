const CONFIG = {
    'nomor_wa': '085777787390',
    'pesan_wa': 'Halo, saya ingin menyewa salah satu jasa di Jawara Entertaiment',
    'telegram_id': '@jawaraentertaiment',
    'instagram_id': '@studioaf_Official',
    'show_email': false,

    'contacts': [
        {
            'judul': 'Whatsapp',
            'deskripsi': 'Kirim pertanyaan atau pesan langsung jasa kami via Whatsapp.',
            'icon': 'whatsapp.svg',
            'link': 'https://wa.me/+6285777787390?text=Halo,%20Saya%20ingin%20berminat%20salah%20satu%20jasa%20di%20Jawara%20Entertaiment'
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

    'layanan': [
        {
            'id': 'jasa-foto',
            'cover': 'gambar-foto.jpg',
            'judul': 'Foto Profesional',
            'deskripsi': 'Menjadi Fotographer Profesional di acara Pernikahan, Khitanan, dan acara lainnya',
            'gallery': ['assets/images/pernikahan-1.jpeg','assets/images/pernikahan-2.jpeg','assets/images/pernikahan-3.jpeg','assets/images/pernikahan-4.jpeg','assets/images/pernikahan-5.jpeg','assets/images/pernikahan-6.jpeg','assets/images/pernikahan-7.jpeg','assets/images/pernikahan-8.jpeg','assets/images/pernikahan-9.jpeg'],
            'sublayanan': [
                {
                    'judul': 'Foto dan Video Cinematic',
                    'subjudul': 'Sudah termasuk Album dan Bingkai Foto',
                    'highlight': true,
                    'harga': 1500000,
                    'diskon': 15,
                    'fitur': [
                        'Diskon 15%',
                        'Standby 8 Jam+',
                        '150+ Jepretan Foto',
                        'Video Cinematic',
                        'Bisa Edit Foto',
                        'Album + Bingkai Foto',
                    ]
                },
                {
                    'judul': 'Foto Album',
                    'subjudul': '2 Roll foto dalam Album + Bingkai',
                    'highlight': false,
                    'harga': 800000,
                    'diskon': 10,
                    'fitur': [
                        'Diskon 10%',
                        'Standby 8 Jam+',
                        '150+ Jepretan Foto',
                        'Bisa Edit Foto',
                        'Album + Bingkai Foto',
                    ]
                },
                {
                    'judul': 'Foto Biasa',
                    'subjudul': '150+ Jepretan Foto',
                    'highlight': false,
                    'harga': 350000,
                    'diskon': 10,
                    'fitur': [
                        'Diskon 10%',
                        'Standby 8 Jam+',
                        '150+ Jepretan Foto',
                        'Bisa Edit Foto',
                        'Post di IG'
                    ]
                },
            ]
        },
        {
            'id': 'jasa-sound',
            'cover': 'gambar-sound.jpg',
            'judul': 'Sewa Sound System',
            'deskripsi': 'Menyewakan sound system untuk kebutuhan pernikahan, acara gathering, event dll',
            'gallery': ['assets/images/gambar-sound.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-sound.jpg','assets/images/gambar-sound.jpg'],
            'sublayanan': [
                {
                    'judul': 'Sewa Sound System',
                    'subjudul': 'Sudah termasuk operator sound',
                    'highlight': true,
                    'harga': 1500000,
                    'diskon': 10,
                    'fitur': [
                        'Diskon 10%',
                        'Operator disediakan',
                        '2 Sound Besar',
                        '1 Set Sound Array',
                        'Bisa Request Lagu',
                        'Karouke',
                    ]
                },
            ]
        },
        {
            'id': 'jasa-undangan',
            'cover': 'gambar-undangan.jpg',
            'judul': 'Cetak Undangan',
            'deskripsi': 'Membuat dan mencetak surat undangan pernikahan',
            'gallery': ['assets/images/gambar-undangan.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-undangan.jpg','assets/images/gambar-undangan.jpg'],
            'sublayanan': [
                {
                    'judul': '> 500 Lembar',
                    'subjudul': 'Harga undangan dihitung per lembar',
                    'highlight': true,
                    'harga': 2000,
                    'diskon': 10,
                    'fitur': [
                        'Diskon 10%',
                        'Design Moderen',
                        'Kualitas Kertas Disesuaikan',
                        'Peta / Alamat Pernikahan',
                        'Gratis Ongkos Kirim',
                    ]
                },
                {
                    'judul': '300 Lembar',
                    'subjudul': 'Harga undangan dihitung per lembar',
                    'highlight': false,
                    'harga': 2200,
                    'diskon': 0,
                    'fitur': [
                        'Diskon 0%',
                        'Design Moderen',
                        'Kualitas Kertas Disesuaikan',
                        'Peta / Alamat Pernikahan',
                    ]
                },
                {
                    'judul': '100 Lembar',
                    'subjudul': 'Harga undangan dihitung per lembar',
                    'highlight': false,
                    'harga': 2200,
                    'diskon': 0,
                    'fitur': [
                        'Diskon 0%',
                        'Design Moderen',
                        'Kualitas Kertas Disesuaikan',
                        'Peta / Alamat Pernikahan',
                    ]
                }
            ]
        },
        {
            'id': 'jasa-mc',
            'cover': 'gambar-mc.jpg',
            'judul': 'MC / Pembawa Acara',
            'deskripsi': 'Menjadi MC di acara formal dan non-formal',
            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg'],
            'sublayanan': [
                {
                    'judul': 'MC / Pembawa Acara',
                    'subjudul': 'Harga dibawah berlaku untuk 8 Jam kerja, jika lebih dikenakan tarif tambahan',
                    'highlight': true,
                    'harga': 500000,
                    'diskon': 10,
                    'fitur': [
                        'Diskon 10%',
                        'Profesional',
                        'Tema Acara Disesuaikan',
                        'Bisa duet',
                        'Bisa nyanyi',
                    ]
                },
            ]
        },
        {
            'id': 'jasa-tenda',
            'cover': 'gambar-tenda.jpg',
            'judul': 'Pasang Tenda',
            'deskripsi': 'Meyewakan sekaligus memasang tenda pada acara pernikahan',
            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg'],
            'sublayanan': [
                {
                    'judul': 'Tenda Pernikahan',
                    'subjudul': 'Jasa ini berlaku satu season pernikahan',
                    'highlight': true,
                    'harga': 7000000,
                    'diskon': 8,
                    'fitur': [
                        'Diskon 8%',
                        'Tenda Kokoh',
                        'Desain Tenda Terkini',
                        'Kursi Disediakan',
                        'Meja Disediakan',
                    ]
                },
            ]
        },
        {
            'id': 'jasa-makeup',
            'cover': 'gambar-lainnya.jpg',
            'judul': 'Makeup Pengantin',
            'deskripsi': 'Melakukan makeup pengantin pada acara pernikahan',
            'gallery': ['assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg','assets/images/gambar-foto.jpg'],
            'sublayanan': [
                {
                    'judul': 'Makeup Pengantin',
                    'subjudul': '3x Ganti Makeup : pagi, siang, sore',
                    'highlight': true,
                    'harga': 1500000,
                    'diskon': 10,
                    'fitur': [
                        'Diskon 10%',
                        'Makeup Pria dan Wanita',
                        'Bisa Pilih Tema Makeup',
                        '3x Ganti Makeup',
                        'Post di IG',
                    ]
                },
            ]
        }
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