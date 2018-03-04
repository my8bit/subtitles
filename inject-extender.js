const s = document.createElement('script');
s.src = chrome.extension.getURL('extend-titles.js');
document.documentElement.appendChild(s);
s.onload = function() {
    s.remove();
};