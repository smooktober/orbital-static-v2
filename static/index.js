document.onkeydown = function(e) {
if(event.keyCode == 123) {
    return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
}

if(e.ctrlKey && e.keyCode == 'X'.charCodeAt(0)){
    return false;
}
if(e.ctrlKey && e.keyCode == 'Y'.charCodeAt(0)){
    return false;
}
if(e.ctrlKey && e.keyCode == 'Z'.charCodeAt(0)){
    return false;
}
if (e.keyCode == 67 && e.shiftKey && (e.ctrlKey || e.metaKey)){
    return false;
}
if (e.keyCode == 'J'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
    return false;
}
if (e.keyCode == 'I'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
    return false;
}
if ((e.keyCode == 'V'.charCodeAt(0) && e.metaKey) || (e.metaKey && e.altKey)){
    return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
    return false;
}
if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
    return false;
}
if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
    return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
}
}
  
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


const form = document.querySelector('form');
const input = document.querySelector('.site-input');
const searchBTN = document.querySelector('.search-btn');




searchBTN.addEventListener('click', async event => {
  event.preventDefault();
  window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://search.ononoki.org//search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
    var urle = "https://" + document.domain + __uv$config.prefix + __uv$config.encodeUrl(url);
    if (urle) {
      var win; {
        if (win) { win.focus(); } else {
          win = window.open();
          win.document.body.style.margin = '0';
          win.document.body.style.height = '100vh';
          var iframe = win.document.createElement('iframe');
          iframe.style.border = 'none';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.margin = '0';
          iframe.src = urle;
          win.document.body.appendChild(iframe)
        }
      }
    }
  });

});




form.addEventListener('submit', async event => {
  event.preventDefault();
  window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  });
});

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};
