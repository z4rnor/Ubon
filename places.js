
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");
    const cards = document.querySelectorAll(".place-grid .place-card");
    const buttons = document.querySelectorAll(".category-menu button");
    const message = document.getElementById("searchMessage");

    let activeCategory = "ทั้งหมด";

    function filterPlaces() {
        const keyword = searchInput
            ? searchInput.value.trim().toLocaleLowerCase("th")
            : "";

        let found = 0;

        cards.forEach(function (card) {
            const name = card.querySelector("h2")?.textContent || "";
            const location = card.querySelector(".place-info p")?.textContent || "";
            const text = (name + " " + location).toLocaleLowerCase("th");
            const category = card.dataset.category || "";

            const matchText = text.includes(keyword);
            const matchCategory =
                activeCategory === "ทั้งหมด" ||
                category === activeCategory;

            const visible = matchText && matchCategory;

            card.style.display = visible ? "" : "none";

            if (visible) found++;
        });

        if (message) {
            message.hidden = found > 0;
        }
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            activeCategory = button.textContent.trim();

            buttons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");
            filterPlaces();
        });
    });

    if (searchButton) {
        searchButton.addEventListener("click", filterPlaces);
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterPlaces);

        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                filterPlaces();
            }
        });
    }

    filterPlaces();
});









/* =========================
   สไลด์ภาพหลัก
========================= */

