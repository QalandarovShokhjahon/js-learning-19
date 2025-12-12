// DOMContentLoaded hodisasi sahifadagi barcha HTML hujjati yuklangandan keyin ishga tushadi. Bu hodisa rasmlar, CSS yoki boshqa tashqi resurslarning yuklanishini kutmaydi, faqatgina HTML to'liq yuklangandan keyin ishlaydi.

// document.addEventListener("DOMContentLoaded", () => {
//   let advImgs = document.querySelectorAll("div img");
//   advImgs.forEach((img) => {
//     img.remove();
//   });
// });

// load hodisasi barcha sahifa resurslari (HTML, CSS, JavaScript, rasmlar, videolar va shriftlar) to‘liq yuklangandan keyin ishga tushadi.

// 🚀 **Ko‘pchilik real loyihalarda** `DOMContentLoaded` **ko‘proq ishlatiladi**, chunki:

// ✔ U sahifa yuklanishini tezroq **(HTML to‘liq yuklanganda)** boshlaydi.

// ✔ Foydalanuvchilar uchun tezroq interaktivlik ta’minlaydi.

// ✔ **JavaScript orqali DOM elementlariga murojaat qilish** uchun yetarli.

// **❌ `load` esa nisbatan kam ishlatiladi**, chunki u **barcha resurslar** (rasmlar, CSS, shriftlar, media-fayllar) yuklanishini kutadi, bu esa **sekinroq** bo‘lishi mumkin.

// window.addEventListener("load", () => {
//   let advImgs = document.querySelectorAll("div img");
//   advImgs.forEach((img) => {
//     img.remove();
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // 1-vazifa
//   let advImage = document.querySelectorAll("#adv img");
//   advImage.forEach((qiymat) => qiymat.remove());

//   // 2-vazifa
//   let headerSpan = document.querySelector("#header span");
//   headerSpan.textContent = "COMEDY";

//   // 3-vazifa
//   let headerBg = document.querySelector("#header");
//   headerBg.style.cssText = `
//   background: url("images/1.jpg");
//   background-size: cover;
//   background-position: bottom;
// `;

//   // 4-vazifa / 5-vazifa
//   let seriesList = document.querySelector("#series");
//   let seriesDB = {
//     series: [
//       "Omar",
//       "The Final Legacy",
//       "Ertugrul",
//       "Magnificent Century",
//       "The Great Seljuks: Guardians...",
//     ],
//   };
//   seriesList.innerHTML = ``;
//   seriesDB.series.forEach((qiymat, index) => {
//     seriesList.innerHTML += `
//     <p class="mb-2">${index + 1})${qiymat}</p>
//   `;
//   });
// });

// submit hodisasi <form> elementida sodir bo‘lib, foydalanuvchi formani jo‘natganda ishga tushadi.

// preventDefault() → Formani jo‘natishda sahifa yangilanmasligini ta’minlaydi.

// let form = document.querySelector("form");
// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// });

// input.value → <input> elementining qiymatini olish yoki yangilash uchun ishlatiladi.
let form = document.querySelector("form");
let input = document.querySelector('[type="text"]');
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let newValue = input.value.trim();
  console.log(newValue);
});

document.addEventListener("DOMContentLoaded", () => {
  // 1-vazifa
  let advImage = document.querySelectorAll("#adv img");
  advImage.forEach((qiymat) => qiymat.remove());

  // 2-vazifa
  let headerSpan = document.querySelector("#header span");
  headerSpan.textContent = "COMEDY";

  // 3-vazifa
  let headerBg = document.querySelector("#header");
  headerBg.style.cssText = `
  background: url("images/1.jpg");
  background-size: cover;
  background-position: bottom;
`;

  // 4-vazifa / 5-vazifa
  let seriesList = document.querySelector("#series");
  let seriesDB = {
    series: [
      "Omar",
      "The Final Legacy",
      "Ertugrul",
      "Magnificent Century",
      "The Great Seljuks: Guardians...",
    ],
  };

  let setList = () => {
    seriesList.innerHTML = ``;

    seriesDB.series.forEach((qiymat, index) => {
      seriesList.innerHTML += `
        <p class="mb-2">${index + 1})${qiymat}</p>
      `;
    });
  };
  setList();

  // 2-vazifa
  let form = document.querySelector("form");
  let inputText = document.querySelector("[type='text']");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let newValue = inputText.value;
    seriesDB.series.push(newValue);
    setList();
  });
});

// reset() → bu <form> elementining barcha kiritilgan ma'lumotlarini o‘chirish va uni dastlabki holatiga qaytarish uchun ishlatiladigan metod.

document.addEventListener("DOMContentLoaded", () => {
  // 1-vazifa
  let advImage = document.querySelectorAll("#adv img");
  advImage.forEach((qiymat) => qiymat.remove());

  // 2-vazifa
  let headerSpan = document.querySelector("#header span");
  headerSpan.textContent = "COMEDY";

  // 3-vazifa
  let headerBg = document.querySelector("#header");
  headerBg.style.cssText = `
    background: url("images/1.jpg");
    background-size: cover;
    background-position: bottom;
  `;

  // 4-vazifa / 5-vazifa
  let seriesList = document.querySelector("#series");

  let seriesDB = {
    series: [
      "Omar",
      "The Final Legacy",
      "Ertugrul",
      "Magnificent Century",
      "The Great Seljuks: Guardians...",
    ],
  };

  let sortList = () => {
    seriesDB.series.sort();
  };

  let setList = () => {
    seriesList.innerHTML = ``;
    sortList();

    seriesDB.series.forEach((qiymat, index) => {
      seriesList.innerHTML += `
        <div id="series-list" class="group flex items-center gap-1">
          <p class="mb-2">${index + 1})${qiymat}</p>
          <img class="h-5 cursor-pointer opacity-0 duration-300 group-hover:opacity-100" src="images/trash.png">
        </div>
      `;
    });
    let deleteBtn = document.querySelectorAll("#series-list img");

    deleteBtn.forEach((qiymat, index) => {
      qiymat.addEventListener("click", () => {
        qiymat.parentElement.remove();
        seriesDB.series.splice(index, 1);
        setList();
      });
    });
  };
  setList();
  sortList();

  // Form
  let form = document.querySelector("form");
  let input = document.querySelector('[type="text"]');
  let inputCheck = document.querySelector('[type="checkbox"]');

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let newValue = input.value.trim();
    let checkValue = inputCheck.checked;

    if (newValue) {
      if (checkValue) {
        alert("Sevimli serial qo'shildi");
      }

      if (newValue.length > 20) {
        newValue = newValue.slice(0, 20) + "...";
      }

      seriesDB.series.push(newValue);
      setList();
      sortList();
      evt.target.reset();
    } else {
      alert("Iltimos, qatorni to'ldiring");
    }
  });
});
