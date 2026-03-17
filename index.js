import{a as d,S as l,i as p}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u=d.create({baseURL:"https://pixabay.com/api"});function m(a){return u.get("/",{params:{key:"55064967-1c5dabe6bc7cd06c1c4335f3a",image_type:"photo",q:a,orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});const f=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(a){const o=a.map(t=>`<li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
              <img
                class="gallery-image"
                src="${t.previewURL}"
                alt="${t.tags}"
              /> 
          </a>
          <div class="flex">
                <div>
                    <p class="bold">Likes</p>
                    <p >${t.likes}</p>
                </div>
                <div>
                    <p class="bold">Views</p>
                    <p >${t.views}</p>
                </div>
                <div>
                    <p class="bold">Comments</p>
                    <p >${t.comments}</p>
                </div>
                <div>
                    <p class="bold">Downloads</p>
                    <p >${t.downloads}</p>
                </div>
              </div>
      </li>`).join("");f.innerHTML=o,new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function g(){c.classList.add("loader")}function n(){c.classList.remove("loader")}const h=document.querySelector(".form");h.addEventListener("submit",a=>{a.preventDefault(),g();const s={name:new FormData(a.target).get("search-text")};m(s.name).then(t=>{const e=t.hits;return e.length==0?(console.log("yes"),n(),p.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})):(n(),y(e))})});
//# sourceMappingURL=index.js.map
