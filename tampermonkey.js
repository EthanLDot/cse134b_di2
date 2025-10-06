// ==UserScript==
// @name         Ethan Lee - Discussion 2 Starter
// @namespace    http://tampermonkey.net/
// @version      2025-10-06
// @description  in your HW1 submission this might be a good place to describe your script's functionality.
// @author       You
// @match        https://realethanlee.dev
// @icon         https://www.google.com/s2/favicons?sz=64&domain=realethanlee.dev
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // note about match: https://realethanlee.dev/* will carry the changes in the script below to any subdomain of realethanlee.dev
    const h2 = document.querySelector('h2');

    // statements like this are necessary as the script may crash if your page doesn't have an h2 element.
    if(h2 != null) {
        h2.textContent = 'I\'m a very spooky scary skeleton sending shivers down your spine.';
        h2.style.fontFamily = 'Chiller, "Comic Sans MS", cursive';
    }

})();