const photoUrls = {
  "place-WatThamKhuhaSawan": [
  "images/WatThamKhuhaSawan1.jpeg",
  "images/WatThamKhuhaSawan2.WEBP",
  "images/WatThamKhuhaSawan4.WEBP",
  "images/WatThamKhuhaSawan5.WEBP",
  "images/WatThamKhuhaSawan3.WEBP"
],

  "places-TwoToneRiverViewpoint": [
  "images/TwoToneRiverViewpoint1.JPG",
  "images/TwoToneRiverViewpoint2.JPG",
  "images/TwoToneRiverViewpoint3.JPG",
  "images/TwoToneRiverViewpoint4.JPG",
  "images/TwoToneRiverViewpoint5.JPG"
],

  "places-KaengTanaSuspensionBridge": [
  "images/KaengTanaSuspensionBridge1.jpeg",
  "images/KaengTanaSuspensionBridge2.jpeg",
  "images/KaengTanaSuspensionBridge3.jfif",
  "images/KaengTanaSuspensionBridge4.jpeg",
  "images/KaengTanaSuspensionBridge5.jpeg"
],

  "places-SirindhornDam": [
  "images/SirindhornDam1.PNG",
  "images/SirindhornDam2.JPG",
  "images/SirindhornDam3.JPG",
  "images/SirindhornDam4.JPG",
  "images/SirindhornDam5.JPG"
],

  "places-WatSirindhornWararamPhuPhrao": [
  "images/WatSirindhornWararamPhuPhrao1.JPG",
  "images/WatSirindhornWararamPhuPhrao2.JPG",
  "images/WatSirindhornWararamPhuPhrao3.jpeg",
  "images/WatSirindhornWararamPhuPhrao4.jpeg",
  "images/WatSirindhornWararamPhuPhrao5.jpeg"
  ],

  "places-WatPhraThatNongBua": [
  "images/WatPhraThatNongBua1.JPG",
  "images/WatPhraThatNongBua2.JPG",
  "images/WatPhraThatNongBua3.JPG",
  "images/WatPhraThatNongBua4.JPG",
  "images/WatPhraThatNongBua5.JPG"
  ],

  "places-WatMahawanaramPhraAramLuang": [
  "images/WatMahawanaramPhraAramLuang1.JPG",
  "images/WatMahawanaramPhraAramLuang2.JPG",
  "images/WatMahawanaramPhraAramLuang3.JPG",
  "images/WatMahawanaramPhraAramLuang4.JPG",
  "images/WatMahawanaramPhraAramLuang5.JPG"
  ],

  "places-UbonRatchathaniNationalMuseum": [
  "images/UbonRatchathaniNationalMuseum1.JPG",
  "images/UbonRatchathaniNationalMuseum2.JPG",
  "images/UbonRatchathaniNationalMuseum3.JPG",
  "images/UbonRatchathaniNationalMuseum4.JPG",
  "images/UbonRatchathaniNationalMuseum5.JPG"
   ],

  "places-ubonzoo": [
  "images/ubonzoo1.JPG",
  "images/ubonzoo2.JPG",
  "images/ubonzoo3.JPG",
  "images/ubonzoo4.JPG",
  "images/ubonzoo5.JPG"
   ],

  "places-WatSupattanaramWorawihan": [
  "images/WatSupattanaramWorawihan1.JPG",
  "images/WatSupattanaramWorawihan2.JPG",
  "images/WatSupattanaramWorawihan3.JPG",
  "images/WatSupattanaramWorawihan4.JPG",
  "images/WatSupattanaramWorawihan5.jfif"
   ],

  "places-WatTaiPhrachaoYaiOngTue": [
  "images/WatTaiPhrachaoYaiOngTue1.JPG",
  "images/WatTaiPhrachaoYaiOngTue2.JPG",
  "images/WatTaiPhrachaoYaiOngTue3.jfif",
  "images/WatTaiPhrachaoYaiOngTue4.JPG",
  "images/WatTaiPhrachaoYaiOngTue5.JPG"
   ],

  "places-RimMunWalkingStreet": [
  "images/RimMunWalkingStreet1.JPG",
  "images/RimMunWalkingStreet2.JPG",
  "images/RimMunWalkingStreet3.JPG",
  "images/RimMunWalkingStreet4.JPG",
  "images/RimMunWalkingStreet5.jfif"
   ],

  "places-WatNongPahPong": [
  "images/WatNongPahPong1.JPG",
  "images/WatNongPahPong2.JPG",
  "images/WatNongPahPong3.JPG",
  "images/WatNongPahPong4.WEBP",
  "images/WatNongPahPong5.JPG"
   ],

  "places-KhemmaratWalkingStreet": [
  "images/KhemmaratWalkingStreet1.JPG",
  "images/KhemmaratWalkingStreet2.JPG",
  "images/KhemmaratWalkingStreet3.JPG",
  "images/KhemmaratWalkingStreet4.JPG",
  "images/KhemmaratWalkingStreet5.jfif"
  ],


  "nature-KaengSaphue": [
  "images/KaengSaphue1.JPG",
  "images/KaengSaphue2.JPG",
  "images/KaengSaphue3.JPG",
  "images/KaengSaphue4.JPG",
  "images/KaengSaphue5.JPG"
  ],

  "nature-KhuDueaBeach": [
  "images/KhuDueaBeach1.JPG",
  "images/KhuDueaBeach2.JPG",
  "images/KhuDueaBeach3.JPG",
  "images/KhuDueaBeach4.JPG",
  "images/KhuDueaBeach5.jfif"
  ],

  "nature-KaengTana": [
  "images/KaengTana1.jpeg",
  "images/KaengTana2.jpeg",
  "images/KaengTana3.jpeg",
  "images/KaengTana4.jpeg",
  "images/KaengTana5.jfif"
  ],

  "nature-PhaTaem": [
  "images/PhaTaem1.JPG",
  "images/PhaTaem2.JPG",
  "images/PhaTaem3.JPG",
  "images/PhaTaem4.jfif",
  "images/PhaTaem5.JPG" 
  ],

  "nature-SaoChaliang": [
  "images/SaoChaliang1.JPG",
  "images/SaoChaliang2.JPG",
  "images/SaoChaliang3.JPG",
  "images/SaoChaliang4.JPG",
  "images/SaoChaliang5.jfif" 
  ],

  "nature-PhaChanadaiCliff": [
  "images/PhaChanadaiCliff1.JPG",
  "images/PhaChanadaiCliff2.JPG",
  "images/PhaChanadaiCliff3.JPG",
  "images/PhaChanadaiCliff4.JPG",
  "images/PhaChanadaiCliff5.JPG"
  ],

  "nature-SangChanWaterfall": [
  "images/SangChanWaterfall1.JPG",
  "images/SangChanWaterfall2.JPG",
  "images/SangChanWaterfall3.JPG",
  "images/SangChanWaterfall4.JPG",
  "images/SangChanWaterfall5.JPG"
  ],

  "nature-SoiSawanWaterfall": [
  "images/SoiSawanWaterfall1.JPG",
  "images/SoiSawanWaterfall2.JPG",
  "images/SoiSawanWaterfall3.JPG",
  "images/SoiSawanWaterfall4.jfif",
  "images/SoiSawanWaterfall5.JPG"     
  ],

  "nature-PhaSok": [
  "images/PhaSok1.JPG",
  "images/PhaSok2.JPG",
  "images/PhaSok3.JPG",
  "images/PhaSok4.JPG",
  "images/PhaSok5.jfif" 
  ],

  "nature-ThungNaMueangWaterfall": [
  "images/ThungNaMueangWaterfall1.JPG",
  "images/ThungNaMueangWaterfall2.JPG",
  "images/ThungNaMueangWaterfall3.JPG",
  "images/ThungNaMueangWaterfall4.jfif",
  "images/ThungNaMueangWaterfall5.JPG" 
  ],

  "nature-KaengChomDao": [
  "images/KaengChomDao1.JPG",
  "images/KaengChomDao2.JPG",
  "images/KaengChomDao3.JPG",
  "images/KaengChomDao4.JPG",
  "images/KaengChomDao5.jfif"     
  ],

  "nature-HuaiLuangWaterfall": [
  "images/HuaiLuangWaterfall1.JPG",
  "images/HuaiLuangWaterfall2.PNG",
  "images/HuaiLuangWaterfall3.JPG",
  "images/HuaiLuangWaterfall4.JPG",
  "images/HuaiLuangWaterfall5.JPG"    
  ],

  "nature-NamtokPhaLuangForestPark": [
  "images/NamtokPhaLuangForestPark1.JPG",
  "images/NamtokPhaLuangForestPark2.JPG",
  "images/NamtokPhaLuangForestPark3.JPG",
  "images/NamtokPhaLuangForestPark4.JPG",
  "images/NamtokPhaLuangForestPark5.JPG"
  ],

  "nature-SamPhanBok": [
  "images/SamPhanBok1.JPG",
  "images/SamPhanBok2.JPG",
  "images/SamPhanBok3.JPG",
  "images/SamPhanBok4.JPG",
  "images/SamPhanBok5.JPG"    
  ]


}

