import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";

const form = document.querySelector(".form");


form.addEventListener("submit", (e) => {
  
  e.preventDefault();
  const inputValue = e.target.elements.search.value.trim();
  if (inputValue.length === 0) {
    iziToast.error({
    title: 'Error',
    message: 'Please enter your request',
    });
    return
  }
  clearGallery();
  showLoader();
  getImagesByQuery(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error("Error");
      }
      createGallery(data.hits)
    })
    .catch(() =>
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      })
    )
    .finally(() => hideLoader())
  form.reset()
})
