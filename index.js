let containerJasa = document.getElementById('container-jasa')
let containerGallery = document.getElementById('container-gallery')
let containerReview = document.getElementById('container-review')

let containerEmail = document.getElementById('container-email')
if(CONFIG.show_email == false){
    containerEmail.style.display = "none"
}

// update the images

for (let jasa of CONFIG.layanan) {
    let items = 
    `<a href="harga-alt.html#${jasa.id}" class="bg-[url('assets/images/${jasa.cover}')] product-card" style="background-image: url('assets/images/${jasa.cover}')">
        <div class="card">
            <span class="mb-2 text-xl font-semibold text-center">${jasa.judul}</span>
            <span class="text-sm text-center">${jasa.deskripsi}</span>
        </div>
    </a>`
    containerJasa.innerHTML += items
}

for (let gallery of CONFIG.gallery_home){
    let items = 
    `<button onclick="handleClick(this)" class="group hover:rotate-3 transition duration-200">
        <img src="assets/images/${gallery}" alt="" class="img-gallery">
    </button>`
    containerGallery.innerHTML += items
}

for (let review of CONFIG.review){
    let items =
    `<div class="flex flex-col gap-4 p-4 bg-white shadow-lg shadow-gray-300/50 rounded-xl text-gray-700">
    <div class="flex-grow flex flex-row justify-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-quote" viewBox="0 0 16 16">
            <path
                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
        <span class="flex-1 w-full text-sm text-center md:text-base">
            ${review.pesan}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="rotate-180 bi bi-quote" viewBox="0 0 16 16">
            <path
                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
    </div>
        <span class="w-full pt-4 text-sm font-semibold text-center border-t border-t-gray-200 md:text-base">${review.nama}</span>
    </div>`
    containerReview.innerHTML += items
}

let contacts = CONFIG.contacts
let whatsapp = contacts[contacts.map(i => i.judul).indexOf("Whatsapp")];
let telegram = contacts[contacts.map(i => i.judul).indexOf("Telegram")];
let instagram = contacts[contacts.map(i => i.judul).indexOf("Instagram")];

document.getElementById('contact-whatsapp').href = whatsapp.link;
document.getElementById('contact-telegram').href = telegram.link;
document.getElementById('contact-instagram').href = instagram.link;

let linkWhatsapp = document.getElementById('link-whatsapp')
document.getElementById('whatsapp-text').textContent = "WA : " + CONFIG.nomor_wa
linkWhatsapp.href = whatsapp.link