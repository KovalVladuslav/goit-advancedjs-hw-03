import{i as c,S as m}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",y="49657036-4525f6d8cdebe924870a85f3e",g=a=>{const o=new URLSearchParams({key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${o}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).catch(t=>{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"}),console.error("There has been a problem with your fetch operation:",t)})},b=(a,o)=>{const t=a.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:u,comments:f,downloads:h})=>`<li class="photo-card">
          <a href="${e}" class="photo-link">
            <img src="${s}" alt="${r}" loading="lazy" />
            <div class="info">
            <p class="info-item">
              <span>Likes</span><span class="info-value">${n}</span>
            </p>
            <p class="info-item">
              <span>Views</span><span class="info-value">${u}</span>
            </p>
            <p class="info-item">
              <span>Comments</span><span class="info-value">${f}</span>
            </p>
            <p class="info-item">
              <span>Downloads</span><span class="info-value">${h}</span>
            </p>
          </div>
          </a>
        </li>`).join("");o.insertAdjacentHTML("beforeend",t)},w=new m(".gallery a",{captionDelay:250}),l=document.querySelector(".form"),i=document.querySelector(".gallery"),p=document.querySelector(".loader");l.addEventListener("submit",a=>{a.preventDefault(),i.innerHTML="";const t=new FormData(l).get("search");p.style.display="block",g(t).then(s=>b(s.hits,i)).then(()=>{w.refresh(),i.children.length===0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).catch(s=>{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"}),console.error("There has been a problem with your fetch operation:",s)}).finally(()=>{p.style.display="none"})});
//# sourceMappingURL=index.js.map
