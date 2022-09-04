let index = CONFIG.contacts.findIndex(item => item.judul == "Whatsapp")
let whatsapp = CONFIG.contacts[index];

let linkWhatsapp = document.getElementById('link-whatsapp')
linkWhatsapp.href = whatsapp.link

let containerGallery = document.getElementById('container-gallery')
let containerMenu = document.getElementById('container-menu')

for(jasa of CONFIG.jasa){
    let item = `<a href="#${jasa.id}" class="gallery-button">${jasa.judul}</a>`
    containerMenu.innerHTML += item
}

for(jasa of CONFIG.jasa){
    let header = `<div id="${jasa.id}" class="flex flex-col gap-6 my-8">
    <div class="flex flex-row items-center justify-between gap-4">
        <span class="flex-1 text-lg font-semibold text-white md:text-2xl">${jasa.judul}</span>
        <a href="harga.html"
            class="px-4 py-2 text-sm text-white bg-blue-500 rounded-full shadow-lg md:px-6 lg:px-10 md:text-base hover:bg-blue-400">Lihat
            Harga</a>
    </div>
    <div class="grid grid-cols-2 gap-2 text-gray-700 md:gap-4 md:grid-cols-3 lg:grid-cols-4">`
    let footer = `</div>
    </div>`

    let galleryItems = ``
    for(item of jasa.gallery){
        galleryItems += `<button onclick="handleClick(this)" class="group hover:rotate-6 transition duration-300"><img src="${item}"
        alt="" class="img-gallery"></button>`
    }

    containerGallery.innerHTML += header + galleryItems + footer
}