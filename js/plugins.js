!function(){"use strict";function n(n){u.innerHTML=n+(1===n?" item":" items")}function t(n,t){var e=n.classList;e.contains(t)||e.add(t)}function e(n,t){var e=n.classList;e.contains(t)&&e.remove(t)}function i(i){var o=l.search(i),a=o.length,u={},r=0;for(r=0;a>r;r++)u[o[r].ref]=!0;for(r=0;c>r;r++)u[r]?t(s[r],"on"):e(s[r],"on");n(a)}function o(){for(var e=0;c>e;e++)t(s[e],"on");n(s.length)}function a(){var n=location.hash.substring(1);r.value=n,n?i(n):o()}var s=document.getElementsByClassName("plugin"),u=document.getElementById("plugin-list-count"),r=document.getElementById("plugin-search-input"),c=s.length,l=lunr.Index.load(window.SEARCH_INDEX);r.addEventListener("input",function(){var n=this.value;return n?void i(n):o()}),window.addEventListener("hashchange",a),a()}();