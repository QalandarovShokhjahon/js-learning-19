// 1-vazifa
let advImage = document.querySelectorAll("#adv img")
advImage.forEach((qiymat) => qiymat.remove())

// 2-vazifa
let headerSpan = document.querySelector("#header span")
headerSpan.textContent = "COMEDY"

// 3-vazifa
let headerBg = document.querySelector("#header")
headerBg.style.cssText = `
  background: url("images/1.jpg");
  background-size: cover;
  background-position: bottom;
`

// 4-vazifa / 5-vazifa
let seriesList = document.querySelector("#series")
let seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
}
seriesList.innerHTML = ``
seriesDB.series.forEach((qiymat, index) => {
  seriesList.innerHTML += `
    <div id="series-list" class="group flex items-center gap-1">
      <p class="mb-2">${index + 1})${qiymat}</p>
      <img class="h-5 cursor-pointer opacity-0 duration-300 group-hover:opacity-100" src="images/trash.png">
    </div>
  `
})