import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton
} from "./js/render-functions";
import { perPage } from "./js/pixabay-api";

const form = document.querySelector(".form");
const loadMore = document.querySelector(".loadmore-btn");

let inputValue;
let page;
let totalPages;

form.addEventListener("submit", async e => {
  hideLoadMoreButton();
  page = 1;
  e.preventDefault();
  inputValue = e.target.elements.search.value.trim();
  if (inputValue.length === 0) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter your request',
    }); 
    return
  }
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(inputValue, page);
    if (data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.error({
        title: 'Error',
        message: "Sorry, there are no images matching your search query. Please try again!"
      })
      throw new Error('Sorry, there are no images matching your search query. Please try again!');
    }
    createGallery(data.hits);
    totalPages = Math.ceil(data.totalHits / perPage);
    
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.error({
        title: 'Error',
        message: "We're sorry, but you've reached the end of search results."
      })
      throw new Error("We're sorry, but you've reached the end of search results.")
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.log(error.message);
  }
  hideLoader()
  e.target.reset()
})

loadMore.addEventListener("click", async e => {
  page += 1;
  
  hideLoadMoreButton();
  showLoader();
  
  try {
    const data = await getImagesByQuery(inputValue, page);
    const card = document.querySelector(".gallery-item"); 
    const cardHeight = card.getBoundingClientRect().height;

    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.error({
        title: 'Error',
        message: "We're sorry, but you've reached the end of search results.",
      })
    } else {
      showLoadMoreButton();
    }
    createGallery(data.hits);
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth"
    })
  } catch (error) {
    console.log(error.message);
  }
  hideLoader();
})