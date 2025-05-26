import{a as E,S as P,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m=15;async function y(o,t){const i="39362168-c2a5e7696671cec7e0c5dcb17",s="https://pixabay.com/api/",e=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:m});try{return(await E.get(s,{params:e})).data}catch(r){return r.message}}const g=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".loadmore-btn"),f=new P(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:.8,overlay:!0});f.on("show.simplelightbox",function(){});function L(o){const t=o.map(({largeImageURL:i,webformatURL:s,tags:e,likes:r,views:l,comments:S,downloads:q})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
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
              <p class="gallery-item-title">${S}</p>
            </li>
            <li class="gallery-list-item">Downloads
              <p class="gallery-item-title">${q}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",t),f.refresh()}function M(){g.innerHTML=""}function w(){h.classList.remove("js-hidden")}function b(){h.classList.add("js-hidden")}function v(){p.classList.remove("js-hidden")}function n(){p.classList.add("js-hidden")}const $=document.querySelector(".form"),B=document.querySelector(".loadmore-btn");let u,a,d;$.addEventListener("submit",async o=>{if(n(),a=1,o.preventDefault(),u=o.target.elements.search.value.trim(),u.length===0){c.error({title:"Error",message:"Please enter your request"});return}M(),w();try{const t=await y(u,a);if(t.hits.length===0)throw n(),new Error("Error");L(t.hits),d=Math.ceil(t.totalHits/m),a>=d?(n(),c.error({title:"Error",message:"We're sorry, but you've reached the end of search results."})):v()}catch{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}a+=1,b(),o.target.reset()});B.addEventListener("click",async o=>{n(),w();try{const t=await y(u,a),s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),L(t.hits),a>=d?(n(),c.error({title:"Error",message:"We're sorry, but you've reached the end of search results."})):v()}catch(t){console.log(t.message)}b(),a+=1});
//# sourceMappingURL=index.js.map
