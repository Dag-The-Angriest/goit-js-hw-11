import{a as p,S as m,i as c}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f=p.create({baseURL:"https://pixabay.com/api"});function y(s){return f.get("/",{params:{key:"55064967-1c5dabe6bc7cd06c1c4335f3a",image_type:"photo",q:s,orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),d=document.querySelector(".loader");function g(s){u();const o=s.map(t=>`<li class="gallery-item">
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
      </li>`).join("");l.innerHTML=o,new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function u(){l.innerHTML=""}function h(){d.classList.add("loader")}function i(){d.classList.remove("loader")}const v=document.querySelector(".form");v.addEventListener("submit",s=>{s.preventDefault(),h(),u();const t={name:new FormData(s.target).get("search-text")};t.name!=null&&y(t.name).then(a=>{const e=a.hits;return e.length==0?(console.log("yes"),i(),c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})):(i(),g(e))}).catch(a=>(i(),c.show({message:"There was an error!",position:"bottomRight"})))});
//# sourceMappingURL=index.js.map
