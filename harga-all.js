let id = CONFIG.contacts.findIndex(item => item.judul == "Whatsapp")
let whatsapp = CONFIG.contacts[id];

let layanan = CONFIG.layanan
let layananContainer = document.getElementById('layanan-container')
for (const item of layanan) {
    let layananHeader = `<div id="#${item.id}" class="flex flex-col gap-6"><div class="flex flex-row items-center justify-between gap-4">
                            <span class="text-lg lg:text-3xl font-semibold text-gray-700 flex-1">${item.judul}</span>
                            <a href="harga-alt.html#${item.id}" class="px-6 py-2 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600">Lebih
                            Lanjut</a>
                        </div>
                        <div class="flex flex-col flex-grow gap-8 text-gray-700 md:grid md:grid-cols-2 lg:grid-cols-3 mb-6">`
    let layananFooter = `</div></div>`
    let layananContent = ``
    for (const lay of item.sublayanan) {
        let diskon = lay.diskon == 0 ? `hidden` : ``
        let subHeader = `<div class="flex flex-col bg-white rounded-lg shadow-lg">
                    <div class="flex flex-col gap-2 p-6 border-b border-b-gray-200">
                        <div class="flex flex-col">
                            <h1 class="text-xl font-semibold">${lay.judul}</h1>
                            <span class="text-sm text-gray-600">${lay.subjudul}</span>
                        </div>
                        <div class="flex flex-col gap-1 text-blue-600">
                            <span class="text-3xl">Rp.${formatHarga(lay.harga)}</span>
                            <span class="line-through ${diskon}">Rp${formatHarga(lay.harga + (lay.harga * lay.diskon / 100))}</span>
                        </div>
                    </div>
                    <div class="flex flex-col flex-grow gap-3 p-6 text-sm">`
        let subFooter = `</div>
                    <div class="px-6 py-4 border-t border-t-gray-200">
                        <a href="${whatsapp.link + " : " + lay.judul}" target="_blank"
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
                    </div></div>`
        let services = ``
        for (const fitur of lay.fitur) {
            services += `<span class="flex flex-row items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            ${fitur}
                        </span>`
        }
        layananContent += subHeader + services + subFooter
    }
    layananContainer.innerHTML += layananHeader + layananContent + layananFooter
}

function formatHarga(harga) {
    return harga.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}