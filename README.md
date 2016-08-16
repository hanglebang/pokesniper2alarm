# Pokesniper2 alarm bookmarklet

If you only want to snipe a couple of specific pokemon, this bookmarklet tool will alert you with a sound and highlight the row when it finds anything in your list from [www.pokesnipers.com](http://pokesnipers.com/).

I realize you can edit the pokesnipers2 config file to find specific pokemon, but this feature didn't seem to work that great for me.

#### How To Use

*only tested in chrome so far

``` javascript
javascript: !function(){"use strict";function c(){document.querySelectorAll(".collection-item").forEach(function(c){var d=c.dataset.reactid;if(!(b.indexOf(d)>-1)){if(a.indexOf(c.querySelector("span.title").textContent)>-1){c.style.backgroundColor="rgba(255, 0, 0, 0.2)";var e=c.querySelector('a[href*="pokesniper2:"]');e.onclick=function(){c.style.backgroundColor="rgba(0, 8, 255, 0.2)"};var f=new Audio("http://soundjax.com/reddo/40725%5EDING1.mp3");f.play()}b.push(d)}})}function d(b,d,e,f){b.preventDefault(),document.querySelector("form textarea.list-area").value.split(",").forEach(function(b){a.push(b.trim())}),document.querySelector(".bground-removeme").remove(),setInterval(function(){c()},1e3)}function e(){var a=document.createElement("div"),b=document.createElement("div");a.classList.add("bground-removeme"),a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.backgroundColor="rgba(100, 100, 100, 0.6)",a.style.zIndex="99999",b.style.backgroundColor="white",b.style.padding="5px",b.style.display="inline-block",b.style.position="absolute",b.style.top="45%",b.style.left="45%",b.innerHTML="<form><textarea class='list-area' placeholder='comma separated list of pokemon names'></textarea><input type='submit'></input></form>",b.querySelector("form").onsubmit=d,document.body.appendChild(a),a.appendChild(b)}var a=[],b=[];new Audio("http://soundjax.com/reddo/40725%5EDING1.mp3"),e()}();
```

1. copy the above javascript into a bookmark
2. navigate to `pokesnipers.com`
3. click the bookmark created in step 1
4. enter in a list of pokemon names to watch for, comma separated like:  `Dragonite, Vaporeon, Arcanine`
5. script will play a bell noise and highlight the row for you
