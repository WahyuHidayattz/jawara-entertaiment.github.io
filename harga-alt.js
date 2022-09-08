let url = window.location.href
let urlId = url.substr(url.indexOf("#") + 1)

let id = CONFIG.contacts.findIndex(item => item.judul == "Whatsapp")
let whatsapp = CONFIG.contacts[id];


let hargaContainer = document.getElementById('harga-container')
let galleryContainer = document.getElementById('gallery-container')
let judul = document.getElementById('text-judul')
let deskripsi = document.getElementById('text-deskripsi')
let linkGallery = document.getElementById('link-gallery')

let index = CONFIG.layanan.findIndex(item => item.id == urlId)
let layanan = CONFIG.layanan[index]
let sublayanan = layanan.sublayanan
let gallery = layanan.gallery

judul.textContent = layanan.judul
deskripsi.textContent = layanan.deskripsi
linkGallery.href = "gallery.html#" + layanan.id

let header = document.getElementById('header')
header.style.backgroundImage = `url('assets/images/${layanan.cover}')`

for (const item of sublayanan) {
    let highlight = item.highlight ? `md:scale-105 border-4 border-blue-500` : ``
    let diskon = item.diskon == 0 ? `hidden` : ``
    let header = `<div class="flex flex-col bg-white rounded-lg shadow-lg ${highlight}">
                    <div class="flex flex-col gap-2 p-6 border-b border-b-gray-200">
                        <div class="flex flex-col">
                            <h1 class="text-xl font-semibold">${item.judul}</h1>
                            <span class="text-sm text-gray-600">${item.subjudul}</span>
                        </div>
                        <div class="flex flex-col gap-1 text-blue-600">
                            <span class="text-3xl">Rp.${formatHarga(item.harga)}</span>
                            <span class="line-through ${diskon}">Rp.${formatHarga(item.harga + (item.harga * item.diskon / 100))}</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 p-6 flex-grow text-sm">`
    let footer = `</div>
                    <div class="px-6 py-4 border-t border-t-gray-200">
                        <a target="_blank" href="${whatsapp.link + " : " + item.judul}"
                            class="flex flex-row items-center justify-center gap-4 px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp"
                                width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                                <path
                                    d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1">
                                </path>
                            </svg>Pesan Jasa Ini</a>
                    </div>
                </div>`
    let service = ``
    for (const fitur of item.fitur) {
        service += `<span class="flex flex-row items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            ${fitur}
                        </span>`
    }
    hargaContainer.innerHTML += header + service + footer
}

for (const item of gallery) {
    let image = `<button class="group" onclick="handleClick(this)">
                        <img src="${item}" alt="" class="img-gallery">
                    </button>`
    galleryContainer.innerHTML += image
}

function formatHarga(harga) {
    return harga.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