let currentPhoto = 0;

const heroPhoto = document.getElementById("heroPhoto");
const photoNumber = document.getElementById("photoNumber");
const photoProgress = document.getElementById("photoProgress");
const galleryItems = document.querySelectorAll(".gallery-item");


function showPhoto(index) {
  if (!heroPhoto) return;

  const pageName = location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  const photos = photoUrls[pageName];

  if (!photos || photos.length === 0) {
    console.error("ไม่พบชุดรูปของหน้านี้:", pageName);
    return;
  }

  currentPhoto = (index + photos.length) % photos.length;
  heroPhoto.src = photos[currentPhoto];

  if (photoNumber) {
    photoNumber.textContent =
      String(currentPhoto + 1).padStart(2, "0");
  }

  if (photoProgress) {
    photoProgress.style.width =
      `${((currentPhoto + 1) / photos.length) * 100}%`;
  }

  galleryItems.forEach(item => {
    item.classList.toggle(
      "current",
      Number(item.dataset.photo) === currentPhoto
    );
  });
}

// ปุ่มภาพก่อนหน้า
document.getElementById("prevPhoto")?.addEventListener("click", () => {
  showPhoto(currentPhoto - 1);
});

// ปุ่มภาพถัดไป
document.getElementById("nextPhoto")?.addEventListener("click", () => {
  showPhoto(currentPhoto + 1);
});

// กดภาพย่อยเพื่อเปลี่ยนภาพหลัก
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    showPhoto(Number(item.dataset.photo));
  });
});

// เริ่มต้นที่ภาพแรก
showPhoto(0);
