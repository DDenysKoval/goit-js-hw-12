import{a as E,S as q,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m=15;async function y(o,t){const a="39362168-c2a5e7696671cec7e0c5dcb17",s="https://pixabay.com/api/",e=new URLSearchParams({key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:m});try{return(await E.get(s,{params:e})).data}catch{}}const g=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".loadmore-btn"),f=new q(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8,overlay:!0});f.on("show.simplelightbox",function(){});function L(o){const t=o.map(({largeImageURL:a,webformatURL:s,tags:e,likes:r,views:l,comments:v,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${e}"
            width="360"
            height="200"
          />
          <ul class="gallery-info-list">
            <li class="gallery-list-item">Likes
              <p class="gallery-item-title">${r}</p>
            </li>
            <li class="gallery-list-item">Views
              <p class="gallery-item-title">${l}</p>
            </li>
            <li class="gallery-list-item">Comments
              <p class="gallery-item-title">${v}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${S}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",t),f.refresh()}function P(){g.innerHTML=""}function d(){h.classList.remove("js-hidden")}function M(){h.classList.add("js-hidden")}function w(){p.classList.remove("js-hidden")}function u(){p.classList.add("js-hidden")}const $=document.querySelector(".form"),B=document.querySelector(".loadmore-btn");let n,i=0,b=0;$.addEventListener("submit",async o=>{if(i=1,o.preventDefault(),n=o.target.elements.search.value.trim(),n.length===0){c.error({title:"Error",message:"Please enter your request"});return}P();try{const t=await y(n,i);if(t.hits.length===0)throw new Error("Error");L(t.hits),b=Math.ceil(t.totalHits/m)}catch{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}w(),i+=1,o.target.reset()});B.addEventListener("click",async o=>{u(),d();try{const t=await y(n,i);if(i===b)throw u(),new Error("Error");L(t.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),w(),d()}catch{c.error({title:"Error",message:"We're sorry, but you've reached the end of search results."})}M(),i+=1});
//# sourceMappingURL=index.js.map
