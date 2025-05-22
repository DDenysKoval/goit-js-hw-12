import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



export function getImagesByQuery(query) {
  const myApiKey = "39362168-c2a5e7696671cec7e0c5dcb17";
  const BASE_URL = "https://pixabay.com/api/";
  const params = new URLSearchParams({
    key: myApiKey,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  })
  return axios
    .get(BASE_URL, { params })
    .then(response => response.data) 
    .catch(error => error.message)
};


