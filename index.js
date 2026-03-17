import{a as l,S as i,i as c}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=l.create({baseURL:"https://pixabay.com/api"});function d(a){return p.get("/",{params:{key:"55064967-1c5dabe6bc7cd06c1c4335f3a",image_type:"photo",q:a,orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}new i(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});const u=document.querySelector(".gallery");document.addEventListener("DOMContentLoaded",()=>{});function m(a){const o=a.map(t=>`<li class="gallery-item">
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
      </li>`).join("");u.innerHTML=o,new i(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}const f=document.querySelector(".form");f.addEventListener("submit",a=>{a.preventDefault();const s={name:new FormData(a.target).get("search-text")};d(s.name).then(t=>{const e=t.hits;return e.length==0?(console.log("yes"),c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})):m(e)})});
//# sourceMappingURL=index.js.map
