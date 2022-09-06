let index = CONFIG.contacts.findIndex(item => item.judul == "Whatsapp")
let whatsapp = CONFIG.contacts[index];

let hargaContainer = document.getElementById('harga-container')
for (let jasa of CONFIG.jasa){
    let itemHeader = `<div id="${jasa.id}" class="flex flex-col p-6 text-base md:text-lg  border border-gray-200 shadow-lg md:p-8 rounded-xl transition duration-300 bg-white">
    <div class="flex flex-row justify-between gap-4 pb-4 border-b border-b-gray-200">
        <span class="font-semibold flex-1">${jasa.judul}</span>
        <div class="flex flex-col items-end gap-1">
            <span class="font-mono">Rp.${formatHarga(jasa.harga)}</span>
            <span class="font-mono text-sm line-through">Rp.${formatHarga(jasa.harga + (jasa.harga * jasa.diskon_persen / 100))}</span>
        </div>
    </div>
    <div class="flex flex-col flex-grow gap-2 py-6 font-mono text-sm md:text-base">`

    let itemFoot = `</div>
    <div class="flex flex-col gap-4 text-sm md:text-base">
        <a href="gallery.html#${jasa.id}"
            class="flex flex-row items-center justify-center gap-4 px-4 py-3 font-semibold text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            Lihat Hasil Foto
        </a>
        <a href="${whatsapp.link}" target="_blank"
            class="flex flex-row items-center justify-center gap-4 px-4 py-3 font-semibold text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp"
                width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                <path
                    d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1">
                </path>
            </svg>
            Pesan Layanan ini
        </a>
    </div>
</div>`

    let jasaContent = ``;
    for(let jasaItem of jasa.fitur){
        jasaContent += `<span>- ${jasaItem}</span>`
    }
    hargaContainer.innerHTML += itemHeader + jasaContent + itemFoot

}

// validasi apakah link mempunyai id ?
let url = window.location.href
let urlId = url.substr(url.indexOf("#"))
if(urlId.includes("#")){
    let component = document.querySelector(urlId)
    component.classList.add("border-4")
    component.classList.add("ring-8")
    component.classList.add("opacity-100")
    component.classList.add("border-green-500")
    component.classList.add("ring-green-500/30")
}

function formatHarga(harga) {
    return harga.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
