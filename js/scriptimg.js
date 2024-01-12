/*------- IMÁGENES -------*/
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let datafilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == datafilter ||
        datafilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

const galleryItem = document.getElementsByClassName("itemBox");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));

  // Eliminar cualquier botón de descarga existente
  const existingDownloadButton = document.getElementById("downloadButton");
  if (existingDownloadButton) {
    existingDownloadButton.parentNode.removeChild(existingDownloadButton);
  }

  // Crear el nuevo botón de descarga
  const downloadButton = document.createElement("a");
  downloadButton.id = "downloadButton";
  downloadButton.classList.add("download-btn");
  downloadButton.textContent = "Descargar";
  downloadButton.href = galleryItem[index - 1].children[0].getAttribute("src");
  downloadButton.download = "imagen"; // Puedes establecer el nombre de descarga predeterminado

  lightBoxContent.appendChild(downloadButton);
}


for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
  showLightBox((index += n));
}

function prevImage() {
  slideImage(-1);
}

function nextImage() {
  slideImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}

lightBoxContainer.addEventListener("click", closeLightBox);

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    slideImage(-1);
  } else if (event.keyCode === 39) {
    slideImage(1);
  } else if (event.keyCode === 27) {
    lightBoxContainer.style.display = "none";
  }
});
/*------- IMÁGENES -------*/

function handleEscapeKey(event) {
  if (event.keyCode === 27) {
    lightBoxContainer.style.display = "none";
  }
}

document.addEventListener("keydown", handleEscapeKey);
